
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import InfoCard from "@/components/InfoCard";
import ChatbotButton from "@/components/ChatbotButton";
import { BookOpen, Brain, Heart, Users } from "lucide-react";

/**
 * Página que proporciona información sobre cómo evitar convertirse en agresor.
 * Ofrece consejos y estrategias para fomentar relaciones respetuosas.
 */
const EvitarSerAgresor = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-bullying-soft to-white py-16">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Cómo evitar ser un agresor"
              subtitle="Estrategias para fomentar relaciones saludables y respetuosas"
              className="mb-12"
            />
            
            <div className="prose max-w-none">
              <p className="text-lg mb-6">
                Todos tenemos la responsabilidad de crear entornos seguros y respetuosos. 
                Reconocer y modificar comportamientos que podrían ser dañinos para otros 
                es un paso importante para prevenir el bullying desde su origen.
              </p>
              
              <p className="text-lg mb-10">
                Estas son algunas estrategias que pueden ayudarte a mantener relaciones 
                saludables y evitar convertirte en un agresor sin intención:
              </p>
            </div>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              <InfoCard
                icon={<Brain size={32} />}
                title="Desarrolla la empatía"
                description="Practica ponerte en el lugar de los demás y considera cómo tus palabras y acciones pueden afectarles."
              />
              <InfoCard
                icon={<Heart size={32} />}
                title="Gestiona tus emociones"
                description="Aprende a manejar la ira, frustración y otros sentimientos negativos de manera constructiva sin dirigirlos hacia otros."
              />
              <InfoCard
                icon={<Users size={32} />}
                title="Respeta las diferencias"
                description="Valora la diversidad y comprende que las diferencias entre personas enriquecen nuestra sociedad."
              />
              <InfoCard
                icon={<BookOpen size={32} />}
                title="Edúcate continuamente"
                description="Infórmate sobre el impacto del bullying y cómo tus comportamientos pueden afectar a largo plazo a otras personas."
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Señales de advertencia"
              subtitle="Reconoce comportamientos que podrían conducir al bullying"
              centered={true}
            />
            
            <div className="mt-8 space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-bullying-purple mb-3">Comportamientos a vigilar en ti mismo</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Tendencia a dominar o controlar a los demás</li>
                  <li>Dificultad para entender los sentimientos de otros</li>
                  <li>Disfrute al ver a otros en situaciones incómodas</li>
                  <li>Rechazo o exclusión frecuente de ciertas personas</li>
                  <li>Burlas persistentes que incomodan a otros</li>
                  <li>Uso del humor para humillar</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-bullying-purple mb-3">Qué hacer si reconoces estos comportamientos</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Busca ayuda de un profesional (psicólogo, consejero escolar)</li>
                  <li>Habla con personas de confianza sobre tus sentimientos</li>
                  <li>Practica técnicas de autocontrol y manejo de la ira</li>
                  <li>Participa en programas de desarrollo de habilidades sociales</li>
                  <li>Considera unirte a grupos que promuevan la empatía y el respeto</li>
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

export default EvitarSerAgresor;
