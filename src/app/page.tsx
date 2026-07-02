import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { InfoCard } from "@/components/InfoCard";
import { BaseLegalCards } from "@/components/BaseLegalCards";
import { Footer } from "@/components/Footer";

const workAreas = [
  {
    title: "Acompanhamento da execução penal",
    description:
      "Presença institucional voltada ao diálogo, à escuta social e ao acompanhamento das condições de cumprimento da pena.",
  },
  {
    title: "Apoio a familiares",
    description:
      "Acolhimento e orientação para famílias impactadas pelo sistema prisional, com encaminhamento à rede de proteção.",
  },
  {
    title: "Atenção a egressos",
    description:
      "Articulação de oportunidades e serviços para fortalecer trajetórias de reinserção social e cidadania.",
  },
  {
    title: "Projetos sociais",
    description:
      "Iniciativas comunitárias com foco em dignidade, documentação, capacitação, empregabilidade e vínculos familiares.",
  },
  {
    title: "Articulação em rede",
    description:
      "Construção de pontes entre Judiciário, Executivo, Defensoria, Ministério Público e sociedade civil.",
  },
  {
    title: "Transparência institucional",
    description:
      "Comunicação pública sobre ações, projetos, parcerias, documentos e prestação de contas social.",
  },
];

const initiatives = [
  "Acolhimento de familiares",
  "Cidadania e documentação",
  "Empregabilidade e capacitação",
  "Apoio a crianças e famílias vulneráveis",
  "Parcerias comunitárias",
  "Ações de dignidade e reinserção social",
];

const newsItems = [
  "Vistorias institucionais",
  "Reuniões de articulação",
  "Convênios e parcerias",
  "Entregas de projetos",
];

const partnerItems = [
  "Sistema de Justiça",
  "Poder Público",
  "Universidades",
  "Empresas e iniciativa privada",
  "Sociedade civil",
  "Rede socioassistencial",
];

const transparencyItems = [
  "Relatórios",
  "Prestação de contas",
  "Parceiros",
  "Ações realizadas",
];

