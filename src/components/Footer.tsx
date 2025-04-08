
import { Link } from "react-router-dom";

/**
 * Componente de pie de página.
 * Contiene links a páginas secundarias y derechos de autor.
 */
const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-10 pb-6 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-bullying-purple mb-4">StopBullying</h3>
            <p className="text-gray-600">
              Trabajamos para concientizar sobre el bullying y crear entornos más seguros y respetuosos para todos.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Información</h4>
            <ul className="space-y-2">
              <li><Link to="/que-es" className="text-gray-600 hover:text-bullying-purple">¿Qué es el bullying?</Link></li>
              <li><Link to="/prevencion" className="text-gray-600 hover:text-bullying-purple">Cómo prevenirlo</Link></li>
              <li><Link to="/ayuda" className="text-gray-600 hover:text-bullying-purple">Cómo ayudar</Link></li>
              <li><Link to="/evitar-ser-agresor" className="text-gray-600 hover:text-bullying-purple">Evitar ser agresor</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Cuenta</h4>
            <ul className="space-y-2">
              <li><Link to="/registro" className="text-gray-600 hover:text-bullying-purple">Registrarse</Link></li>
              <li><Link to="/login" className="text-gray-600 hover:text-bullying-purple">Iniciar sesión</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Contáctanos</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">Email: contacto@stopbullying.org</li>
              <li className="text-gray-600">Teléfono: (123) 456-7890</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} StopBullying. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
