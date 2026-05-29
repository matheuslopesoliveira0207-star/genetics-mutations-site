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
      "Sequência normal: GAG codificando Ácido Glutâmico na posição 6 da cadeia beta da hemoglobina. Proteína enovelada corretamente em seu estado nativo. A hemoglobina é uma proteína tetramérica composta por 4 subunidades (2 cadeias α e 2 cadeias β), cada uma contendo um grupo heme que se liga ao oxigênio. O Ácido Glutâmico (Glu) é um aminoácido polar com carga negativa, permitindo interações eletrostáticas estáveis com outras moléculas. Esta configuração mantém a proteína em solução aquosa e permite o transporte eficiente de oxigênio pelos tecidos.",
    section2Title: "Impacto Bioquímico",
    section2Content:
      "Interações fracas (pontes de hidrogênio e interações eletrostáticas) perfeitamente distribuídas garantem estabilidade máxima. Alta solubilidade e afinidade ideal pelo oxigênio. A hemoglobina nativa possui uma estrutura quaternária que permite cooperatividade alostérica: quando uma subunidade se liga ao oxigênio, aumenta a afinidade das outras subunidades, facilitando o transporte. O pH ótimo é 7.4 (pH fisiológico), e a estabilidade é mantida por um delicado equilíbrio de forças: pontes de hidrogênio entre resíduos polares, interações de van der Waals entre grupos apolares, e pontes salinas entre resíduos carregados. Qualquer perturbação neste equilíbrio pode levar a consequências catastróficas.",
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
      "Mutação de Ponto: GAG → GTG. Substituição do Glutamato (polar, carregado negativamente) por Valina (apolar, hidrofóbica) na posição 6 da beta-globina (Glu6Val). Esta é uma das mutações mais devastadoras conhecidas na medicina. O Glutamato, sendo polar e carregado, interage favoravelmente com o meio aquoso. A Valina, sendo apolar, tende a se enterrar no interior hidrofóbico da proteína. Porém, na posição 6, a Valina fica parcialmente exposta à superfície, criando um bolsão hidrofóbico anômalo. Este bolsão interage com bolsões hidrofóbicos de outras hemoglobinas vizinhas, gerando agregação em cadeia.",
    section2Title: "Efeito Hidrofóbico - Cascata de Agregação",
    section2Content:
      "A Valina mutada exposta tenta fugir do meio aquoso, encaixando-se em um bolsão hidrofóbico de outra hemoglobina vizinha. Isso gera polimerização em massa, criando fibras rígidas que deformam a hemácia em forma de foice. O processo é termodinamicamente favorável (ΔG < 0), pois reduz a área de contato entre grupos apolares e água. Uma única hemoglobina falciforme não causa problema, mas em ambiente com baixa pressão de oxigênio (pO₂ < 60 mmHg), a hemoglobina desoxigenada assume uma conformação que expõe ainda mais o bolsão hidrofóbico, acelerando a polimerização. As fibras formadas são tão rígidas que deformam permanentemente a célula em forma de foice. Estas células deformadas ficam presas nos capilares, causando obstrução vascular, hemólise (destruição das células), e dor severa. A solubilidade cai de ~34 g/dL (nativa) para ~8 g/dL (falciforme), uma redução de 75%.",
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
      "Mutação Estrutural: Substituição da Glicina (Gly) por um aminoácido volumoso com cadeia lateral complexa (como Cisteína ou Triptofano) no padrão de repetição Gly-X-Y do colágeno. O colágeno é a proteína mais abundante no corpo humano, representando ~30% de toda proteína corporal. Sua estrutura é única: três cadeias polipeptídicas se enroscam em uma hélice tríplice extremamente compacta. O padrão Gly-X-Y é absolutamente conservado: a cada terceira posição deve haver uma Glicina. Por quê? Porque a Glicina é o menor aminoácido (sua cadeia lateral é apenas um hidrogênio), permitindo que as três cadeias se encostem intimamente no interior da hélice. Qualquer outro aminoácido é muito volumoso para caber neste espaço.",
    section2Title: "Impedimento Estérico - Quebra da Estrutura",
    section2Content:
      "A Glicina é o menor aminoácido existente (sua cadeia lateral é apenas um Hidrogênio), permitindo o aperto da hélice tríplice do colágeno. O novo aminoácido volumoso não cabe no interior da hélice, impedindo o enovelamento e destruindo as pontes de hidrogênio estruturais. Quando uma Glicina é substituída por Cisteína (com seu grupo tiol -SH) ou Triptofano (com seu anel aromático grande), o impedimento estérico é severo. A hélice não consegue se formar corretamente, ou se forma de forma distorcida. Isto não apenas enfraquece a estrutura local, mas também afeta a capacidade de formação de ligações cruzadas entre moléculas de colágeno (cross-linking), que são essenciais para a resistência mecânica. O resultado é um colágeno defeituoso que não consegue suportar o peso corporal. Os ossos ficam frágeis e quebram facilmente (daí o nome: Osteogênese Imperfeita = formação óssea imperfeita). Além de ossos, o colágeno defeituoso afeta pele, tendões, ligamentos e até a esclera dos olhos (que fica azulada).",
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
      "Mutação Adaptativa: Substituição de uma Arginina por uma Cisteína na posição 173 (Arg173Cys) na proteína ApoA-1 do HDL. Esta é uma mutação rara e natural encontrada em uma pequena população na região de Limone sul Garda, na Itália. Ao contrário das mutações anteriores (que causam doenças), esta mutação é BENÉFICA. A Arginina é um aminoácido polar com carga positiva. A Cisteína é um aminoácido polar com um grupo tiol (-SH) que pode formar ligações covalentes (pontes de dissulfeto) com outro resíduo de Cisteína. Esta mutação permite que duas moléculas de ApoA-1 Milano se liguem covalentemente, formando um dímero ultra-estável.",
    section2Title: "Pontes de Dissulfeto Fortes - Eficiência Aumentada",
    section2Content:
      "A introdução da Cisteína introduz um grupo tiol (-SH), permitindo a formação de ligações covalentes fortes (pontes de dissulfeto) entre as proteínas mutadas. Isso gera dímeros ultra-estáveis e altamente eficientes na remoção de placas de colesterol das artérias. As pontes de dissulfeto (ligações S-S) são ~100 vezes mais fortes que pontes de hidrogênio. O dímero ApoA-1 Milano é tão estável que consegue remover colesterol oxidado (o mais prejudicial) das placas ateroscleróticas com eficiência extraordinária. Estudos clínicos mostram que uma única infusão de ApoA-1 Milano pode reduzir a espessura de placas ateroscleróticas em 4% em apenas 6 semanas. Isto é revolucionário! A população de Limone sul Garda, apesar de ter níveis de colesterol elevados, tem incidência de doença cardiovascular praticamente ZERO. Este é um exemplo perfeito de como uma mutação pode ser adaptativa e benéfica.",
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
      "Alteração Cromossômica: Trissomia do Cromossomo 21. Em vez de uma mutação pontual em um único gene, ocorre um desequilíbrio de DOSAGEM GÊNICA massivo. A presença de uma terceira cópia do cromossomo 21 causa superexpressão de ~300 genes simultaneamente. O cromossomo 21 abriga o gene da SOD1 (Superóxido Dismutase 1), uma enzima antioxidante crítica. Com 50% mais cópias do gene, a célula produz 50% mais SOD1. Isto pode parecer benéfico (mais proteção antioxidante!), mas é exatamente o oposto. A célula evoluiu para manter um equilíbrio redox muito preciso. Qualquer desvio, mesmo que pareça positivo, quebra este equilíbrio e causa dano severo.",
    section2Title: "A Cascata de Dano Oxidativo - Quebra da Matriz",
    section2Content:
      "SOD1 catalisa: O₂·⁻ + H⁺ + e⁻ → H₂O₂. Com 50% mais SOD1, há SUPERPRODUÇÃO de H₂O₂. As enzimas Catalase (CAT) e Glutationa Peroxidase (GPx) não conseguem neutralizar H₂O₂ rápido o suficiente. O H₂O₂ acumula e reage com Fe²⁺ (reação de Fenton), gerando radicais hidroxila (OH·) extremamente reativos. Esses radicais atacam: (1) Lipídios de membrana → peroxidação lipídica, danificando a integridade das membranas celulares; (2) Proteínas → oxidação de aminoácidos, causando desnaturação e perda de função; (3) DNA → quebras de fita dupla, levando a morte celular ou mutações. O resultado é morte celular massiva, inflamação crônica e disfunção neural severa. Este é um exemplo clássico de como o equilíbrio é mais importante que a quantidade absoluta. A Síndrome de Down não é causada por falta de proteção antioxidante, mas por EXCESSO dela, que gera um caos oxidativo.",
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
