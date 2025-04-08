import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ChatbotButton from "@/components/ChatbotButton";
import { AlertCircle, Eye, HeartHandshake, UserCheck } from "lucide-react";

/**
 * Página con información sobre cómo ayudar a víctimas de bullying.
 * Proporciona estrategias para detectar e intervenir de manera efectiva.
 */
const Ayuda = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-bullying-soft to-white py-16">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="¿Cómo ayudar a alguien que sufre bullying?"
              subtitle="Guía para identificar, apoyar e intervenir cuando alguien es víctima de acoso"
              className="mb-12"
            />
            
            <div className="prose max-w-none">
              <p className="text-lg mb-10">
                Detectar cuando alguien está siendo víctima de bullying y saber cómo ayudar de manera efectiva 
                puede marcar una diferencia significativa en su vida. Ya sea como padre, educador, compañero o amigo, 
                tu apoyo es crucial para quien sufre acoso.
              </p>
            </div>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-10">
              <Eye size={42} className="text-bullying-purple mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">Cómo reconocer las señales</h2>
            </div>
            
            <p className="text-lg mb-8">Las víctimas de bullying a menudo no informan sobre el acoso que sufren, pero pueden mostrar señales que indiquen que algo no va bien:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-bullying-purple mb-4">Señales físicas</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Lesiones inexplicables, como moretones o cortes</li>
                  <li>Ropa, libros u otras pertenencias dañadas o perdidas</li>
                  <li>Quejas frecuentes de dolores de cabeza, estómago o malestar físico</li>
                  <li>Cambios en los hábitos alimenticios o problemas de sueño</li>
                  <li>Apariencia descuidada o deteriorada</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-bullying-purple mb-4">Señales emocionales y sociales</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Aislamiento social o pérdida repentina de amigos</li>
                  <li>Disminución de la autoestima y sentimientos de tristeza</li>
                  <li>Miedo a ir a la escuela o al trabajo</li>
                  <li>Pérdida de interés en actividades que antes disfrutaban</li>
                  <li>Comportamiento ansioso, depresivo o cambios de humor notables</li>
                  <li>Comentarios sobre sentirse inútil, desesperado o incluso suicida</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-10">
              <HeartHandshake size={42} className="text-bullying-purple mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">Cómo intervenir de manera efectiva</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-bullying-purple mb-4">Si eres padre o educador</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Escucha atentamente sin juzgar y toma en serio sus preocupaciones</li>
                  <li>Asegúrale que no es su culpa y que merece sentirse seguro</li>
                  <li>Documenta los incidentes (fechas, lugares, personas involucradas)</li>
                  <li>Contacta con las autoridades escolares o superiores relevantes</li>
                  <li>Considera buscar ayuda profesional si el bullying ha afectado significativamente su bienestar emocional</li>
                  <li>Enséñale estrategias de afrontamiento y fortalece su autoestima</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-bullying-purple mb-4">Si eres compañero o amigo</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Ofrece apoyo y muestra que estás ahí para ayudar</li>
                  <li>No participes en el bullying ni lo ignores cuando lo presencies</li>
                  <li>Acompaña a la persona que está siendo acosada para que no se sienta sola</li>
                  <li>Anima a la víctima a hablar con un adulto de confianza</li>
                  <li>Si es seguro hacerlo, defiende a la víctima cuando presencies el acoso</li>
                  <li>Informa a un adulto responsable sobre la situación</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-10">
              <AlertCircle size={42} className="text-bullying-purple mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">Cuándo buscar ayuda profesional</h2>
            </div>
            
            <p className="text-lg mb-6">
              En algunos casos, es necesario buscar ayuda profesional, especialmente cuando:
            </p>
            
            <ul className="list-disc pl-12 space-y-4 mb-10">
              <li className="text-lg">La víctima muestra signos de depresión severa o ansiedad</li>
              <li className="text-lg">Hay indicios de autolesiones o pensamientos suicidas</li>
              <li className="text-lg">El bullying es particularmente severo o prolongado</li>
              <li className="text-lg">Las intervenciones previas no han funcionado</li>
              <li className="text-lg">La víctima está extremadamente aislada socialmente</li>
            </ul>
            
            <div className="bg-bullying-soft p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-bullying-purple mb-3">Recursos de ayuda</h3>
              <p className="mb-4">Si necesitas ayuda inmediata, puedes contactar con:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Línea de ayuda contra el bullying: 900 XXX XXX</li>
                <li>Correo electrónico de apoyo: ayuda@stopbullying.org</li>
                <li>Chat en línea: www.stopbullying.org/chat</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      
      <ChatbotButton />
      <Footer />
    </div>
  );
};

export default Ayuda;
