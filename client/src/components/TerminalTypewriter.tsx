import { useEffect, useState } from "react";

interface TerminalTypewriterProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

export function TerminalTypewriter({
  text,
  speed = 30,
  onComplete,
}: TerminalTypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayedText.length === text.length) {
      setIsComplete(true);
      onComplete?.();
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText(text.slice(0, displayedText.length + 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, text, speed, onComplete]);

  return (
    <div className="terminal-typewriter">
      <span className="typewriter-text">{displayedText}</span>
      {!isComplete && <span className="typewriter-cursor">▌</span>}
    </div>
  );
}
