import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prestação de Contas 2026 — Conselho da Comunidade JP",
  description:
    "Notas fiscais e comprovantes de 2026 do Conselho da Comunidade da Comarca de João Pessoa.",
};

const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

// Meses que possuem documentos publicados — inclua o mês aqui e adicione a
// condição correspondente no map para o card aparecer dentro do <details>.
const mesesComNotas = ["Junho", "Julho"];

function NotasFiscaisJunho() {
  return (
    <>
      <div className="mb-6 rounded-lg border border-[#d8e2ea] bg-[#f4f6f8] p-6">
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded-full bg-[#0f6bab] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
            Nota Fiscal
          </span>
        </div>

        <h3 className="mb-2 text-lg font-bold text-[#153f63]">
          Aquisição de materiais de construção — madeira, tijolos e vergalhão
        </h3>

        <p className="mb-4 text-sm text-[#526170]">
          Para construção de área externa de acolhimento para familiares de
          mulheres privadas de liberdade na Penitenciária Feminina de João
          Pessoa.
        </p>

        <div className="mb-4 rounded-lg border border-[#d8e2ea] bg-white p-4">
          <div className="grid grid-cols-1 gap-3 text-sm text-[#344555] sm:grid-cols-3">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#526170]">
                NF-e
              </p>
              <p>Nº 28758</p>
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#526170]">
                Data de Emissão
              </p>
              <p>11/06/2026</p>
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#526170]">
                Valor Total
              </p>
              <p className="font-bold text-[#153f63]">R$ 3.040,00</p>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <p className="mb-2 text-sm font-semibold text-[#344555]">
            Itens adquiridos:
          </p>
          <ul className="list-inside list-disc space-y-1 text-sm text-[#344555]">
            <li>8 unidades — Vergalhão 1/4 CA 50 6,3m 12mt — Aço B.</li>
            <li>Madeira Maçaranduba 3x4 (peças)</li>
            <li>Madeira Maçaranduba 3x3 (peças)</li>
            <li>630 unidades — Tijolo 8 furos 9x19x19</li>
          </ul>
        </div>

        <a
          href="https://drive.google.com/file/d/10e7JJxBjsN9NpC37GHZBUwMHWVtwfIQx/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f6bab] hover:underline"
        >
          📄 Ver nota fiscal completa (PDF)
        </a>
      </div>

      <div className="rounded-lg border border-[#d8e2ea] bg-[#f4f6f8] p-6">
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded-full bg-[#0f6bab] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
            Nota Fiscal
          </span>
        </div>

        <h3 className="mb-2 text-lg font-bold text-[#153f63]">
          Aquisição de materiais de construção — telhas, cerâmica, tubulação e
          acabamento
        </h3>

        <p className="mb-4 text-sm text-[#526170]">
          Para construção de área externa de acolhimento para familiares de
          mulheres privadas de liberdade na Penitenciária Feminina de João
          Pessoa.
        </p>

        <div className="mb-4 rounded-lg border border-[#d8e2ea] bg-white p-4">
          <div className="grid grid-cols-1 gap-3 text-sm text-[#344555] sm:grid-cols-3">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#526170]">
                NF-e
              </p>
              <p>Nº 3262</p>
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#526170]">
                Data de Emissão
              </p>
              <p>11/06/2026</p>
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#526170]">
                Valor Total
              </p>
              <p className="font-bold text-[#153f63]">R$ 3.310,00</p>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <p className="mb-2 text-sm font-semibold text-[#344555]">
            Itens adquiridos:
          </p>
          <ul className="list-inside list-disc space-y-1 text-sm text-[#344555]">
            <li>52 peças — Telha Brasilit 2,44 x 0,50 4mm</li>
            <li>2 pacotes — Prego Telheiro 18x30 500g</li>
            <li>Cerâmica Carrara Estatuário 60x60 Comercial</li>
            <li>Cola Acit 15Kg</li>
            <li>Rejunte Silicone 1Kg CE Platina</li>
            <li>Canos ESG 100mm e 150mm (tubulação hidráulica)</li>
          </ul>
        </div>

        <a
          href="https://drive.google.com/file/d/1Tf9x8SUWMboz8f0FwIJ2U43oSOY3OO8N/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f6bab] hover:underline"
        >
          📄 Ver nota fiscal completa (PDF)
        </a>
      </div>
    </>
  );
}

function NotaFiscalJulho() {
  return (
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
          <li>7 unidades — Baqueta Liverpool 7A Classic Series Madeira (par)</li>
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
  );
}

export default function PrestacaoDeContas2026Page() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/prestacao-de-contas"
          className="text-sm font-semibold text-[#0f6bab] underline-offset-4 transition hover:underline"
        >
          ← Voltar
        </Link>

        <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-[#386c38]">
          Transparência
        </p>
        <h1 className="mt-3 text-3xl font-bold text-[#153f63]">
          Prestação de Contas — 2026
        </h1>
        <div className="mt-2 mb-8 h-1 w-16 bg-[#e5b42b]" />

        <p className="mb-10 text-base leading-8 text-[#344555] text-justify">
          Documentos organizados por mês. Clique nos meses destacados para
          visualizar as notas fiscais e comprovantes.
        </p>

        <style>{`summary::-webkit-details-marker { display: none; }`}</style>

        {meses.map((mes) =>
          mesesComNotas.includes(mes) ? (
            <details key={mes} className="group mb-6">
              <summary className="flex cursor-pointer list-none items-center gap-3 rounded-lg bg-[#0f6bab] px-5 py-4 text-white transition-colors duration-200 hover:bg-[#153f63]">
                <span className="inline-block h-1 w-6 bg-[#e5b42b]" />
                <span className="text-lg font-bold">{mes}</span>
                <span className="ml-auto text-sm opacity-80">
                  ▼ Clique para visualizar
                </span>
              </summary>
              <div className="mt-4 pl-2">
                {mes === "Junho" ? <NotasFiscaisJunho /> : null}
                {mes === "Julho" ? <NotaFiscalJulho /> : null}
              </div>
            </details>
          ) : (
            <div
              key={mes}
              className="mb-4 flex items-center gap-3 rounded-lg border border-[#d8e2ea] bg-[#f4f6f8] px-5 py-3"
            >
              <span className="inline-block h-1 w-6 bg-[#d8e2ea]" />
              <span className="font-semibold text-[#526170]">{mes}</span>
              <span className="ml-auto text-sm italic text-[#526170]">
                Nenhum registro
              </span>
            </div>
          ),
        )}
      </div>
    </main>
  );
}
