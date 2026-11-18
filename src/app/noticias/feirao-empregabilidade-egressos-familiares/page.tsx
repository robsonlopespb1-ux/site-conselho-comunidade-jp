import type { Metadata } from "next";
import Link from "next/link";
import { ShareButtons } from "@/components/ShareButtons";
import { NoticiasSidebar } from "@/components/NoticiasSidebar";

export const metadata: Metadata = {
  title:
    "Feirão da Empregabilidade para familiares e egressos do sistema prisional | Conselho da Comunidade da Comarca de João Pessoa/PB",
  description:
    "Promovida pelo Conselho da Comunidade, Escritório Social e Sedest-JP, iniciativa acontecerá no dia 24 de novembro, das 9h às 15h, na sede do Escritório Social, no Centro da Capital, reunindo serviços de empregabilidade, incentivo ao empreendedorismo e capacitação profissional.",
  openGraph: {
    title:
      "Feirão da Empregabilidade busca ampliar oportunidades de trabalho e renda para familiares e egressos do sistema prisional em João Pessoa",
    description:
      "Promovida pelo Conselho da Comunidade, Escritório Social e Sedest-JP, iniciativa acontecerá no dia 24 de novembro, das 9h às 15h, na sede do Escritório Social, no Centro da Capital, reunindo serviços de empregabilidade, incentivo ao empreendedorismo e capacitação profissional.",
    url: "https://www.conselhodacomunidadejp.com.br/noticias/feirao-empregabilidade-egressos-familiares",
    siteName: "Conselho da Comunidade da Comarca de João Pessoa/PB",
    images: [
      {
        url: "https://www.conselhodacomunidadejp.com.br/feirao-empregabilidade-capa-og.jpeg",
        width: 1200,
        height: 630,
        alt: "Imagem ilustrativa de atendimento ao público: uma pessoa é orientada por uma atendente em uma mesa, com outros atendimentos ao fundo",
      },
    ],
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Feirão da Empregabilidade busca ampliar oportunidades de trabalho e renda para familiares e egressos do sistema prisional em João Pessoa",
    description:
      "Promovida pelo Conselho da Comunidade, Escritório Social e Sedest-JP, iniciativa acontecerá no dia 24 de novembro, das 9h às 15h, na sede do Escritório Social, no Centro da Capital, reunindo serviços de empregabilidade, incentivo ao empreendedorismo e capacitação profissional.",
    images: [
      "https://www.conselhodacomunidadejp.com.br/feirao-empregabilidade-capa-og.jpeg",
    ],
  },
};

