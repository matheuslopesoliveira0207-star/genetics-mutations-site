import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function MutationProcess() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Passo 1: DNA Normal - Estrutura da Dupla Hélice",
      description:
        "O DNA é composto por duas cadeias complementares que se enroscam uma na outra formando uma dupla hélice. Cada nucleotídeo é composto por um açúcar (desoxirribose), um grupo fosfato e uma base nitrogenada (A, T, G, ou C). As bases pareiam especificamente: Adenina com Timina (2 ligações de hidrogênio) e Guanina com Citosina (3 ligações de hidrogênio). Esta estrutura é extremamente estável e precisa.",
      imageUrl:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663631778992/jZfSn9AmDiR52C36GaK7rM/step1-dna-normal-pt-US499e3Gjz3kcaADMfCrYg.webp",
      keyPoints: [
        "Dupla hélice com estrutura de parafuso",
        "Bases pareadas por ligações de hidrogênio",
        "Açúcar-fosfato forma o esqueleto externo",
        "Sequência específica codifica informações genéticas",
      ],
    },
    {
      title: "Passo 2: Mutação Pontual - Substituição de Nucleotídeo",
      description:
        "Uma mutação pontual ocorre quando um único nucleotídeo é substituído por outro. No caso da Anemia Falciforme, o nucleotídeo Adenina (A) é substituído por Timina (T) na posição 6 do gene da beta-globina. Isto muda o códon de GAG para GTG. Esta é uma mudança simples, mas com consequências devastadoras. A mutação pode ser causada por erro na replicação do DNA, radiação, ou exposição a agentes mutagênicos.",
      imageUrl:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663631778992/jZfSn9AmDiR52C36GaK7rM/step2-mutation-point-pt-ULtYToN7uCXs9EfTtqrpvC.webp",
      keyPoints: [
        "Substituição de um único nucleotídeo",
        "Mudança de GAG para GTG",
        "Pode ser causada por erro de replicação",
        "Afeta o códon correspondente no mRNA",
      ],
    },
    {
      title: "Passo 3: Transcrição - DNA para mRNA",
      description:
        "Durante a transcrição, a enzima RNA polimerase lê a sequência de DNA e sintetiza uma molécula de mRNA complementar. O mRNA é uma cópia temporária do gene que será usada para síntese de proteína. A mutação no DNA é copiada para o mRNA: o códon GAG (normal) torna-se GAG no mRNA, mas o códon GTG (mutado) torna-se GUG no mRNA (note que o DNA usa Timina (T) e o RNA usa Uracila (U)). Este mRNA mutado carrega a informação errada para a próxima etapa.",
      imageUrl:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663631778992/jZfSn9AmDiR52C36GaK7rM/step3-transcription-pt-4Z6YLD8FMESuM2cu2d78cW.webp",
      keyPoints: [
        "RNA polimerase lê o DNA template",
        "Sintetiza mRNA complementar",
        "Mutação é copiada para o mRNA",
        "Códon mutado: GUG (em vez de GAG)",
      ],
    },
    {
      title: "Passo 4: Tradução - mRNA para Proteína",
      description:
        "Durante a tradução, o ribossomo lê o mRNA em grupos de 3 nucleotídeos (códons). Cada códon é reconhecido por um tRNA específico que traz o amino ácido correspondente. No caso normal, o códon GAG é lido como Ácido Glutâmico (Glu), um amino ácido polar e carregado negativamente. No caso mutado, o códon GUG é lido como Valina (Val), um amino ácido apolar e hidrofóbico. Esta mudança de um único amino ácido em uma proteína de 146 amino ácidos tem consequências catastróficas.",
      imageUrl:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663631778992/jZfSn9AmDiR52C36GaK7rM/step4-translation-pt-dj6QUZTHL4dGV7AbjWYiSL.webp",
      keyPoints: [
        "Ribossomo lê mRNA em códons",
        "tRNA traz amino ácidos específicos",
        "Códon normal (GAG) → Glutamato (polar)",
        "Códon mutado (GUG) → Valina (apolar)",
      ],
    },
    {
      title: "Passo 5: Consequência - Mudança de Estrutura e Função",
      description:
        "A substituição de um único amino ácido altera dramaticamente a estrutura e função da proteína. O Glutamato é polar e carregado negativamente, permitindo interações eletrostáticas estáveis com o meio aquoso. A Valina é apolar e hidrofóbica, tendendo a se enterrar no interior da proteína. Na posição 6 da beta-globina, a Valina fica parcialmente exposta, criando um bolsão hidrofóbico anômalo. Este bolsão interage com bolsões hidrofóbicos de outras hemoglobinas vizinhas, causando agregação em cadeia, polimerização, deformação das células em forma de foice, e todos os sintomas clínicos da Anemia Falciforme.",
      imageUrl:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663631778992/jZfSn9AmDiR52C36GaK7rM/step5-protein-consequence-pt-STXqLDbH37cKG9U8K7nGXj.webp",
      keyPoints: [
        "Glutamato (polar) vs Valina (apolar)",
        "Valina cria bolsão hidrofóbico anômalo",
        "Causa agregação de hemoglobinas",
        "Deformação de células em forma de foice",
        "Consequências clínicas severas",
      ],
    },
  ];

  const currentStepData = steps[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <Link href="/">
            <Button variant="outline" className="mb-4">
              ← Voltar para Mutações
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            🧬 Processo de Mutação Passo a Passo
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Entenda visualmente como uma mutação genética ocorre, desde a mudança no DNA até as consequências na proteína final. Este guia ilustrado segue o exemplo da Anemia Falciforme.
          </p>
        </div>

        {/* Indicador de Progresso */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {steps.map((_, idx) => (
              <div key={idx} className="flex items-center flex-1">
                <button
                  onClick={() => setCurrentStep(idx)}
                  className={`w-12 h-12 rounded-full font-bold text-sm transition-all ${
                    idx === currentStep
                      ? "bg-blue-600 text-white scale-110 shadow-lg"
                      : idx < currentStep
                        ? "bg-green-500 text-white"
                        : "bg-gray-300 text-gray-700"
                  }`}
                >
                  {idx + 1}
                </button>
                {idx < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      idx < currentStep ? "bg-green-500" : "bg-gray-300"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Conteúdo Principal */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          {/* Imagem */}
          <div className="w-full h-96 md:h-[500px] overflow-hidden bg-gray-100">
            <img
              src={currentStepData.imageUrl}
              alt={currentStepData.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Texto */}
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">
              {currentStepData.title}
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {currentStepData.description}
            </p>

            {/* Pontos-Chave */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 text-blue-900">
                📌 Pontos-Chave:
              </h3>
              <ul className="space-y-3">
                {currentStepData.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">✓</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navegação */}
            <div className="flex justify-between items-center">
              <Button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                variant="outline"
                className="px-6"
              >
                ← Anterior
              </Button>

              <span className="text-gray-600 font-semibold">
                Passo {currentStep + 1} de {steps.length}
              </span>

              <Button
                onClick={() =>
                  setCurrentStep(Math.min(steps.length - 1, currentStep + 1))
                }
                disabled={currentStep === steps.length - 1}
                className="px-6"
              >
                Próximo →
              </Button>
            </div>
          </div>
        </div>

        {/* Resumo Educativo */}
        <div className="mt-12 bg-indigo-50 rounded-lg p-8 border-l-4 border-indigo-600">
          <h3 className="text-2xl font-bold mb-4 text-indigo-900">
            💡 Resumo do Processo
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Uma mutação genética é uma mudança permanente na sequência de DNA. Embora uma única mudança de nucleotídeo possa parecer insignificante, ela pode ter consequências dramáticas se:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>
              <strong>1. Ocorrer em um gene crítico:</strong> Genes que codificam proteínas essenciais
            </li>
            <li>
              <strong>2. Mudar o amino ácido:</strong> Nem todas as mudanças de nucleotídeo mudam o amino ácido (código degenerado)
            </li>
            <li>
              <strong>3. Afetar a estrutura ou função:</strong> Mudanças que alteram propriedades críticas da proteína
            </li>
            <li>
              <strong>4. Ser homozigótica:</strong> Herdar duas cópias mutadas (uma de cada pai)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
