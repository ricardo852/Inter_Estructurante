
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import InfoCard from "@/components/InfoCard";
import ChatbotButton from "@/components/ChatbotButton";
import HeroSection from "@/components/HeroSection";
import { GraduationCap, Heart, Lightbulb, ShieldCheck } from "lucide-react";

/**
 * Página de inicio que presenta información general sobre el bullying y recursos disponibles.
 * Ofrece una introducción al tema y enlaces a las diferentes secciones del sitio.
 */
const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Recursos contra el bullying"
              subtitle="Explora nuestras secciones para obtener más información y ayuda"
              centered={true}
              className="mb-12"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <InfoCard
                icon={<Lightbulb size={32} className="text-bullying-purple" />}
                title="¿Qué es el bullying?"
                description="Aprende sobre las diferentes formas de acoso y cómo identificarlo."
                link="/que-es"
              />
              <InfoCard
                icon={<ShieldCheck size={32} className="text-bullying-purple" />}
                title="Prevención"
                description="Descubre estrategias efectivas para prevenir el bullying en diferentes entornos."
                link="/prevencion"
              />
              <InfoCard
                icon={<Heart size={32} className="text-bullying-purple" />}
                title="¿Cómo ayudar?"
                description="Obtén consejos sobre cómo apoyar a las víctimas de bullying."
                link="/ayuda"
              />
              <InfoCard
                icon={<GraduationCap size={32} className="text-bullying-purple" />}
                title="Evitar ser agresor"
                description="Estrategias para fomentar relaciones saludables y respetuosas."
                link="/evitar-ser-agresor"
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Recursos adicionales"
              subtitle="Enlaces a organizaciones y sitios web que ofrecen apoyo e información"
              centered={true}
            />
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-bullying-purple mb-4">Organizaciones de ayuda</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><a href="https://www.stopbullying.gov/" target="_blank" rel="noopener noreferrer" className="text-bullying-purple hover:underline">StopBullying.gov</a></li>
                  <li><a href="https://www.pacer.org/bullying/" target="_blank" rel="noopener noreferrer" className="text-bullying-purple hover:underline">Pacer's National Bullying Prevention Center</a></li>
                  <li><a href="https://www.thebullyproject.com/" target="_blank" rel="noopener noreferrer" className="text-bullying-purple hover:underline">The Bully Project</a></li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-bullying-purple mb-4">Artículos y guías</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><a href="#" className="text-bullying-purple hover:underline">Guía para padres sobre el bullying</a></li>
                  <li><a href="#" className="text-bullying-purple hover:underline">Consejos para estudiantes que sufren bullying</a></li>
                  <li><a href="#" className="text-bullying-purple hover:underline">Estrategias para prevenir el bullying en las escuelas</a></li>
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

export default Index;
