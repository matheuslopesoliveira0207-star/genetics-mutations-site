import { useLocation } from "wouter";

interface CitationLinkProps {
  referenceId: string;
  children?: React.ReactNode;
}

export function CitationLink({ referenceId, children }: CitationLinkProps) {
  const [, setLocation] = useLocation();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Navega para a página de referências com hash para a referência específica
    setLocation(`/referencias#${referenceId}`);
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center justify-center w-5 h-5 ml-1 text-xs font-bold rounded-full bg-accent text-accent-foreground hover:opacity-80 transition-opacity cursor-pointer align-text-top"
      title={`Ver referência: ${referenceId}`}
      aria-label={`Citação: ${referenceId}`}
    >
      {children || "[1]"}
    </button>
  );
}
