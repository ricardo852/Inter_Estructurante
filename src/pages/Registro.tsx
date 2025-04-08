import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

// Detecta si la contraseña contiene secuencias como "abc" o "123"
function hasSequentialChars(password) {
  const sequences = [
    'abcdefghijklmnopqrstuvwxyz',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    '0123456789'
  ];

  for (const seq of sequences) {
    for (let i = 0; i < seq.length - 2; i++) {
      const subSeq = seq.substring(i, i + 3);
      if (password.includes(subSeq)) {
        return true;
      }
    }
  }
  return false;
}

// Detecta si un mismo carácter se repite tres o más veces consecutivas
function hasRepeatedChars(password) {
  const repeatedPattern = /(.)\1{2,}/;
  return repeatedPattern.test(password);
}

const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    if (hasSequentialChars(password)) {
      return "La contraseña no debe contener secuencias de caracteres como 'abc' o '123'.";
    }
    if (hasRepeatedChars(password)) {
      return "La contraseña no debe contener caracteres repetidos consecutivamente como 'aaa' o '111'.";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError("Las contraseñas no coinciden");
      return;
    }

    if (password.length < 8) {
      setPasswordError("La contraseña debe tener al menos 8 caracteres");
      return;
    }

    const validationError = validatePassword(password);
    if (validationError) {
      setPasswordError(validationError);
      return;
    }

    setPasswordError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, email, password }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("\u00a1Registro exitoso! Ahora puedes iniciar sesión.");
        navigate("/login");
      } else {
        toast.error(data.message || "Error al registrar usuario");
      }
    } catch (error) {
      console.error("Error de registro:", error);
      toast.error("No se pudo conectar con el servidor. Inténtalo más tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-12">
        <div className="container max-w-md">
          <Card className="w-full">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center text-bullying-purple">
                Crear una Cuenta
              </CardTitle>
              <CardDescription className="text-center">
                Regístrate para acceder a recursos exclusivos
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre completo</Label>
                  <Input
                    id="nombre"
                    type="text"
                    placeholder="Tu nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Contraseña</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                  {passwordError && (
                    <p className="text-red-500 text-sm">{passwordError}</p>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={acceptTerms}
                    onCheckedChange={() => setAcceptTerms(!acceptTerms)}
                    required
                    disabled={isLoading}
                  />
                  <Label htmlFor="terms" className="text-sm cursor-pointer">
                    Acepto los{" "}
                    <Link to="/terminos" className="text-bullying-purple hover:underline">
                      términos y condiciones
                    </Link>
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-bullying-purple hover:bg-purple-700"
                  disabled={!acceptTerms || isLoading}
                >
                  {isLoading ? "Registrando..." : "Registrarse"}
                </Button>
              </form>
            </CardContent>

            <CardFooter className="flex justify-center">
              <p className="text-sm text-center text-gray-600">
                ¿Ya tienes una cuenta?{" "}
                <Link to="/login" className="font-medium text-bullying-purple hover:underline">
                  Inicia sesión
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Registro;
