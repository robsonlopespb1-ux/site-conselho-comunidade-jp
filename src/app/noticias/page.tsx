"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

type Noticia = {
  imagem: string;
  data: string;
  titulo: string;
  resumo: string;
  href: string;
};

const noticias: Noticia[] = [
  {
    imagem: "/castelo-bonecas.jpeg",
    data: "10 de julho de 2026",
    titulo:
      "Castelo de Bonecas: mulheres do sistema prisional produzem os mascotes oficiais do SUS",
    resumo:
      "Artesãs da Penitenciária Feminina Maria Júlia Maranhão confeccionaram os novos mascotes do Sistema Único de Saúde, SUSi e PegaSUS, em projeto do Emprega Lab do CNJ que promove inclusão sociolaboral.",
    href: "/noticias/castelo-bonecas-mascotes-sus",
  },
  {
    imagem: "/mutirao-documentacao.jpeg",
    data: "10 de julho de 2026",
    titulo:
      "Mutirão de documentação na Penitenciária Desembargador Silvio Porto",
    resumo:
      "Ação integrada com o Instituto de Polícia Científica e a Receita Federal garantiu emissão de documentos para pessoas privadas de liberdade, dando continuidade aos mutirões nos presídios.",
    href: "/noticias/mutirao-documentacao-silvio-porto",
  },
  {
    imagem: "/grupos-reflexivos.jpeg",
    data: "10 de julho de 2026",
    titulo:
      "Grupos reflexivos sobre violência contra a mulher na Penitenciária Silvio Porto",
    resumo:
      "Sessão introdutória de comunicação não violenta reuniu parte dos noivos do casamento coletivo, em trabalho conjunto que gera impactos positivos para a comunidade penal.",
    href: "/noticias/grupos-reflexivos-violencia-mulher",
  },
  {
    imagem: "/gravidez-maternidade.png",
    data: "04 de julho de 2026",
    titulo:
      "Gravidez, maternidade e os desafios de manter laços com os filhos, dentro de uma penitenciária",
    resumo:
      "Reportagem do TJPB retrata a realidade de mulheres grávidas e mães na Penitenciária Feminina Maria Júlia Maranhão, em João Pessoa, e o acompanhamento do Conselho da Comunidade.",
    href: "/noticias/gravidez-maternidade-penitenciaria",
  },
  {
    imagem: "/thumb-cnj.png",
    data: "Julho 2026",
    titulo:
      "Visita técnica do CNJ à Paraíba destaca experiência com grupos reflexivos no sistema prisional",
    resumo:
      "A Paraíba recebeu visita técnica do Conselho Nacional de Justiça, ocasião em que foi apresentada a experiência do grupo reflexivo desenvolvido na Penitenciária Desembargador Silvio Porto.",
    href: "/noticias/visita-cnj-paraiba",
  },
  {
    imagem: "/acao-apoio-familiares-1.jpeg",
    data: "2026",
    titulo:
      "LOTEP discute projeto de acolhimento para familiares de internas do Presídio Feminino de João Pessoa",
    resumo:
      "Iniciativa promovida pela Loteria do Estado da Paraíba debateu estratégias de acolhimento e suporte psicossocial para familiares de mulheres privadas de liberdade.",
    href: "/noticias/lotep-acolhimento-familiares",
  },
  {
    imagem: "/acao-apoio-familiares-2.jpeg",
    data: "2026",
    titulo:
      "Conselho Gestor do FDD/PB aprova 12 projetos sociais voltados ao sistema prisional",
    resumo:
      "O Conselho Gestor do Fundo de Defesa dos Direitos Difusos da Paraíba aprovou 12 projetos sociais com foco na reinserção social, apoio a familiares e melhoria das condições do sistema prisional paraibano.",
    href: "/noticias/fdd-projetos-sociais",
  },
];

const MESES: Record<string, number> = {
  janeiro: 0,
  fevereiro: 1,
  março: 2,
  abril: 3,
  maio: 4,
  junho: 5,
  julho: 6,
  agosto: 7,
  setembro: 8,
  outubro: 9,
  novembro: 10,
  dezembro: 11,
};

/** Converte datas em texto ("10 de julho de 2026", "Julho 2026", "2026") para Date. */
function parseDataNoticia(dataStr: string): Date | null {
  const s = dataStr.trim().toLowerCase();

  let m = s.match(/^(\d{1,2})\s+de\s+([a-zç]+)\s+de\s+(\d{4})$/);
  if (m && MESES[m[2]] !== undefined) {
    return new Date(Number(m[3]), MESES[m[2]], Number(m[1]));
  }

  m = s.match(/^([a-zç]+)\s+(?:de\s+)?(\d{4})$/);
  if (m && MESES[m[1]] !== undefined) {
    return new Date(Number(m[2]), MESES[m[1]], 1);
  }

  m = s.match(/^(\d{4})$/);
  if (m) {
    return new Date(Number(m[1]), 0, 1);
  }

  return null;
}

/** Converte o valor do <input type="date"> (YYYY-MM-DD) para Date local, sem deslocamento de fuso. */
function parseDataInput(valor: string): Date {
  const [ano, mes, dia] = valor.split("-").map(Number);
  return new Date(ano, mes - 1, dia);
}

