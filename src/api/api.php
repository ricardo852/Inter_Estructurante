
<?php
/**
 * API principal para la aplicación de prevención de bullying
 * Este archivo maneja las solicitudes de la API y devuelve respuestas en formato JSON
 */

// Incluir archivo de conexión a base de datos
require_once 'db_connect.php';

// Configurar cabeceras para CORS y JSON
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

// Si es una solicitud OPTIONS, terminar aquí (para CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Obtener la ruta solicitada
$requestUri = $_SERVER['REQUEST_URI'];
$basePath = '/api/';
$route = str_replace($basePath, '', $requestUri);
$route = strtok($route, '?'); // Eliminar parámetros de consulta

// Obtener el método HTTP
$method = $_SERVER['REQUEST_METHOD'];

// Obtener datos enviados en el cuerpo de la solicitud
$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData, true) ?: [];

// Array para la respuesta
$response = [
    'success' => false,
    'data' => null,
    'message' => ''
];

// Funciones de autenticación
function generateJWT($userId, $role) {
    $secretKey = 'your_secret_key_here'; // Cambiar en producción
    $issuedAt = time();
    $expirationTime = $issuedAt + 3600; // Token válido por 1 hora
    
    $payload = [
        'iat' => $issuedAt,
        'exp' => $expirationTime,
        'user_id' => $userId,
        'role' => $role
    ];
    
    // En producción, usar una biblioteca JWT adecuada
    return base64_encode(json_encode($payload));
}

function verifyJWT() {
    // Obtener token del encabezado de autorización
    $headers = getallheaders();
    $authHeader = isset($headers['Authorization']) ? $headers['Authorization'] : '';
    
    if (empty($authHeader) || !preg_match('/Bearer\s(\S+)/', $authHeader, $matches)) {
        return false;
    }
    
    $token = $matches[1];
    
    // En producción, usar una biblioteca JWT adecuada
    $payload = json_decode(base64_decode($token), true);
    
    if (!$payload || !isset($payload['exp']) || $payload['exp'] < time()) {
        return false;
    }
    
    return $payload;
}

