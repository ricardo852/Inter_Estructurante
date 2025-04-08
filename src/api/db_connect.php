
<?php
/**
 * Conexión a la base de datos PostgreSQL para la aplicación de prevención de bullying.
 */

// Configuración de la base de datos
$db_host = "localhost";
$db_port = "5432"; // Puerto por defecto de PostgreSQL
$db_user = "postgres";
$db_password = "1234"; // Contraseña de PostgreSQL
$db_name = "inter";

try {
    // Crear conexión con PDO
    $conn = new PDO("pgsql:host=$db_host;port=$db_port;dbname=$db_name", $db_user, $db_password);
    
    // Configurar el modo de error para que lance excepciones
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Establecer el charset a UTF-8
    $conn->exec("SET NAMES 'utf8'");
    
} catch (PDOException $e) {
    die("Error de conexión: " . $e->getMessage());
}

/**
 * Función para ejecutar consultas con parámetros de manera segura
 */
function execQuery($sql, $params = []) {
    global $conn;
    
    try {
        $stmt = $conn->prepare($sql);
        $stmt->execute($params);
        return $stmt;
    } catch (PDOException $e) {
        die("Error en la consulta: " . $e->getMessage());
    }
}

/**
 * Obtener registros de la base de datos
 */
function getRecords($sql, $params = []) {
    $stmt = execQuery($sql, $params);
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

/**
 * Insertar un registro en la base de datos
 */
function insertRecord($table, $data) {
    global $conn;
    
    $fields = array_keys($data);
    $placeholders = array_map(fn($f) => ":$f", $fields);
    
    $sql = "INSERT INTO $table (" . implode(', ', $fields) . ") VALUES (" . implode(', ', $placeholders) . ")";
    
    $stmt = execQuery($sql, $data);
    return $conn->lastInsertId();
}

/**
 * Actualizar registros en la base de datos
 */
function updateRecords($table, $data, $condition, $params = []) {
    global $conn;
    
    $fields = array_map(fn($f) => "$f = :$f", array_keys($data));
    
    $sql = "UPDATE $table SET " . implode(', ', $fields) . " WHERE $condition";
    
    $stmt = execQuery($sql, array_merge($data, $params));
    return $stmt->rowCount();
}

/**
 * Eliminar registros de la base de datos
 */
function deleteRecords($table, $condition, $params = []) {
    $sql = "DELETE FROM $table WHERE $condition";
    $stmt = execQuery($sql, $params);
    return $stmt->rowCount();
}

?>
