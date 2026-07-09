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
  creditos?: {
    fonte: Credito;
    igFonte: Credito;
    igConselho: Credito;
  };
};

const noticias: Noticia[] = [
  {
    titulo:
      "Gravidez, maternidade e os desafios de manter laços com os filhos, dentro de uma penitenciária",
    data: "04 de julho de 2026",
    href: "/noticias/gravidez-maternidade-penitenciaria",
    resumo:
      "Reportagem do TJPB retrata a realidade de mulheres grávidas e mães na Penitenciária Feminina Maria Júlia Maranhão, em João Pessoa, e o acompanhamento do Conselho da Comunidade.",
    midia: {
      tipo: "imagem",
      src: "/gravidez-maternidade.png",
      alt: "Mulheres e maternidade no sistema prisional",
    },
  },
  {
    titulo:
      "Visita técnica do CNJ à Paraíba destaca experiência com grupos reflexivos no sistema prisional",
    data: "Julho 2026",
    href: "/noticias/visita-cnj-paraiba",
    resumo:
      "A Paraíba recebeu visita técnica do Conselho Nacional de Justiça, ocasião em que foi apresentada a experiência do grupo reflexivo desenvolvido na Penitenciária Desembargador Silvio Porto. A iniciativa foi destacada como uma prática relevante no âmbito do sistema prisional paraibano.",
    midia: {
      tipo: "video",
      src: "https://drive.google.com/file/d/1ud6qz0NDl4T0SlB09UgYC0B-yB0DN0b7/preview",
    },
    creditos: {
      fonte: {
        label: "TJPB",
        href: "https://www.tjpb.jus.br/e/videos/29235/7641631",
      },
      igFonte: {
        label: "@tjpb_oficial",
        href: "https://www.instagram.com/p/DagFbYvRxTK/",
      },
      igConselho: {
        label: "@conselhodacomunidadejp",
        href: "https://www.instagram.com/p/DagatnfvB4I/",
      },
    },
  },
  {
    titulo:
      "LOTEP discute projeto de acolhimento para familiares de internas do Presídio Feminino de João Pessoa",
    data: "2026",
    href: "/noticias/lotep-acolhimento-familiares",
    resumo:
      "Iniciativa promovida pela Loteria do Estado da Paraíba debateu estratégias de acolhimento e suporte psicossocial para familiares de mulheres privadas de liberdade, articulando parcerias com a rede de proteção social de João Pessoa.",
    midia: {
      tipo: "imagem",
      src: "/acao-apoio-familiares-1.jpeg",
      alt: "Projeto LOTEP de acolhimento a familiares",
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
              className="w-full h-full object-cover"
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
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === atual
                    ? "bg-[#e5b42b] w-6"
                    : "bg-white/70 hover:bg-white w-2.5"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Conteúdo abaixo da mídia — muda com o carrossel */}
        <div className="p-5">
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
