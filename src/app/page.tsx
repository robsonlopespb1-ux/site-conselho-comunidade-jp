import Link from "next/link";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { AtuacaoCards } from "@/components/AtuacaoCards";
import { BaseLegalCards } from "@/components/BaseLegalCards";
import { FadeInSection } from "@/components/FadeInSection";
import { NoticiasGrid } from "@/components/NoticiasGrid";
import { ParceirosMarquee } from "@/components/ParceirosMarquee";
import { Bia } from "@/components/Bia";
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

const parceiros = [
  {
    nome: "TJPB",
    logo: "tjpb-ok.png",
    altura: 72,
    url: "https://www.tjpb.jus.br/",
  },
  {
    nome: "Ministério Público da Paraíba",
    logo: "mppb-ok.png",
    altura: 68,
    url: "https://www.mppb.mp.br/index.php/pt/",
  },
  {
    nome: "Defensoria Pública da Paraíba",
    logo: "defensoria-ok.png",
    altura: 72,
    url: "https://defensoria.pb.def.br/",
  },
  {
    nome: "SEAP/PB",
    logo: "seappb-ok.png",
    altura: 88,
    url: "https://paraiba.pb.gov.br/diretas/secretaria-de-administracao-penitenciaria",
  },
  {
    nome: "Prefeitura de João Pessoa",
    logo: "joao-pessoa-ok.png",
    altura: 56,
    url: "https://www.joaopessoa.pb.gov.br/",
  },
  {
    nome: "Arquidiocese da Paraíba",
    logo: "arquidiocese.png",
    altura: 84,
    url: "https://arquidiocesepb.org.br/",
  },
  {
    nome: "Prima",
    logo: "prima-ok.png",
    altura: 84,
    url: "https://paraiba.pb.gov.br/diretas/secretaria-da-cultura/programas/prima",
  },
  {
    nome: "Universal",
    logo: "universal-ok.png",
    altura: 68,
    url: "https://www.universal.org/",
  },
  {
    nome: "Inovatec",
    logo: "inovatecok.png",
    altura: 60,
    url: "https://inovatecjp.com/",
  },
  {
    nome: "SECITEC",
    logo: "secitec.png",
    altura: 84,
    url: "https://www.instagram.com/secitec_jp/",
  },
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
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="mb-3 h-10 w-10 text-[#0f6bab]"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13L2 4" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "@conselhodacomunidadejp",
    href: "https://www.instagram.com/conselhodacomunidadejp",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="mb-3 h-10 w-10 text-[#0f6bab]"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f6f8] text-[#1f2933]">
      <Header />
      <main>
        <Hero />

        <FadeInSection>
        <section id="noticias" className="py-14 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle
              eyebrow="Registros institucionais"
              title="Notícias"
              description="Acompanhe registros institucionais de vistorias, reuniões, parcerias, entregas de projetos e iniciativas desenvolvidas pelo Conselho da Comunidade."
            />
            <NoticiasGrid />
          </div>
        </section>
        </FadeInSection>

        <FadeInSection>
        <section id="sobre" className="bg-white py-14 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
            <SectionTitle
              align="left"
              eyebrow="Participação social"
              title="Sobre o Conselho"
              description="Atuação institucional sólida na execução penal, fundamentada na transparência pública, na escuta ativa e no compromisso com a comunidade."
              descriptionClassName="text-justify"
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
        </FadeInSection>

        <FadeInSection>
        <section id="base-legal" className="py-14 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle
              eyebrow="Fundamentação institucional"
              title="Base Legal"
              description="A atuação do Conselho da Comunidade é fundamentada na Lei de Execução Penal e nas diretrizes nacionais de fortalecimento dos Conselhos da Comunidade, especialmente no âmbito da execução penal, da participação social, da fiscalização, da articulação em rede e da garantia de direitos."
            />
            <BaseLegalCards />
            <hr className="mt-12 border-[#d8e2ea]" />
            <p className="mt-8 text-center text-base leading-8 text-[#526170]">
              Conheça as normas que asseguram direitos às pessoas privadas de
              liberdade, familiares e egressos do sistema prisional na Paraíba.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href="/legislacoes"
                className="inline-flex items-center justify-center rounded-sm border border-[#0f6bab] px-6 py-3 text-sm font-bold text-[#0f6bab] transition-all duration-300 hover:bg-[#0f6bab] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#e5b42b] focus:ring-offset-2"
              >
                Ver todas as legislações →
              </Link>
            </div>
          </div>
        </section>
        </FadeInSection>

        <FadeInSection delay={0}>
        <section id="atuacao" className="py-14 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle
              eyebrow="Eixos de atuação"
              title="Trabalho integrado entre Justiça, Sociedade e o Poder Público."
              description="Frentes de atuação estruturadas para conectar projetos e parcerias, entregando resultados sociais nos quais a sociedade e as instituições podem confiar."
            />
            <AtuacaoCards items={workAreas} />
          </div>
        </section>
        </FadeInSection>

        <FadeInSection>
        <section id="parceiros" className="bg-white py-14 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle
              align="left"
              eyebrow="Rede de apoio"
              title="Parceiros e Rede de Apoio"
              description="A atuação do Conselho é fortalecida por meio da articulação com instituições públicas, universidades, sociedade civil, empresas, organizações sociais e demais atores comprometidos com cidadania, dignidade e reinserção social."
              descriptionClassName="text-justify"
            />
            <div className="mt-10">
              <ParceirosMarquee parceiros={parceiros} />
            </div>
          </div>
        </section>
        </FadeInSection>

        <FadeInSection>
        <section id="transparencia" className="py-14 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="overflow-hidden rounded-sm border border-[#cdd9e4] bg-[#0f6bab] shadow-sm">
              <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
                <div className="p-6 text-white sm:p-10 lg:p-12">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#e5b42b]">
                    Transparência
                  </p>
                  <h2 className="mt-4 max-w-2xl text-2xl font-bold tracking-tight sm:text-4xl">
                    Informação pública como base da confiança social.
                  </h2>
                  <p className="mt-6 max-w-3xl text-base leading-8 text-blue-50 text-justify">
                    A publicização dos nossos atos é o pilar da nossa atuação.
                    Aqui, a sociedade tem acesso direto aos nossos relatórios de
                    gestão, prestações de contas e convênios firmados, garantindo
                    total clareza e acompanhamento dos resultados.
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
        </FadeInSection>

        <section id="enviar-relato" className="py-14 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <SectionTitle
                align="left"
                eyebrow="Canal institucional"
                title="Enviar Relato"
                description="Este espaço é destinado ao recebimento de relatos, sugestões, informações ou comunicações relacionadas à atuação do Conselho da Comunidade, especialmente envolvendo familiares, pessoas privadas de liberdade, egressos, parceiros e comunidade em geral."
                descriptionClassName="text-justify"
              />
              <div className="rounded-sm border border-[#d8e2ea] bg-white p-7 shadow-sm sm:p-9">
                <p className="text-base leading-8 text-[#526170] text-justify">
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

        <FadeInSection>
        <section id="contato" className="bg-white py-14 sm:py-24">
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
                    className="flex flex-col items-center justify-center rounded-sm border border-[#d8e2ea] bg-[#f4f6f8] p-6 text-center"
                  >
                    {item.icon}
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#386c38]">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        {...(item.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="mt-3 block cursor-pointer break-all text-sm font-semibold text-[#0f6bab] underline-offset-4 hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-3 text-sm font-semibold text-[#1f2933]">
                        {item.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        </FadeInSection>
      </main>
      <Footer />
      <Bia />
    </div>
  );
}
