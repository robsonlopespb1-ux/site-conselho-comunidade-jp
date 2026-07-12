import type { Metadata } from "next";
import Link from "next/link";
import { ShareButtons } from "@/components/ShareButtons";
import { NoticiasSidebar } from "@/components/NoticiasSidebar";

export const metadata: Metadata = {
  title:
    "Castelo de Bonecas: mascotes oficiais do SUS | Conselho da Comunidade da Comarca de João Pessoa/PB",
  description:
    "Artesãs da Penitenciária Feminina Maria Júlia Maranhão confeccionaram os novos mascotes do SUS, SUSi e PegaSUS, em projeto do Emprega Lab do CNJ que promove inclusão sociolaboral.",
};

export default function CasteloBonecasMascotesSusPage() {
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
          Castelo de Bonecas: mulheres do sistema prisional produzem os
          mascotes oficiais do SUS
        </h1>
        <div className="mb-6 mt-3 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-[#526170]">10 de julho de 2026</p>
          <ShareButtons titulo="Castelo de Bonecas: mulheres do sistema prisional produzem os mascotes oficiais do SUS" />
        </div>
        <div className="h-1.5 w-16 rounded-full bg-[#e5b42b]" />

        <img
          src="/castelo-bonecas.jpeg"
          alt="Artesãs do Castelo de Bonecas com os mascotes SUSi e PegaSUS"
          className="mt-8 w-full rounded-lg"
        />
        <p className="mt-2 text-xs italic text-[#526170]">
          Texto e fotos: Fernando Patriota / TJPB
        </p>

        <p className="mt-8 text-justify leading-relaxed text-[#344555]">
          Mulheres privadas de liberdade da Penitenciária Feminina Maria Júlia
          Maranhão, em João Pessoa, conquistaram reconhecimento nacional ao
          confeccionar os novos mascotes oficiais do Sistema Único de Saúde
          (SUS), batizados de SUSi e PegaSUS. O trabalho faz parte do projeto
          Castelo de Bonecas, vinculado ao Emprega Lab — uma iniciativa do
          plano Pena Justa do Conselho Nacional de Justiça (CNJ).
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          O Emprega Lab é voltado à qualificação profissional e à inclusão no
          mercado de trabalho de pessoas privadas de liberdade e egressas do
          sistema prisional. Na Paraíba, o Castelo de Bonecas se consolidou
          como uma das principais iniciativas estruturantes do programa,
          promovido pela Secretaria de Administração Penitenciária (SEAP/PB)
          com o apoio do Tribunal de Justiça da Paraíba.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          O projeto conta atualmente com a participação de 15 reeducandas. A
          cada três dias trabalhados na confecção das bonecas e artesanatos,
          as participantes reduzem um dia de suas penas. Os recursos
          arrecadados com as vendas são rateados entre as próprias
          participantes, gerando renda para suas famílias durante o período de
          reclusão.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          O reconhecimento do Castelo de Bonecas foi destacado pelo ministro
          da Saúde, Alexandre Padilha, que apresentou os mascotes durante o
          XXXIX Congresso do Conselho Nacional de Secretarias Municipais de
          Saúde (Conasems), em Porto Alegre/RS, reunindo mais de 13 mil
          gestores da saúde de todo o Brasil.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          A iniciativa demonstra como a articulação entre o sistema de
          Justiça, a saúde pública e a política penal pode produzir resultados
          concretos, oferecendo oportunidades que promovam autonomia,
          dignidade e trabalho decente às pessoas privadas de liberdade.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          Leia a matéria completa no{" "}
          <a
            href="https://www.tjpb.jus.br/w/emprega-lab-castelo-de-bonecas-produz-os-novos-mascotes-do-sistema-%C3%BAnico-de-sa%C3%BAde"
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

          <NoticiasSidebar slugAtual="castelo-bonecas-mascotes-sus" />
        </div>
      </div>
    </main>
  );
}
