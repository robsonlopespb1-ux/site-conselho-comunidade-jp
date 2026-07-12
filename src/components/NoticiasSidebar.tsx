import Link from "next/link";

type NoticiasSidebarProps = {
  slugAtual: string;
};

const todasNoticias = [
  {
    titulo:
      "Castelo de Bonecas: mulheres do sistema prisional produzem os mascotes oficiais do SUS",
    data: "10/07/2026",
    imagem: "/castelo-bonecas.jpeg",
    slug: "castelo-bonecas-mascotes-sus",
  },
  {
    titulo:
      "Mutirão de documentação na Penitenciária Desembargador Silvio Porto",
    data: "10/07/2026",
    imagem: "/mutirao-documentacao.jpeg",
    slug: "mutirao-documentacao-silvio-porto",
  },
  {
    titulo:
      "Grupos reflexivos sobre violência contra a mulher na Penitenciária Silvio Porto",
    data: "10/07/2026",
    imagem: "/grupos-reflexivos.jpeg",
    slug: "grupos-reflexivos-violencia-mulher",
  },
  {
    titulo:
      "Gravidez, maternidade e os desafios de manter laços com os filhos, dentro de uma penitenciária",
    data: "04/07/2026",
    imagem: "/gravidez-maternidade.png",
    slug: "gravidez-maternidade-penitenciaria",
  },
  {
    titulo:
      "Visita técnica do CNJ à Paraíba destaca experiência com grupos reflexivos no sistema prisional",
    data: "Julho 2026",
    imagem: "/thumb-cnj.png",
    slug: "visita-cnj-paraiba",
  },
  {
    titulo: "LOTEP — Acolhimento de familiares de pessoas privadas de liberdade",
    data: "2026",
    imagem: "/acao-apoio-familiares-1.jpeg",
    slug: "lotep-acolhimento-familiares",
  },
  {
    titulo: "FDD — Projetos sociais para o sistema prisional",
    data: "2026",
    imagem: "/acao-apoio-familiares-2.jpeg",
    slug: "fdd-projetos-sociais",
  },
];

export function NoticiasSidebar({ slugAtual }: NoticiasSidebarProps) {
  const outras = todasNoticias
    .filter((noticia) => noticia.slug !== slugAtual)
    .slice(0, 5);

  return (
    <aside className="rounded-lg border border-[#d8e2ea] bg-[#f4f6f8] p-5 lg:sticky lg:top-36 lg:self-start">
      <h2 className="mb-4 text-lg font-bold text-[#153f63]">Mais Notícias</h2>
      {outras.map((noticia) => (
        <Link
          key={noticia.slug}
          href={`/noticias/${noticia.slug}`}
          className="mb-4 flex gap-3 rounded-lg p-2 transition hover:bg-white"
        >
          <img
            src={noticia.imagem}
            alt=""
            className="h-14 w-20 flex-shrink-0 rounded object-cover"
          />
          <div>
            <p className="text-xs text-[#526170]">{noticia.data}</p>
            <p className="line-clamp-2 text-sm font-semibold text-[#153f63]">
              {noticia.titulo}
            </p>
          </div>
        </Link>
      ))}
      <Link
        href="/noticias"
        className="text-sm font-semibold text-[#0f6bab] hover:underline"
      >
        Ver todas as notícias →
      </Link>
    </aside>
  );
}
