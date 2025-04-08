
import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Paperclip, Send } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

/**
 * Página que contiene un chatbot especializado en bullying.
 * Permite a los usuarios hacer preguntas y recibir consejos sobre el tema.
 */
const Chatbot = () => {
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([
    {
      text: "Hola, soy un asistente especializado en bullying. Puedo responder preguntas y ofrecer consejos para víctimas, testigos y educadores. ¿En qué puedo ayudarte hoy?",
      isUser: false
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Base de conocimiento sobre bullying
  const knowledgeBase = [
    {
      keywords: ["qué", "es", "bullying", "acoso"],
      response: "El bullying o acoso escolar es un comportamiento agresivo, intencional y repetitivo que implica un desequilibrio de poder entre el agresor y la víctima. Puede manifestarse de forma física, verbal, social o digital (ciberbullying)."
    },
    {
      keywords: ["tipos", "formas", "clases"],
      response: "Existen varios tipos de bullying: físico (golpes, empujones), verbal (insultos, burlas), social (exclusión, rumores) y ciberbullying (acoso a través de medios digitales)."
    },
    {
      keywords: ["víctima", "ayuda", "soy", "sufro"],
      response: "Si eres víctima de bullying: 1) No te culpes, no es tu culpa. 2) Habla con un adulto de confianza (padres, profesores, consejeros). 3) Documenta los incidentes. 4) Evita enfrentamientos directos. 5) Busca apoyo emocional de amigos o profesionales. Recuerda que no estás solo/a y que mereces respeto."
    },
    {
      keywords: ["testigo", "observador", "veo"],
      response: "Si eres testigo de bullying: 1) No te quedes callado, reporta la situación. 2) Ofrece apoyo a la víctima. 3) No participes ni refuerces el comportamiento del agresor. 4) Busca ayuda de adultos responsables. Tu intervención puede marcar una diferencia significativa."
    },
    {
      keywords: ["profesor", "docente", "maestro", "educador", "padre", "madre"],
      response: "Como educador o padre: 1) Crea un ambiente seguro donde los jóvenes puedan hablar. 2) Establece reglas claras contra el acoso. 3) Supervisa actividades en línea y espacios comunes. 4) Enseña empatía y respeto. 5) Interviene de inmediato ante señales de bullying. 6) Trabaja con la escuela en programas de prevención."
    },
    {
      keywords: ["prevenir", "evitar", "prevención"],
      response: "Para prevenir el bullying: 1) Fomenta la empatía y el respeto. 2) Implementa programas educativos sobre el tema. 3) Crea canales seguros para reportar casos. 4) Promueve la inclusión y diversidad. 5) Establece consecuencias claras para comportamientos agresivos. 6) Enseña habilidades sociales positivas."
    },
    {
      keywords: ["señales", "síntomas", "identificar"],
      response: "Algunas señales de que alguien puede estar sufriendo bullying incluyen: cambios en el comportamiento, miedo a ir a la escuela, pérdida de interés en actividades, bajo rendimiento académico, objetos perdidos o dañados, problemas para dormir, síntomas físicos inexplicables, y aislamiento social."
    },
    {
      keywords: ["agresor", "acosador", "bully"],
      response: "Si tiendes a comportamientos agresivos: 1) Reconoce el impacto de tus acciones. 2) Busca ayuda para manejar la ira o frustración. 3) Desarrolla empatía intentando entender cómo se sienten los demás. 4) Aprende formas constructivas de resolver conflictos. 5) Habla con un profesional que pueda ayudarte a entender y cambiar estos comportamientos."
    },
    {
      keywords: ["digital", "internet", "redes", "cyber", "ciber"],
      response: "Para prevenir el ciberbullying: 1) No compartas información personal. 2) Configura la privacidad en redes sociales. 3) Piensa antes de publicar. 4) Guarda evidencia de acoso. 5) Bloquea a acosadores. 6) Reporta comportamientos inapropiados. 7) Habla con un adulto de confianza si eres víctima."
    },
    {
      keywords: ["consecuencias", "efectos", "impacto"],
      response: "El bullying puede tener graves consecuencias: para las víctimas (ansiedad, depresión, baja autoestima, problemas académicos, e incluso pensamientos suicidas); para los agresores (problemas legales, dificultades para mantener relaciones saludables); y para los testigos (sentimientos de impotencia, culpa y miedo)."
    },
    {
      keywords: ["leyes", "legal", "derechos"],
      response: "En España y muchos países, existen leyes que protegen contra el bullying. Las instituciones educativas tienen la obligación de implementar protocolos anti-acoso y tomar medidas cuando se reportan casos. Si el bullying es grave, puede considerarse un delito, especialmente si incluye agresiones físicas, amenazas o acoso persistente."
    }
  ];

  // Función para generar respuesta basada en la entrada del usuario
  const generateResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    let bestMatch = null;
    let highestScore = 0;

    // Buscar la mejor coincidencia en la base de conocimiento
    for (const entry of knowledgeBase) {
      let score = 0;
      for (const keyword of entry.keywords) {
        if (input.includes(keyword)) {
          score++;
        }
      }
      if (score > highestScore) {
        highestScore = score;
        bestMatch = entry;
      }
    }

    // Respuesta predeterminada si no hay coincidencias buenas
    if (highestScore < 1) {
      return "Lo siento, no tengo suficiente información sobre eso. ¿Podrías reformular tu pregunta o preguntarme sobre qué es el bullying, sus tipos, cómo ayudar si eres víctima, testigo o educador, o cómo prevenirlo?";
    }

    return bestMatch!.response;
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    // Agregar mensaje del usuario
    const newUserMessage = {
      text: inputValue,
      isUser: true
    };
    setMessages(prev => [...prev, newUserMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simular tiempo de respuesta y generar respuesta
    setTimeout(() => {
      const botResponse = {
        text: generateResponse(inputValue),
        isUser: false
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Scroll automático al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-bullying-soft to-white py-12">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Chatbot Anti-Bullying"
              subtitle="Haz preguntas y recibe consejos sobre bullying"
              centered={true}
            />
          </div>
        </div>

        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border">
              <div className="p-4 bg-bullying-purple text-white">
                <h2 className="font-bold text-xl">Asistente Anti-Bullying</h2>
                <p className="text-sm opacity-90">Responde a tus preguntas sobre acoso escolar</p>
              </div>
              
              <ScrollArea className="h-[400px] p-4">
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div 
                      key={index} 
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.isUser 
                            ? 'bg-bullying-purple text-white rounded-tr-none' 
                            : 'bg-gray-100 text-gray-800 rounded-tl-none'
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="max-w-[80%] rounded-lg p-3 bg-gray-100 text-gray-800 rounded-tl-none">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{animationDelay: '0.2s'}}></div>
                          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{animationDelay: '0.4s'}}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>
              
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    placeholder="Escribe tu pregunta sobre bullying..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                    className="flex-grow"
                  />
                  <Button 
                    onClick={handleSendMessage} 
                    disabled={isLoading || inputValue.trim() === ""}
                    className="bg-bullying-purple hover:bg-purple-700"
                  >
                    <Send size={18} />
                  </Button>
                </div>
                <div className="mt-2 text-xs text-gray-500 text-center">
                  Prueba a preguntar: "¿Qué es el bullying?", "¿Cómo ayudar a una víctima?", "¿Qué hacer si soy testigo?"
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chatbot;
