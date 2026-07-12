import type { Metadata } from "next";
import Link from "next/link";
import { ShareButtons } from "@/components/ShareButtons";
import { NoticiasSidebar } from "@/components/NoticiasSidebar";

export const metadata: Metadata = {
  title:
    "Grupos reflexivos sobre violência contra a mulher | Conselho da Comunidade da Comarca de João Pessoa/PB",
  description:
    "Sessão introdutória dos grupos reflexivos sobre violência contra a mulher reuniu internos da Penitenciária Desembargador Silvio Porto em torno da comunicação não violenta.",
};

export default function GruposReflexivosViolenciaMulherPage() {
  return (
    <main className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
          <div>
        <Link
          href="/noticias"
          className="text-sm font-semibold text-[#0f6bab] underline-offset-4 transition hover:underline"
        >
          ← Voltar para notícias
        </Link>

        <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-[#386c38]">
          Notícias
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#153f63] sm:text-4xl">
          Grupos reflexivos sobre violência contra a mulher na Penitenciária
          Silvio Porto
        </h1>
        <div className="mb-6 mt-3 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-[#526170]">10 de julho de 2026</p>
          <ShareButtons titulo="Grupos reflexivos sobre violência contra a mulher na Penitenciária Silvio Porto" />
        </div>
        <div className="h-1.5 w-16 rounded-full bg-[#e5b42b]" />

        <img
          src="/grupos-reflexivos.jpeg"
          alt="Sessão de grupos reflexivos sobre violência contra a mulher"
          className="mt-8 w-full rounded-lg"
        />
        <p className="mt-2 text-xs italic text-[#526170]">
          Fotos: Conselho da Comunidade JP
        </p>

        <p className="mt-8 text-justify leading-relaxed text-[#344555]">
          Na tarde do dia 10 de julho de 2026, foi realizada na Penitenciária
          Desembargador Silvio Porto a sessão introdutória dos grupos
          reflexivos sobre violência contra a mulher, atividade voltada a
          internos do sistema prisional.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          A sessão reuniu parte dos noivos que participarão do casamento
          coletivo promovido pelo sistema de justiça, abordando o tema da
          comunicação não violenta como ferramenta de transformação das
          relações interpessoais.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          Os grupos reflexivos são uma metodologia reconhecida pelo Poder
          Judiciário para promover a conscientização e a mudança de
          comportamento em casos relacionados à violência doméstica e
          familiar, contribuindo para a prevenção de novas ocorrências.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          O trabalho conjunto entre o Conselho da Comunidade, o Judiciário e a
          administração penitenciária demonstra que ações integradas dentro do
          sistema prisional geram impactos positivos tanto para a comunidade
          penal quanto para a sociedade como um todo.
        </p>

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

          <NoticiasSidebar slugAtual="grupos-reflexivos-violencia-mulher" />
        </div>
      </div>
    </main>
  );
}
