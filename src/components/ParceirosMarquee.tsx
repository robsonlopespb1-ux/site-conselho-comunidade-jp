"use client";

import type { CSSProperties } from "react";

type Parceiro = {
  nome: string;
  logo: string;
  /** Altura em px na esteira — compensa logos quadradas/verticais que ficam pequenas com altura única. Padrão: 60. */
  altura?: number;
  /** Site oficial do parceiro — quando presente, a logo vira link aberto em nova aba. */
  url?: string;
};

type ParceirosMarqueeProps = {
  parceiros: Parceiro[];
};

export function ParceirosMarquee({ parceiros }: ParceirosMarqueeProps) {
  const duracaoSegundos = Math.max(20, parceiros.length * 3);

  return (
    <div>
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .parceiros-marquee-track {
          animation: marquee-scroll ${duracaoSegundos}s linear infinite;
        }
        .parceiros-marquee:hover .parceiros-marquee-track {
          animation-play-state: paused;
        }
      `}</style>
      <div className="parceiros-marquee relative w-full overflow-hidden">
        {/* o padding-right espelha o gap em cada breakpoint para o translateX(-50%) fechar o loop sem salto */}
        <div className="parceiros-marquee-track flex w-max items-center gap-10 pr-10 lg:gap-16 lg:pr-16">
          {[...parceiros, ...parceiros].map((parceiro, index) => {
            const imagem = (
              <img
                src={`/parceiros/${parceiro.logo}`}
                alt={parceiro.nome}
                style={
                  { "--logo-h": `${parceiro.altura ?? 60}px` } as CSSProperties
                }
                className="h-[calc(var(--logo-h)*0.7)] w-auto object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 lg:h-[var(--logo-h)]"
              />
            );

            return (
              <div key={`${parceiro.nome}-${index}`} className="flex-shrink-0">
                {parceiro.url ? (
                  <a
                    href={parceiro.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visitar site: ${parceiro.nome}`}
                    className="block cursor-pointer"
                  >
                    {imagem}
                  </a>
                ) : (
                  imagem
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
