
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

/**
 * Sección Hero para la página de inicio.
 * Contiene un mensaje principal y botones para acciones clave.
 */
const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-bullying-soft to-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Juntos contra el bullying
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Información, recursos y apoyo para prevenir y combatir el acoso escolar
            en todas sus formas. Aprende a identificarlo y cómo actuar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/que-es">
              <Button className="bg-bullying-purple hover:bg-bullying-dark-purple text-white px-6 py-2 rounded-md">
                Conocer más
              </Button>
            </Link>
            <Link to="/registro">
              <Button variant="outline" className="bg-white text-bullying-purple border-bullying-purple hover:bg-bullying-soft px-6 py-2 rounded-md">
                Únete a la comunidad
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 h-full w-1/3 bg-contain bg-no-repeat bg-right hidden lg:block" 
           style={{backgroundImage: "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1470&auto=format&fit=crop')", opacity: 0.2}}>
      </div>
    </div>
  );
};

export default HeroSection;
