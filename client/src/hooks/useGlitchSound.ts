import { useCallback } from "react";

/**
 * Hook para gerar e reproduzir sons de glitch/bipe de terminal
 * Usa Web Audio API para criar sons sintetizados
 */
export function useGlitchSound() {
  const playGlitchSound = useCallback(() => {
    try {
      // Cria contexto de áudio
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Cria oscilador para o bipe
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      // Conecta os nós
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Configurações do som de glitch
      oscillator.type = "square"; // Som digital/eletrônico
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime); // Frequência inicial
      
      // Envelope de amplitude (fade in/out rápido)
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.15, audioContext.currentTime + 0.05);
      gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.15);
      
      // Efeito de glitch: modula a frequência
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.linearRampToValueAtTime(600, audioContext.currentTime + 0.05);
      oscillator.frequency.linearRampToValueAtTime(900, audioContext.currentTime + 0.1);
      oscillator.frequency.linearRampToValueAtTime(700, audioContext.currentTime + 0.15);
      
      // Inicia e para o som
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.15);
    } catch (error) {
      // Silenciosamente ignora erros (navegadores sem suporte a Web Audio)
      console.debug("Web Audio API não disponível");
    }
  }, []);

  return { playGlitchSound };
}