const contactItems = [
  {
    label: "E-mail",
    value: "conselhodacomunidadejp@gmail.com",
    href: "mailto:conselhodacomunidadejp@gmail.com",
  },
  {
    label: "Instagram",
    value: "@conselhodacomunidadejp",
    href: "https://www.instagram.com/conselhodacomunidadejp",
  },
  {
    label: "Endereço",
    value: "Av. João Machado, s/n, Centro, João Pessoa/PB",
  },
  {
    label: "CNPJ",
    value: "22.937.599/0001-27",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f6f8] text-[#1f2933]">
      <Header />
      <main>
        <Hero />

        <section id="sobre" className="bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
            <SectionTitle
              align="left"
              eyebrow="Participação social"
              title="Sobre o Conselho"
              description="Atuação institucional sólida na execução penal, fundamentada na transparência pública, na escuta ativa e no compromisso com a comunidade."
            />
            <div className="rounded-sm border-l-4 border-[#0f6bab] bg-[#f4f6f8] p-7 shadow-sm sm:p-9">
              <p className="text-lg leading-8 text-[#344555] text-justify">
                O Conselho da Comunidade atua como órgão da execução penal e
                espaço de participação social, contribuindo para o
                acompanhamento, a articulação de políticas públicas, o apoio a
                familiares, pessoas privadas de liberdade e egressos do sistema
                prisional.
              </p>
              <div className="mt-8 grid gap-4 border-t border-[#d8e2ea] pt-6 sm:grid-cols-2">
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#386c38]">
                  Comarca de João Pessoa/PB
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="base-legal" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle
              eyebrow="Fundamentação institucional"
              title="Base Legal"
              description="A atuação do Conselho da Comunidade é fundamentada na Lei de Execução Penal e nas diretrizes nacionais de fortalecimento dos Conselhos da Comunidade, especialmente no âmbito da execução penal, da participação social, da fiscalização, da articulação em rede e da garantia de direitos."
            />
            <BaseLegalCards />
          </div>
        </section>

        <section id="atuacao" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle
              eyebrow="Eixos de atuação"
              title="Trabalho integrado entre justiça, comunidade e rede pública"
              description="Áreas prioritárias para organizar iniciativas, parcerias e respostas sociais com clareza institucional."
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {workAreas.map((item, index) => (
                <InfoCard
                  key={item.title}
                  index={index + 1}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="projetos" className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <SectionTitle
                align="left"
                eyebrow="Projetos e iniciativas"
                title="Frentes sociais para acolhimento, cidadania e reinserção"
                description="Uma base inicial para apresentar ações desenvolvidas com parceiros institucionais, comunidade e rede de proteção social."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {initiatives.map((initiative) => (
                  <article
                    key={initiative}
                    className="group rounded-sm border border-[#d8e2ea] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#71ad44] hover:shadow-md"
                  >
                    <div className="mb-5 h-1.5 w-12 rounded-full bg-[#e5b42b]" />
                    <h3 className="text-lg font-semibold text-[#153f63]">
                      {initiative}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#526170]">
                      Espaço preparado para registrar ações, metas, parceiros e
                      resultados de interesse social.
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="noticias" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle
              eyebrow="Registros institucionais"
              title="Notícias"
              description="Acompanhe registros institucionais de vistorias, reuniões, parcerias, entregas de projetos e iniciativas desenvolvidas pelo Conselho da Comunidade."
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {newsItems.map((item) => (
                <article
                  key={item}
                  className="rounded-sm border border-[#d8e2ea] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#71ad44] hover:shadow-md"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#386c38]">
                    Registro
                  </p>
                  <h3 className="mt-4 text-lg font-semibold text-[#153f63]">
                    {item}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#526170]">
                    Espaço estático inicial para organizar futuras atualizações
                    públicas do Conselho.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="parceiros" className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <SectionTitle
                align="left"
                eyebrow="Rede de apoio"
                title="Parceiros e Rede de Apoio"
                description="A atuação do Conselho é fortalecida por meio da articulação com instituições públicas, universidades, sociedade civil, empresas, organizações sociais e demais atores comprometidos com cidadania, dignidade e reinserção social."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {partnerItems.map((item) => (
                  <article
                    key={item}
                    className="rounded-sm border border-[#d8e2ea] bg-[#f4f6f8] p-6"
                  >
                    <div className="mb-5 h-1.5 w-12 rounded-full bg-[#0f6bab]" />
                    <h3 className="text-lg font-semibold text-[#153f63]">
                      {item}
                    </h3>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="transparencia" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="overflow-hidden rounded-sm border border-[#cdd9e4] bg-[#0f6bab] shadow-sm">
              <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
                <div className="p-8 text-white sm:p-10 lg:p-12">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#e5b42b]">
                    Transparência
                  </p>
                  <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                    Informação pública para fortalecer a confiança social
                  </h2>
                  <p className="mt-6 max-w-3xl text-base leading-8 text-blue-50">
                    A transparência fortalece a confiança pública. Este espaço
                    poderá reunir relatórios, prestações de contas, ações
                    realizadas, parceiros institucionais e documentos de
                    interesse social.
                  </p>
                </div>
                <div className="grid border-t border-white/20 bg-white/10 p-5 sm:grid-cols-2 lg:border-l lg:border-t-0">
                  {transparencyItems.map((item) => (
                    <div
                      key={item}
                      className="border border-white/20 bg-white/10 p-5 text-white"
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">
                        Futuro espaço
                      </span>
                      <h3 className="mt-3 text-lg font-semibold">{item}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="enviar-relato" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <SectionTitle
                align="left"
                eyebrow="Canal institucional"
                title="Enviar Relato"
                description="Este espaço é destinado ao recebimento de relatos, sugestões, informações ou comunicações relacionadas à atuação do Conselho da Comunidade, especialmente envolvendo familiares, pessoas privadas de liberdade, egressos, parceiros e comunidade em geral."
              />
              <div className="rounded-sm border border-[#d8e2ea] bg-white p-7 shadow-sm sm:p-9">
                <p className="text-base leading-8 text-[#526170]">
                  O envio de relato não substitui canais oficiais de emergência,
                  processos judiciais, defensoria pública, Ministério Público,
                  órgãos de segurança ou serviços públicos competentes. As
                  informações recebidas poderão orientar a atuação institucional
                  do Conselho e eventuais encaminhamentos, conforme a natureza
                  da demanda.
                </p>
                <a
                  href="mailto:conselhodacomunidadejp@gmail.com?subject=Relato%20enviado%20pelo%20site%20do%20Conselho%20da%20Comunidade"
                  className="mt-8 inline-flex items-center justify-center rounded-sm bg-[#0f6bab] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#0d5d95] focus:outline-none focus:ring-2 focus:ring-[#e5b42b] focus:ring-offset-2"
                >
                  Enviar relato por e-mail
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <SectionTitle
                align="left"
                eyebrow="Contato"
                title="Fale com o Conselho da Comunidade"
                description="Canais institucionais para comunicação, encaminhamentos e articulação de parcerias."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {contactItems.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-sm border border-[#d8e2ea] bg-[#f4f6f8] p-6"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#386c38]">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-3 block break-words text-lg font-semibold text-[#0f6bab] underline-offset-4 hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-3 text-lg font-semibold text-[#1f2933]">
                        {item.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
