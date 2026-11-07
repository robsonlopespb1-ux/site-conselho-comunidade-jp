import type { Metadata } from "next";
import Link from "next/link";
import { ShareButtons } from "@/components/ShareButtons";
import { NoticiasSidebar } from "@/components/NoticiasSidebar";

export const metadata: Metadata = {
  title:
    "Fiscalização destaca papel do JECRIM na ressocialização | Conselho da Comunidade da Comarca de João Pessoa/PB",
  description:
    "Visita ao Presídio Feminino reuniu magistrados e representantes do Conselho da Comunidade e evidenciou a importância dos investimentos do Juizado Especial Criminal em iniciativas de reinserção social nas unidades prisionais da capital.",
  openGraph: {
    title:
      "Fiscalização institucional destaca papel do JECRIM no fortalecimento de projetos de ressocialização em João Pessoa",
    description:
      "Visita ao Presídio Feminino reuniu magistrados e representantes do Conselho da Comunidade e evidenciou a importância dos investimentos do Juizado Especial Criminal em iniciativas de reinserção social nas unidades prisionais da capital.",
    url: "https://www.conselhodacomunidadejp.com.br/noticias/fiscalizacao-jecrim-presidio-feminino",
    siteName: "Conselho da Comunidade da Comarca de João Pessoa/PB",
    images: [
      {
        url: "https://www.conselhodacomunidadejp.com.br/jecrim-autoridades-na-unidade-og.jpeg",
        width: 1200,
        height: 630,
        alt: "Comitiva da visita de fiscalização percorre a Penitenciária de Reeducação Feminina Maria Júlia Maranhão, com magistrados e a direção da unidade à frente",
      },
    ],
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Fiscalização institucional destaca papel do JECRIM no fortalecimento de projetos de ressocialização em João Pessoa",
    description:
      "Visita ao Presídio Feminino reuniu magistrados e representantes do Conselho da Comunidade e evidenciou a importância dos investimentos do Juizado Especial Criminal em iniciativas de reinserção social nas unidades prisionais da capital.",
    images: [
      "https://www.conselhodacomunidadejp.com.br/jecrim-autoridades-na-unidade-og.jpeg",
    ],
  },
};

