"use client";

import { useState, type ReactNode } from "react";

type LegalCard = {
  title: string;
  description: string;
  back: ReactNode;
};

const backButtonClass =
  "mt-3 inline-flex items-center justify-center rounded-sm bg-white px-4 py-2 text-xs font-bold text-[#153f63] transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-[#153f63]";

const iconClass = "h-10 w-10";
const iconProps = {
  "aria-hidden": true as const,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const cards: LegalCard[] = [
  {
    title: "Lei de Execução Penal",
    description:
      "Referência normativa central para a atuação dos Conselhos da Comunidade no âmbito da execução penal.",
    back: (
      <div className="flex flex-1 flex-col justify-between text-center">
        <div className="flex flex-col items-center text-center gap-3">
          <svg {...iconProps} className={iconClass}>
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
          </svg>
          <p className="text-sm text-blue-50 text-justify">Acessar documento</p>
          <div>
            <h4 className="text-center text-sm font-bold">
              Artigos relacionados ao Conselho
            </h4>
            <ul className="mt-3 flex-1 space-y-2 overflow-y-auto pr-1 text-xs leading-snug text-blue-50">
              <li className="text-justify">
                Art. 80 — Criação e composição do Conselho
              </li>
              <li className="text-justify">
                Art. 81 — Atribuições principais (visitas, entrevistas, relatórios)
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-auto flex justify-center">
          <a
            href="https://www.planalto.gov.br/ccivil_03/leis/l7210.htm"
            target="_blank"
            rel="noopener noreferrer"
            className={`${backButtonClass} mx-auto`}
          >
            Ver lei completa →
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "Resolução CNJ nº 488/2023",
    description:
      "Diretriz nacional relacionada ao fortalecimento e à atuação dos Conselhos da Comunidade.",
    back: (
      <div className="flex flex-1 flex-col justify-between text-center">
        <div className="flex flex-col items-center text-center gap-3">
          <svg {...iconProps} className={iconClass}>
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
          </svg>
          <p className="text-sm text-blue-50 text-justify">Acessar documento</p>
          <p className="text-sm font-semibold text-justify">
            Política Judiciária para o Fortalecimento dos Conselhos da Comunidade
          </p>
        </div>
        <div className="mt-auto flex justify-center">
          <a
            href="https://atos.cnj.jus.br/atos/detalhar/4967"
            target="_blank"
            rel="noopener noreferrer"
            className={backButtonClass}
          >
            Ver resolução →
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "Estatuto do Conselho",
    description:
      "Documento oficial que regulamenta as diretrizes, a organização interna e as atribuições legais do Conselho da Comunidade de João Pessoa/PB",
    back: (
      <div className="flex flex-1 flex-col justify-between text-center">
        <div className="flex flex-col items-center text-center gap-3">
          <svg {...iconProps} className={iconClass}>
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
          </svg>
          <p className="text-sm text-blue-50 text-justify">Acessar documento</p>
          <p className="text-sm font-bold text-white text-center">
            Documento fundamental da nossa organização
          </p>
        </div>
        <div className="mt-auto flex justify-center">
          <a
            href="https://drive.google.com/file/d/1_3tKAh3-81s-A9CStJbVyO7dbBHzJQfi/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={backButtonClass}
          >
            Ver estatuto →
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "Documentos institucionais",
    description:
      "Área futura para reunir documentos de interesse social e institucional.",
    back: (
      <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
        <svg {...iconProps} className={iconClass}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
        <p className="text-lg font-bold">Em breve</p>
        <p className="text-sm text-blue-50 text-justify">
          Esta seção será atualizada com documentos institucionais do Conselho.
        </p>
      </div>
    ),
  },
];

function FlipCard({ title, description, back }: LegalCard) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="h-80" style={{ perspective: "1000px" }}>
      <div
        className="relative h-full w-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : undefined,
        }}
      >
        {/* Frente */}
        <article
          role="button"
          tabIndex={0}
          aria-label={`Virar card: ${title}`}
          onClick={() => setIsFlipped(true)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setIsFlipped(true);
            }
          }}
          className="absolute inset-0 cursor-pointer rounded-sm border border-[#d8e2ea] bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#0f6bab] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#0f6bab] focus:ring-offset-2"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="mb-5 h-1.5 w-12 rounded-full bg-[#e5b42b]" />
          <h3 className="text-lg font-semibold text-[#153f63]">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-[#526170] text-justify">
            {description}
          </p>
        </article>

        {/* Verso */}
        <div
          className="absolute inset-0 rounded-sm bg-[#153f63] p-5 text-white shadow-sm"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <button
            type="button"
            onClick={() => setIsFlipped(false)}
            aria-label="Voltar"
            className="absolute right-3 top-3 z-10 inline-flex items-center rounded-sm px-2 py-1 text-xs font-semibold text-white/70 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            Voltar
          </button>
          <div className="flex h-full flex-col pt-7">{back}</div>
        </div>
      </div>
    </div>
  );
}

export function BaseLegalCards() {
  return (
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <FlipCard key={card.title} {...card} />
      ))}
    </div>
  );
}
