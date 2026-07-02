import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Legislações Complementares | Conselho da Comunidade da Comarca de João Pessoa/PB",
  description:
    "Acervo normativo de apoio à atuação do Conselho da Comunidade de João Pessoa/PB.",
};

const legislacoes = [
  {
    title: "Decreto Estadual nº 12.832/1988",
    description:
      "Regulamenta a Lei nº 5.022/1988, que dispõe sobre a Execução Penal do Estado da Paraíba, estabelecendo normas e procedimentos para o cumprimento das penas no âmbito estadual.",
    href: "https://drive.google.com/file/d/1dSDSOd6BJ-zGnXcsJiWibLaHjQDPVIWi/view?usp=sharing",
  },
  {
    title: "Lei nº 12.955/2023",
    description:
      "Institui o Fundo Rotativo nos estabelecimentos penais, criando mecanismo financeiro para apoiar iniciativas de ressocialização e manutenção das unidades prisionais.",
    href: "https://drive.google.com/file/d/14oOf5gqwz60xWo2-qTRKfCSVwFqdigFN/view?usp=sharing",
  },
  {
    title: "Resolução CECP nº 001/2022",
    description:
      "Resolução do Conselho Estadual de Coordenação Penitenciária que uniformiza condutas visando garantir direitos, estabelecer obrigações e preservar a segurança e disciplina nas unidades prisionais do Estado da Paraíba.",
    href: "https://drive.google.com/file/d/1VHBcDBVT_AqqENMt7du-xE0yrcl9trPR/view?usp=sharing",
  },
  {
    title: "Lei nº 6.871/2000",
    description:
      "Dispõe sobre o sistema de revistas nos estabelecimentos penais do Estado da Paraíba, regulamentando procedimentos e garantindo a dignidade das pessoas submetidas a revistas.",
    href: "https://drive.google.com/file/d/1BG9Pewubn3LCWBgzPkEyblboG6_CxN3Q/view?usp=sharing",
  },
  {
    title: "Lei nº 9.521/2011",
    description:
      "Cria a Ouvidoria Geral do Sistema Penitenciário do Estado da Paraíba, instituindo canal oficial para recebimento de reclamações, denúncias e sugestões relacionadas ao sistema prisional estadual.",
    href: "https://drive.google.com/file/d/15bAcaSZ3Qk1BSpvlUiP59tyBCeF_vWqi/view?usp=sharing",
  },
  {
    title: "Lei nº 9.430/2011",
    description:
      "Dispõe sobre a obrigatoriedade das empresas vencedoras de licitações públicas no Estado da Paraíba de reservarem até 5% do total de vagas para sentenciados, promovendo a reinserção social pelo trabalho.",
    href: "https://drive.google.com/file/d/194lyILMGdDffXMdGX2nlyb6QrmP15Ftr/view?usp=sharing",
  },
];

export default function LegislacoesPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/#base-legal"
          className="text-sm font-semibold text-[#0f6bab] underline-offset-4 transition hover:underline"
        >
          ← Voltar à Base Legal
        </Link>

        <h1 className="mt-6 text-3xl font-bold text-[#153f63]">
          Legislações Complementares
        </h1>
        <p className="mt-2 text-[#526170]">
          Acervo normativo de apoio à atuação do Conselho da Comunidade de João
          Pessoa/PB
        </p>

        <div className="mt-10 space-y-5">
          {legislacoes.map((item) => (
            <article
              key={item.title}
              className="rounded-sm border-l-4 border-[#0f6bab] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="text-lg font-bold text-[#153f63]">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#344555] text-justify">
                {item.description}
              </p>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-sm border border-[#0f6bab] px-4 py-2 text-sm font-bold text-[#0f6bab] transition-all duration-300 hover:bg-[#0f6bab] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#e5b42b] focus:ring-offset-2"
              >
                Acessar documento →
              </a>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
