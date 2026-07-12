import type { Metadata } from "next";
import Link from "next/link";
import { ShareButtons } from "@/components/ShareButtons";
import { NoticiasSidebar } from "@/components/NoticiasSidebar";

export const metadata: Metadata = {
  title:
    "Visita técnica do CNJ à Paraíba | Conselho da Comunidade da Comarca de João Pessoa/PB",
  description:
    "Visita técnica do CNJ à Paraíba destaca experiência com grupos reflexivos no sistema prisional.",
};

export default function VisitaCnjParaibaPage() {
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
          Visita técnica do CNJ à Paraíba destaca experiência com grupos
          reflexivos no sistema prisional
        </h1>
        <div className="mb-6 mt-3 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-[#526170]">Julho de 2026</p>
          <ShareButtons titulo="Visita técnica do CNJ à Paraíba destaca experiência com grupos reflexivos no sistema prisional" />
        </div>
        <div className="h-1.5 w-16 rounded-full bg-[#e5b42b]" />

        {/* Vídeo */}
        <div className="mt-8 h-72 w-full overflow-hidden rounded-sm bg-black sm:h-96">
          <iframe
            src="https://drive.google.com/file/d/1ud6qz0NDl4T0SlB09UgYC0B-yB0DN0b7/preview"
            allow="autoplay"
            className="h-full w-full"
            title="Vídeo: Visita técnica do CNJ à Paraíba sobre grupos reflexivos no sistema prisional"
          />
        </div>

        {/* Texto completo */}
        <div className="mt-8 space-y-5">
          <p className="text-justify leading-relaxed text-[#344555]">
            A Paraíba recebeu visita técnica do Conselho Nacional de Justiça,
            ocasião em que foi apresentada a experiência do grupo reflexivo
            desenvolvido na Penitenciária Desembargador Silvio Porto.
          </p>
          <p className="text-justify leading-relaxed text-[#344555]">
            A iniciativa foi destacada como uma prática relevante no âmbito do
            sistema prisional paraibano, fortalecendo ações de acompanhamento,
            responsabilização, escuta qualificada e reflexão junto às pessoas
            privadas de liberdade.
          </p>
          <p className="text-justify leading-relaxed text-[#344555]">
            No contexto da visita, o Conselho da Comunidade de João Pessoa
            esteve institucionalmente representado por seus membros natos, os
            juízes da Vara de Execução Penal, Dra. Andrea Arcoverde e Dr. Carlos
            Neves da França, que integram o Conselho em razão de suas funções
            junto à execução penal.
          </p>
          <p className="text-justify leading-relaxed text-[#344555]">
            Também participaram do momento a Juíza Dra. Graziela Queiroga, o
            Secretário de Estado da Administração Penitenciária, Dr. Tércio
            Chaves, além da direção da Penitenciária Desembargador Silvio Porto,
            representada pelo diretor Gilberto Rio, servidores e colaboradores
            envolvidos nas ações desenvolvidas na unidade.
          </p>
          <p className="text-justify leading-relaxed text-[#344555]">
            A visita reforça o reconhecimento das práticas desenvolvidas na
            Paraíba e evidencia a importância dos grupos reflexivos como
            instrumentos de diálogo, responsabilização, transformação e
            construção de novas perspectivas no contexto da execução penal.
          </p>
        </div>

        {/* Créditos */}
        <div className="mt-6 rounded bg-[#f4f6f8] p-4 text-sm text-[#526170]">
          <p>
            📌 Fonte:{" "}
            <a
              href="https://www.tjpb.jus.br/e/videos/29235/7641631"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0f6bab] hover:underline"
            >
              TJPB
            </a>
          </p>
          <p className="mt-2">
            Instagram TJPB:{" "}
            <a
              href="https://www.instagram.com/p/DagFbYvRxTK/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0f6bab] hover:underline"
            >
              @tjpb_oficial
            </a>
          </p>
          <p className="mt-2">
            Instagram Conselho:{" "}
            <a
              href="https://www.instagram.com/p/DagatnfvB4I/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0f6bab] hover:underline"
            >
              @conselhodacomunidadejp
            </a>
          </p>
        </div>
          </div>

          <NoticiasSidebar slugAtual="visita-cnj-paraiba" />
        </div>
      </div>
    </main>
  );
}
