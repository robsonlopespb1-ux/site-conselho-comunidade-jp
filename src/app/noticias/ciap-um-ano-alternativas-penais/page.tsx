import type { Metadata } from "next";
import Link from "next/link";
import { ShareButtons } from "@/components/ShareButtons";
import { NoticiasSidebar } from "@/components/NoticiasSidebar";

export const metadata: Metadata = {
  title:
    "CIAP fortalece alternativas penais um ano após inauguração | Conselho da Comunidade da Comarca de João Pessoa/PB",
  description:
    "Inaugurada em agosto de 2025, a Central Integrada de Alternativas Penais consolida sua atuação na responsabilização penal, na prevenção da violência doméstica e na construção de alternativas à prisão, contribuindo para uma política de segurança pública mais eficiente e humanizada.",
  openGraph: {
    title:
      "Pouco mais de um ano após sua inauguração, CIAP fortalece alternativas penais e promove benefícios à sociedade paraibana",
    description:
      "Inaugurada em agosto de 2025, a Central Integrada de Alternativas Penais consolida sua atuação na responsabilização penal, na prevenção da violência doméstica e na construção de alternativas à prisão, contribuindo para uma política de segurança pública mais eficiente e humanizada.",
    url: "https://www.conselhodacomunidadejp.com.br/noticias/ciap-um-ano-alternativas-penais",
    siteName: "Conselho da Comunidade da Comarca de João Pessoa/PB",
    images: [
      {
        url: "https://www.conselhodacomunidadejp.com.br/ciap-cartaz-minha-historia-continua-og.jpeg",
        width: 1200,
        height: 630,
        alt: "Cartaz com a frase “Minha história continua: novos capítulos começam, com novas escolhas”, cercado de notas adesivas com palavras como reflexão, paz, gratidão e recomeço",
      },
    ],
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Pouco mais de um ano após sua inauguração, CIAP fortalece alternativas penais e promove benefícios à sociedade paraibana",
    description:
      "Inaugurada em agosto de 2025, a Central Integrada de Alternativas Penais consolida sua atuação na responsabilização penal, na prevenção da violência doméstica e na construção de alternativas à prisão, contribuindo para uma política de segurança pública mais eficiente e humanizada.",
    images: [
      "https://www.conselhodacomunidadejp.com.br/ciap-cartaz-minha-historia-continua-og.jpeg",
    ],
  },
};

