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

        <div className="mt-10 mb-12">
          <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-[#153f63] lg:text-2xl">
            <span className="inline-block h-1 w-8 bg-[#e5b42b]" />
            Julho de 2026
          </h2>

          <div className="rounded-lg border border-[#d8e2ea] bg-[#f4f6f8] p-6">
            <div className="mb-3 flex items-center gap-2">
              <span className="rounded-full bg-[#0f6bab] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                Nota Fiscal
              </span>
            </div>

            <h3 className="mb-2 text-lg font-bold text-[#153f63]">
              Aquisição de equipamentos musicais para projetos culturais nas
              unidades prisionais
            </h3>

            <p className="mb-4 text-sm text-[#526170]">
              Em parceria com o Juizado Especial Criminal de João Pessoa.
            </p>

            <div className="mb-4 rounded-lg border border-[#d8e2ea] bg-white p-4">
              <div className="grid grid-cols-1 gap-3 text-sm text-[#344555] sm:grid-cols-3">
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#526170]">
                    NF-e
                  </p>
                  <p>Nº 000006509</p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#526170]">
                    Data de Emissão
                  </p>
                  <p>10/07/2026</p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#526170]">
                    Valor Total
                  </p>
                  <p className="font-bold text-[#153f63]">R$ 4.260,00</p>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <p className="mb-2 text-sm font-semibold text-[#344555]">
                Itens adquiridos:
              </p>
              <ul className="list-inside list-disc space-y-1 text-sm text-[#344555]">
                <li>5 unidades — Baqueta Liverpool 5B Lisa Madeira (par)</li>
                <li>
                  7 unidades — Baqueta Liverpool 7A Classic Series Madeira
                  (par)
                </li>
                <li>2 unidades — Cubo Baixo Staner BX-100</li>
              </ul>
            </div>

            <a
              href="https://drive.google.com/file/d/11wn30jKA8S3N_Df8W3KDxXvssvmSubRI/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f6bab] hover:underline"
            >
              📄 Ver nota fiscal completa (PDF)
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
