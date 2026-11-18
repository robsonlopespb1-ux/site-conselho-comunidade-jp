"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Midia =
  | { tipo: "video"; src: string }
  | { tipo: "imagem"; src: string; alt: string };

type Credito = { label: string; href: string };

type Noticia = {
  titulo: string;
  data: string;
  href: string;
  resumo: string;
  midia: Midia;
  /** Classe object-position do corte da imagem no destaque (ex.: "object-top"). Padrão: centralizado. */
  imagemPosicao?: string;
  creditos?: {
    fonte: Credito;
    igFonte: Credito;
    igConselho: Credito;
  };
};

const noticias: Noticia[] = [
  {
    titulo:
      "Feirão da Empregabilidade busca ampliar oportunidades de trabalho e renda para familiares e egressos do sistema prisional em João Pessoa",
    data: "18 de novembro de 2026",
    href: "/noticias/feirao-empregabilidade-egressos-familiares",
    resumo:
      "Promovida pelo Conselho da Comunidade, Escritório Social e Sedest-JP, iniciativa acontecerá no dia 24 de novembro, das 9h às 15h, na sede do Escritório Social, no Centro da Capital, reunindo serviços de empregabilidade, incentivo ao empreendedorismo e capacitação profissional.",
    midia: {
      tipo: "imagem",
      src: "/feirao-empregabilidade-capa.jpeg",
      alt: "Imagem ilustrativa de atendimento ao público: uma pessoa é orientada por uma atendente em uma mesa, com outros atendimentos ao fundo",
    },
  },
  {
    titulo:
      "Pouco mais de um ano após sua inauguração, CIAP fortalece alternativas penais e promove benefícios à sociedade paraibana",
    data: "07 de novembro de 2026",
    href: "/noticias/ciap-um-ano-alternativas-penais",
    resumo:
      "Inaugurada em agosto de 2025, a Central Integrada de Alternativas Penais consolida sua atuação na responsabilização penal, na prevenção da violência doméstica e na construção de alternativas à prisão, contribuindo para uma política de segurança pública mais eficiente e humanizada.",
    midia: {
      tipo: "imagem",
      src: "/ciap-cartaz-minha-historia-continua.jpeg",
      alt: "Cartaz com a frase “Minha história continua: novos capítulos começam, com novas escolhas”, cercado de notas adesivas com palavras como reflexão, paz, gratidão e recomeço",
    },
  },
  {
    titulo:
      "Fiscalização institucional destaca papel do JECRIM no fortalecimento de projetos de ressocialização em João Pessoa",
    data: "07 de novembro de 2026",
    href: "/noticias/fiscalizacao-jecrim-presidio-feminino",
    resumo:
      "Visita ao Presídio Feminino reuniu magistrados e representantes do Conselho da Comunidade e evidenciou a importância dos investimentos do Juizado Especial Criminal em iniciativas de reinserção social nas unidades prisionais da capital.",
    midia: {
      tipo: "imagem",
      src: "/jecrim-autoridades-na-unidade.jpeg",
      alt: "Comitiva da visita de fiscalização percorre a Penitenciária de Reeducação Feminina Maria Júlia Maranhão, com magistrados e a direção da unidade à frente",
    },
  },
];

