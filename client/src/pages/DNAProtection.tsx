import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DNAProtection() {
  const [activeTab, setActiveTab] = useState("prevention");

  const protectionMechanisms = [
    {
      id: "proofreading",
      title: "🔍 Revisão de Proofreading (DNA Polymerase)",
      description:
        "Durante a replicação do DNA, a enzima DNA polimerase não apenas adiciona nucleotídeos, mas também verifica se cada nucleotídeo foi pareado corretamente. Se detectar um erro (uma base incorreta), a polimerase para, remove o nucleotídeo errado (atividade 3' → 5' exonuclease) e adiciona o nucleotídeo correto. Esta é a primeira linha de defesa.",
      errorRate: "1 erro a cada 10⁷ nucleotídeos",
      details: [
        "A DNA polimerase verifica o pareamento de bases em tempo real",
        "Se uma base incorreta é incorporada, a enzima recua",
        "A atividade exonuclease remove a base errada",
        "O nucleotídeo correto é reincorporado",
        "Reduz taxa de erro de ~10⁻⁵ para ~10⁻⁷",
      ],
    },
    {
      id: "mismatch",
      title: "🛠️ Sistema de Reparo de Mismatch (MMR)",
      description:
        "Mesmo após o proofreading, alguns erros escapam. O sistema de reparo de mismatch (MMR) varre o DNA recém-replicado procurando por bases mal pareadas. Proteínas como MutS, MutL e MutH reconhecem e corrigem esses erros. Este sistema é particularmente importante em bactérias e leveduras, e também existe em humanos.",
      errorRate: "1 erro a cada 10⁹ a 10¹⁰ nucleotídeos",
      details: [
        "Proteínas MMR (MutS, MutL, MutH) patrulham o DNA",
        "Detectam bases mal pareadas (mismatches)",
        "Identificam a fita recém-sintetizada (contém GATC não metilado)",
        "Removem segmento contendo o erro",
        "DNA polimerase ressintetiza a sequência correta",
        "Ligase sela a ruptura",
      ],
    },
    {
      id: "excision",
      title: "🔧 Reparo por Excisão de Nucleotídeo (NER)",
      description:
        "Este sistema remove e substitui nucleotídeos danificados causados por radiação UV, agentes químicos ou outras lesões. Proteínas como XPA, XPC e XPD reconhecem distorções na dupla hélice, removem um segmento contendo a lesão e ressintetizam a sequência correta usando o DNA intacto como template.",
      errorRate: "Corrige ~99% das lesões por UV",
      details: [
        "Detecta distorções na estrutura do DNA (bulges, crosslinks)",
        "Proteínas XP reconhecem e se ligam à lesão",
        "Endonucleases cortam o DNA em ambos os lados da lesão",
        "Segmento danificado é removido (~30 nucleotídeos)",
        "DNA polimerase preenche o vazio",
        "Ligase sela a ruptura",
      ],
    },
    {
      id: "base",
      title: "🧬 Reparo por Excisão de Base (BER)",
      description:
        "Lesões químicas em bases individuais (oxidação, desaminação) são corrigidas por este sistema. Enzimas como DNA glicosilases reconhecem bases danificadas, removem apenas a base (deixando o açúcar-fosfato intacto), criando um sítio apurínico (AP). Endonucleases AP cortam a espinha dorsal, e a sequência é ressintetizada.",
      errorRate: "Corrige ~10.000 lesões por célula por dia",
      details: [
        "DNA glicosilases identificam bases danificadas",
        "Removem apenas a base (criando sítio AP)",
        "Endonuclease AP corta a espinha dorsal",
        "Exonuclease remove resíduos danificados",
        "DNA polimerase preenche o vazio",
        "Ligase sela a ruptura",
      ],
    },
    {
      id: "double",
      title: "⚡ Reparo de Quebras de Dupla Fita (DSB)",
      description:
        "Quebras de dupla fita (DSB) são as lesões mais perigosas. O corpo usa dois mecanismos principais: recombinação homóloga (HR) e junção de extremidades não homólogas (NHEJ). HR usa uma sequência homóloga como template para reparo preciso. NHEJ simplesmente une as extremidades, mas pode causar pequenas deleções ou inserções.",
      errorRate: "~1-2 DSB por célula por dia",
      details: [
        "Proteínas sensor (ATM, ATR) detectam a quebra",
        "Recombinação Homóloga (HR): usa DNA homólogo como template",
        "NHEJ: une as extremidades diretamente",
        "HR é mais preciso mas requer DNA homólogo",
        "NHEJ é rápido mas pode introduzir pequenos erros",
        "Escolha do mecanismo depende da fase do ciclo celular",
      ],
    },
    {
      id: "apoptosis",
      title: "💀 Apoptose (Morte Celular Programada)",
      description:
        "Se o dano ao DNA for muito extenso e não puder ser reparado, a célula ativa a apoptose (morte celular programada). Proteínas como p53 ('guardião do genoma') detectam dano irreparável e acionam cascatas de sinalização que levam à morte da célula. Isso previne que células com mutações perigosas se reproduzam e causem câncer.",
      errorRate: "Previne ~99% das mutações que causariam câncer",
      details: [
        "p53 detecta dano extenso ao DNA",
        "Ativa genes pró-apoptóticos (BAX, PUMA, NOXA)",
        "Mitocôndrias liberam citocromo c",
        "Caspases são ativadas",
        "Núcleo é fragmentado",
        "Célula é eliminada antes de se reproduzir",
      ],
    },
  ];

  const preventionStrategies = [
    {
      title: "🌞 Proteção Solar",
      description:
        "Radiação UV causa dímeros de timina (lesões no DNA). Use protetor solar SPF 30+, roupas protetoras e evite sol entre 10h-16h.",
      impact: "Reduz risco de melanoma em ~50%",
    },
    {
      title: "🚭 Evitar Fumo",
      description:
        "Fumaça de cigarro contém ~70 carcinógenos conhecidos que danificam DNA. Cada cigarro causa múltiplas lesões em cada célula pulmonar.",
      impact: "Reduz risco de câncer de pulmão em ~90% após 10 anos",
    },
    {
      title: "🍎 Dieta Antioxidante",
      description:
        "Alimentos ricos em vitaminas C, E, selênio e polifenóis neutralizam radicais livres que danificam DNA. Frutas, vegetais, nozes e chá verde são excelentes fontes.",
      impact: "Reduz dano oxidativo ao DNA em ~30-40%",
    },
    {
      title: "🏃 Exercício Regular",
      description:
        "Atividade física aumenta a expressão de genes de reparo de DNA e melhora a função imunológica. 30 minutos de exercício moderado 5x por semana é ideal.",
      impact: "Reduz risco de câncer em ~20-30%",
    },
    {
      title: "🛡️ Evitar Exposição Química",
      description:
        "Pesticidas, solventes industriais e certos medicamentos podem danificar DNA. Use equipamento de proteção adequado e siga instruções de segurança.",
      impact: "Reduz exposição a mutágenos em ~80%",
    },
    {
      title: "😴 Sono Adequado",
      description:
        "Durante o sono, o corpo repara danos ao DNA e regenera células. Falta de sono prejudica mecanismos de reparo. Durma 7-9 horas por noite.",
      impact: "Melhora eficiência de reparo de DNA em ~25%",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <Link href="/">
            <Button variant="outline" className="mb-4">
              ← Voltar para Mutações
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            🛡️ Mecanismos de Proteção contra Mutações
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Conheça os sistemas sofisticados que seu corpo usa para proteger o DNA contra mutações e danos. Estes mecanismos evitam que bilhões de erros ocorram a cada dia.
          </p>
        </div>

        {/* Abas */}
        <div className="flex gap-2 mb-8 justify-center flex-wrap">
          <Button
            onClick={() => setActiveTab("prevention")}
            variant={activeTab === "prevention" ? "default" : "outline"}
            className="text-sm md:text-base"
          >
            🔬 Mecanismos de Reparo
          </Button>
          <Button
            onClick={() => setActiveTab("strategies")}
            variant={activeTab === "strategies" ? "default" : "outline"}
            className="text-sm md:text-base"
          >
            💪 Estratégias de Prevenção
          </Button>
        </div>

        {/* Conteúdo - Mecanismos de Reparo */}
        {activeTab === "prevention" && (
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-3">
                📊 Estatísticas de Proteção
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-blue-800">
                <div>
                  <p className="font-bold text-lg">3 bilhões</p>
                  <p className="text-sm">Nucleotídeos replicados por célula por dia</p>
                </div>
                <div>
                  <p className="font-bold text-lg">~1 erro</p>
                  <p className="text-sm">A cada 10 bilhões nucleotídeos (após reparo)</p>
                </div>
                <div>
                  <p className="font-bold text-lg">99.99%</p>
                  <p className="text-sm">Taxa de precisão dos mecanismos de reparo</p>
                </div>
              </div>
            </div>

            {protectionMechanisms.map((mechanism) => (
              <Card key={mechanism.id} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-green-100 to-emerald-100">
                  <CardTitle className="text-xl text-green-900">
                    {mechanism.title}
                  </CardTitle>
                  <CardDescription className="text-green-700 font-semibold">
                    Taxa de erro: {mechanism.errorRate}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {mechanism.description}
                  </p>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-bold text-green-900 mb-3">Como funciona:</h4>
                    <ul className="space-y-2">
                      {mechanism.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-600 font-bold mr-3">→</span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Conteúdo - Estratégias de Prevenção */}
        {activeTab === "strategies" && (
          <div className="space-y-6">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-amber-900 mb-3">
                🎯 Dicas Práticas para Proteger seu DNA
              </h2>
              <p className="text-amber-800">
                Embora não possamos eliminar completamente o risco de mutações, podemos reduzir significativamente a exposição a agentes mutagênicos através de escolhas de estilo de vida.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {preventionStrategies.map((strategy, idx) => (
                <Card key={idx} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-amber-100 to-orange-100">
                    <CardTitle className="text-lg text-amber-900">
                      {strategy.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-gray-700 mb-4">{strategy.description}</p>
                    <div className="bg-amber-50 rounded-lg p-3 border-l-4 border-amber-500">
                      <p className="text-sm font-semibold text-amber-900">
                        💡 Impacto: {strategy.impact}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Resumo Final */}
        <div className="mt-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-8 border-l-4 border-purple-600">
          <h3 className="text-2xl font-bold mb-4 text-purple-900">
            ✨ Conclusão: Um Sistema Notável
          </h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            O corpo humano possui um sistema de proteção contra mutações extraordinariamente sofisticado. Múltiplas camadas de defesa trabalham juntas para manter a integridade do DNA:
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>
              <strong>1. Prevenção:</strong> Proofreading durante replicação reduz erros iniciais
            </li>
            <li>
              <strong>2. Detecção:</strong> Sistemas de reparo patrulham o DNA constantemente
            </li>
            <li>
              <strong>3. Correção:</strong> Múltiplos mecanismos corrigem diferentes tipos de dano
            </li>
            <li>
              <strong>4. Eliminação:</strong> Apoptose remove células com dano irreparável
            </li>
          </ul>
          <p className="text-gray-800 leading-relaxed mt-4">
            Mesmo com toda essa proteção, ocasionalmente uma mutação escapa. Quando isso acontece em genes críticos, pode levar a doenças como as que exploramos na página anterior. Compreender esses mecanismos nos ajuda a apreciar a complexidade da vida e a importância de proteger nossa saúde.
          </p>
        </div>
      </div>
    </div>
  );
}
