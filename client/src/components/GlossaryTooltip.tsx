import { useState } from "react";
import { glossaryTerms } from "@/data/glossary";

interface GlossaryTooltipProps {
  termKey: string;
  children: React.ReactNode;
  className?: string;
}

export function GlossaryTooltip({
  termKey,
  children,
  className = "",
}: GlossaryTooltipProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const term = glossaryTerms[termKey];

  if (!term) {
    return <span className={className}>{children}</span>;
  }

  return (
    <span
      className={`glossary-term ${className}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <div className="glossary-tooltip">
          <div className="glossary-tooltip-title">{term.term}</div>
          <div className="glossary-tooltip-definition">{term.definition}</div>
        </div>
      )}
    </span>
  );
}