export function NoticiasGrid() {
  const [atual, setAtual] = useState(0);

  // Avanço automático a cada 4s — controla APENAS o card principal
  useEffect(() => {
    const interval = setInterval(() => {
      setAtual((prev) => (prev + 1) % noticias.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const ativa = noticias[atual];

  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_0.6fr] items-stretch">
      {/* COLUNA ESQUERDA — card principal (muda com o carrossel) */}
      <article className="border border-[#d8e2ea] shadow-sm rounded-sm bg-white overflow-hidden">
        {/* Área de mídia com bolinhas sobrepostas */}
        <div className="relative w-full bg-black" style={{ height: "288px" }}>
          {ativa.midia.tipo === "video" ? (
            <iframe
              src={ativa.midia.src}
              width="100%"
              height="100%"
              allow="autoplay"
              className="w-full h-full"
              title={ativa.titulo}
            />
          ) : (
            <img
              src={ativa.midia.src}
              alt={ativa.midia.alt}
              className={`w-full h-full object-cover ${ativa.imagemPosicao || ""}`}
            />
          )}

          {/* Badge data — canto inferior esquerdo */}
          <span className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded pointer-events-none">
            {ativa.data}
          </span>

          {/* Bolinhas — canto superior direito, sobrepostas na mídia */}
          <div className="absolute top-3 right-3 flex gap-1.5 pointer-events-auto z-10">
            {noticias.map((noticia, i) => (
              <button
                key={noticia.titulo}
                type="button"
                onClick={() => setAtual(i)}
                aria-label={`Notícia ${i + 1}: ${noticia.titulo}`}
                className={`h-4 rounded-full transition-all duration-300 lg:h-2.5 ${
                  i === atual
                    ? "bg-[#e5b42b] w-8 lg:w-6"
                    : "bg-white/70 hover:bg-white w-4 lg:w-2.5"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Conteúdo abaixo da mídia — muda com o carrossel; min-h reserva a altura do slide mais alto (CNJ, com créditos) para o scroll não pular */}
        <div className="min-h-[460px] p-5 sm:min-h-[340px] lg:min-h-[300px]">
          <p className="text-xs font-bold uppercase tracking-widest text-[#386c38] flex items-center gap-1">
            {ativa.midia.tipo === "video" ? "📹 Vídeo" : "📰 Notícia"}
          </p>
          <Link
            href={ativa.href}
            className="font-bold text-lg text-[#153f63] hover:text-[#0f6bab] transition-colors leading-snug mt-2 block"
          >
            {ativa.titulo}
          </Link>
          <p className="mt-3 text-sm text-[#526170] text-justify leading-relaxed">
            {ativa.resumo}
          </p>
          {ativa.creditos && (
            <div className="mt-4 border-t border-[#d8e2ea] pt-4 text-xs text-[#526170] space-y-1">
              <p>
                📌 Fonte:{" "}
                <a
                  href={ativa.creditos.fonte.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0f6bab] hover:underline"
                >
                  {ativa.creditos.fonte.label}
                </a>
              </p>
              <p>
                Instagram TJPB:{" "}
                <a
                  href={ativa.creditos.igFonte.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0f6bab] hover:underline"
                >
                  {ativa.creditos.igFonte.label}
                </a>
              </p>
              <p>
                Instagram Conselho:{" "}
                <a
                  href={ativa.creditos.igConselho.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0f6bab] hover:underline"
                >
                  {ativa.creditos.igConselho.label}
                </a>
              </p>
            </div>
          )}
        </div>
      </article>

      {/* COLUNA DIREITA — lista fixa com as 3 notícias (não muda com o carrossel) */}
      <div className="flex flex-col h-full border border-[#d8e2ea] bg-white shadow-sm rounded-sm p-5">
        <p className="text-sm font-bold uppercase tracking-wider text-[#153f63]">
          Últimas Notícias
        </p>
        <div className="mt-1 mb-4 h-0.5 w-8 bg-[#e5b42b]" />
        <ul className="flex flex-1 flex-col">
          {noticias.map((noticia) => (
            <li
              key={noticia.titulo}
              className="flex flex-1 items-center border-b border-[#d8e2ea]"
            >
              <Link
                href={noticia.href}
                className="group flex w-full items-start gap-3 py-3"
              >
                <img
                  src="/logo-conselho.png"
                  alt=""
                  className="w-20 h-16 object-contain bg-[#eef6fc] rounded p-1 flex-shrink-0"
                />
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-[#526170]">{noticia.data}</span>
                  <span className="text-sm font-semibold leading-snug text-[#153f63] group-hover:text-[#0f6bab] transition-colors">
                    {noticia.titulo}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/noticias"
          className="mt-4 flex justify-end text-sm text-[#0f6bab] hover:underline"
        >
          Ver todas as notícias →
        </Link>
      </div>
    </div>
  );
}
