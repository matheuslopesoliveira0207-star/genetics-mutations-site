import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { references, getReferencesByMutation } from "@/data/references";
import { mutationOrder, mutations } from "@/data/mutations";
import { Link, useLocation } from "wouter";

export default function References() {
  const [selectedMutation, setSelectedMutation] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          element.classList.add("highlight");
        }
      }, 100);
    }
  }, [location]);

  const displayedReferences = selectedMutation
    ? getReferencesByMutation(selectedMutation as "nativo" | "falciforme" | "imperfeita" | "down" | "milano")
    : references;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Cabeçalho */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">
            📚 Referências Bibliográficas
          </h1>
          <p className="text-sm md:text-base text-muted-foreground mb-6">
            Fontes científicas e artigos utilizados neste seminário de Bioquímica 1
          </p>
          <Link href="/">
            <Button variant="outline" className="text-xs md:text-sm">
              ← Voltar ao Seminário
            </Button>
          </Link>
        </div>

        {/* Filtro por Mutação */}
        <div className="mb-8 md:mb-12">
          <p className="text-sm font-semibold mb-3 opacity-70">Filtrar por Mutação:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            <Button
              onClick={() => setSelectedMutation(null)}
              variant={selectedMutation === null ? "default" : "outline"}
              className="text-xs md:text-sm"
            >
              Todas
            </Button>
            {mutationOrder.map((state) => (
              <Button
                key={state}
                onClick={() => setSelectedMutation(state)}
                variant={selectedMutation === state ? "default" : "outline"}
                className="text-xs md:text-sm"
              >
                {mutations[state].label}
              </Button>
            ))}
          </div>
        </div>

        {/* Lista de Referências */}
        <div className="space-y-6">
          {displayedReferences.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <p>Nenhuma referência encontrada para esta mutação.</p>
            </div>
          ) : (
            <>
              <div className="text-sm font-semibold text-muted-foreground mb-6">
                Total de referências: {displayedReferences.length}
              </div>

              {displayedReferences.map((ref, index) => (
                <div
                  key={ref.id}
                  id={ref.id}
                  className="p-4 md:p-6 border-2 border-border rounded-lg hover:border-accent transition-colors bg-card/50 scroll-mt-20 highlight:ring-2 highlight:ring-accent highlight:bg-accent/10"
                >
                  {/* Número e Mutação */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-muted text-muted-foreground">
                        {mutations[ref.mutation].label}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">{ref.year}</span>
                  </div>

                  {/* Título */}
                  <h3 className="text-base md:text-lg font-bold mb-2 leading-snug">
                    {ref.title}
                  </h3>

                  {/* Autores */}
                  <p className="text-sm text-muted-foreground mb-2 italic">
                    {ref.authors}
                  </p>

                  {/* Publicação */}
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Publicação:</strong> {ref.publication}
                  </p>

                  {/* Referência ABNT */}
                  <div className="bg-muted/30 p-3 rounded-md mb-3 border-l-2 border-accent">
                    <p className="text-xs font-semibold mb-2 text-muted-foreground">
                      Formato ABNT:
                    </p>
                    <p className="text-xs leading-relaxed text-foreground font-mono">
                      {ref.abnt}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-2">
                    {ref.doi && (
                      <a
                        href={`https://doi.org/${ref.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground hover:opacity-80 transition-opacity"
                      >
                        DOI: {ref.doi}
                      </a>
                    )}
                    {ref.url && (
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs px-3 py-1 rounded-full border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        Acessar Artigo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Informações sobre Formato ABNT */}
        <div className="mt-12 md:mt-16 p-4 md:p-6 bg-muted/20 rounded-lg border border-border">
          <h2 className="text-lg md:text-xl font-bold mb-3">ℹ️ Sobre o Formato ABNT</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            As referências nesta página seguem as normas da ABNT (Associação Brasileira de Normas Técnicas),
            especificamente a NBR 6023:2018, que padroniza a apresentação de referências bibliográficas em trabalhos
            acadêmicos e científicos.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Para cada referência, você encontrará: autores, ano de publicação, título, periódico ou editora, DOI (quando
            disponível) e URL para acesso ao artigo completo.
          </p>
        </div>

        {/* Rodapé */}
        <footer className="mt-12 md:mt-16 py-6 md:py-8 px-3 md:px-4 text-center text-xs text-muted-foreground border-t border-border">
          <p className="mb-2 font-bold text-xs md:text-sm">
            💡 Seminário de Bioquímica 1 - Mutações e Doenças Genéticas
          </p>
          <p className="text-xs opacity-70">
            Última atualização: Junho de 2026
          </p>
        </footer>
      </div>
    </div>
  );
}
