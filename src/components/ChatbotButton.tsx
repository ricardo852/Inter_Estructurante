
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

/**
 * Botón flotante que permite acceder al chatbot desde cualquier página
 */
const ChatbotButton = () => {
  const { toast } = useToast();

  const handleClick = () => {
    toast({
      title: "Accediendo al chatbot",
      description: "Cargando el asistente virtual...",
      duration: 2000,
    });
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link 
            to="/chatbot" 
            className="fixed bottom-8 right-8 bg-bullying-purple text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-all hover:scale-110 z-50"
            aria-label="Abrir chatbot"
            onClick={handleClick}
          >
            <MessageCircle size={24} />
          </Link>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-white">
          <p>Haz preguntas sobre bullying</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ChatbotButton;
