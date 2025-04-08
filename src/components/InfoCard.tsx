
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

/**
 * Componente de tarjeta informativa para mostrar información sobre diferentes secciones.
 * Incluye un ícono, título, descripción y un enlace opcional.
 */
type InfoCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  link?: string;
  className?: string;
};

const InfoCard = ({ icon, title, description, link, className }: InfoCardProps) => {
  const cardContent = (
    <>
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-bullying-soft">
          {icon}
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        {link && (
          <div className="text-bullying-purple text-sm font-medium hover:underline">
            Más información
          </div>
        )}
      </CardContent>
    </>
  );

  // Si hay un enlace, mostramos el contenido dentro de un componente Link
  if (link) {
    return (
      <Link to={link} className="block transition-transform hover:scale-[1.02]">
        <Card className={cn("h-full transition-all hover:shadow-lg", className)}>
          {cardContent}
        </Card>
      </Link>
    );
  }

  // Si no hay enlace, simplemente mostramos la tarjeta
  return (
    <Card className={cn("h-full", className)}>
      {cardContent}
    </Card>
  );
};

export default InfoCard;