export default function FiscalizacaoJecrimPresidioFemininoPage() {
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
          Fiscalização institucional destaca papel do JECRIM no fortalecimento
          de projetos de ressocialização em João Pessoa
        </h1>
        <div className="mb-6 mt-3 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-[#526170]">07 de novembro de 2026</p>
          <ShareButtons titulo="Fiscalização institucional destaca papel do JECRIM no fortalecimento de projetos de ressocialização em João Pessoa" />
        </div>
        <div className="h-1.5 w-16 rounded-full bg-[#e5b42b]" />

        <img
          src="/jecrim-autoridades-na-unidade.jpeg"
          alt="Comitiva da visita de fiscalização percorre a Penitenciária de Reeducação Feminina Maria Júlia Maranhão, com magistrados e a direção da unidade à frente"
          className="mt-8 w-full rounded-lg"
        />
        <p className="mt-2 text-xs italic text-[#526170]">
          Fotos: Conselho da Comunidade JP
        </p>

        <p className="mt-8 text-justify leading-relaxed text-[#344555]">
          Na manhã deste sábado (7), a Penitenciária de Reeducação Feminina
          Maria Júlia Maranhão, em João Pessoa, recebeu uma visita de
          fiscalização in loco de projetos institucionais, com a participação
          do juiz Hermance Pereira, do Juizado Especial Criminal (JECRIM), da
          juíza Andréa Arcoverde, da Vara de Execução Penal de João Pessoa, e do
          presidente do Conselho da Comunidade da Comarca de João Pessoa, Thiago
          Robson dos Santos Lopes.
        </p>

        <img
          src="/jecrim-visita-castelo-de-bonecas.jpeg"
          alt="Autoridades observam um boneco produzido na oficina do Castelo de Bonecas durante a visita; ao fundo, participantes do projeto com a identidade preservada"
          className="mt-8 w-full rounded-lg"
        />

        <p className="mt-8 text-justify leading-relaxed text-[#344555]">
          A fiscalização permitiu acompanhar iniciativas de reinserção social
          desenvolvidas na unidade, entre elas o projeto Castelo de Bonecas, que
          proporciona às mulheres privadas de liberdade oportunidades de
          trabalho, aprendizagem e geração de renda por meio da produção
          artesanal.
        </p>

        <img
          src="/jecrim-coral-no-auditorio.jpeg"
          alt="Apresentação do coral do sistema penitenciário no auditório da unidade, com as integrantes com a identidade preservada"
          className="mt-8 w-full rounded-lg"
        />

        <p className="mt-8 text-justify leading-relaxed text-[#344555]">
          O Juizado Especial Criminal tem se destacado como um dos principais
          incentivadores de projetos de ressocialização em diversas unidades
          prisionais de João Pessoa. Seu apoio contempla tanto o Castelo de
          Bonecas quanto os corais existentes no sistema penitenciário, por meio
          de investimentos na aquisição de instrumentos musicais, fardamentos,
          remuneração de professores de música, custeio de inscrições e
          participação em festivais musicais, além de outras ações fundamentais
          à manutenção dessas iniciativas.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          Mais do que financiar atividades, essa atuação contribui para garantir
          a continuidade de projetos que oferecem acesso à cultura, ao trabalho
          e à formação humana durante o cumprimento da pena. São investimentos
          que aproximam a execução penal de sua finalidade de proporcionar
          condições para a reintegração social.
        </p>

        <img
          src="/jecrim-entrega-do-boneco.jpeg"
          alt="O juiz do Juizado Especial Criminal segura o boneco personalizado produzido pelo Castelo de Bonecas, ao lado de participantes do projeto com a identidade preservada"
          className="mt-8 w-full rounded-lg"
        />

        <p className="mt-8 text-justify leading-relaxed text-[#344555]">
          Durante a visita, um momento de reconhecimento marcou o encontro entre
          as autoridades e as participantes do Castelo de Bonecas. Uma mulher
          privada de liberdade presenteou o juiz Hermance Pereira com um boneco
          personalizado, confeccionado artesanalmente pelo projeto. O gesto
          simbolizou a gratidão pelo apoio institucional que tem contribuído
          para a continuidade das atividades.
        </p>

        <img
          src="/jecrim-homenagem-a-juiza.jpeg"
          alt="A juíza da Vara de Execução Penal recebe um presente produzido pelas participantes do Castelo de Bonecas"
          className="mt-8 w-full rounded-lg"
        />

        <p className="mt-8 text-justify leading-relaxed text-[#344555]">
          Na mesma ocasião, a juíza Andréa Arcoverde também foi homenageada e
          recebeu um presente produzido pelas participantes do projeto. A
          homenagem destacou a sensibilidade da magistrada à frente da execução
          penal e seu compromisso com iniciativas que conciliam o cumprimento da
          pena, a garantia de direitos e a construção de novas oportunidades
          para as pessoas privadas de liberdade.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          A diretora da unidade, Tatiana Pimentel, agradeceu às autoridades
          presentes pelo suporte oferecido às ações desenvolvidas no Presídio
          Feminino e ressaltou a importância das parcerias institucionais. A
          gestora também destacou as contribuições de outras instituições, cujas
          doações têm desempenhado papel importante na assistência material às
          mulheres privadas de liberdade.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          Para o presidente do Conselho da Comunidade de João Pessoa, Thiago
          Robson, a atuação do JECRIM demonstra que a efetivação dos direitos
          previstos na legislação depende também de instituições comprometidas
          em assegurar os recursos necessários à continuidade dos projetos.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          Segundo ele, a distância entre os direitos reconhecidos nas normas e a
          realidade vivenciada no sistema prisional diminui quando instituições
          como o Juizado Especial Criminal assumem o compromisso de apoiar e
          contribuir para a autossustentação das iniciativas de reinserção
          social.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          “Ressocialização se faz com investimentos, e o JECRIM é uma dessas
          instituições que fazem a diferença na sociedade”, destacou Thiago
          Robson.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          A visita reafirmou a importância do acompanhamento institucional, da
          transparência na aplicação dos recursos e da cooperação entre o Poder
          Judiciário, o Conselho da Comunidade e a sociedade civil.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          Iniciativas como o Castelo de Bonecas e os projetos musicais
          desenvolvidos nas unidades prisionais demonstram que a reinserção
          social exige mais do que o reconhecimento formal de direitos. Exige
          continuidade, compromisso institucional e investimentos capazes de
          transformar oportunidades em perspectivas concretas de futuro.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          O Conselho da Comunidade da Comarca de João Pessoa reconhece a
          contribuição do Juizado Especial Criminal para o fortalecimento dessas
          iniciativas, destacando que a construção de uma execução penal mais
          humana e comprometida com a reintegração social depende da atuação
          conjunta de instituições que transformam responsabilidades legais em
          ações concretas.
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

          <NoticiasSidebar slugAtual="fiscalizacao-jecrim-presidio-feminino" />
        </div>
      </div>
    </main>
  );
}
