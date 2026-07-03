import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Apoio a Familiares | Conselho da Comunidade da Comarca de João Pessoa/PB",
  description:
    "Ações de acolhimento, orientação e articulação da rede de proteção social para familiares de pessoas privadas de liberdade em João Pessoa/PB.",
};

const acoes = [
  {
    image: "/acao-apoio-familiares-1.jpeg",
    tag: "Acolhimento",
    title:
      "LOTEP discute projeto de acolhimento para familiares de internas do Presídio Feminino de João Pessoa",
    summary:
      "Iniciativa promovida pela Loteria do Estado da Paraíba debateu estratégias de acolhimento e suporte psicossocial para familiares de mulheres privadas de liberdade, articulando parcerias com a rede de proteção social de João Pessoa.",
    href: "https://lotep.pb.gov.br/noticia/lotep-discute-projeto-de-acolhimento-para-familiares-de-internas-do-presidio-feminino-de-joao-pessoa",
  },
  {
    image: "/acao-apoio-familiares-2.jpeg",
    tag: "Projetos Sociais",
    title:
      "Conselho Gestor do FDD/PB aprova 12 projetos sociais voltados ao sistema prisional",
    summary:
      "O Conselho Gestor do Fundo de Defesa dos Direitos Difusos da Paraíba aprovou 12 projetos sociais com foco na reinserção social, apoio a familiares e melhoria das condições do sistema prisional paraibano.",
    href: "https://www.mppb.mp.br/index.php/pt/comunicacao/noticias/46-procuradoria-geral/62-fdd/27064-conselho-gestor-do-fdd-pb-aprova-12-projetos-sociais",
  },
];

export default function ApoioFamiliaresPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/#atuacao"
          className="text-sm font-semibold text-[#0f6bab] underline-offset-4 transition hover:underline"
        >
          ← Voltar à Atuação
        </Link>

        {/* Header */}
        <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-[#386c38]">
          Eixo 02 — Atuação
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#153f63] sm:text-4xl">
          Apoio a Familiares
        </h1>
        <div className="mt-5 h-1.5 w-16 rounded-full bg-[#e5b42b]" />
        <p className="mt-6 text-base leading-8 text-[#344555] text-justify">
          O Conselho da Comunidade da Comarca de João Pessoa atua diretamente no
          apoio a familiares de pessoas privadas de liberdade, promovendo
          iniciativas de acolhimento, orientação e articulação com a rede de
          proteção social. Conheça algumas das ações desenvolvidas.
        </p>

        {/* Ações */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {acoes.map((acao) => (
            <article
              key={acao.title}
              className="flex flex-col overflow-hidden rounded-sm border border-[#d8e2ea] bg-white shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <img
                src={acao.image}
                alt={acao.title}
                className="h-52 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#386c38]">
                  {acao.tag}
                </span>
                <h2 className="mt-3 text-lg font-bold leading-7 text-[#153f63]">
                  {acao.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-7 text-[#344555] text-justify">
                  {acao.summary}
                </p>
                <a
                  href={acao.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center self-start rounded-sm border border-[#0f6bab] px-4 py-2 text-sm font-bold text-[#0f6bab] transition-all duration-300 hover:bg-[#0f6bab] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#e5b42b] focus:ring-offset-2"
                >
                  Ver matéria completa →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Seção inferior */}
        <div className="mt-14 rounded-sm border border-[#d8e2ea] bg-[#f4f6f8] p-8 text-center sm:p-10">
          <h2 className="text-xl font-bold text-[#153f63]">
            Quer saber mais ou contribuir?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-[#526170]">
            Entre em contato com o Conselho da Comunidade de João Pessoa e saiba
            como apoiar familiares de pessoas privadas de liberdade.
          </p>
          <Link
            href="/#contato"
            className="mt-6 inline-flex items-center justify-center rounded-sm bg-[#0f6bab] px-6 py-3 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-[#0d5d95] focus:outline-none focus:ring-2 focus:ring-[#e5b42b] focus:ring-offset-2"
          >
            Fale com o Conselho
          </Link>
        </div>
      </div>
    </main>
  );
}
