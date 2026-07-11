import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Prestação de Contas | Conselho da Comunidade da Comarca de João Pessoa/PB",
  description:
    "Prestação de contas dos projetos e ações realizadas pelo Conselho da Comunidade da Comarca de João Pessoa/PB.",
};

export default function PrestacaoDeContasPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/#transparencia"
          className="text-sm font-semibold text-[#0f6bab] underline-offset-4 transition hover:underline"
        >
          ← Voltar ao início
        </Link>

        <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-[#386c38]">
          Transparência
        </p>
        <h1 className="mt-3 text-3xl font-bold text-[#153f63]">
          Prestação de Contas
        </h1>
        <div className="mt-2 mb-6 h-1 w-16 bg-[#e5b42b]" />

        <p className="text-base leading-8 text-[#344555] text-justify">
          Nesta seção, são disponibilizadas as notas fiscais e comprovantes
          referentes aos projetos e ações realizadas pelo Conselho da
          Comunidade da Comarca de João Pessoa. Os documentos são publicados
          conforme organizados, garantindo total transparência na aplicação
          dos recursos.
        </p>

        <h2 className="mt-10 mb-6 text-lg font-semibold text-[#153f63]">
          Selecione o ano:
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <Link
            href="/prestacao-de-contas/2026"
            className="block rounded-lg bg-[#0f6bab] py-6 text-center text-xl font-bold text-white transition-colors duration-200 hover:bg-[#153f63]"
          >
            2026
          </Link>
        </div>
      </div>
    </main>
  );
}
