import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Membros — Conselho da Comunidade da Comarca de João Pessoa/PB",
  description:
    "Conheça os membros que compõem o Conselho da Comunidade da Comarca de João Pessoa/PB, atuando de forma voluntária em defesa dos direitos das pessoas privadas de liberdade.",
};

type Membro = {
  nome: string;
  funcao: string;
  iniciais: string;
  qualificacoes: string[] | null;
};

const membros: Membro[] = [
  {
    nome: "Andréa Arcoverde",
    funcao: "Membro Nato",
    iniciais: "AA",
    qualificacoes: null,
  },
  {
    nome: "Carlos Neves",
    funcao: "Membro Nato",
    iniciais: "CN",
    qualificacoes: null,
  },
  {
    nome: "Thiago Robson dos Santos Lopes",
    funcao: "Presidente",
    iniciais: "TR",
    qualificacoes: [
      "Graduação em Game Design",
      "Graduação em Inteligência Artificial",
      "Graduando em Ciências da Computação",
      "Pós-graduação em Cibersegurança, Direito Digital e Segurança de Dados",
      "Pós-graduação em Desenvolvimento e Engenharia de Software, IA e Inteligência de Dados",
      "Pós-graduação em Perícia Forense Computacional",
      "Pós-graduação em Direitos Humanos e Segurança Pública",
      "Mestrando em Direitos Humanos, Cidadania e Políticas Públicas",
      "Policial Penal",
      "Membro consultivo do GMF/TJPB",
    ],
  },
  {
    nome: "Miguel Soares da Silva",
    funcao: "Vice-Presidente",
    iniciais: "MS",
    qualificacoes: [
      "Bispo Evangélico e Capelão",
      "Formação em Teologia e Filosofia (FATESI/SP)",
      "Coordenador do Grupo de Evangelização e Ações Sociais da Universal nos presídios da Paraíba",
    ],
  },
  {
    nome: "Cizia Romeu",
    funcao: "Tesoureira",
    iniciais: "CR",
    qualificacoes: [
      "Assistente Social",
      "Graduanda em Psicologia e Criminologia",
      "Especialista em Psicologia Forense e Criminal",
      "Pós-graduanda em Segurança Pública e Sistema Penitenciário",
      "Representante do CRESS/13ª Região (PB)",
      "Atuante nas políticas de alternativas penais e no SISPEN",
    ],
  },
  {
    nome: "Diácono Cristiano Amarante da Silva",
    funcao: "Membro",
    iniciais: "CA",
    qualificacoes: [
      "Licenciado em História (UVA)",
      "Mestre em Ciências das Religiões (UFPB)",
      "Doutorando em Ciências das Religiões (UFPB)",
      "Professor do Ensino Superior",
      "Professor de História da Igreja (Seminário Menor)",
      "Representante da Pastoral Carcerária da Igreja Católica (Arquidiocese da Paraíba)",
      "Secretário de Cultura e Turismo do Município de São Miguel de Taipu/PB",
    ],
  },
  {
    nome: "Christiane",
    funcao: "Membro",
    iniciais: "CH",
    qualificacoes: null,
  },
  {
    nome: "Lucena",
    funcao: "Membro",
    iniciais: "LU",
    qualificacoes: null,
  },
  {
    nome: "Fábio",
    funcao: "Membro",
    iniciais: "FA",
    qualificacoes: null,
  },
];

function MembroCard({ membro }: { membro: Membro }) {
  return (
    <div
      tabIndex={0}
      aria-label={`${membro.nome}, ${membro.funcao}`}
      className="group h-[320px] cursor-pointer [perspective:1000px] focus:outline-none"
    >
      <div className="relative h-full w-full rounded-lg transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]">
        {/* Frente */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg border border-[#d8e2ea] bg-white p-6 [backface-visibility:hidden]">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#0f6bab] text-2xl font-bold text-white">
            {membro.iniciais}
          </div>
          <h2 className="text-center text-lg font-bold text-[#153f63]">
            {membro.nome}
          </h2>
          <p className="mt-1 text-center text-sm font-semibold text-[#0f6bab]">
            {membro.funcao}
          </p>
          {membro.qualificacoes && (
            <p className="mt-3 text-xs italic text-[#526170]">
              Passe o mouse para mais informações
            </p>
          )}
        </div>

        {/* Verso */}
        <div className="absolute inset-0 overflow-y-auto rounded-lg bg-[#0f6bab] p-5 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <h3 className="mb-1 text-base font-bold">{membro.nome}</h3>
          <p className="mb-3 text-sm font-semibold text-[#e5b42b]">
            {membro.funcao}
          </p>
          {membro.qualificacoes ? (
            <ul className="list-inside list-disc space-y-1 text-xs leading-relaxed">
              {membro.qualificacoes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm italic opacity-80">
              Qualificações em atualização.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function MembrosPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/#sobre"
          className="text-sm font-semibold text-[#0f6bab] underline-offset-4 transition hover:underline"
        >
          ← Voltar ao início
        </Link>

        <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-[#386c38]">
          Composição
        </p>
        <h1 className="mt-3 text-3xl font-bold text-[#153f63]">
          Membros do Conselho
        </h1>
        <div className="mt-2 mb-6 h-1 w-16 bg-[#e5b42b]" />

        <p className="mb-10 max-w-3xl text-base leading-8 text-[#344555] text-justify">
          Conheça os membros que compõem o Conselho da Comunidade da Comarca de
          João Pessoa, atuando de forma voluntária em defesa dos direitos das
          pessoas privadas de liberdade.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {membros.map((membro) => (
            <MembroCard key={membro.nome} membro={membro} />
          ))}
        </div>
      </div>
    </main>
  );
}
