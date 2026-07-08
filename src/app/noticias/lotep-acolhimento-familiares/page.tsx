import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "LOTEP discute projeto de acolhimento para familiares | Conselho da Comunidade da Comarca de João Pessoa/PB",
  description:
    "LOTEP discute projeto de acolhimento para familiares de internas do Presídio Feminino de João Pessoa.",
};

export default function LotepAcolhimentoFamiliaresPage() {
  return (
    <main className="bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/#noticias"
          className="text-sm font-semibold text-[#0f6bab] underline-offset-4 transition hover:underline"
        >
          ← Voltar às Notícias
        </Link>

        <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-[#386c38]">
          Notícias
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#153f63] sm:text-4xl">
          LOTEP discute projeto de acolhimento para familiares de internas do
          Presídio Feminino de João Pessoa
        </h1>
        <p className="mt-3 text-sm text-[#526170]">2026</p>
        <div className="mt-5 h-1.5 w-16 rounded-full bg-[#e5b42b]" />

        <img
          src="/acao-apoio-familiares-1.jpeg"
          alt="LOTEP discute projeto de acolhimento para familiares de internas do Presídio Feminino de João Pessoa"
          className="mt-8 h-64 w-full rounded object-cover"
        />

        <p className="mt-8 text-justify leading-relaxed text-[#344555]">
          Iniciativa promovida pela Loteria do Estado da Paraíba debateu
          estratégias de acolhimento e suporte psicossocial para familiares de
          mulheres privadas de liberdade, articulando parcerias com a rede de
          proteção social de João Pessoa.
        </p>

        <a
          href="https://lotep.pb.gov.br/noticia/lotep-discute-projeto-de-acolhimento-para-familiares-de-internas-do-presidio-feminino-de-joao-pessoa"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-sm border border-[#0f6bab] px-4 py-2 text-sm font-bold text-[#0f6bab] transition-all duration-300 hover:bg-[#0f6bab] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#e5b42b] focus:ring-offset-2"
        >
          Ver matéria completa →
        </a>

        <div className="mt-12 rounded-sm border border-[#d8e2ea] bg-[#f4f6f8] p-8 text-center sm:p-10">
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
