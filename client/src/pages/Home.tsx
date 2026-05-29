import { useState, useEffect } from "react";
import { mutations, mutationOrder } from "@/data/mutations";
import { Button } from "@/components/ui/button";
import { GlossaryTooltip } from "@/components/GlossaryTooltip";
import { CorruptionCode } from "@/components/CorruptionCode";

export default function Home() {
  const [currentState, setCurrentState] = useState<string>("nativo");
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [comparisonMode, setComparisonMode] = useState(false);

  // Aplicar classe ao body para mudar o estado visual
  useEffect(() => {
    const displayState = comparisonMode ? "nativo" : currentState;
    document.body.className = `estado-${displayState}`;
    setQuizAnswer(null);
    setShowFeedback(false);
  }, [currentState, comparisonMode]);

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

  const displayState = comparisonMode ? "nativo" : currentState;
  const mutation = mutations[displayState];
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

        {currentState !== "nativo" && (
          <div className="comparison-section">
            <Button
              onClick={() => setComparisonMode(!comparisonMode)}
              className="comparison-button mb-3 w-full"
              variant="outline"
            >
              {comparisonMode ? "🔄 Ver Mutação" : "🔍 Comparar com Normal"}
            </Button>
            {mutations[currentState].comparisonExplanation && (
              <p className="comparison-explanation text-xs leading-relaxed opacity-80 mb-4 p-2 rounded border-l-2 border-current">
                {mutations[currentState].comparisonExplanation}
              </p>
            )}
          </div>
        )}

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
          <p className="text-sm leading-relaxed mb-4">
            {currentState === "nativo" ? (
              <>
                Sequência normal: GAG codificando Ácido Glutâmico na posição 6 da cadeia beta da <GlossaryTooltip termKey="hemoglobina">hemoglobina</GlossaryTooltip>. Proteína enovelada corretamente em seu estado nativo.
              </>
            ) : currentState === "falciforme" ? (
              <>
                <GlossaryTooltip termKey="mutacao-ponto">Mutação de Ponto</GlossaryTooltip>: GAG -&gt; GTG. Substituição do Glutamato (polar, carregado negativamente) por Valina (apolar, hidrofóbica) na posição 6 da beta-globina (Glu6Val).
              </>
            ) : currentState === "imperfeita" ? (
              <>
                <GlossaryTooltip termKey="mutacao-ponto">Mutação Estrutural</GlossaryTooltip>: Substituição da Glicina (Gly) por um aminoácido volumoso com cadeia lateral complexa (como Cisteína ou Triptofano) no padrão de repetição Gly-X-Y do <GlossaryTooltip termKey="colageno">colágeno</GlossaryTooltip>.
              </>
            ) : currentState === "down" ? (
              <>
                <GlossaryTooltip termKey="trissomia">Alteração Cromossômica</GlossaryTooltip>: <GlossaryTooltip termKey="trissomia">Trissomia do Cromossomo 21</GlossaryTooltip>. Em vez de uma mutação pontual, ocorre um fenômeno de desequilíbrio de dosagem génica, onde a presença de uma terceira cópia do cromossomo decola a superexpressão de dezenas de proteínas e enzimas.
              </>
            ) : (
              <>
                <GlossaryTooltip termKey="mutacao-ponto">Mutação Adaptativa</GlossaryTooltip>: Substituição de uma Arginina por uma Cisteína na posição 173 (Arg173Cys) na proteína <GlossaryTooltip termKey="apoa1-milano">ApoA-1 Milano</GlossaryTooltip>.
              </>
            )}
          </p>

          {/* Imagem da Proteína */}
          <div className="mb-3 md:mb-4 rounded-lg overflow-hidden">
            <figure>
              <img
                src={mutation.imageUrl}
                alt={mutation.name}
                className="w-full h-auto object-cover rounded-lg transition-all duration-700"
              />
              <figcaption className="text-xs text-muted-foreground mt-2 text-center italic">
                {currentState === "nativo"
                  ? "Hemoglobina Nativa em Homeostase"
                  : currentState === "falciforme"
                    ? "Hemoglobinas Polimerizadas em Anemia Falciforme"
                    : currentState === "imperfeita"
                      ? "Colágeno Defeituoso em Osteogênese Imperfeita"
                      : "Partícula HDL ApoA-1 Milano Otimizada"}
              </figcaption>
            </figure>
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
          <p className="text-sm leading-relaxed mb-6">
            {currentState === "nativo" ? (
              <>
                Interações fracas (<GlossaryTooltip termKey="pontes-hidrogenio">pontes de hidrogênio</GlossaryTooltip> e interações eletrostáticas) perfeitamente distribuídas. Alta <GlossaryTooltip termKey="solubilidade">solubilidade</GlossaryTooltip> e <GlossaryTooltip termKey="afinidade-oxigenio">afinidade ideal pelo oxígênio</GlossaryTooltip>.
              </>
            ) : currentState === "falciforme" ? (
              <>
                A Valina mutada exposta tenta fugir do meio aquoso, encaixando-se em um bolção <GlossaryTooltip termKey="efeito-hidrofobico">hidrofóbico</GlossaryTooltip> de outra hemoglobina vizinha. Isso gera polimerizção em massa, criando fibras rígidas que deformam a hemácia em forma de foice e colapsam a <GlossaryTooltip termKey="solubilidade">solubilidade</GlossaryTooltip>.
              </>
            ) : currentState === "imperfeita" ? (
              <>
                O <GlossaryTooltip termKey="impedimento-esterico">impedimento estérico</GlossaryTooltip> causado pela substituição de Glicina por aminoácidos volumosos quebra a <GlossaryTooltip termKey="helix-triplice">hélice tríplice</GlossaryTooltip> do colágeno. Sem a estrutura de suporte, ossos ficam frágeis e quebradiços.
              </>
            ) : currentState === "down" ? (
              <>
                Quebra do <GlossaryTooltip termKey="estresse-oxidativo">equilíbrio redox</GlossaryTooltip>: O cromossomo 21 abriga o gene da enzima <GlossaryTooltip termKey="sod1">SOD1</GlossaryTooltip>. Com 50% mais enzima SOD1 ativa, ocorre uma superpodução de <GlossaryTooltip termKey="h2o2">peróxido de hidrogênio</GlossaryTooltip>. Isso sobrecarrega as enzimas <GlossaryTooltip termKey="catalase">Catalase</GlossaryTooltip> e <GlossaryTooltip termKey="glutationa-peroxidase">Glutationa Peroxidase</GlossaryTooltip>, gerando <GlossaryTooltip termKey="estresse-oxidativo">estresse oxidativo</GlossaryTooltip> severo que danifica lipídios de membrana e desnatura proteínas celulares.
              </>
            ) : (
              <>
                A introdução da Cisteína introduz um grupo tiol (-SH), permitindo a formação de ligações covalentes fortes (<GlossaryTooltip termKey="ponte-dissulfeto">pontes de dissulfeto</GlossaryTooltip>) entre as proteínas mutadas. Isso gera dímeros ultra-estáveis e altamente eficientes na remoção de placas de colesterol das artérias.
              </>
            )}
          </p>

          {/* Gráfico Cinético Simplificado */}
          <div className="bg-muted/20 p-3 md:p-4 rounded-md">
            <div className="text-xs font-bold mb-3">
              {currentState === "nativo"
                ? "Solubilidade / Eficiência"
                : currentState === "falciforme"
                  ? "Nível de Agregação"
                  : currentState === "imperfeita"
                    ? "Integridade Estrutural"
                    : currentState === "down"
                      ? "Estresse Oxidativo (H₂O₂)"
                      : "Eficiência de Remoção de Colesterol"}
            </div>
            <div className="flex items-end gap-2 h-24">
              {[1, 2, 3, 4, 5].map((i) => {
                let height = 0;
                if (currentState === "nativo") height = 80 - i * 5;
                else if (currentState === "falciforme") height = 20 + i * 3;
                else if (currentState === "imperfeita") height = 30 + i * 8;
                else if (currentState === "down") height = 30 + i * 12;
                else if (currentState === "milano") height = 70 + i * 4;

                return (
                  <div
                    key={i}
                    className="flex-1 bg-accent rounded-t chart-bar"
                    style={{ height: `${height}%` }}
                  ></div>
                );
              })}
            </div>
            <div className="text-xs text-muted-foreground mt-3 p-2 bg-background/50 rounded">
              <div className="font-semibold mb-1">
                {currentState === "nativo"
                  ? "✅ Estado Nativo"
                  : currentState === "falciforme"
                    ? "❌ Anemia Falciforme"
                    : currentState === "imperfeita"
                      ? "⚠️ Osteogênese Imperfeita"
                      : currentState === "down"
                        ? "⚡ Síndrome de Down"
                        : "✨ ApoA-1 Milano"}
              </div>
              <div className="text-xs leading-relaxed">
                {currentState === "nativo"
                  ? "Proteína totalmente solúvel e funcional. Todas as interações estão em perfeito equilíbrio termodinâmico."
                  : currentState === "falciforme"
                    ? "Agregação massiva de hemoglobinas. A Valína hidrofóbica causa polimerização irreversível."
                    : currentState === "imperfeita"
                      ? "Colágeno com hélice tríplice quebrada. O impedimento estérico impede o enovelamento correto."
                      : currentState === "down"
                        ? "Sobreprodução de H₂O₂ pela SOD1 em excesso. Catalase e Glutationa Peroxidase não conseguem neutralizar a tempo."
                        : "Partícula HDL ultra-estável. Pontes de dissulfeto maximizam a eficiência na remoção de colesterol."}
              </div>
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
            <p>
              <strong>Conceito-chave:</strong> {
                currentState === "nativo"
                  ? "O estado nativo é determinado pela minimização da energia livre de Gibbs."
                  : currentState === "falciforme"
                    ? "O efeito hidrofóbico é a força motriz principal para agregação proteica."
                    : currentState === "imperfeita"
                      ? "O impedimento estérico destrói a geometria necessária para estabilidade estrutural."
                      : "As ligações covalentes são muito mais estáveis que interações fracas."
              }
            </p>
          </div>
        </div>
      </div>

      {/* Exibição de Corrupção para Mutações Ruins */}
      {(currentState === "falciforme" || currentState === "imperfeita" || currentState === "down") && (
        <div className="corruption-display-wrapper mt-8 md:mt-12">
          <CorruptionCode mutationType={currentState as "falciforme" | "imperfeita" | "down"} />
        </div>
      )}

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
