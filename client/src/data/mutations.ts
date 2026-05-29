export interface MutationState {
  id: string;
  name: string;
  label: string;
  section1Title: string;
  section1Content: string;
  section2Title: string;
  section2Content: string;
  imageUrl: string;
  quizQuestion: string;
  quizOptions: Array<{
    text: string;
    correct: boolean;
  }>;
  comparisonExplanation?: string;
}

export const mutations: Record<string, MutationState> = {
  nativo: {
    id: "nativo",
    name: "Estado Nativo",
    label: "Homeostase",
    section1Title: "Sequência Normal - Dogma Central",
    section1Content:
      "Sequência normal: GAG codificando Ácido Glutâmico na posição 6 da cadeia beta da hemoglobina. Proteína enovelada corretamente em seu estado nativo.",
    section2Title: "Impacto Bioquímico",
    section2Content:
      "Interações fracas (pontes de hidrogênio e interações eletrostáticas) perfeitamente distribuídas. Alta solubilidade e afinidade ideal pelo oxigênio.",
    imageUrl:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663631778992/jZfSn9AmDiR52C36GaK7rM/estado-nativo-pt-jEhvAiYdo9ssrZaas8uHQb.webp",
    quizQuestion:
      "Em condições normais de homeostase celular, qual fator garante que a proteína atinja seu estado nativo estável?",
    quizOptions: [
      {
        text: "O delta G positivo.",
        correct: false,
      },
      {
        text: "O dobramento correto guiado pelas interações fracas e busca pelo menor estado de energia livre.",
        correct: true,
      },
    ],
  },
  falciforme: {
    id: "falciforme",
    name: "Anemia Falciforme",
    label: "O Colapso por Agregação",
    section1Title: "Mutação de Ponto - Glu6Val",
    section1Content:
      "Mutação de Ponto: GAG -> GTG. Substituição do Glutamato (polar, carregado negativamente) por Valina (apolar, hidrofóbica) na posição 6 da beta-globina (Glu6Val).",
    section2Title: "Efeito Hidrofóbico",
    section2Content:
      "A Valina mutada exposta tenta fugir do meio aquoso, encaixando-se em um bolsão hidrofóbico de outra hemoglobina vizinha. Isso gera polimerização em massa, criando fibras rígidas que deformam a hemácia em forma de foice e colapsam a solubilidade.",
    imageUrl:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663631778992/jZfSn9AmDiR52C36GaK7rM/estado-falciforme-pt-SBbvyvzRVY2XZQtcesvgBv.webp",
    quizQuestion:
      "Bioquimicamente, qual força termodinâmica impulsiona a agregação das hemoglobinas na Anemia Falciforme?",
    quizOptions: [
      {
        text: "Ligações covalentes de dissulfeto.",
        correct: false,
      },
      {
        text: "O efeito hidrofóbico gerado pela cadeia lateral da Valina.",
        correct: true,
      },
    ],
    comparisonExplanation: "Mudança: Glutamato (polar, -) → Valina (apolar). Consequência: Agregação massiva, perda de solubilidade, deformação celular em foice.",
  },
  imperfeita: {
    id: "imperfeita",
    name: "Osteogênese Imperfeita",
    label: "A Fratura do Grid",
    section1Title: "Mutação Estrutural - Padrão Gly-X-Y",
    section1Content:
      "Mutação Estrutural: Substituição da Glicina (Gly) por um aminoácido volumoso com cadeia lateral complexa (como Cisteína ou Triptofano) no padrão de repetição Gly-X-Y do colágeno.",
    section2Title: "Impedimento Estérico",
    section2Content:
      "A Glicina é o menor aminoácido existente (sua cadeia lateral é apenas um Hidrogênio), permitindo o aperto da hélice tríplice do colágeno. O novo aminoácido volumoso não cabe no interior da hélice, impedindo o enovelamento e destruindo as pontes de hidrogênio estruturais.",
    imageUrl:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663631778992/jZfSn9AmDiR52C36GaK7rM/estado-imperfeita-pt-NYXUeMvnmt4uZyFXoVqTHt.webp",
    quizQuestion:
      "Por que a substituição da Glicina por outro aminoácido destrói a hélice tríplice do colágeno?",
    quizOptions: [
      {
        text: "Devido ao impedimento estérico e à incapacidade de formar as pontes de hidrogênio necessárias para estabilizar a hélice secundária.",
        correct: true,
      },
      {
        text: "Porque altera o pH do meio extracelular.",
        correct: false,
      },
    ],
  },
  milano: {
    id: "milano",
    name: "ApoA-1 Milano",
    label: "A Otimização Termodinâmica",
    section1Title: "Mutação Adaptativa - Arg173Cys",
    section1Content:
      "Mutação Adaptativa: Substituição de uma Arginina por uma Cisteína na posição 173 (Arg173Cys) na proteína ApoA-1 do HDL.",
    section2Title: "Pontes de Dissulfeto Fortes",
    section2Content:
      "A introdução da Cisteína introduz um grupo tiol (-SH), permitindo a formação de ligações covalentes fortes (pontes de dissulfeto) entre as proteínas mutadas. Isso gera dímeros ultra-estáveis e altamente eficientes na remoção de placas de colesterol das artérias.",
    imageUrl:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663631778992/jZfSn9AmDiR52C36GaK7rM/estado-milano-pt-TgrrectLWbjuEbkYuHKwVT.webp",
    quizQuestion:
      "Qual modificação química estabiliza a variante ApoA-1 Milano na estrutura quaternária?",
    quizOptions: [
      {
        text: "Interações iônicas fracas.",
        correct: false,
      },
      {
        text: "Formação de pontes de dissulfeto (ligações covalentes) entre os resíduos de Cisteína.",
        correct: true,
      },
    ],
  },
  down: {
    id: "down",
    name: "Síndrome de Down",
    label: "Sobrecarga Enzimática",
    section1Title: "Alteração Cromossômica - Trissomia do 21",
    section1Content:
      "Alteração Cromossômica: Trissomia do Cromossomo 21. Em vez de uma mutação pontual em um único gene, ocorre um desequilíbrio de DOSAGEM GÊNICA massivo. A presença de uma terceira cópia do cromossomo 21 causa superexpressão de ~300 genes simultaneamente. O cromossomo 21 abriga o gene da SOD1 (Superóxido Dismutase 1), uma enzima antioxidante crítica. Com 50% mais cópias do gene, a célula produz 50% mais SOD1. Isso quebra o equilíbrio redox celular, gerando uma cascata de estresse oxidativo que danifica DNA, proteínas e lipídios de membrana.",
    section2Title: "A Cascata de Dano Oxidativo - Quebra da Matriz",
    section2Content:
      "SOD1 catalisa: O₂·⁻ + H⁺ + e⁻ → H₂O₂. Com 50% mais SOD1, há SUPERPRODUÇÃO de H₂O₂. As enzimas Catalase (CAT) e Glutationa Peroxidase (GPx) não conseguem neutralizar H₂O₂ rápido o suficiente. O H₂O₂ acumula e reage com Fe²⁺ (reação de Fenton), gerando radicais hidroxila (OH·) extremamente reativos. Esses radicais atacam: (1) Lipídios de membrana → peroxidação lipídica; (2) Proteínas → oxidação de aminoácidos; (3) DNA → quebras de fita dupla. Resultado: morte celular, inflamação crônica e disfunção neural.",
    imageUrl:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663631778992/jZfSn9AmDiR52C36GaK7rM/estado-down-pt-MPVoj6bY9bWbhR6LDPA5zE.webp",
    quizQuestion:
      "Na Síndrome de Down, qual é a sequência de eventos que leva ao dano celular severo?",
    quizOptions: [
      {
        text: "Trissomia 21 → +50% SOD1 → Superprodução de H₂O₂ → Reação de Fenton → Radicais OH· → Dano a lipídios, proteínas e DNA.",
        correct: true,
      },
      {
        text: "Trissomia 21 → Redução de SOD1 → Acúmulo de superóxido → Morte celular direta.",
        correct: false,
      },
    ],
    comparisonExplanation: "Mudança: Trissomia do 21 (3 cópias). Consequência: +50% SOD1, acúmulo de H₂O₂, estresse oxidativo severo, danos celulares.",
  },
};

export const mutationOrder = ["nativo", "falciforme", "imperfeita", "down", "milano"];

mutations.imperfeita.comparisonExplanation = "Mudança: Glicina (pequena) → Cys/Trp (volumosos). Consequência: Hélice tríplice quebrada, colágeno frágil, ossos quebradiços.";
mutations.milano.comparisonExplanation = "Mudança: Arg173Cys (ponte de dissulfeto). Consequência: Dímero ultra-estável, eficiência aumentada, proteção cardiovascular.";
