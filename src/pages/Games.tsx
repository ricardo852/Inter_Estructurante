
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import GameCard from "@/components/GameCard";
import ChatbotButton from "@/components/ChatbotButton";

/**
 * Página de juegos que presenta juegos educativos relacionados con la prevención del bullying.
 * Los juegos ayudan a entender mejor el tema y fomentar la empatía a través de experiencias interactivas.
 */
const Games = () => {
  // Lista de juegos educativos sobre bullying
  const games = [
    {
      title: "Ponte en sus zapatos",
      description: "Un juego de rol que te permite experimentar diferentes perspectivas en situaciones de acoso escolar.",
      gameUrl: "https://www.stomp-out-bullying.org/cyberbullying-games/",
    },
    {
      title: "Héroes contra el bullying",
      description: "Conviértete en un héroe que ayuda a frenar situaciones de acoso y aprende estrategias para intervenir.",
      gameUrl: "https://www.stomp-out-bullying.org/cyberbullying-games/",
    },
    {
      title: "Empatía y respeto",
      description: "Juego interactivo que enseña la importancia de la empatía y el respeto para prevenir el bullying.",
      gameUrl: "https://www.stomp-out-bullying.org/cyberbullying-games/",
    },
    {
      title: "Construye relaciones saludables",
      description: "Aprende a construir amistades positivas y a identificar relaciones tóxicas a través de este juego.",
      gameUrl: "https://www.stomp-out-bullying.org/cyberbullying-games/",
    },
    {
      title: "Misión antibullying",
      description: "Una aventura donde deberás superar desafíos relacionados con la prevención del acoso escolar.",
      gameUrl: "https://www.stomp-out-bullying.org/cyberbullying-games/",
    },
    {
      title: "Quizz: ¿Cuánto sabes sobre bullying?",
      description: "Pon a prueba tus conocimientos sobre el acoso escolar con este divertido cuestionario.",
      gameUrl: "https://www.stomp-out-bullying.org/cyberbullying-games/",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-bullying-soft to-white py-16">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Juegos Educativos"
              subtitle="Aprende sobre el bullying de forma interactiva"
              className="mb-12"
            />
            
            <div className="prose max-w-none">
              <p className="text-lg mb-6">
                Los juegos educativos son una excelente manera de aprender sobre el bullying 
                y desarrollar habilidades sociales importantes como la empatía, el respeto y 
                la resolución de conflictos.
              </p>
              
              <p className="text-lg mb-10">
                Explora nuestra colección de juegos diseñados para ayudarte a entender mejor 
                el bullying y cómo prevenirlo. Estos juegos son adecuados para diferentes edades 
                y pueden ser utilizados tanto en casa como en entornos educativos.
              </p>
            </div>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {games.map((game, index) => (
                <GameCard 
                  key={index}
                  title={game.title}
                  description={game.description}
                  gameUrl={game.gameUrl}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Beneficios de los juegos educativos"
              subtitle="¿Por qué jugar es importante para prevenir el bullying?"
              centered={true}
            />
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-bullying-purple mb-4">Desarrollo de habilidades</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mejora la empatía y la comprensión de perspectivas diferentes</li>
                  <li>Desarrolla habilidades para resolver conflictos pacíficamente</li>
                  <li>Refuerza comportamientos positivos y respetuosos</li>
                  <li>Enseña estrategias para intervenir de manera segura</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-bullying-purple mb-4">Impacto en el entorno</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fomenta un ambiente escolar más positivo y seguro</li>
                  <li>Reduce los incidentes de bullying mediante la educación</li>
                  <li>Crea conciencia sobre los efectos negativos del acoso</li>
                  <li>Promueve la inclusión y el respeto a la diversidad</li>
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

export default Games;