/** Minúsculas e sem acentos — "mutirao" encontra "Mutirão". */
function normalizar(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

const inputDataClass =
  "border border-[#d8e2ea] rounded-lg px-3 py-2 text-sm text-[#344555] focus:outline-none focus:ring-2 focus:ring-[#0f6bab]";

function NoticiasContent() {
  const searchParams = useSearchParams();
  const buscaParam = searchParams.get("busca") ?? "";

  const [busca, setBusca] = useState(buscaParam);
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");

  // Sincroniza o filtro quando a URL muda (ex.: busca feita pelo Header
  // enquanto o usuário já está em /noticias).
  useEffect(() => {
    setBusca(buscaParam);
  }, [buscaParam]);

  const termo = normalizar(busca.trim());

  const filtradas = noticias.filter((noticia) => {
    if (
      termo &&
      !normalizar(noticia.titulo).includes(termo) &&
      !normalizar(noticia.resumo).includes(termo)
    ) {
      return false;
    }

    if (dataInicio || dataFim) {
      const dataNoticia = parseDataNoticia(noticia.data);
      if (!dataNoticia) return false;
      if (dataInicio && dataNoticia < parseDataInput(dataInicio)) return false;
      if (dataFim && dataNoticia > parseDataInput(dataFim)) return false;
    }

    return true;
  });

  const limparFiltros = () => {
    setBusca("");
    setDataInicio("");
    setDataFim("");
  };

  return (
    <main className="bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="text-sm font-semibold text-[#0f6bab] underline-offset-4 transition hover:underline"
        >
          ← Voltar ao início
        </Link>

        <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-[#386c38]">
          Notícias
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#153f63] sm:text-4xl">
          Todas as Notícias
        </h1>
        <div className="mt-5 h-1.5 w-16 rounded-full bg-[#e5b42b]" />

        {/* Barra de filtros */}
        <div className="mt-10 mb-8 rounded-lg border border-[#d8e2ea] bg-[#f4f6f8] p-4">
          <div className="flex flex-wrap items-end gap-4">
            <div className="w-full sm:w-auto">
              <label
                htmlFor="filtro-data-inicio"
                className="mb-1 block text-xs font-semibold uppercase text-[#526170]"
              >
                Período de
              </label>
              <input
                id="filtro-data-inicio"
                type="date"
                value={dataInicio}
                onChange={(event) => setDataInicio(event.target.value)}
                className={`w-full sm:w-auto ${inputDataClass}`}
              />
            </div>
            <div className="w-full sm:w-auto">
              <label
                htmlFor="filtro-data-fim"
                className="mb-1 block text-xs font-semibold uppercase text-[#526170]"
              >
                até
              </label>
              <input
                id="filtro-data-fim"
                type="date"
                value={dataFim}
                onChange={(event) => setDataFim(event.target.value)}
                className={`w-full sm:w-auto ${inputDataClass}`}
              />
            </div>
            <div className="w-full sm:w-auto">
              <label
                htmlFor="filtro-busca"
                className="mb-1 block text-xs font-semibold uppercase text-[#526170]"
              >
                Palavra-chave
              </label>
              <input
                id="filtro-busca"
                type="text"
                placeholder="Buscar..."
                value={busca}
                onChange={(event) => setBusca(event.target.value)}
                className="w-full rounded-lg border border-[#d8e2ea] px-3 py-2 text-sm text-[#344555] focus:outline-none focus:ring-2 focus:ring-[#0f6bab] sm:w-48"
              />
            </div>
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0f6bab] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#153f63] sm:w-auto"
            >
              🔍 Buscar
            </button>
            <button
              type="button"
              onClick={limparFiltros}
              className="w-full py-2 text-center text-sm text-[#526170] underline hover:text-[#0f6bab] sm:w-auto sm:py-0 sm:text-left"
            >
              Limpar
            </button>
          </div>
        </div>

        <p className="mb-4 text-sm text-[#526170]">
          {filtradas.length} notícia(s) encontrada(s)
        </p>

        {filtradas.length === 0 ? (
          <p className="py-12 text-center text-lg text-[#526170]">
            Nenhuma notícia encontrada para os filtros aplicados.
          </p>
        ) : (
          <div className="space-y-5">
            {filtradas.map((noticia) => (
              <Link
                key={noticia.href}
                href={noticia.href}
                className="group flex gap-4 rounded border border-[#d8e2ea] bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer"
              >
                <img
                  src={noticia.imagem}
                  alt=""
                  className="h-24 w-32 flex-shrink-0 rounded object-cover"
                />
                <div>
                  <span className="text-xs text-[#526170]">{noticia.data}</span>
                  <h2 className="font-semibold text-[#153f63] transition-colors group-hover:text-[#0f6bab]">
                    {noticia.titulo}
                  </h2>
                  <p className="mt-1 text-sm text-[#526170] text-justify">
                    {noticia.resumo}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}

        <p className="mt-12 text-center text-sm text-[#526170]">
          Mais notícias em breve. Acompanhe nossas redes:{" "}
          <a
            href="https://www.instagram.com/conselhodacomunidadejp/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#0f6bab] hover:underline"
          >
            @conselhodacomunidadejp
          </a>
        </p>
      </div>
    </main>
  );
}

// useSearchParams exige um Suspense boundary no prerender do App Router.
export default function NoticiasPage() {
  return (
    <Suspense fallback={null}>
      <NoticiasContent />
    </Suspense>
  );
}
