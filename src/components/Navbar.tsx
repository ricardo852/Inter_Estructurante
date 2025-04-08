
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Gamepad } from "lucide-react";

/**
 * Componente de navegación principal.
 * Contiene links a las secciones principales y botones de autenticación.
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-bullying-purple">StopBullying</span>
        </Link>

        {/* Menú para dispositivos de escritorio */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-bullying-purple font-medium">
            Inicio
          </Link>
          <Link to="/que-es" className="text-gray-700 hover:text-bullying-purple font-medium">
            ¿Qué es?
          </Link>
          <Link to="/prevencion" className="text-gray-700 hover:text-bullying-purple font-medium">
            Prevención
          </Link>
          <Link to="/ayuda" className="text-gray-700 hover:text-bullying-purple font-medium">
            Cómo Ayudar
          </Link>
          <Link to="/evitar-ser-agresor" className="text-gray-700 hover:text-bullying-purple font-medium">
            Evitar ser Agresor
          </Link>
          <Link to="/games" className="text-gray-700 hover:text-bullying-purple font-medium flex items-center gap-1">
            <Gamepad size={18} />
            Juegos
          </Link>
          <Link to="/chatbot" className="text-gray-700 hover:text-bullying-purple">
            Chatbot
          </Link>
        </div>

        {/* Botones de autenticación para escritorio */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline" className="border-bullying-purple text-bullying-purple hover:bg-bullying-soft">
              Iniciar sesión
            </Button>
          </Link>
          <Link to="/registro">
            <Button className="bg-bullying-purple hover:bg-bullying-dark-purple">
              Registrarse
            </Button>
          </Link>
        </div>

        {/* Botón de menú para móviles */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 right-0 z-50">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-bullying-purple font-medium py-2"
              onClick={toggleMenu}
            >
              Inicio
            </Link>
            <Link 
              to="/que-es" 
              className="text-gray-700 hover:text-bullying-purple font-medium py-2"
              onClick={toggleMenu}
            >
              ¿Qué es?
            </Link>
            <Link 
              to="/prevencion" 
              className="text-gray-700 hover:text-bullying-purple font-medium py-2"
              onClick={toggleMenu}
            >
              Prevención
            </Link>
            <Link 
              to="/ayuda" 
              className="text-gray-700 hover:text-bullying-purple font-medium py-2"
              onClick={toggleMenu}
            >
              Cómo Ayudar
            </Link>
            <Link 
              to="/evitar-ser-agresor" 
              className="text-gray-700 hover:text-bullying-purple font-medium py-2"
              onClick={toggleMenu}
            >
              Evitar ser Agresor
            </Link>
            <Link 
              to="/games" 
              className="text-gray-700 hover:text-bullying-purple font-medium py-2 flex items-center gap-1"
              onClick={toggleMenu}
            >
              <Gamepad size={18} />
              Juegos
            </Link>
            <Link 
              to="/chatbot" 
              className="text-gray-700 hover:text-bullying-purple font-medium py-2"
              onClick={toggleMenu}
            >
              Chatbot
            </Link>
            
            <div className="flex flex-col gap-3 mt-2">
              <Link to="/login" onClick={toggleMenu}>
                <Button variant="outline" className="w-full border-bullying-purple text-bullying-purple hover:bg-bullying-soft">
                  Iniciar sesión
                </Button>
              </Link>
              <Link to="/registro" onClick={toggleMenu}>
                <Button className="w-full bg-bullying-purple hover:bg-bullying-dark-purple">
                  Registrarse
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
