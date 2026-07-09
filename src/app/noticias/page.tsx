import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Todas as Notícias | Conselho da Comunidade da Comarca de João Pessoa/PB",
  description:
    "Registros institucionais e notícias do Conselho da Comunidade da Comarca de João Pessoa/PB.",
};

const noticias = [
  {
    imagem: "/gravidez-maternidade.png",
    data: "04 de julho de 2026",
    titulo:
      "Gravidez, maternidade e os desafios de manter laços com os filhos, dentro de uma penitenciária",
    resumo:
      "Reportagem do TJPB retrata a realidade de mulheres grávidas e mães na Penitenciária Feminina Maria Júlia Maranhão, em João Pessoa, e o acompanhamento do Conselho da Comunidade.",
    href: "/noticias/gravidez-maternidade-penitenciaria",
  },
  {
    imagem: "/thumb-cnj.png",
    data: "Julho 2026",
    titulo:
      "Visita técnica do CNJ à Paraíba destaca experiência com grupos reflexivos no sistema prisional",
    resumo:
      "A Paraíba recebeu visita técnica do Conselho Nacional de Justiça, ocasião em que foi apresentada a experiência do grupo reflexivo desenvolvido na Penitenciária Desembargador Silvio Porto.",
    href: "/noticias/visita-cnj-paraiba",
  },
  {
    imagem: "/acao-apoio-familiares-1.jpeg",
    data: "2026",
    titulo:
      "LOTEP discute projeto de acolhimento para familiares de internas do Presídio Feminino de João Pessoa",
    resumo:
      "Iniciativa promovida pela Loteria do Estado da Paraíba debateu estratégias de acolhimento e suporte psicossocial para familiares de mulheres privadas de liberdade.",
    href: "/noticias/lotep-acolhimento-familiares",
  },
  {
    imagem: "/acao-apoio-familiares-2.jpeg",
    data: "2026",
    titulo:
      "Conselho Gestor do FDD/PB aprova 12 projetos sociais voltados ao sistema prisional",
    resumo:
      "O Conselho Gestor do Fundo de Defesa dos Direitos Difusos da Paraíba aprovou 12 projetos sociais com foco na reinserção social, apoio a familiares e melhoria das condições do sistema prisional paraibano.",
    href: "/noticias/fdd-projetos-sociais",
  },
];

export default function NoticiasPage() {
  return (
    <main className="bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="text-sm font-semibold text-[#0f6bab] underline-offset-4 transition hover:underline"
        >
          ← Voltar ao início
        </Link>

        <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-[#386c38]">
          Notícias
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#153f63] sm:text-4xl">
          Todas as Notícias
        </h1>
        <div className="mt-5 h-1.5 w-16 rounded-full bg-[#e5b42b]" />

        <div className="mt-10 space-y-5">
          {noticias.map((noticia) => (
            <Link
              key={noticia.href}
              href={noticia.href}
              className="group flex gap-4 rounded border border-[#d8e2ea] bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer"
            >
              <img
                src={noticia.imagem}
                alt=""
                className="h-24 w-32 flex-shrink-0 rounded object-cover"
              />
              <div>
                <span className="text-xs text-[#526170]">{noticia.data}</span>
                <h2 className="font-semibold text-[#153f63] transition-colors group-hover:text-[#0f6bab]">
                  {noticia.titulo}
                </h2>
                <p className="mt-1 text-sm text-[#526170] text-justify">
                  {noticia.resumo}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-[#526170]">
          Mais notícias em breve. Acompanhe nossas redes:{" "}
          <a
            href="https://www.instagram.com/conselhodacomunidadejp/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#0f6bab] hover:underline"
          >
            @conselhodacomunidadejp
          </a>
        </p>
      </div>
    </main>
  );
}
