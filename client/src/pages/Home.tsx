import { useState, useEffect } from "react";
import { mutations, mutationOrder } from "@/data/mutations";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [currentState, setCurrentState] = useState<string>("nativo");
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  // Aplicar classe ao body para mudar o estado visual
  useEffect(() => {
    document.body.className = `estado-${currentState}`;
    setQuizAnswer(null);
    setShowFeedback(false);
  }, [currentState]);

  // Função para selecionar mutação aleatória
  const handleChaosButton = () => {
    const randomIndex = Math.floor(Math.random() * mutationOrder.length);
    setCurrentState(mutationOrder[randomIndex]);
  };

  // Função para responder quiz
  const handleQuizAnswer = (index: number) => {
    setQuizAnswer(index);
    setShowFeedback(true);
  };

  const mutation = mutations[currentState];
  const selectedOption =
    quizAnswer !== null ? mutation.quizOptions[quizAnswer] : null;
  const isCorrect = selectedOption?.correct ?? false;

  return (
    <div className="min-h-screen bg-background text-foreground transition-all duration-800">
      {/* Painel de Controle Molecular */}
      <div className="control-panel">
        <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-center">
          Painel de Controle
        </h3>

        <Button
          onClick={handleChaosButton}
          className="chaos-button mb-4 w-full"
          variant="default"
        >
          🧬 O Botão do Caos
        </Button>

        <div className="border-t border-current my-3 opacity-30"></div>

        <p className="text-xs font-semibold mb-2 opacity-70 hidden md:block">Seletores Manuais:</p>

        {mutationOrder.map((mutationId) => (
          <button
            key={mutationId}
            onClick={() => setCurrentState(mutationId)}
            className={`control-button ${
              currentState === mutationId ? "active" : ""
            }`}
          >
            {mutations[mutationId].label}
          </button>
        ))}
      </div>

      {/* Container Principal */}
      <div className="main-container">
        {/* Seção 1: Introdução e Dogma Central */}
        <div className="section-card">
          <h2 className="text-2xl font-bold mb-4">{mutation.section1Title}</h2>
          <p className="text-sm leading-relaxed mb-4">{mutation.section1Content}</p>

          {/* Imagem da Proteína */}
          <div className="mb-3 md:mb-4 rounded-lg overflow-hidden">
            <img
              src={mutation.imageUrl}
              alt={mutation.name}
              className="w-full h-auto object-cover rounded-lg transition-all duration-700"
            />
          </div>

          {/* Visualização de Sequência */}
          <div className="bg-muted/30 p-2 md:p-3 rounded-md font-mono text-xs">
            <div className="mb-2">
              <span className="font-bold">DNA:</span> {currentState === "nativo" ? "GAG" : currentState === "falciforme" ? "GTG" : currentState === "imperfeita" ? "GG(X)Y→CG(X)Y" : "CGC→TGC"}
            </div>
            <div className="mb-2">
              <span className="font-bold">RNA:</span>{" "}
              {currentState === "nativo" ? "GAG" : currentState === "falciforme" ? "GUG" : currentState === "imperfeita" ? "GG(X)Y→CG(X)Y" : "CGC→UGC"}
            </div>
            <div>
              <span className="font-bold">Aminoácido:</span>{" "}
              {currentState === "nativo"
                ? "Ácido Glutâmico (Glu)"
                : currentState === "falciforme"
                  ? "Valina (Val)"
                  : currentState === "imperfeita"
                    ? "Volumoso (Cys/Trp)"
                    : "Cisteína (Cys)"}
            </div>
          </div>
        </div>

        {/* Seção 2: Impacto Bioquímico */}
        <div className="section-card">
          <h2 className="text-2xl font-bold mb-4">{mutation.section2Title}</h2>
          <p className="text-sm leading-relaxed mb-6">{mutation.section2Content}</p>

          {/* Gráfico Cinético Simplificado */}
          <div className="bg-muted/20 p-3 md:p-4 rounded-md">
            <div className="text-xs font-bold mb-3">Solubilidade / Eficiência</div>
            <div className="flex items-end gap-2 h-24">
              {[1, 2, 3, 4, 5].map((i) => {
                let height = 0;
                if (currentState === "nativo") height = 80 - i * 5;
                else if (currentState === "falciforme") height = 20 + i * 3;
                else if (currentState === "imperfeita") height = 30 + i * 8;
                else if (currentState === "milano") height = 70 + i * 4;

                return (
                  <div
                    key={i}
                    className="flex-1 bg-accent rounded-t transition-all duration-700"
                    style={{ height: `${height}%` }}
                  ></div>
                );
              })}
            </div>
            <div className="text-xs text-muted-foreground mt-2">
              {currentState === "nativo"
                ? "Alta solubilidade"
                : currentState === "falciforme"
                  ? "Agregação severa"
                  : currentState === "imperfeita"
                    ? "Estrutura comprometida"
                    : "Ultra-eficiente"}
            </div>
          </div>

          {/* Indicadores Bioquímicos */}
          <div className="grid grid-cols-2 gap-2 mt-3 md:mt-4">
            <div className="bg-muted/20 p-2 rounded text-xs md:text-sm">
              <div className="font-bold text-xs">pH Ótimo</div>
              <div className="text-muted-foreground">
                {currentState === "nativo" ? "7.4" : currentState === "falciforme" ? "6.8" : currentState === "imperfeita" ? "7.2" : "7.4"}
              </div>
            </div>
            <div className="bg-muted/20 p-2 rounded text-xs md:text-sm">
              <div className="font-bold text-xs">Estabilidade</div>
              <div className="text-muted-foreground">
                {currentState === "nativo" ? "Alta" : currentState === "falciforme" ? "Baixa" : currentState === "imperfeita" ? "Crítica" : "Máxima"}
              </div>
            </div>
          </div>
        </div>

        {/* Seção 3: Mini-Quiz Interativo */}
        <div className="section-card">
          <h2 className="text-2xl font-bold mb-4">Diagnóstico Interativo</h2>
          <p className="text-sm font-semibold mb-4">{mutation.quizQuestion}</p>

          <div className="space-y-2">
            {mutation.quizOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleQuizAnswer(index)}
                className={`w-full p-3 text-left text-sm rounded-md border-2 transition-all ${
                  quizAnswer === index
                    ? isCorrect
                      ? "border-green-500 bg-green-50 text-green-900"
                      : "border-red-500 bg-red-50 text-red-900"
                    : "border-border hover:border-accent hover:bg-muted/50"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                      quizAnswer === index
                        ? isCorrect
                          ? "border-green-500 bg-green-500"
                          : "border-red-500 bg-red-500"
                        : "border-current"
                    }`}
                  ></div>
                  <span>{option.text}</span>
                </div>
              </button>
            ))}
          </div>

          {showFeedback && (
            <div
              className={`mt-4 p-3 rounded-md text-sm font-semibold transition-all ${
                isCorrect
                  ? "bg-green-100 text-green-900 border border-green-300"
                  : "bg-red-100 text-red-900 border border-red-300"
              }`}
            >
              {isCorrect ? "✓ Correto! Excelente resposta." : "✗ Incorreto. Tente novamente."}
            </div>
          )}

          {/* Dica Educativa */}
          <div className="mt-3 md:mt-4 p-2 md:p-3 bg-muted/30 rounded-md text-xs text-muted-foreground">
            <strong>Conceito-chave:</strong> {
              currentState === "nativo"
                ? "O estado nativo é determinado pela minimização da energia livre de Gibbs."
                : currentState === "falciforme"
                  ? "O efeito hidrofóbico é a força motriz principal para agregação proteica."
                  : currentState === "imperfeita"
                    ? "O impedimento estérico destrói a geometria necessária para estabilidade estrutural."
                    : "As ligações covalentes são muito mais estáveis que interações fracas."
            }
          </div>
        </div>
      </div>

      {/* Rodapé com Informações */}
      <footer className="mt-8 md:mt-12 py-6 md:py-8 px-3 md:px-4 text-center text-xs text-muted-foreground border-t border-border">
        <p className="mb-2 font-bold text-xs md:text-sm">
          💡 "Estrutura dita Função"
        </p>
        <p className="mb-2 md:mb-3 text-xs">
          Bioquímica 1 - Mutações Genéticas
        </p>
        <p className="text-xs opacity-70 hidden md:block">
          React 19 + Tailwind CSS 4 | Biomorfismo Dinâmico
        </p>
      </footer>
    </div>
  );
}
