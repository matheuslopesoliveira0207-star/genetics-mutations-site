export interface Reference {
  id: string;
  mutation: "nativo" | "falciforme" | "imperfeita" | "down" | "milano";
  authors: string;
  year: number;
  title: string;
  publication: string;
  doi?: string;
  url?: string;
  abnt: string;
}

export const references: Reference[] = [
  // ============ ANEMIA FALCIFORME ============
  {
    id: "falciforme-1",
    mutation: "falciforme",
    authors: "Sundd, P.",
    year: 2018,
    title: "Pathophysiology of Sickle Cell Disease",
    publication: "Blood Reviews",
    doi: "10.1016/j.blre.2018.06.004",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7053558/",
    abnt: "SUNDD, P. Pathophysiology of Sickle Cell Disease. Blood Reviews, v. 32, p. 1-15, 2018. Disponível em: https://pmc.ncbi.nlm.nih.gov/articles/PMC7053558/. Acesso em: 2026.",
  },
  {
    id: "falciforme-2",
    mutation: "falciforme",
    authors: "Galiza Neto, G. C.",
    year: 2003,
    title: "Aspectos Moleculares da Anemia Falciforme",
    publication: "Jornal Brasileiro de Patologia e Medicina Laboratorial",
    doi: "10.1590/S1676-24442003000200002",
    url: "https://www.scielo.br/j/jbpml/a/8rKFQ3fJQMqtDSTrg8pDgbc/",
    abnt: "GALIZA NETO, G. C. Aspectos Moleculares da Anemia Falciforme. Jornal Brasileiro de Patologia e Medicina Laboratorial, v. 39, n. 2, p. 137-142, 2003. Disponível em: https://www.scielo.br/j/jbpml/a/8rKFQ3fJQMqtDSTrg8pDgbc/. Acesso em: 2026.",
  },
  {
    id: "falciforme-3",
    mutation: "falciforme",
    authors: "Taher, M.",
    year: 2025,
    title: "Sickle Cell Disease: Understanding Pathophysiology and Management",
    publication: "Frontiers in Pharmacology",
    doi: "10.3389/fphar.2025.1630994",
    url: "https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2025.1630994/full",
    abnt: "TAHER, M. Sickle Cell Disease: Understanding Pathophysiology and Management. Frontiers in Pharmacology, v. 16, p. 1630994, 2025. Disponível em: https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2025.1630994/full. Acesso em: 2026.",
  },
  {
    id: "falciforme-4",
    mutation: "falciforme",
    authors: "Ministério da Saúde",
    year: 2024,
    title: "Doença Falciforme",
    publication: "Portal da Saúde Brasil",
    url: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/doenca-falciforme",
    abnt: "BRASIL. Ministério da Saúde. Doença Falciforme. Disponível em: https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/doenca-falciforme. Acesso em: 2026.",
  },

  // ============ OSTEOGÊNESE IMPERFEITA ============
  {
    id: "imperfeita-1",
    mutation: "imperfeita",
    authors: "Valadares, E. R.; Carneiro, T. B.; Santos, P. M.",
    year: 2014,
    title: "O que há de Novo em Genética e Classificação de Osteogênese Imperfeita?",
    publication: "Jornal de Pediatria",
    doi: "10.1016/j.jped.2014.03.004",
    url: "https://www.scielo.br/j/jped/a/p6Q4kmYvXRfb66xvHJjkDTs/",
    abnt: "VALADARES, E. R.; CARNEIRO, T. B.; SANTOS, P. M. O que há de Novo em Genética e Classificação de Osteogênese Imperfeita? Jornal de Pediatria, v. 90, n. 5, p. 456-466, 2014. Disponível em: https://www.scielo.br/j/jped/a/p6Q4kmYvXRfb66xvHJjkDTs/. Acesso em: 2026.",
  },
  {
    id: "imperfeita-2",
    mutation: "imperfeita",
    authors: "Holtz, A. P.",
    year: 2022,
    title: "Caracterização Molecular da Osteogênese Imperfeita em uma Grande Coorte de Pacientes no Brasil",
    publication: "Universidade Federal do Rio Grande do Sul",
    url: "https://lume.ufrgs.br/bitstream/handle/10183/247564/001147720.pdf",
    abnt: "HOLTZ, A. P. Caracterização Molecular da Osteogênese Imperfeita em uma Grande Coorte de Pacientes no Brasil. 2022. Dissertação (Mestrado em Genética) - Universidade Federal do Rio Grande do Sul, Porto Alegre, 2022.",
  },
  {
    id: "imperfeita-3",
    mutation: "imperfeita",
    authors: "Souza, L. T.; Brizola, E. S.; Zambrano, M. B.",
    year: 2016,
    title: "Prevalência de Variantes Patogênicas nos Genes COL1A1 e COL1A2 em Osteogênese Imperfeita Tipo III e IV",
    publication: "Universidade Federal do Rio Grande do Sul",
    url: "https://lume.ufrgs.br/bitstream/handle/10183/166047/001006930.pdf",
    abnt: "SOUZA, L. T.; BRIZOLA, E. S.; ZAMBRANO, M. B. Prevalência de Variantes Patogênicas nos Genes COL1A1 e COL1A2 em Osteogênese Imperfeita Tipo III e IV. 2016. Trabalho de Conclusão de Curso (Graduação em Biologia) - Universidade Federal do Rio Grande do Sul, Porto Alegre, 2016.",
  },
  {
    id: "imperfeita-4",
    mutation: "imperfeita",
    authors: "National Center for Biotechnology Information",
    year: 2023,
    title: "Osteogenesis Imperfecta - StatPearls",
    publication: "NIH Bookshelf",
    url: "https://www.ncbi.nlm.nih.gov/books/NBK536957/",
    abnt: "NATIONAL CENTER FOR BIOTECHNOLOGY INFORMATION. Osteogenesis Imperfecta - StatPearls. Disponível em: https://www.ncbi.nlm.nih.gov/books/NBK536957/. Acesso em: 2026.",
  },

  // ============ SÍNDROME DE DOWN ============
  {
    id: "down-1",
    mutation: "down",
    authors: "Turrens, J. F.",
    year: 2001,
    title: "Increased Superoxide Dismutase and Down's Syndrome",
    publication: "Free Radical Biology and Medicine",
    doi: "10.1016/S0891-5849(01)00613-1",
    url: "https://www.sciencedirect.com/science/article/pii/S0306987701913271",
    abnt: "TURRENS, J. F. Increased Superoxide Dismutase and Down's Syndrome. Free Radical Biology and Medicine, v. 30, n. 11, p. 1199-1203, 2001. Disponível em: https://www.sciencedirect.com/science/article/pii/S0306987701913271. Acesso em: 2026.",
  },
  {
    id: "down-2",
    mutation: "down",
    authors: "Aguilar-da-Silva, R. H.",
    year: 2003,
    title: "Implicações do Estresse Oxidativo sobre o Metabolismo de Portadores da Síndrome de Down",
    publication: "Revista Brasileira de Hematologia e Hemoterapia",
    doi: "10.1590/S1516-84842003000100010",
    url: "https://www.scielo.br/j/rbhh/a/jSfXnt77XryGzkfLgrfcjpq/",
    abnt: "AGUILAR-DA-SILVA, R. H. Implicações do Estresse Oxidativo sobre o Metabolismo de Portadores da Síndrome de Down. Revista Brasileira de Hematologia e Hemoterapia, v. 25, n. 1, p. 67-74, 2003. Disponível em: https://www.scielo.br/j/rbhh/a/jSfXnt77XryGzkfLgrfcjpq/. Acesso em: 2026.",
  },
  {
    id: "down-3",
    mutation: "down",
    authors: "Perluigi, M.; Butterfield, D. A.",
    year: 2012,
    title: "Oxidative Stress and Down Syndrome: A Route toward Alzheimer Disease-like Dementia",
    publication: "Free Radical Biology and Medicine",
    doi: "10.1016/j.freeradbiomed.2012.07.028",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3235450/",
    abnt: "PERLUIGI, M.; BUTTERFIELD, D. A. Oxidative Stress and Down Syndrome: A Route toward Alzheimer Disease-like Dementia. Free Radical Biology and Medicine, v. 53, n. 12, p. 2327-2335, 2012. Disponível em: https://pmc.ncbi.nlm.nih.gov/articles/PMC3235450/. Acesso em: 2026.",
  },
  {
    id: "down-4",
    mutation: "down",
    authors: "Valenti, D.; Braidy, N.; De Bari, L.",
    year: 2024,
    title: "Oxidative Stress and Down Syndrome: A Systematic Review",
    publication: "Antioxidants",
    doi: "10.3390/antiox14070816",
    url: "https://www.mdpi.com/2076-3921/14/7/816",
    abnt: "VALENTI, D.; BRAIDY, N.; DE BARI, L. Oxidative Stress and Down Syndrome: A Systematic Review. Antioxidants, v. 14, n. 7, p. 816, 2024. Disponível em: https://www.mdpi.com/2076-3921/14/7/816. Acesso em: 2026.",
  },

  // ============ APOA-1 MILANO ============
  {
    id: "milano-1",
    mutation: "milano",
    authors: "Nissen, S. E.; Tsunoda, T.; Tuzcu, E. M.",
    year: 2003,
    title: "Effect of Recombinant ApoA-I Milano on Coronary Atherosclerosis in Patients with Acute Coronary Syndromes",
    publication: "JAMA",
    doi: "10.1001/jama.290.17.2292",
    url: "https://jamanetwork.com/journals/jama/fullarticle/197579",
    abnt: "NISSEN, S. E.; TSUNODA, T.; TUZCU, E. M. Effect of Recombinant ApoA-I Milano on Coronary Atherosclerosis in Patients with Acute Coronary Syndromes. JAMA, v. 290, n. 17, p. 2292-2300, 2003. Disponível em: https://jamanetwork.com/journals/jama/fullarticle/197579. Acesso em: 2026.",
  },
  {
    id: "milano-2",
    mutation: "milano",
    authors: "Sirtori, C. R.; Calabresi, L.; Franceschini, G.",
    year: 2001,
    title: "Cardiovascular Status of Carriers of the Apolipoprotein AI Milano Mutation",
    publication: "Circulation",
    doi: "10.1161/01.cir.103.15.1949",
    url: "https://www.ahajournals.org/doi/10.1161/01.cir.103.15.1949",
    abnt: "SIRTORI, C. R.; CALABRESI, L.; FRANCESCHINI, G. Cardiovascular Status of Carriers of the Apolipoprotein AI Milano Mutation. Circulation, v. 103, n. 15, p. 1949-1954, 2001. Disponível em: https://www.ahajournals.org/doi/10.1161/01.cir.103.15.1949. Acesso em: 2026.",
  },
  {
    id: "milano-3",
    mutation: "milano",
    authors: "Alexander, E. T.; Rader, D. J.",
    year: 2009,
    title: "Structural and Functional Consequences of the Milano Mutation of Apolipoprotein A-I",
    publication: "Circulation",
    doi: "10.1161/CIRCULATIONAHA.108.816587",
    url: "https://pubmed.ncbi.nlm.nih.gov/19318685/",
    abnt: "ALEXANDER, E. T.; RADER, D. J. Structural and Functional Consequences of the Milano Mutation of Apolipoprotein A-I. Circulation, v. 119, n. 5, p. 644-647, 2009. Disponível em: https://pubmed.ncbi.nlm.nih.gov/19318685/. Acesso em: 2026.",
  },
  {
    id: "milano-4",
    mutation: "milano",
    authors: "Felices, P. V.",
    year: 2010,
    title: "Nuevas Estrategias Terapéuticas para Elevar el Colesterol Unido a Lipoproteínas de Alta Densidad",
    publication: "Clínica e Investigación en Arteriosclerosis",
    doi: "10.1016/S0214-9168(10)70019-X",
    url: "https://www.sciencedirect.com/science/article/pii/S021491681070019X",
    abnt: "FELICES, P. V. Nuevas Estrategias Terapéuticas para Elevar el Colesterol Unido a Lipoproteínas de Alta Densidad. Clínica e Investigación en Arteriosclerosis, v. 32, n. 2, p. 47-58, 2010. Disponível em: https://www.sciencedirect.com/science/article/pii/S021491681070019X. Acesso em: 2026.",
  },

  // ============ ESTADO NATIVO (HEMOGLOBINA NORMAL) ============
  {
    id: "nativo-1",
    mutation: "nativo",
    authors: "Perutz, M. F.",
    year: 1970,
    title: "Stereochemistry of Cooperative Effects in Haemoglobin",
    publication: "Nature",
    doi: "10.1038/228726a0",
    abnt: "PERUTZ, M. F. Stereochemistry of Cooperative Effects in Haemoglobin. Nature, v. 228, p. 726-739, 1970.",
  },
  {
    id: "nativo-2",
    mutation: "nativo",
    authors: "Monod, J.; Wyman, J.; Changeux, J. P.",
    year: 1965,
    title: "On the Nature of Allosteric Transitions: A Plausible Model",
    publication: "Journal of Molecular Biology",
    doi: "10.1016/S0022-2836(65)80285-6",
    abnt: "MONOD, J.; WYMAN, J.; CHANGEUX, J. P. On the Nature of Allosteric Transitions: A Plausible Model. Journal of Molecular Biology, v. 12, n. 1, p. 88-118, 1965.",
  },
  {
    id: "nativo-3",
    mutation: "nativo",
    authors: "Lehninger, A. L.; Nelson, D. L.; Cox, M. M.",
    year: 2008,
    title: "Princípios de Bioquímica",
    publication: "Sarvier Editora",
    abnt: "LEHNINGER, A. L.; NELSON, D. L.; COX, M. M. Princípios de Bioquímica. 4. ed. São Paulo: Sarvier Editora, 2008.",
  },
];

export function getReferencesByMutation(mutation: string): Reference[] {
  return references.filter((ref) => ref.mutation === mutation);
}

export function getAllReferences(): Reference[] {
  return references;
}

export function getABNTFormatted(mutation?: string): string[] {
  const refs = mutation ? getReferencesByMutation(mutation) : getAllReferences();
  return refs.map((ref) => ref.abnt);
}
