import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Relatórios | Conselho da Comunidade da Comarca de João Pessoa/PB",
  description:
    "Relatórios de gestão e atividades do Conselho da Comunidade da Comarca de João Pessoa/PB.",
};

export default function RelatoriosPage() {
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
        <h1 className="mt-3 text-3xl font-bold text-[#153f63]">Relatórios</h1>
        <div className="mt-2 mb-6 h-1 w-16 bg-[#e5b42b]" />

        <p className="text-base leading-8 text-[#344555] text-justify">
          Nesta seção, serão disponibilizados os relatórios de gestão e
          atividades do Conselho da Comunidade da Comarca de João Pessoa. Os
          documentos estão em fase de organização e serão publicados em breve.
        </p>

        <div className="mt-10 rounded-lg border-2 border-dashed border-[#d8e2ea] p-8 text-center">
          <p className="text-[#526170]">
            📄 Os relatórios serão disponibilizados em breve.
          </p>
        </div>
      </div>
    </main>
  );
}
