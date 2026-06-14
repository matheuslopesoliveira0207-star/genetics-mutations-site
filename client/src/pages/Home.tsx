import { useState, useEffect } from "react";
import { mutations, mutationOrder } from "@/data/mutations";
import { Button } from "@/components/ui/button";
import { GlossaryTooltip } from "@/components/GlossaryTooltip";
import { CorruptionCode } from "@/components/CorruptionCode";
import { TerminalTypewriter } from "@/components/TerminalTypewriter";
import { CitationLink } from "@/components/CitationLink";
import { Link } from "wouter";

export default function Home() {
  const [currentState, setCurrentState] = useState<string>("nativo");
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [comparisonMode, setComparisonMode] = useState(false);

  const mutation = mutations[currentState];
  const displayedState = comparisonMode ? "nativo" : currentState;
  const displayedMutation = mutations[displayedState];
  const isCorrect = quizAnswer === displayedMutation.quizOptions.findIndex((opt) => opt.correct);

  const handleStateChange = (state: string) => {
    setCurrentState(state);
    setQuizAnswer(null);
    setShowFeedback(false);
    setComparisonMode(false);
  };

  const handleChaosButton = () => {
    const randomState = mutationOrder[Math.floor(Math.random() * mutationOrder.length)];
    handleStateChange(randomState);
  };

  const handleQuizAnswer = (index: number) => {
    setQuizAnswer(index);
    setShowFeedback(true);
  };

  return (
    <div className={`min-h-screen transition-all duration-700`} style={{ backgroundColor: displayedState === 'nativo' ? '#ffffff' : displayedState === 'falciforme' ? '#1a0a0a' : displayedState === 'imperfeita' ? '#f5f5f0' : displayedState === 'down' ? '#2a1a1a' : '#151a2e', color: displayedState === 'nativo' ? '#0a0a1a' : '#ffffff' }}>
      <style>{`body { --estado-atual: ${displayedState}; }`}</style>
      <div className={`container mx-auto px-4 py-8 md:py-12 estado-${displayedState}`}>
        {/* Cabeçalho */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex justify-center gap-2 mb-4 flex-wrap">
            <Link href="/processo">
              <Button variant="outline" className="text-xs md:text-sm">
                🧬 Processo Passo a Passo
              </Button>
            </Link>
            <Link href="/protecao">
              <Button variant="outline" className="text-xs md:text-sm">
                🛡️ Proteção contra Mutações
              </Button>
            </Link>
            <Link href="/referencias">
              <Button variant="outline" className="text-xs md:text-sm">
                📚 Referências Bibliográficas
              </Button>
            </Link>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">
            🧬 Mutações Genéticas
          </h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Explorando como a estrutura dita a função através de mutações bioquímicas
          </p>
        </div>

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
              <div className="comparison-explanation text-xs leading-relaxed opacity-80 mb-4 p-2 rounded border-l-2 border-current">
                <p style={{color: '#ffffff'}}>
                  {mutations[currentState].comparisonExplanation}
                </p>
              </div>
            )}
          </div>
        )}

        <p className="text-xs font-semibold mb-2 opacity-70 hidden md:block">Seletores Manuais:</p>

        {/* Layout Principal: 3 colunas em desktop, 1 coluna em mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          {/* Seção 1: Dogma Central */}
          <div className="section-card">
            <h2 className="text-2xl font-bold mb-4">{displayedMutation.section1Title}</h2>
            <p className="text-sm leading-relaxed mb-6">
              {displayedMutation.section1Content}
              {displayedState === "nativo" && <CitationLink referenceId="nativo-2" />}
              {displayedState === "falciforme" && <CitationLink referenceId="falciforme-1" />}
              {displayedState === "imperfeita" && <CitationLink referenceId="imperfeita-1" />}
              {displayedState === "down" && <CitationLink referenceId="down-1" />}
            </p>

            {/* Imagem Científica */}
            <figure className="mb-4">
              <img
                src={displayedMutation.imageUrl}
                alt={displayedMutation.name}
                className="w-full rounded-lg shadow-lg"
              />
              <figcaption className="text-xs text-center mt-2 text-muted-foreground italic">
                {displayedMutation.name}
              </figcaption>
            </figure>

            {/* Dados Genéticos */}
            <div className="bg-muted/20 p-2 rounded text-xs space-y-1">
              <div className="mb-2">
                <span className="font-bold">DNA:</span> {displayedState === "nativo" ? "GAG" : displayedState === "falciforme" ? "GTG" : displayedState === "imperfeita" ? "GG(X)Y→CG(X)Y" : "CGC→TGC"}
              </div>
              <div className="mb-2">
                <span className="font-bold">RNA:</span>{" "}
                {displayedState === "nativo" ? "GAG" : displayedState === "falciforme" ? "GUG" : displayedState === "imperfeita" ? "GG(X)Y→CG(X)Y" : "CGC→UGC"}
              </div>
              <div>
                <span className="font-bold">Aminoácido:</span>{" "}
                {displayedState === "nativo"
                  ? "Ácido Glutâmico (Glu)"
                  : displayedState === "falciforme"
                    ? "Valina (Val)"
                    : displayedState === "imperfeita"
                      ? "Volumoso (Cys/Trp)"
                      : "Cisteína (Cys)"}
              </div>
            </div>
          </div>

            {/* Seção 2: Impacto Bioquímico */}
          <div className="section-card">
            <h2 className="text-2xl font-bold mb-4">{displayedMutation.section2Title}</h2>
            {displayedState === "nativo" || displayedState === "milano" ? (
              <div className="text-sm leading-relaxed mb-6 space-y-3">
                {displayedState === "nativo" ? (
                  <>
                    <p>Interações fracas (<GlossaryTooltip termKey="pontes-hidrogenio">pontes de hidrogênio</GlossaryTooltip> e interações eletrostáticas) perfeitamente distribuídas. Alta <GlossaryTooltip termKey="solubilidade">solubilidade</GlossaryTooltip> e <GlossaryTooltip termKey="afinidade-oxigenio">afinidade ideal pelo oxígênio</GlossaryTooltip>.<CitationLink referenceId="nativo-1" /></p>
                    <p className="text-xs bg-muted/30 p-2 rounded italic">A cooperatividade alostérica permite que a hemoglobina nativa se adapte dinamicamente às mudanças de pO₂, transportando oxigênio de forma eficiente dos pulmões para os tecidos. Este é um exemplo magistral de como a estrutura quaternária permite função biológica sofisticada.</p>
                  </>
                ) : (
                  <>
                    <p>A introdução da Cisteína introduz um grupo tiol (-SH), permitindo a formação de ligações covalentes fortes (<GlossaryTooltip termKey="ponte-dissulfeto">pontes de dissulfeto</GlossaryTooltip>) entre as proteínas mutadas. Isso gera dímeros ultra-estáveis e altamente eficientes na remoção de placas de colesterol das artérias.<CitationLink referenceId="milano-1" /></p>
                    <p className="text-xs bg-muted/30 p-2 rounded italic">Estudos clínicos demonstram que uma única infusão de ApoA-1 Milano reduz a espessura de placas ateroscleróticas em 4% em apenas 6 semanas. A população de Limone sul Garda, apesar de níveis elevados de colesterol, apresenta incidência praticamente ZERO de doença cardiovascular.</p>
                  </>
                )}
              </div>
            ) : (
              <div className="terminal-text-wrapper mb-6 space-y-3">
                <TerminalTypewriter
                  text={
                    displayedState === "falciforme"
                      ? "A Valina mutada exposta tenta fugir do meio aquoso, encaixando-se em um bolsão hidrofóbico de outra hemoglobina vizinha. Isso gera polimerização em massa, criando fibras rígidas que deformam a hemácia em forma de foice e colapsam a solubilidade."
                      : displayedState === "imperfeita"
                        ? "O impedimento estérico causado pela substituição de Glicina por aminoácidos volumosos quebra a hélice tríplice do colágeno. Sem a estrutura de suporte, ossos ficam frágeis e quebradiços."
                        : "Quebra do equilíbrio redox: O cromossomo 21 abriga o gene da enzima SOD1. Com 50% mais enzima SOD1 ativa, ocorre uma superprodução de peróxido de hidrogênio. Isso sobrecarrega as enzimas Catalase e Glutationa Peroxidase, gerando estresse oxidativo severo que danifica lipídios de membrana e desnatura proteínas celulares."
                  }
                  speed={25}
                />
                <p className="text-xs bg-muted/30 p-2 rounded italic">
                  {displayedState === "falciforme"
                    ? "A solubilidade cai de ~34 g/dL (nativa) para ~8 g/dL (falciforme) - uma redução de 75%. Em ambientes com pO₂ < 60 mmHg, a polimerização é acelerada, causando obstrução vascular, hemólise e dor severa."
                    : displayedState === "imperfeita"
                      ? "O colágeno defeituoso afeta não apenas ossos, mas também pele, tendões, ligamentos e até a esclera dos olhos (que fica azulada). A fragilidade é sistêmica."
                      : "A reação de Fenton (H₂O₂ + Fe²⁺ → OH·) gera radicais hidroxila extremamente reativos que atacam lipídios de membrana, proteínas e DNA, causando morte celular massiva e inflamação crônica."
                  }
                </p>
                <div className="mt-2">
                  {displayedState === "falciforme" && <CitationLink referenceId="falciforme-2" />}
                  {displayedState === "imperfeita" && <CitationLink referenceId="imperfeita-2" />}
                  {displayedState === "down" && <CitationLink referenceId="down-2" />}
                </div>
              </div>
            )}

            {/* Gráfico Cinético Simplificado */}
            <div className="bg-muted/20 p-3 md:p-4 rounded-md">
              <div className="text-xs font-bold mb-3">
                {displayedState === "nativo"
                  ? "Solubilidade / Eficiência"
                  : displayedState === "falciforme"
                    ? "Nível de Agregação"
                    : displayedState === "imperfeita"
                      ? "Integridade Estrutural"
                      : displayedState === "down"
                        ? "Estresse Oxidativo (H₂O₂)"
                        : "Eficiência de Remoção de Colesterol"}
              </div>
              <div className="flex gap-2 items-end justify-center h-24 md:h-32">
                {[
                  displayedState === "nativo" ? 100 : displayedState === "falciforme" ? 20 : displayedState === "imperfeita" ? 30 : displayedState === "down" ? 150 : 95,
                  displayedState === "nativo" ? 100 : displayedState === "falciforme" ? 25 : displayedState === "imperfeita" ? 25 : displayedState === "down" ? 160 : 90,
                  displayedState === "nativo" ? 100 : displayedState === "falciforme" ? 15 : displayedState === "imperfeita" ? 20 : displayedState === "down" ? 170 : 92,
                  displayedState === "nativo" ? 100 : displayedState === "falciforme" ? 10 : displayedState === "imperfeita" ? 15 : displayedState === "down" ? 180 : 88,
                  displayedState === "nativo" ? 100 : displayedState === "falciforme" ? 5 : displayedState === "imperfeita" ? 10 : displayedState === "down" ? 190 : 85,
                ].map((height, idx) => (
                  <div
                    key={idx}
                    className="chart-bar flex-1 rounded-t transition-all duration-700"
                    style={{
                      height: `${(height / 200) * 100}%`,
                    }}
                  ></div>
                ))}
              </div>
              <div className="text-xs text-muted-foreground mt-3 p-2 rounded bg-muted/10">
                <p className="font-semibold mb-1">
                  ✓ {displayedState === "nativo" ? "Estado Nativo" : displayedState === "falciforme" ? "Anemia Falciforme" : displayedState === "imperfeita" ? "Osteogênese Imperfeita" : displayedState === "down" ? "Síndrome de Down" : "ApoA-1 Milano"}
                </p>
                <p>
                  {displayedState === "nativo"
                    ? "Proteína totalmente solúvel e funcional. Todas as interações estão em perfeito equilíbrio termodinâmico."
                    : displayedState === "falciforme"
                      ? "Agregação massiva reduz solubilidade em 75%. Fibras rígidas deformam células."
                      : displayedState === "imperfeita"
                        ? "Hélice tríplice colapsada. Colágeno frágil não suporta peso corporal."
                        : displayedState === "down"
                          ? "Acúmulo de H₂O₂ causa dano oxidativo severo em lipídios, proteínas e DNA."
                          : "Dímero ultra-estável com eficiência cardiovascular aumentada."}
                </p>
              </div>
            </div>
          </div>

          {/* Seção 3: Mini-Quiz Interativo */}
          <div className="section-card">
            <h2 className="text-2xl font-bold mb-4">Diagnóstico Interativo</h2>
            <p className="text-sm font-semibold mb-4">{displayedMutation.quizQuestion}</p>

            <div className="space-y-2">
              {displayedMutation.quizOptions.map((option, index) => (
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
                      className={`w-4 h-4 rounded-full border-2 ${
                        quizAnswer === index
                          ? isCorrect
                            ? "border-green-500 bg-green-500"
                            : "border-red-500 bg-red-500"
                          : "border-border"
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
                  displayedState === "nativo"
                    ? "O estado nativo é determinado pela minimização da energia livre de Gibbs."
                    : displayedState === "falciforme"
                      ? "O efeito hidrofóbico é a força motriz principal para agregação proteica."
                      : displayedState === "imperfeita"
                        ? "O impedimento estérico destrói a geometria necessária para estabilidade estrutural."
                        : displayedState === "down"
                          ? "O equilíbrio redox é mais importante que a quantidade absoluta de antioxidantes."
                          : "As ligações covalentes são muito mais estáveis que interações fracas."
                }
                {displayedState === "nativo" && <CitationLink referenceId="nativo-3" />}
                {displayedState === "falciforme" && <CitationLink referenceId="falciforme-3" />}
                {displayedState === "imperfeita" && <CitationLink referenceId="imperfeita-3" />}
                {displayedState === "down" && <CitationLink referenceId="down-3" />}
                {displayedState === "milano" && <CitationLink referenceId="milano-2" />}
              </p>
            </div>
          </div>
        </div>

        {/* Painel de Controle Molecular - Desktop */}
        <div className="hidden md:block fixed right-4 top-24 bg-card border-2 border-border rounded-lg p-4 shadow-lg max-w-xs">
          <h3 className="font-bold text-sm mb-3">Painel de Controle</h3>
          <Button
            onClick={handleChaosButton}
            className="chaos-button mb-4 w-full text-xs md:text-sm"
            variant="default"
          >
            ⚡ O Botão do Caos
          </Button>

          <p className="text-xs font-semibold mb-2 opacity-70" style={{color: '#000000'}}>Seletores Manuais:</p>
          <div className="space-y-2">
            {mutationOrder.map((state) => (
              <Button
                key={state}
                onClick={() => handleStateChange(state)}
                variant={currentState === state ? "default" : "outline"}
                className="w-full text-xs" style={{color: '#000000'}}
              >
                {mutations[state].label}
              </Button>
            ))}
          </div>
        </div>

        {/* Painel de Controle Molecular - Mobile */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t-2 border-border rounded-t-lg p-4 shadow-lg max-h-[50vh] overflow-y-auto control-panel">
          <h3 className="font-bold text-sm mb-3">Painel de Controle</h3>
          <Button
            onClick={handleChaosButton}
            className="chaos-button mb-4 w-full text-xs"
            variant="default"
          >
            ⚡ O Botão do Caos
          </Button>

          <p className="text-xs font-semibold mb-2 opacity-70" style={{color: '#000000'}}>Seletores Manuais:</p>
          <div className="grid grid-cols-2 gap-2">
            {mutationOrder.map((state) => (
              <Button
                key={state}
                onClick={() => handleStateChange(state)}
                variant={currentState === state ? "default" : "outline"}
                className="w-full text-xs"
                style={{color: '#000000'}}
              >
                {mutations[state].label}
              </Button>
            ))}
          </div>
        </div>

        {/* Exibição de Corrupção para Mutações Ruins - Destacada */}
        {(currentState === "falciforme" || currentState === "imperfeita" || currentState === "down") && (
          <div className="corruption-display-wrapper mt-8 md:mt-12 mb-8 md:mb-12 px-4 md:px-0 border-l-4 border-accent pl-4">
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-bold mb-2" style={{color: '#990000'}}>⚠️ Diagnóstico de Erro Molecular</h3>
              <p className="text-xs md:text-sm opacity-75 mb-4">
                {currentState === "falciforme"
                  ? "Códigos de erro detectados na estrutura da hemoglobina. O sistema de transporte de oxigênio está comprometido."
                  : currentState === "imperfeita"
                    ? "Falha crítica na matriz estrutural. A integridade do colágeno foi severamente comprometida."
                    : "Alerta de estresse oxidativo crítico. O equilíbrio redox foi quebrado, causando dano celular em cascata."}
              </p>
            </div>
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
    </div>
  );
}
