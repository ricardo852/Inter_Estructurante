
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import InfoCard from "@/components/InfoCard";
import ChatbotButton from "@/components/ChatbotButton";
import { MessageCircle, UserRound, Tv, SmartphoneNfc } from "lucide-react";

/**
 * Página que explica qué es el bullying y sus diferentes tipos.
 * Proporciona información educativa sobre el acoso escolar.
 */
const QueEs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-bullying-soft to-white py-16">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="¿Qué es el bullying?"
              subtitle="Conoce sobre el acoso escolar, sus diferentes formas y cómo identificarlo"
              className="mb-12"
            />
            
            <div className="prose max-w-none">
              <p className="text-lg mb-6">
                El bullying o acoso escolar se define como un comportamiento agresivo, intencional y repetitivo 
                que implica un desequilibrio de poder o de fuerza entre el agresor y la víctima. Este comportamiento 
                puede manifestarse de diversas formas y puede ocurrir en cualquier entorno donde las personas interactúan.
              </p>
              
              <p className="text-lg mb-10">
                Para que una situación sea considerada bullying debe cumplir con tres características principales:
              </p>
              
              <ul className="list-disc pl-6 mb-10 space-y-2">
                <li className="text-lg"><span className="font-semibold">Intencionalidad:</span> Las acciones del agresor son deliberadas y tienen el propósito de dañar.</li>
                <li className="text-lg"><span className="font-semibold">Repetición:</span> Los episodios de agresión ocurren de manera recurrente durante un tiempo.</li>
                <li className="text-lg"><span className="font-semibold">Desequilibrio de poder:</span> El agresor se percibe o es efectivamente más fuerte (física o psicológicamente) que la víctima.</li>
              </ul>
            </div>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Tipos de bullying"
              subtitle="El acoso puede manifestarse de diferentes formas"
              centered={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              <InfoCard
                icon={<UserRound size={32} />}
                title="Bullying Físico"
                description="Incluye golpes, empujones, patadas, escupitajos, robo o daño de pertenencias. Es el tipo más visible de bullying."
              />
              <InfoCard
                icon={<MessageCircle size={32} />}
                title="Bullying Verbal"
                description="Consiste en insultos, burlas, amenazas, humillaciones, apodos despectivos y comentarios discriminatorios."
              />
              <InfoCard
                icon={<Tv size={32} />}
                title="Bullying Social"
                description="Se basa en la exclusión social, el aislamiento, la propagación de rumores y la manipulación de relaciones para dañar la reputación."
              />
              <InfoCard
                icon={<SmartphoneNfc size={32} />}
                title="Ciberbullying"
                description="Ocurre a través de medios digitales como redes sociales, mensajes de texto, correos electrónicos o aplicaciones de mensajería."
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Consecuencias del bullying"
              subtitle="El acoso escolar puede tener graves repercusiones"
            />
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-bullying-purple mb-4">Para la víctima</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Bajo rendimiento académico y evitación escolar</li>
                  <li>Baja autoestima y problemas de autoimagen</li>
                  <li>Ansiedad, depresión y otros problemas de salud mental</li>
                  <li>Aislamiento social y dificultad para establecer relaciones</li>
                  <li>En casos extremos, ideación suicida o intentos de suicidio</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-bullying-purple mb-4">Para el agresor</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Normalización de conductas violentas</li>
                  <li>Dificultad para desarrollar empatía y habilidades sociales sanas</li>
                  <li>Mayor probabilidad de problemas legales en el futuro</li>
                  <li>Riesgo de perpetuar patrones de abuso en otras relaciones</li>
                  <li>Bajo rendimiento académico y problemas de conducta</li>
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

export default QueEs;