// Rutas de la API
switch ($route) {
    case 'login':
        if ($method === 'POST') {
            if (isset($data['email']) && isset($data['password'])) {
                $sql = "SELECT id, nombre, email, password, rol FROM usuarios WHERE email = ?";
                $users = getRecords($sql, [$data['email']]);
                
                if (count($users) === 1 && password_verify($data['password'], $users[0]['password'])) {
                    $user = $users[0];
                    unset($user['password']); // No devolver la contraseña
                    
                    $response['success'] = true;
                    $response['data'] = [
                        'user' => $user,
                        'token' => generateJWT($user['id'], $user['rol'])
                    ];
                    $response['message'] = 'Inicio de sesión exitoso';
                } else {
                    $response['message'] = 'Credenciales inválidas';
                }
            } else {
                $response['message'] = 'Datos incompletos';
            }
        } else {
            $response['message'] = 'Método no permitido';
        }
        break;

    case 'register':
        if ($method === 'POST') {
            if (isset($data['nombre']) && isset($data['email']) && isset($data['password'])) {
                // Verificar si el email ya existe
                $existingUsers = getRecords("SELECT id FROM usuarios WHERE email = ?", [$data['email']]);
                
                if (count($existingUsers) === 0) {
                    $hashedPassword = password_hash($data['password'], PASSWORD_DEFAULT);
                    
                    $userData = [
                        'nombre' => $data['nombre'],
                        'email' => $data['email'],
                        'password' => $hashedPassword,
                        'rol' => isset($data['rol']) ? $data['rol'] : 'estudiante'
                    ];
                    
                    $userId = insertRecord('usuarios', $userData);
                    
                    if ($userId) {
                        $response['success'] = true;
                        $response['data'] = ['id' => $userId];
                        $response['message'] = 'Usuario registrado correctamente';
                    } else {
                        $response['message'] = 'Error al registrar el usuario';
                    }
                } else {
                    $response['message'] = 'El email ya está registrado';
                }
            } else {
                $response['message'] = 'Datos incompletos';
            }
        } else {
            $response['message'] = 'Método no permitido';
        }
        break;

    case 'recursos':
        if ($method === 'GET') {
            $tipo = isset($_GET['tipo']) ? $_GET['tipo'] : null;
            
            $sql = "SELECT * FROM recursos";
            $params = [];
            
            if ($tipo) {
                $sql .= " WHERE tipo = ?";
                $params[] = $tipo;
            }
            
            $sql .= " ORDER BY fecha_creacion DESC";
            
            $recursos = getRecords($sql, $params);
            
            $response['success'] = true;
            $response['data'] = $recursos;
            
        } elseif ($method === 'POST') {
            // Verificar autenticación
            $authData = verifyJWT();
            
            if ($authData && $authData['role'] === 'admin') {
                if (isset($data['titulo']) && isset($data['descripcion']) && isset($data['tipo'])) {
                    $recursoData = [
                        'titulo' => $data['titulo'],
                        'descripcion' => $data['descripcion'],
                        'tipo' => $data['tipo'],
                        'url' => isset($data['url']) ? $data['url'] : null
                    ];
                    
                    $recursoId = insertRecord('recursos', $recursoData);
                    
                    if ($recursoId) {
                        $response['success'] = true;
                        $response['data'] = ['id' => $recursoId];
                        $response['message'] = 'Recurso creado correctamente';
                    } else {
                        $response['message'] = 'Error al crear el recurso';
                    }
                } else {
                    $response['message'] = 'Datos incompletos';
                }
            } else {
                $response['message'] = 'No autorizado';
            }
        } else {
            $response['message'] = 'Método no permitido';
        }
        break;

    case 'testimonios':
        if ($method === 'GET') {
            // Solo mostrar testimonios aprobados
            $testimonios = getRecords("SELECT t.id, t.contenido, t.anonimo, t.fecha_creacion, 
                                     IF(t.anonimo = 0, u.nombre, 'Anónimo') as nombre 
                                     FROM testimonios t 
                                     LEFT JOIN usuarios u ON t.usuario_id = u.id 
                                     WHERE t.aprobado = 1 
                                     ORDER BY t.fecha_creacion DESC");
            
            $response['success'] = true;
            $response['data'] = $testimonios;
            
        } elseif ($method === 'POST') {
            // Verificar autenticación
            $authData = verifyJWT();
            
            if ($authData && isset($data['contenido'])) {
                $testimonioData = [
                    'usuario_id' => $authData['user_id'],
                    'contenido' => $data['contenido'],
                    'anonimo' => isset($data['anonimo']) ? (bool)$data['anonimo'] : false,
                    'aprobado' => false // Los testimonios requieren aprobación
                ];
                
                $testimonioId = insertRecord('testimonios', $testimonioData);
                
                if ($testimonioId) {
                    $response['success'] = true;
                    $response['data'] = ['id' => $testimonioId];
                    $response['message'] = 'Testimonio enviado correctamente. Será revisado antes de publicarse.';
                } else {
                    $response['message'] = 'Error al enviar el testimonio';
                }
            } else {
                $response['message'] = 'No autorizado o datos incompletos';
            }
        } else {
            $response['message'] = 'Método no permitido';
        }
        break;

    case 'chatbot/pregunta':
        if ($method === 'POST' && isset($data['pregunta'])) {
            // Buscar respuesta en la base de datos
            $pregunta = '%' . $data['pregunta'] . '%';
            $faqs = getRecords("SELECT pregunta, respuesta FROM faq_chatbot WHERE pregunta LIKE ? LIMIT 1", [$pregunta]);
            
            if (count($faqs) > 0) {
                $response['success'] = true;
                $response['data'] = $faqs[0];
            } else {
                // Respuesta predeterminada
                $response['success'] = true;
                $response['data'] = [
                    'pregunta' => $data['pregunta'],
                    'respuesta' => 'Lo siento, no tengo información específica sobre esa pregunta. Te sugiero consultar en las secciones de recursos o contactar con un especialista.'
                ];
            }
        } else {
            $response['message'] = 'Método no permitido o datos incompletos';
        }
        break;

    default:
        $response['message'] = 'Ruta no encontrada';
        break;
}

// Devolver respuesta como JSON
echo json_encode($response);
?>
