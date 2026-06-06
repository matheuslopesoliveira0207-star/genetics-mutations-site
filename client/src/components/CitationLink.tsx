import { useLocation } from "wouter";
import { useGlitchSound } from "@/hooks/useGlitchSound";

interface CitationLinkProps {
  referenceId: string;
  children?: React.ReactNode;
}

export function CitationLink({ referenceId, children }: CitationLinkProps) {
  const [, setLocation] = useLocation();
  const { playGlitchSound } = useGlitchSound();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Toca som de glitch
    playGlitchSound();
    // Navega para a página de referências com hash para a referência específica
    setLocation(`/referencias#${referenceId}`);
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center justify-center w-5 h-5 ml-1 text-xs font-bold rounded-full bg-accent text-accent-foreground hover:opacity-80 active:scale-90 transition-all duration-100 cursor-pointer align-text-top"
      title={`Ver referência: ${referenceId}`}
      aria-label={`Citação: ${referenceId}`}
    >
      {children || "[1]"}
    </button>
  );
}
