import type { Metadata } from "next";
import Link from "next/link";
import { ShareButtons } from "@/components/ShareButtons";
import { NoticiasSidebar } from "@/components/NoticiasSidebar";

export const metadata: Metadata = {
  title:
    "Nova ala LGBTQIAPN+ no Presídio do Roger | Conselho da Comunidade da Comarca de João Pessoa/PB",
  description:
    "Espaço inaugurado na Penitenciária Desembargador Flósculo da Nóbrega resulta da atuação conjunta da Polícia Penal da Paraíba, Vara de Execução Penal de João Pessoa, Universal nos Presídios e Construtora Monte Sinai Ltda.",
  openGraph: {
    title:
      "Integração entre instituições viabiliza nova ala LGBTQIAPN+ no Presídio do Roger",
    description:
      "Espaço inaugurado na Penitenciária Desembargador Flósculo da Nóbrega resulta da atuação conjunta da Polícia Penal da Paraíba, Vara de Execução Penal de João Pessoa, Universal nos Presídios e Construtora Monte Sinai Ltda.",
    url: "https://www.conselhodacomunidadejp.com.br/noticias/nova-ala-lgbtqiapn-presidio-do-roger",
    siteName: "Conselho da Comunidade da Comarca de João Pessoa/PB",
    images: [
      {
        url: "https://www.conselhodacomunidadejp.com.br/nova-ala-corte-da-fita-og.jpeg",
        width: 1200,
        height: 630,
        alt: "Descerramento da placa de inauguração da Ala LGBTQIAPN+ da Penitenciária Desembargador Flósculo da Nóbrega",
      },
    ],
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Integração entre instituições viabiliza nova ala LGBTQIAPN+ no Presídio do Roger",
    description:
      "Espaço inaugurado na Penitenciária Desembargador Flósculo da Nóbrega resulta da atuação conjunta da Polícia Penal da Paraíba, Vara de Execução Penal de João Pessoa, Universal nos Presídios e Construtora Monte Sinai Ltda.",
    images: [
      "https://www.conselhodacomunidadejp.com.br/nova-ala-corte-da-fita-og.jpeg",
    ],
  },
};

export default function NovaAlaLgbtqiapnPresidioDoRogerPage() {
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
          Integração entre instituições viabiliza nova ala LGBTQIAPN+ no
          Presídio do Roger
        </h1>
        <div className="mb-6 mt-3 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-[#526170]">22 de outubro de 2026</p>
          <ShareButtons titulo="Integração entre instituições viabiliza nova ala LGBTQIAPN+ no Presídio do Roger" />
        </div>
        <div className="h-1.5 w-16 rounded-full bg-[#e5b42b]" />

        <img
          src="/nova-ala-corte-da-fita.jpeg"
          alt="Descerramento da placa de inauguração da Ala LGBTQIAPN+ da Penitenciária Desembargador Flósculo da Nóbrega, com fita vermelha"
          className="mt-8 w-full rounded-lg"
        />
        <p className="mt-2 text-xs italic text-[#526170]">
          Fotos: Conselho da Comunidade JP
        </p>

        <p className="mt-8 text-justify leading-relaxed text-[#344555]">
          A Penitenciária Desembargador Flósculo da Nóbrega, conhecida como
          Presídio do Roger, em João Pessoa, passou a contar com uma nova ala
          destinada à população LGBTQIAPN+.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          A construção foi possível por meio da integração entre a Polícia
          Penal da Paraíba, a Vara de Execução Penal de João Pessoa, a
          Universal nos Presídios (UNP) e a Construtora Monte Sinai Ltda.,
          reunindo esforços do poder público, do sistema de Justiça, de
          instituição religiosa e da iniciativa privada.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          Durante a solenidade, a juíza da Vara de Execução Penal de João
          Pessoa, Andréa Arcoverde Cavalcanti Vaz, agradeceu às instituições e
          aos profissionais envolvidos e destacou a importância de assegurar
          condições compatíveis com a dignidade das pessoas privadas de
          liberdade.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          “Garantir condições adequadas, segurança e respeito às
          particularidades de cada pessoa não constitui privilégio, mas o
          cumprimento de um dever institucional. Essa entrega demonstra o que
          podemos construir quando diferentes instituições trabalham de forma
          integrada.”
        </p>

        <img
          src="/nova-ala-bispo-e-juiza.jpeg"
          alt="A juíza da Vara de Execução Penal conversa com o bispo e representantes da Universal nos Presídios durante a solenidade"
          className="mt-8 w-full rounded-lg"
        />

        <p className="mt-8 text-justify leading-relaxed text-[#344555]">
          Representando a Universal nos Presídios, o bispo Miguel Soares da
          Silva ressaltou a contribuição da assistência religiosa e espiritual
          para o processo de ressocialização e para a reconstrução de
          trajetórias.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          “A instituição religiosa leva acolhimento, escuta, fé e esperança. A
          ressocialização também passa pela reconstrução interior e pela
          possibilidade de a pessoa acreditar que sua história pode recomeçar.”
        </p>

        <img
          src="/nova-ala-juiza-e-diretores.jpeg"
          alt="Os diretores da unidade prisional e a juíza da Vara de Execução Penal durante a solenidade, ao lado do banner do Conselho da Comunidade"
          className="mt-8 w-full rounded-lg"
        />

        <p className="mt-8 text-justify leading-relaxed text-[#344555]">
          Os diretores da unidade, Gleyson Rogério Martins de Oliveira e Raul
          de Carvalho Caldas, destacaram o trabalho realizado pelos policiais
          penais, servidores e parceiros que contribuíram para a concretização
          do espaço. Segundo eles, a nova estrutura representa também um
          avanço na organização da unidade, conciliando segurança, proteção e
          melhores condições para o cumprimento da pena.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          O presidente do Conselho da Comunidade da Comarca de João Pessoa,
          Thiago Robson, lembrou, em sua fala, uma reflexão surgida a partir de
          uma pergunta feita por seu filho, de oito anos, sobre as condições
          existentes no sistema prisional. Para ele, a perplexidade de uma
          criança diante dessas realidades também deve provocar a reflexão dos
          adultos.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          “Talvez o problema comece quando deixamos de nos surpreender com
          aquilo que nunca deveria parecer normal. Momentos como este
          representam um lampejo de esperança, porque reconhecer as diferenças
          não significa privilégios, mas garantir que nenhuma pessoa seja
          invisibilizada.”
        </p>

        <img
          src="/nova-ala-placa-inaugural.jpeg"
          alt="Autoridades e parceiros reunidos junto à placa de inauguração da nova ala, envolta em fita vermelha"
          className="mt-8 w-full rounded-lg"
        />

        <p className="mt-8 text-justify leading-relaxed text-[#344555]">
          A inauguração da nova ala demonstra que segurança, dignidade e
          garantia de direitos podem caminhar de forma conjunta. Mais do que a
          entrega de uma estrutura física, a iniciativa evidencia a importância
          da cooperação entre o Judiciário, a Polícia Penal, instituições
          religiosas, iniciativa privada e sociedade civil para o
          aprimoramento da execução penal.
        </p>

        <img
          src="/nova-ala-placa-detalhe.jpeg"
          alt="Detalhe da placa de inauguração da Ala LGBTQIAPN+ da Penitenciária Desembargador Flósculo da Nóbrega, com as instituições e autoridades envolvidas"
          className="mt-8 w-full rounded-lg"
        />

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

          <NoticiasSidebar slugAtual="nova-ala-lgbtqiapn-presidio-do-roger" />
        </div>
      </div>
    </main>
  );
}
