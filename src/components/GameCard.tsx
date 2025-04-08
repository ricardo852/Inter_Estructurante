
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad } from "lucide-react";

/**
 * Componente de tarjeta para cada juego.
 * Muestra información sobre un juego y permite jugarlo.
 */
type GameCardProps = {
  title: string;
  description: string;
  imageUrl?: string;
  gameUrl: string;
};

const GameCard = ({ title, description, imageUrl, gameUrl }: GameCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video relative bg-gray-100 flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <Gamepad size={48} className="text-bullying-purple opacity-50" />
        )}
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-sm">
        <p>Este juego ayuda a entender mejor situaciones de bullying y fomenta la empatía.</p>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-bullying-purple hover:bg-bullying-dark-purple"
          onClick={() => window.open(gameUrl, '_blank')}
        >
          <Gamepad className="mr-2" size={16} />
          Jugar ahora
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
