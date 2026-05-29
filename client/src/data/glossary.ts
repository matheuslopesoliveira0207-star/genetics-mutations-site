export interface GlossaryTerm {
  term: string;
  definition: string;
  category: "molecular" | "protein" | "enzyme" | "interaction" | "genetic";
}

export const glossaryTerms: Record<string, GlossaryTerm> = {
  "delta-g": {
    term: "Delta G (ΔG)",
    definition: "Variação de energia livre de Gibbs. Determina se uma reação é espontânea (ΔG < 0) ou não-espontânea (ΔG > 0). Guia o dobramento proteico para o estado de menor energia.",
    category: "molecular",
  },
  "efeito-hidrofobico": {
    term: "Efeito Hidrofóbico",
    definition: "Tendência de moléculas apolares (hidrofóbicas) se agregarem em ambiente aquoso para minimizar contato com água. Força motriz principal no dobramento de proteínas e agregação em Anemia Falciforme.",
    category: "interaction",
  },
  "pontes-hidrogenio": {
    term: "Pontes de Hidrogênio",
    definition: "Interações fracas entre um átomo de hidrogênio e um átomo eletronegativo (N, O, F). Essenciais para estabilizar estruturas secundárias e terciárias de proteínas.",
    category: "interaction",
  },
  "sod1": {
    term: "SOD1 (Superóxido Dismutase 1)",
    definition: "Enzima antioxidante que catalisa a conversão de radicais superóxido (O₂⁻) em peróxido de hidrogênio (H₂O₂). Localizada no cromossomo 21, sua superexpressão causa estresse oxidativo na Síndrome de Down.",
    category: "enzyme",
  },
  "h2o2": {
    term: "Peróxido de Hidrogênio (H₂O₂)",
    definition: "Espécie reativa de oxigênio (ROS) produzida como intermediária em reações metabólicas. Em excesso, danifica lipídios de membrana, proteínas e DNA. Neutralizado por Catalase e Glutationa Peroxidase.",
    category: "molecular",
  },
  "estresse-oxidativo": {
    term: "Estresse Oxidativo",
    definition: "Desequilíbrio entre produção de espécies reativas de oxigênio (ROS) e capacidade antioxidante da célula. Causa danos a biomoléculas e está associado a envelhecimento e doenças.",
    category: "molecular",
  },
  "dobramento-proteico": {
    term: "Dobramento Proteico",
    definition: "Processo pelo qual uma cadeia polipeptídica se organiza em sua estrutura tridimensional nativa. Guiado por interações fracas e busca pelo estado de menor energia livre (ΔG mínimo).",
    category: "protein",
  },
  "mutacao-ponto": {
    term: "Mutação de Ponto",
    definition: "Alteração de um único nucleotídeo no DNA. Pode resultar em troca de aminoácido (missense), códon de parada (nonsense) ou sem efeito (silenciosa). Exemplo: GAG→GTG na Anemia Falciforme.",
    category: "genetic",
  },
  "trissomia": {
    term: "Trissomia",
    definition: "Condição cromossômica onde há três cópias de um cromossomo em vez de duas. Exemplo: Trissomia do 21 (Síndrome de Down) resulta em 50% mais expressão de genes no cromossomo 21.",
    category: "genetic",
  },
  "helix-triplice": {
    term: "Hélice Tríplice (Colágeno)",
    definition: "Estrutura secundária característica do colágeno formada por três cadeias polipeptídicas enroladas. Estabilizada por pontes de hidrogênio. Mutações que quebram o padrão Gly-X-Y causam Osteogênese Imperfeita.",
    category: "protein",
  },
  "impedimento-esterico": {
    term: "Impedimento Estérico",
    definition: "Repulsão entre átomos causada pela proximidade excessiva de grupos volumosos. Na Osteogênese Imperfeita, aminoácidos volumosos no padrão Gly-X-Y do colágeno causam impedimento estérico que quebra a hélice.",
    category: "molecular",
  },
  "ponte-dissulfeto": {
    term: "Ponte de Dissulfeto",
    definition: "Ligação covalente forte entre dois átomos de enxofre de resíduos de Cisteína. Mais estável que interações fracas. Crítica para estabilizar estruturas proteicas, como no ApoA-1 Milano.",
    category: "interaction",
  },
  "solubilidade": {
    term: "Solubilidade Proteica",
    definition: "Capacidade de uma proteína permanecer dissolvida em solução aquosa. Proteínas hidrofílicas (polares) são solúveis; proteínas com resíduos hidrofóbicos expostos agregam e precipitam.",
    category: "protein",
  },
  "afinidade-oxigenio": {
    term: "Afinidade por Oxigênio",
    definition: "Capacidade da hemoglobina se ligar e transportar oxigênio. Na Anemia Falciforme, a agregação reduz a afinidade e prejudica o transporte de O₂ para os tecidos.",
    category: "protein",
  },
  "catalase": {
    term: "Catalase",
    definition: "Enzima antioxidante que catalisa a decomposição de peróxido de hidrogênio (H₂O₂) em água e oxigênio. Protege a célula contra estresse oxidativo. Sobrecarregada na Síndrome de Down.",
    category: "enzyme",
  },
  "glutationa-peroxidase": {
    term: "Glutationa Peroxidase",
    definition: "Enzima antioxidante que reduz peróxido de hidrogênio e lipídios peroxidados usando glutationa reduzida como substrato. Parte do sistema de defesa antioxidante celular.",
    category: "enzyme",
  },
  "apoa1-milano": {
    term: "ApoA-1 Milano",
    definition: "Variante rara e natural da proteína ApoA-1 com mutação Arg173Cys. Forma dímeros ultra-estáveis com pontes de dissulfeto, sendo excepcionalmente eficiente na remoção de colesterol.",
    category: "protein",
  },
  "hemoglobina": {
    term: "Hemoglobina",
    definition: "Proteína tetramérica que transporta oxigênio nos glóbulos vermelhos. Composta por 4 subunidades (2 cadeias α e 2 cadeias β). Mutações na cadeia β causam Anemia Falciforme.",
    category: "protein",
  },
  "colageno": {
    term: "Colágeno",
    definition: "Proteína fibrosa mais abundante no corpo humano. Forma estruturas de suporte em ossos, pele e tecido conjuntivo. Mutações causam Osteogênese Imperfeita (ossos quebradiços).",
    category: "protein",
  },
  "dogma-central": {
    term: "Dogma Central da Biologia Molecular",
    definition: "DNA → RNA → Proteína. Descreve o fluxo de informação genética: DNA é transcrito em RNA, que é traduzido em proteína. Mutações no DNA alteram a sequência de aminoácidos.",
    category: "genetic",
  },
};

export const glossaryCategories = {
  molecular: "Conceitos Moleculares",
  protein: "Estrutura Proteica",
  enzyme: "Enzimas",
  interaction: "Interações Químicas",
  genetic: "Genética",
};