export default function FeiraoEmpregabilidadeEgressosFamiliaresPage() {
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
          Feirão da Empregabilidade busca ampliar oportunidades de trabalho e
          renda para familiares e egressos do sistema prisional em João Pessoa
        </h1>
        <div className="mb-6 mt-3 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-[#526170]">18 de novembro de 2026</p>
          <ShareButtons titulo="Feirão da Empregabilidade busca ampliar oportunidades de trabalho e renda para familiares e egressos do sistema prisional em João Pessoa" />
        </div>
        <div className="h-1.5 w-16 rounded-full bg-[#e5b42b]" />

        <img
          src="/feirao-empregabilidade-capa.jpeg"
          alt="Imagem ilustrativa de atendimento ao público: uma pessoa é orientada por uma atendente em uma mesa, com outros atendimentos ao fundo"
          className="mt-8 w-full rounded-lg"
        />
        <p className="mt-2 text-xs italic text-[#526170]">
          Imagem ilustrativa
        </p>

        <p className="mt-8 text-justify leading-relaxed text-[#344555]">
          Buscar uma oportunidade de emprego ou iniciar um pequeno negócio pode
          representar mais do que uma fonte de renda. Para familiares de
          pessoas privadas de liberdade e egressos do sistema prisional,
          significa também a possibilidade de conquistar autonomia, superar
          barreiras sociais e construir novas perspectivas de vida.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          É com esse propósito que o Conselho da Comunidade da Comarca de João
          Pessoa, em parceria com o Escritório Social e a Secretaria de
          Desenvolvimento Econômico e Trabalho de João Pessoa (Sedest-JP),
          promoverá, no dia <strong>24 de novembro, das 9h às 15h</strong>, o
          Feirão da Empregabilidade e Empreendedorismo, voltado especialmente a
          esse público.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          O evento será realizado na sede do Escritório Social, localizada na{" "}
          <strong>Avenida Diogo Velho, nº 180, Centro, João Pessoa/PB</strong>,
          reunindo serviços públicos, orientações profissionais e atividades de
          capacitação em um espaço dedicado à ampliação das oportunidades de
          inserção no mercado de trabalho e geração de renda.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-[#153f63]">
          Serviços e oportunidades em um só lugar
        </h2>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          Durante o evento, o Sistema Nacional de Emprego de João Pessoa
          (Sine-JP) realizará cadastramentos, orientações profissionais e
          encaminhamentos para vagas disponíveis, conforme o perfil dos
          candidatos e os critérios das empresas contratantes.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          A Sala do Empreendedor da Sedest-JP também estará presente,
          oferecendo informações sobre formalização de pequenos negócios,
          empreendedorismo e acesso a programas de apoio. Haverá, ainda,
          pré-inscrições para interessados em microcrédito, observados os
          requisitos e procedimentos de avaliação aplicáveis.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          A programação contará também com representantes da Natura e da Avon,
          que prestarão orientações sobre oportunidades de atuação como
          consultores de beleza e comercialização de produtos, apresentando
          possibilidades de geração de renda por meio da venda direta.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-[#153f63]">
          Capacitação para transformar ideias em oportunidades
        </h2>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          Além dos atendimentos, o Feirão oferecerá três atividades formativas,
          com abordagens voltadas ao empreendedorismo, à economia criativa e à
          preparação para o mercado de trabalho.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          Às <strong>9h</strong>, o curso{" "}
          <strong>&quot;Empreendendo do Zero&quot;</strong> apresentará
          orientações para quem deseja iniciar uma atividade empreendedora,
          abordando os primeiros passos para transformar ideias em
          oportunidades de negócios e geração de renda.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          Às <strong>10h</strong>, Maria Helena conduzirá a oficina{" "}
          <strong>&quot;Mãos que Criam&quot;</strong>, uma experiência prática
          de personalização de nécessaires que apresentará a economia criativa
          como possibilidade de agregar valor a produtos e desenvolver
          iniciativas empreendedoras.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          Às <strong>13h30</strong>, Thiago Robson dos Santos Lopes ministrará o
          minicurso{" "}
          <strong>&quot;Inteligência Artificial para Currículo e Entrevista&quot;</strong>,
          demonstrando como ferramentas tecnológicas podem auxiliar na
          elaboração de currículos e na preparação para entrevistas de emprego.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-[#153f63]">
          Quando a reintegração social encontra oportunidades
        </h2>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          A realização do Feirão parte do reconhecimento de que os efeitos do
          encarceramento ultrapassam os muros das unidades prisionais.
          Familiares também enfrentam dificuldades econômicas e sociais,
          enquanto pessoas egressas encontram obstáculos para retomar suas
          trajetórias profissionais.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          Nesse cenário, a articulação entre o Conselho da Comunidade, o
          Escritório Social e a Sedest-JP representa um esforço conjunto para
          aproximar políticas públicas de quem necessita de acesso ao trabalho,
          à qualificação e a alternativas de sustento.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          Mais do que oferecer atendimentos em um único dia, a proposta é
          fortalecer caminhos de inclusão produtiva e ampliar o acesso a
          instrumentos capazes de contribuir para a autonomia econômica dos
          participantes.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          A iniciativa reafirma uma dimensão essencial da reintegração social:{" "}
          <strong>
            não basta reconhecer o direito de recomeçar. É preciso construir
            condições para que esse recomeço seja possível.
          </strong>
        </p>

        <div className="mt-10 rounded-lg border-l-4 border-[#0f6bab] bg-[#eef6fc] p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-[#153f63]">Serviço</h2>
          <p className="mt-4 leading-relaxed text-[#344555]">
            <strong>Evento:</strong> Feirão da Empregabilidade e
            Empreendedorismo para Familiares e Egressos do Sistema Prisional
          </p>
          <p className="mt-3 leading-relaxed text-[#344555]">
            <strong>Data:</strong> 24 de novembro de 2026 (terça-feira)
          </p>
          <p className="mt-3 leading-relaxed text-[#344555]">
            <strong>Horário:</strong> das 9h às 15h
          </p>
          <p className="mt-3 leading-relaxed text-[#344555]">
            <strong>Local:</strong> Sede do Escritório Social da Paraíba
          </p>
          <p className="mt-3 leading-relaxed text-[#344555]">
            <strong>Endereço:</strong> Avenida Diogo Velho, nº 180, Centro,
            João Pessoa/PB
          </p>
          <p className="mt-3 leading-relaxed text-[#344555]">
            <strong>Público-alvo:</strong> Familiares de pessoas privadas de
            liberdade e egressos do sistema prisional.
          </p>
          <p className="mt-3 leading-relaxed text-[#344555]">
            <strong>Programação de capacitações:</strong>
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6 leading-relaxed text-[#344555] marker:text-[#0f6bab]">
            <li>
              <strong>9h</strong> — Empreendendo do Zero
            </li>
            <li>
              <strong>10h</strong> — Mãos que Criam, com Maria Helena
            </li>
            <li>
              <strong>13h30</strong> — Inteligência Artificial para Currículo
              e Entrevista, com Thiago Robson dos Santos Lopes
            </li>
          </ul>
          <p className="mt-3 leading-relaxed text-[#344555]">
            <strong>Instituições parceiras:</strong> Conselho da Comunidade da
            Comarca de João Pessoa, Escritório Social e Secretaria de
            Desenvolvimento Econômico e Trabalho de João Pessoa (Sedest-JP).
          </p>
          <p className="mt-3 leading-relaxed text-[#344555]">
            <strong>Documentação:</strong> As informações sobre os documentos
            necessários para participar dos atendimentos serão divulgadas em
            breve pelos canais oficiais das instituições organizadoras.
          </p>
        </div>

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

          <NoticiasSidebar slugAtual="feirao-empregabilidade-egressos-familiares" />
        </div>
      </div>
    </main>
  );
}
