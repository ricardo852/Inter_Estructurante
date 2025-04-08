
/**
 * Componente para encabezados de sección consistentes.
 * Proporciona un estilo unificado a través de toda la aplicación.
 */
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = false,
  className = ""
}: SectionHeadingProps) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl font-bold text-bullying-purple mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
