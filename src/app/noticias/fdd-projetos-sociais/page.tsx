import type { Metadata } from "next";
import Link from "next/link";
import { ShareButtons } from "@/components/ShareButtons";
import { NoticiasSidebar } from "@/components/NoticiasSidebar";

export const metadata: Metadata = {
  title:
    "FDD/PB aprova 12 projetos sociais | Conselho da Comunidade da Comarca de João Pessoa/PB",
  description:
    "Conselho Gestor do FDD/PB aprova 12 projetos sociais voltados ao sistema prisional.",
};

export default function FddProjetosSociaisPage() {
  return (
    <main className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
          <div>
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
          Conselho Gestor do FDD/PB aprova 12 projetos sociais voltados ao
          sistema prisional
        </h1>
        <div className="mb-6 mt-3 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-[#526170]">2026</p>
          <ShareButtons titulo="Conselho Gestor do FDD/PB aprova 12 projetos sociais voltados ao sistema prisional" />
        </div>
        <div className="h-1.5 w-16 rounded-full bg-[#e5b42b]" />

        <img
          src="/acao-apoio-familiares-2.jpeg"
          alt="Conselho Gestor do FDD/PB aprova 12 projetos sociais voltados ao sistema prisional"
          className="mt-8 h-64 w-full rounded object-cover"
        />

        <p className="mt-8 text-justify leading-relaxed text-[#344555]">
          O Conselho Gestor do Fundo de Defesa dos Direitos Difusos da Paraíba
          aprovou 12 projetos sociais com foco na reinserção social, apoio a
          familiares e melhoria das condições do sistema prisional paraibano. A
          iniciativa reforça o compromisso do Estado com políticas públicas
          voltadas à ressocialização e à garantia de direitos das pessoas
          privadas de liberdade e seus familiares.
        </p>

        <a
          href="https://www.mppb.mp.br/index.php/pt/comunicacao/noticias/46-procuradoria-geral/62-fdd/27064-conselho-gestor-do-fdd-pb-aprova-12-projetos-sociais"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-sm border border-[#0f6bab] px-4 py-2 text-sm font-bold text-[#0f6bab] transition-all duration-300 hover:bg-[#0f6bab] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#e5b42b] focus:ring-offset-2"
        >
          Ver matéria completa →
        </a>

        <div className="mt-12 rounded-sm border border-[#d8e2ea] bg-[#f4f6f8] p-8 text-center sm:p-10">
          <h2 className="text-xl font-bold text-[#153f63]">Quer saber mais?</h2>
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

          <NoticiasSidebar slugAtual="fdd-projetos-sociais" />
        </div>
      </div>
    </main>
  );
}
