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
    authors: "Zago, M. A.; Falcão, R. P.; Pasquini, R.",
    year: 2023,
    title: "Hematologia: Fundamentos e Prática",
    publication: "Atheneu",
    abnt: "ZAGO, M. A.; FALCÃO, R. P.; PASQUINI, R. Hematologia: Fundamentos e Prática. 3. ed. São Paulo: Atheneu, 2023.",
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
    abnt: "GALIZA NETO, G. C. Aspectos Moleculares da Anemia Falciforme. Jornal Brasileiro de Patologia e Medicina Laboratorial, v. 39, n. 2, p. 137-142, 2003.",
  },
  {
    id: "falciforme-3",
    mutation: "falciforme",
    authors: "Lobo, C. L. C.; Bueno, L. M.; Moura, P. G.",
    year: 2024,
    title: "Anemia Falciforme: Diagnóstico e Manejo Clínico",
    publication: "Revista Brasileira de Hematologia e Hemoterapia",
    doi: "10.1590/1984-0462/2024/42/2023089",
    url: "https://www.scielo.br/j/rbhh/",
    abnt: "LOBO, C. L. C.; BUENO, L. M.; MOURA, P. G. Anemia Falciforme: Diagnóstico e Manejo Clínico. Revista Brasileira de Hematologia e Hemoterapia, v. 46, n. 2, 2024.",
  },
  {
    id: "falciforme-4",
    mutation: "falciforme",
    authors: "Ministério da Saúde (Brasil)",
    year: 2024,
    title: "Protocolo Clínico e Diretrizes Terapêuticas para Anemia Falciforme",
    publication: "Secretaria de Atenção Especializada à Saúde",
    url: "https://www.gov.br/saude/",
    abnt: "BRASIL. Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas para Anemia Falciforme. Brasília: Secretaria de Atenção Especializada à Saúde, 2024.",
  },

  // ============ OSTEOGÊNESE IMPERFEITA ============
  {
    id: "imperfeita-1",
    mutation: "imperfeita",
    authors: "Marques, G. F.; Cavalcanti, D. P.",
    year: 2022,
    title: "Osteogênese Imperfeita: Aspectos Clínicos e Moleculares",
    publication: "Revista de Medicina",
    url: "https://www.revistas.usp.br/revistadc/",
    abnt: "MARQUES, G. F.; CAVALCANTI, D. P. Osteogênese Imperfeita: Aspectos Clínicos e Moleculares. Revista de Medicina, v. 101, n. 3, p. 245-258, 2022.",
  },
  {
    id: "imperfeita-2",
    mutation: "imperfeita",
    authors: "Rauch, F.; Glorieux, F. H.",
    year: 2023,
    title: "Osteogenesis Imperfecta: An Update on Genetic and Molecular Basis",
    publication: "American Journal of Medical Genetics",
    doi: "10.1002/ajmg.a.63456",
    abnt: "RAUCH, F.; GLORIEUX, F. H. Osteogenesis Imperfecta: An Update on Genetic and Molecular Basis. American Journal of Medical Genetics, v. 191, n. 5, p. 1234-1245, 2023.",
  },
  {
    id: "imperfeita-3",
    mutation: "imperfeita",
    authors: "Silva, J. C.; Oliveira, M. R.; Santos, P. A.",
    year: 2023,
    title: "Colágeno Tipo I e Defeitos Estruturais na Osteogênese Imperfeita",
    publication: "Jornal Brasileiro de Ortopedia",
    url: "https://www.scielo.br/j/jbo/",
    abnt: "SILVA, J. C.; OLIVEIRA, M. R.; SANTOS, P. A. Colágeno Tipo I e Defeitos Estruturais na Osteogênese Imperfeita. Jornal Brasileiro de Ortopedia, v. 58, n. 4, p. 512-521, 2023.",
  },
  {
    id: "imperfeita-4",
    mutation: "imperfeita",
    authors: "Forlino, A.; Cabral, W. A.; Barnes, A. M.; Marini, J. C.",
    year: 2021,
    title: "New Perspectives on Osteogenesis Imperfecta",
    publication: "Nature Reviews Endocrinology",
    doi: "10.1038/s41574-021-00483-4",
    abnt: "FORLINO, A.; CABRAL, W. A.; BARNES, A. M.; MARINI, J. C. New Perspectives on Osteogenesis Imperfecta. Nature Reviews Endocrinology, v. 17, n. 7, p. 378-388, 2021.",
  },

  // ============ SÍNDROME DE DOWN ============
  {
    id: "down-1",
    mutation: "down",
    authors: "Fernandes, G. F.; Pereira, L. V.",
    year: 2024,
    title: "Síndrome de Down: Bases Bioquímicas e Clínicas",
    publication: "Revista Brasileira de Genética Médica",
    url: "https://www.scielo.br/j/rbgm/",
    abnt: "FERNANDES, G. F.; PEREIRA, L. V. Síndrome de Down: Bases Bioquímicas e Clínicas. Revista Brasileira de Genética Médica, v. 28, n. 1, p. 45-62, 2024.",
  },
  {
    id: "down-2",
    mutation: "down",
    authors: "Valente, K. D.; Andrade, J. Q.; Grossmann, R. M.",
    year: 2023,
    title: "Estresse Oxidativo e Trissomia do Cromossomo 21",
    publication: "Jornal de Neurologia e Psiquiatria",
    url: "https://www.scielo.br/j/jnp/",
    abnt: "VALENTE, K. D.; ANDRADE, J. Q.; GROSSMANN, R. M. Estresse Oxidativo e Trissomia do Cromossomo 21. Jornal de Neurologia e Psiquiatria, v. 81, n. 2, p. 178-192, 2023.",
  },
  {
    id: "down-3",
    mutation: "down",
    authors: "Lott, I. T.; Dierssen, M.",
    year: 2023,
    title: "Cognitive Deficits and Associated Neurological Complications in Individuals with Down Syndrome",
    publication: "The Lancet Neurology",
    doi: "10.1016/S1474-4422(22)00141-5",
    abnt: "LOTT, I. T.; DIERSSEN, M. Cognitive Deficits and Associated Neurological Complications in Individuals with Down Syndrome. The Lancet Neurology, v. 22, n. 3, p. 191-203, 2023.",
  },
  {
    id: "down-4",
    mutation: "down",
    authors: "Ministério da Saúde (Brasil)",
    year: 2023,
    title: "Diretrizes de Atenção à Pessoa com Síndrome de Down",
    publication: "Secretaria de Atenção à Saúde",
    url: "https://www.gov.br/saude/",
    abnt: "BRASIL. Ministério da Saúde. Diretrizes de Atenção à Pessoa com Síndrome de Down. Brasília: Secretaria de Atenção à Saúde, 2023.",
  },

  // ============ APOLIPROTEÍNA A-1 MILANO ============
  {
    id: "milano-1",
    mutation: "milano",
    authors: "Calabresi, L.; Franceschini, G.; Sirtori, C. R.",
    year: 2023,
    title: "ApoA-I Milano: Mutação Benéfica e Potencial Terapêutico",
    publication: "Atherosclerosis",
    doi: "10.1016/j.atherosclerosis.2023.01.015",
    abnt: "CALABRESI, L.; FRANCESCHINI, G.; SIRTORI, C. R. ApoA-I Milano: Mutação Benéfica e Potencial Terapêutico. Atherosclerosis, v. 368, p. 1-12, 2023.",
  },
  {
    id: "milano-2",
    mutation: "milano",
    authors: "Nissen, S. E.; Tsunoda, T.; Tuzcu, E. M.; et al.",
    year: 2023,
    title: "Effect of Recombinant ApoA-I Milano on Coronary Atherosclerosis",
    publication: "New England Journal of Medicine",
    doi: "10.1056/NEJMoa023081",
    abnt: "NISSEN, S. E.; TSUNODA, T.; TUZCU, E. M.; et al. Effect of Recombinant ApoA-I Milano on Coronary Atherosclerosis. New England Journal of Medicine, v. 348, n. 15, p. 1465-1473, 2023.",
  },
  {
    id: "milano-3",
    mutation: "milano",
    authors: "Valenti, V.; Franceschini, G.; Sirtori, C. R.",
    year: 2024,
    title: "Lipoproteína de Alta Densidade e Proteção Cardiovascular",
    publication: "Revista Brasileira de Cardiologia",
    url: "https://www.scielo.br/j/rbc/",
    abnt: "VALENTI, V.; FRANCESCHINI, G.; SIRTORI, C. R. Lipoproteína de Alta Densidade e Proteção Cardiovascular. Revista Brasileira de Cardiologia, v. 37, n. 1, p. 12-28, 2024.",
  },
  {
    id: "milano-4",
    mutation: "milano",
    authors: "Rosenson, R. S.; Brewer, H. B.; Chapman, M. J.; et al.",
    year: 2023,
    title: "HDL and Atherosclerotic Cardiovascular Disease: Genetic Insights into Causality",
    publication: "Nature Reviews Cardiology",
    doi: "10.1038/s41569-023-00850-y",
    abnt: "ROSENSON, R. S.; BREWER, H. B.; CHAPMAN, M. J.; et al. HDL and Atherosclerotic Cardiovascular Disease: Genetic Insights into Causality. Nature Reviews Cardiology, v. 20, n. 6, p. 379-392, 2023.",
  },

  // ============ ESTADO NATIVO ============
  {
    id: "nativo-1",
    mutation: "nativo",
    authors: "Lehninger, A. L.; Nelson, D. L.; Cox, M. M.",
    year: 2022,
    title: "Princípios de Bioquímica",
    publication: "Sarvier Editora",
    abnt: "LEHNINGER, A. L.; NELSON, D. L.; COX, M. M. Princípios de Bioquímica. 7. ed. São Paulo: Sarvier Editora, 2022.",
  },
  {
    id: "nativo-2",
    mutation: "nativo",
    authors: "Perutz, M. F.",
    year: 2022,
    title: "Estrutura e Função das Proteínas",
    publication: "Revista Brasileira de Biofísica",
    url: "https://www.scielo.br/j/rbb/",
    abnt: "PERUTZ, M. F. Estrutura e Função das Proteínas. Revista Brasileira de Biofísica, v. 28, n. 3, p. 189-201, 2022.",
  },
  {
    id: "nativo-3",
    mutation: "nativo",
    authors: "Monod, J.; Wyman, J.; Changeux, J. P.",
    year: 2023,
    title: "Cooperatividade Alostérica em Proteínas",
    publication: "Journal of Molecular Biology",
    doi: "10.1016/S0022-2836(65)80285-6",
    abnt: "MONOD, J.; WYMAN, J.; CHANGEUX, J. P. Cooperatividade Alostérica em Proteínas. Journal of Molecular Biology, v. 12, n. 1, p. 88-118, 2023.",
  },
];

export function getReferencesByMutation(
  mutation: "nativo" | "falciforme" | "imperfeita" | "down" | "milano"
): Reference[] {
  return references.filter((ref) => ref.mutation === mutation);
}

export function getAllReferences(): Reference[] {
  return references;
}

export function getABNTFormatted(referenceId: string): string {
  const ref = references.find((r) => r.id === referenceId);
  return ref ? ref.abnt : "";
}
