
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ChatbotButton from "@/components/ChatbotButton";
import { Shield, School, Briefcase, Smartphone } from "lucide-react";

/**
 * Página con información sobre cómo prevenir el bullying en diferentes contextos.
 * Proporciona consejos y estrategias para evitar situaciones de acoso.
 */
const Prevencion = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-bullying-soft to-white py-16">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="¿Cómo prevenir el bullying?"
              subtitle="Estrategias efectivas para prevenir el acoso en diferentes entornos"
              className="mb-12"
            />
            
            <div className="prose max-w-none">
              <p className="text-lg mb-6">
                La prevención del bullying es responsabilidad de todos: estudiantes, educadores, padres, 
                empleadores y la sociedad en su conjunto. Implementar estrategias efectivas de prevención 
                puede crear entornos más seguros y respetuosos para todos.
              </p>
              
              <p className="text-lg mb-10">
                Es fundamental entender que el bullying no es "cosa de niños" ni una fase normal del desarrollo. 
                Es un problema serio que requiere intervención y prevención activa por parte de todos los involucrados.
              </p>
            </div>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-10">
              <Shield size={42} className="text-bullying-purple mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">Principios generales de prevención</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-bullying-purple mb-3">Fomentar la empatía</h3>
                <p>Promover la comprensión de los sentimientos y perspectivas de los demás. La empatía es una herramienta poderosa contra el bullying.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-bullying-purple mb-3">Comunicación abierta</h3>
                <p>Crear canales de comunicación donde las personas se sientan seguras para expresar sus preocupaciones y reportar incidentes.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-bullying-purple mb-3">Educación continua</h3>
                <p>Proporcionar información sobre qué es el bullying, sus consecuencias y cómo responder adecuadamente ante estas situaciones.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Prevención por contextos"
              subtitle="Estrategias específicas según el entorno"
              centered={true}
              className="mb-12"
            />
            
            <div className="space-y-16">
              <div>
                <div className="flex items-center mb-6">
                  <School size={32} className="text-bullying-purple mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">En entornos educativos</h3>
                </div>
                
                <ul className="list-disc pl-12 space-y-4">
                  <li className="text-lg">Implementar programas de prevención del bullying en todo el centro educativo</li>
                  <li className="text-lg">Capacitar al personal docente y administrativo para identificar y responder al bullying</li>
                  <li className="text-lg">Establecer reglas claras y consecuencias consistentes para comportamientos de acoso</li>
                  <li className="text-lg">Crear un ambiente inclusivo que celebre la diversidad y el respeto mutuo</li>
                  <li className="text-lg">Supervisar áreas donde el bullying puede ocurrir con más frecuencia (patios, pasillos)</li>
                </ul>
              </div>
              
              <div>
                <div className="flex items-center mb-6">
                  <Briefcase size={32} className="text-bullying-purple mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">En lugares de trabajo</h3>
                </div>
                
                <ul className="list-disc pl-12 space-y-4">
                  <li className="text-lg">Desarrollar políticas claras contra el acoso laboral</li>
                  <li className="text-lg">Proporcionar formación sobre respeto en el lugar de trabajo</li>
                  <li className="text-lg">Establecer procedimientos confidenciales para informar sobre situaciones de acoso</li>
                  <li className="text-lg">Promover un ambiente de trabajo colaborativo y respetuoso</li>
                  <li className="text-lg">Tomar en serio todas las denuncias de acoso laboral e investigarlas adecuadamente</li>
                </ul>
              </div>
              
              <div>
                <div className="flex items-center mb-6">
                  <Smartphone size={32} className="text-bullying-purple mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">En entornos digitales</h3>
                </div>
                
                <ul className="list-disc pl-12 space-y-4">
                  <li className="text-lg">Educar sobre el uso responsable y seguro de la tecnología</li>
                  <li className="text-lg">Establecer límites claros sobre el comportamiento en línea aceptable</li>
                  <li className="text-lg">Enseñar a guardar evidencia del ciberbullying (capturas de pantalla, mensajes)</li>
                  <li className="text-lg">Conocer las configuraciones de privacidad en redes sociales y aplicaciones</li>
                  <li className="text-lg">Fomentar que los jóvenes hablen con adultos de confianza sobre sus experiencias en línea</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <ChatbotButton />
      <Footer />
    </div>
  );
};

export default Prevencion;
