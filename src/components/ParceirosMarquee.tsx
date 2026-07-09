"use client";

type Parceiro = {
  nome: string;
  logo: string;
  /** Altura em px na esteira — compensa logos quadradas/verticais que ficam pequenas com altura única. Padrão: 60. */
  altura?: number;
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
        {/* pr-16 espelha o gap-16 para o translateX(-50%) fechar o loop sem salto */}
        <div className="parceiros-marquee-track flex w-max items-center gap-16 pr-16">
          {[...parceiros, ...parceiros].map((parceiro, index) => (
            <div key={`${parceiro.nome}-${index}`} className="flex-shrink-0">
              <img
                src={`/parceiros/${parceiro.logo}`}
                alt={parceiro.nome}
                style={{ height: parceiro.altura ?? 60 }}
                className="w-auto object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
      <p className="mt-8 text-center text-sm italic text-[#526170]">
        E outros parceiros institucionais
      </p>
    </div>
  );
}
