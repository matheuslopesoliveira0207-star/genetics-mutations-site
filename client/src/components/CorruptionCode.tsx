import { useEffect, useState } from "react";

interface CorruptionCodeProps {
  mutationType: "falciforme" | "imperfeita" | "down";
}

const corruptionCodes = {
  falciforme: [
    "HEM_POLYMERIZATION_ERROR",
    "SOLUBILITY_BUFFER_OVERFLOW",
    "OXYGEN_BINDING_FAILED",
    "CELL_DEFORMATION_CRITICAL",
    "HEMOGLOBIN_AGGREGATION_LOOP",
    "MEMBRANE_INTEGRITY_LOST",
    "HYDROPHOBIC_PATCH_DETECTED",
    "VALINE_SUBSTITUTION_FATAL",
  ],
  imperfeita: [
    "COLLAGEN_HELIX_CORRUPTION",
    "GLYCINE_REPLACEMENT_ERROR",
    "STERIC_HINDRANCE_DETECTED",
    "HYDROGEN_BOND_FAILURE",
    "TRIPLE_HELIX_COLLAPSE",
    "BONE_MATRIX_DEGRADATION",
    "STRUCTURAL_INTEGRITY_FAILED",
    "AMINO_ACID_MISMATCH_CRITICAL",
  ],
  down: [
    "CHROMOSOME_21_DUPLICATION",
    "DOSAGE_IMBALANCE_CRITICAL",
    "SOD1_OVEREXPRESSION_DETECTED",
    "H2O2_ACCUMULATION_FATAL",
    "FENTON_REACTION_ACTIVE",
    "HYDROXYL_RADICAL_STORM",
    "LIPID_PEROXIDATION_SPREADING",
    "CELLULAR_MATRIX_BREAKDOWN",
  ],
};

export function CorruptionCode({ mutationType }: CorruptionCodeProps) {
  const [displayedCodes, setDisplayedCodes] = useState<string[]>([]);

  useEffect(() => {
    const codes = corruptionCodes[mutationType];
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * codes.length);
      setDisplayedCodes((prev) => {
        const updated = [...prev, codes[randomIndex]];
        if (updated.length > 4) updated.shift();
        return updated;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [mutationType]);

  return (
    <div className="corruption-code-container">
      <div className="corruption-code-display">
        {displayedCodes.map((code, idx) => (
          <div key={idx} className="corruption-line">
            <span className="corruption-bracket">[</span>
            <span className="corruption-error">ERROR</span>
            <span className="corruption-bracket">]</span>
            <span className="corruption-code">{code}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
