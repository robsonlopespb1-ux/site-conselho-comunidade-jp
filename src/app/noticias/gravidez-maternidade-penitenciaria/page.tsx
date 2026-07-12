import type { Metadata } from "next";
import Link from "next/link";
import { ShareButtons } from "@/components/ShareButtons";
import { NoticiasSidebar } from "@/components/NoticiasSidebar";

export const metadata: Metadata = {
  title:
    "Gravidez e maternidade na penitenciária | Conselho da Comunidade da Comarca de João Pessoa/PB",
  description:
    "Reportagem do TJPB retrata a realidade de mulheres grávidas e mães na Penitenciária Feminina Maria Júlia Maranhão, em João Pessoa, e o acompanhamento do Conselho da Comunidade.",
};

export default function GravidezMaternidadePenitenciariaPage() {
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
          Gravidez, maternidade e os desafios de manter laços com os filhos,
          dentro de uma penitenciária
        </h1>
        <div className="mb-6 mt-3 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-[#526170]">04 de julho de 2026</p>
          <ShareButtons titulo="Gravidez, maternidade e os desafios de manter laços com os filhos, dentro de uma penitenciária" />
        </div>
        <div className="h-1.5 w-16 rounded-full bg-[#e5b42b]" />

        <img
          src="/gravidez-maternidade.png"
          alt="Mulheres e maternidade no sistema prisional"
          className="mt-8 w-full rounded-lg"
        />
        <p className="mt-2 text-xs italic text-[#526170]">
          Texto e fotos: Fernando Patriota / TJPB
        </p>

        <p className="mt-8 text-justify leading-relaxed text-[#344555]">
          Uma reportagem especial do Tribunal de Justiça da Paraíba (TJPB),
          publicada em 04 de julho de 2026, trouxe à tona a realidade
          enfrentada por mulheres grávidas e mães que cumprem pena na
          Penitenciária de Reeducação Feminina Maria Júlia Maranhão, em João
          Pessoa.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          A matéria, de autoria do jornalista Fernando Patriota, abordou os
          desafios de manter os vínculos familiares no ambiente prisional, a
          importância do acolhimento materno nos primeiros meses de vida e as
          condições estruturais oferecidas pela unidade para gestantes e
          lactantes.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          O Conselho da Comunidade da Comarca de João Pessoa, por meio de
          visitas periódicas de inspeção, acompanha de perto as condições das
          internas, verificando aspectos como assistência à saúde,
          alimentação, higiene e o acesso aos direitos previstos na Lei de
          Execução Penal.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          A reportagem reforça a importância do olhar humanizado sobre a
          maternidade no cárcere e o papel fundamental de órgãos como o
          Conselho da Comunidade na fiscalização e na garantia de direitos das
          pessoas privadas de liberdade.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          Leia a matéria completa no{" "}
          <a
            href="https://www.tjpb.jus.br/w/gravidez-maternidade-e-os-desafios-de-manter-la%C3%A7os-com-os-filhos-dentro-de-uma-penitenci%C3%A1ria-1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0f6bab] hover:underline font-semibold"
          >
            portal do TJPB
          </a>
          .
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

          <NoticiasSidebar slugAtual="gravidez-maternidade-penitenciaria" />
        </div>
      </div>
    </main>
  );
}