export default function CiapUmAnoAlternativasPenaisPage() {
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
          Pouco mais de um ano após sua inauguração, CIAP fortalece alternativas
          penais e promove benefícios à sociedade paraibana
        </h1>
        <div className="mb-6 mt-3 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-[#526170]">07 de novembro de 2026</p>
          <ShareButtons titulo="Pouco mais de um ano após sua inauguração, CIAP fortalece alternativas penais e promove benefícios à sociedade paraibana" />
        </div>
        <div className="h-1.5 w-16 rounded-full bg-[#e5b42b]" />

        <img
          src="/ciap-cartaz-minha-historia-continua.jpeg"
          alt="Cartaz com a frase “Minha história continua: novos capítulos começam, com novas escolhas”, cercado de notas adesivas com palavras como reflexão, paz, gratidão e recomeço"
          className="mt-8 w-full rounded-lg"
        />
        <p className="mt-2 text-xs italic text-[#526170]">
          Fotos: Ascom/SEAP-PB
        </p>

        <p className="mt-8 text-justify leading-relaxed text-[#344555]">
          Pouco mais de um ano após sua inauguração, a Central Integrada de
          Alternativas Penais da Paraíba (CIAP-PB) vem se consolidando como um
          importante instrumento de fortalecimento das políticas públicas de
          justiça, segurança e reinserção social no estado. Vinculada à
          Secretaria de Estado da Administração Penitenciária (SEAP-PB), a
          instituição desenvolve atividades de acompanhamento de pessoas
          submetidas a medidas e penas alternativas à prisão, promovendo a
          responsabilização pelos atos praticados e a preservação dos vínculos
          familiares e comunitários.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          Inaugurada em 26 de agosto de 2025, em João Pessoa, a CIAP representa
          um avanço na construção de respostas penais que reconhecem a
          necessidade de conciliar responsabilização, proteção social e
          prevenção de novas infrações, especialmente nas situações em que a
          legislação admite medidas diferentes da privação de liberdade.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-[#153f63]">
          Alternativas penais que beneficiam toda a sociedade
        </h2>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          A importância da CIAP ultrapassa o acompanhamento do cumprimento de
          determinações judiciais. Sua atuação contribui para uma compreensão
          mais ampla da responsabilização penal, demonstrando que a resposta
          estatal à prática de determinadas infrações não precisa estar
          necessariamente associada ao encarceramento.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          Por meio de uma equipe multidisciplinar, a instituição realiza
          atendimentos, orientações e acompanhamento de pessoas encaminhadas
          pelo Poder Judiciário, considerando aspectos jurídicos, sociais e
          comportamentais relacionados ao cumprimento das medidas estabelecidas.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          Esse modelo proporciona benefícios que alcançam não apenas as pessoas
          atendidas, mas também suas famílias e a coletividade, ao favorecer a
          manutenção dos vínculos sociais, o acesso à rede de proteção e a
          utilização mais racional dos recursos públicos.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          Ao mesmo tempo, contribui para enfrentar a superlotação carcerária,
          evitando o ingresso desnecessário no sistema prisional nas hipóteses
          em que a legislação permite respostas penais alternativas.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-[#153f63]">
          Grupos reflexivos contribuem para o enfrentamento da violência contra
          a mulher
        </h2>

        <img
          src="/ciap-grupo-reflexivo.jpeg"
          alt="Encontro de grupo reflexivo na CIAP: participantes sentados em roda, enquadrados da cintura para baixo, em torno de uma mandala de crochê com papéis e cartões espalhados no chão"
          className="mt-8 w-full rounded-lg"
        />

        <p className="mt-8 text-justify leading-relaxed text-[#344555]">
          Entre as iniciativas desenvolvidas pela CIAP, destaca-se a realização
          de grupos reflexivos e de responsabilização destinados a homens
          autores de violência doméstica e familiar contra a mulher.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          O trabalho ganhou destaque em reportagem produzida pela Assessoria de
          Comunicação da Secretaria de Estado da Administração Penitenciária da
          Paraíba (Ascom/SEAP-PB), intitulada “Grupos reflexivos reúnem homens
          autores de violência contra mulher”, que evidenciou a importância dos
          encontros para a conscientização dos participantes e a prevenção de
          novas situações de violência.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          A iniciativa também foi destacada pelo Tribunal de Justiça da Paraíba
          (TJPB). Em março de 2026, um dos encontros realizados na sede da
          CIAP, em João Pessoa, contou com a participação de 18 homens
          encaminhados pela Vara de Execução de Penas Alternativas da Capital.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          Organizados em ciclos de 12 encontros semanais, os grupos são
          conduzidos por profissionais das áreas de Psicologia, Serviço Social e
          Direito, utilizando metodologias de práticas restaurativas, atividades
          reflexivas e discussões sobre relações de gênero, respeito e
          responsabilidade.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          A proposta busca estimular o reconhecimento dos comportamentos
          violentos e de suas consequências, contribuindo para a desconstrução
          de padrões culturais que naturalizam a violência contra a mulher.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          A iniciativa encontra respaldo na Lei Maria da Penha (Lei nº
          11.340/2006), que prevê medidas de educação, recuperação e reeducação
          de autores de violência doméstica.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          Mais do que uma atividade complementar ao cumprimento das
          determinações judiciais, os grupos reflexivos representam uma
          estratégia de prevenção, ao reconhecer que o enfrentamento da
          violência também exige intervenções voltadas à transformação de
          comportamentos e à construção de relações fundamentadas no respeito.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-[#153f63]">
          Cooperação institucional e fortalecimento das políticas públicas
        </h2>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          A trajetória da CIAP evidencia a importância da articulação entre a
          Secretaria de Administração Penitenciária, o Tribunal de Justiça da
          Paraíba, o Conselho Nacional de Justiça, a Secretaria Nacional de
          Políticas Penais e os demais integrantes da rede de proteção social.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          Essa cooperação permite que as alternativas penais sejam acompanhadas
          de forma qualificada, superando uma perspectiva restrita à
          fiscalização do cumprimento das obrigações judiciais.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          A experiência desenvolvida na Paraíba demonstra que investir em
          políticas de responsabilização, prevenção e acompanhamento
          multidisciplinar também significa investir em segurança pública.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          Ao oferecer condições para o cumprimento adequado das medidas
          judiciais, a instituição contribui para uma política penal que busca
          produzir resultados socialmente relevantes, sem desconsiderar a
          dignidade humana e os direitos fundamentais.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          A trajetória da Central Integrada de Alternativas Penais deixa uma
          importante reflexão: uma política penal eficiente não deve ser
          avaliada apenas pela capacidade de punir, mas também por sua
          capacidade de responsabilizar, prevenir novas violências e oferecer
          respostas que produzam benefícios concretos para toda a sociedade.
        </p>

        <p className="mt-6 text-justify leading-relaxed text-[#344555]">
          Para mais informações sobre a CIAP-PB, acesse o perfil oficial no
          Instagram:{" "}
          <a
            href="https://www.instagram.com/ciapparaiba/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0f6bab] hover:underline font-semibold"
          >
            @ciapparaiba
          </a>
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

          <NoticiasSidebar slugAtual="ciap-um-ano-alternativas-penais" />
        </div>
      </div>
    </main>
  );
}
