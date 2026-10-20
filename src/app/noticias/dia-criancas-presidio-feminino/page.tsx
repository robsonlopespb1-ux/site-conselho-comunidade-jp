import type { Metadata } from "next";
import Link from "next/link";
import { ShareButtons } from "@/components/ShareButtons";
import { NoticiasSidebar } from "@/components/NoticiasSidebar";

export const metadata: Metadata = {
  title:
    "Dia das Crianças no Presídio Feminino | Conselho da Comunidade da Comarca de João Pessoa/PB",
  description:
    "Programação realizada na Penitenciária Feminina Maria Júlia Maranhão destaca o papel da família, do acolhimento e da proteção social no processo de reinserção.",
  openGraph: {
    title:
      "Dia das Crianças no Presídio Feminino de João Pessoa reforça a importância dos vínculos familiares",
    description:
      "Programação realizada na Penitenciária Feminina Maria Júlia Maranhão destaca o papel da família, do acolhimento e da proteção social no processo de reinserção.",
    url: "https://www.conselhodacomunidadejp.com.br/noticias/dia-criancas-presidio-feminino",
    siteName: "Conselho da Comunidade da Comarca de João Pessoa/PB",
    images: [
      {
        url: "https://www.conselhodacomunidadejp.com.br/dia-criancas-presidio-feminino.jpeg",
        width: 960,
        height: 1280,
        alt: "Dia das Crianças na Penitenciária Feminina Maria Júlia Maranhão",
      },
    ],
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dia das Crianças no Presídio Feminino de João Pessoa reforça a importância dos vínculos familiares",
    description:
      "Programação realizada na Penitenciária Feminina Maria Júlia Maranhão destaca o papel da família, do acolhimento e da proteção social no processo de reinserção.",
    images: [
      "https://www.conselhodacomunidadejp.com.br/dia-criancas-presidio-feminino.jpeg",
    ],
  },
};

export default function DiaCriancasPresidioFemininoPage() {
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
          Dia das Crianças no Presídio Feminino de João Pessoa reforça a
          importância dos vínculos familiares
        </h1>
        <div className="mb-6 mt-3 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-[#526170]">17 de outubro de 2026</p>
          <ShareButtons titulo="Dia das Crianças no Presídio Feminino de João Pessoa reforça a importância dos vínculos familiares" />
        </div>
        <div className="h-1.5 w-16 rounded-full bg-[#e5b42b]" />

        <img
          src="/dia-criancas-presidio-feminino.jpeg"
          alt="Dia das Crianças na Penitenciária Feminina Maria Júlia Maranhão"
          className="mt-8 w-full rounded-lg"
        />
        <p className="mt-2 text-xs italic text-[#526170]">
          Fotos: Conselho da Comunidade JP
        </p>

        <p className="mt-8 text-justify leading-relaxed text-[#344555]">
          A Penitenciária de Reeducação Feminina Maria Júlia Maranhão, em João
          Pessoa, realizou uma programação especial em alusão ao Dia das
          Crianças, proporcionando um momento de acolhimento e valorização dos
          vínculos familiares no ambiente prisional.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          Mais do que marcar uma data comemorativa, iniciativas dessa natureza
          ajudam a lançar um olhar para uma dimensão que não pode ser esquecida
          durante o cumprimento da pena: a preservação das relações familiares.
          A privação de liberdade alcança diretamente a mulher que cumpre pena,
          mas seus efeitos também são sentidos por filhos, companheiros e
          demais familiares, especialmente pelas crianças.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          O Conselho da Comunidade da Comarca de João Pessoa parabeniza a
          gestão da Penitenciária de Reeducação Feminina Maria Júlia Maranhão e
          todos os servidores e colaboradores envolvidos na iniciativa,
          reconhecendo a importância de ações que conciliam segurança,
          responsabilidade institucional e atenção às relações humanas
          existentes no contexto prisional.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          A família exerce papel fundamental durante o período de privação de
          liberdade e também na preparação para o retorno à convivência em
          sociedade. A manutenção dos vínculos afetivos pode contribuir para
          fortalecer referências, responsabilidades e perspectivas de futuro,
          além de reduzir os impactos que o encarceramento provoca sobre
          aqueles que permanecem fora dos muros da prisão.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          Esse cuidado se torna ainda mais necessário quando envolve crianças.
          Filhos não cumprem pena. Por isso, a atuação do Estado e da rede de
          proteção deve buscar impedir que as consequências da prisão dos pais
          resultem em abandono, estigmatização ou perda de direitos para
          crianças e adolescentes.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          É nesse contexto que a proteção social assume papel indispensável.
          Políticas públicas, sistema de Justiça, administração penitenciária,
          Conselho da Comunidade e sociedade civil precisam atuar de forma
          articulada para que as famílias afetadas pelo encarceramento tenham
          acesso a acolhimento, orientação e à rede de serviços públicos sempre
          que necessário.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          Celebrar o Dia das Crianças dentro de uma unidade prisional,
          portanto, também significa reconhecer que fortalecer vínculos
          familiares é proteger direitos, preservar afetos e construir
          possibilidades para o futuro.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          O Conselho da Comunidade da Comarca de João Pessoa reafirma seu
          compromisso com iniciativas que promovam dignidade, proteção social e
          fortalecimento dos vínculos familiares das pessoas privadas de
          liberdade.
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

          <NoticiasSidebar slugAtual="dia-criancas-presidio-feminino" />
        </div>
      </div>
    </main>
  );
}
