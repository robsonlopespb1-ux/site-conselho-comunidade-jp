import type { Metadata } from "next";
import Link from "next/link";
import { ShareButtons } from "@/components/ShareButtons";
import { NoticiasSidebar } from "@/components/NoticiasSidebar";

export const metadata: Metadata = {
  title:
    "Mutirão de documentação na Penitenciária Silvio Porto | Conselho da Comunidade da Comarca de João Pessoa/PB",
  description:
    "Ação integrada com o Instituto de Polícia Científica e a Receita Federal garantiu emissão de documentos para pessoas privadas de liberdade na Penitenciária Desembargador Silvio Porto.",
};

export default function MutiraoDocumentacaoSilvioPortoPage() {
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
          Mutirão de documentação na Penitenciária Desembargador Silvio Porto
        </h1>
        <div className="mb-6 mt-3 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-[#526170]">10 de julho de 2026</p>
          <ShareButtons titulo="Mutirão de documentação na Penitenciária Desembargador Silvio Porto" />
        </div>
        <div className="h-1.5 w-16 rounded-full bg-[#e5b42b]" />

        <img
          src="/mutirao-documentacao.jpeg"
          alt="Mutirão de documentação na Penitenciária Silvio Porto"
          className="mt-8 w-full rounded-lg"
        />
        <p className="mt-2 text-xs italic text-[#526170]">
          Fotos: Conselho da Comunidade JP
        </p>

        <p className="mt-8 text-justify leading-relaxed text-[#344555]">
          No dia 10 de julho de 2026, a Penitenciária Desembargador Silvio
          Porto, em João Pessoa, recebeu um mutirão de documentação voltado às
          pessoas privadas de liberdade. A ação faz parte da programação de
          mutirões realizados pelo Conselho da Comunidade da Comarca de João
          Pessoa nos estabelecimentos penais do estado.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          A iniciativa contou com a participação do Instituto de Polícia
          Científica (IPC) e da Receita Federal, que atuaram na emissão de
          documentos essenciais como carteiras de identidade e CPF, garantindo
          o acesso a direitos fundamentais de cidadania.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          A emissão de documentos é uma etapa crucial para a reinserção
          social, pois viabiliza o acesso a benefícios, serviços públicos e
          oportunidades de trabalho. Sem documentação, o egresso encontra
          barreiras em praticamente todas as esferas da vida civil.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          O Conselho da Comunidade reafirma seu compromisso com ações
          concretas que promovam a dignidade e a cidadania das pessoas
          privadas de liberdade, contribuindo para um sistema prisional mais
          humano e eficiente.
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

          <NoticiasSidebar slugAtual="mutirao-documentacao-silvio-porto" />
        </div>
      </div>
    </main>
  );
}
