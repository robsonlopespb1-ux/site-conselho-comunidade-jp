"use client";

import { useState } from "react";

type ShareButtonsProps = {
  titulo: string;
};

const botaoClass =
  "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-white transition hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#e5b42b] focus:ring-offset-2";

const iconeStrokeProps = {
  "aria-hidden": true as const,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ShareButtons({ titulo }: ShareButtonsProps) {
  const [copiado, setCopiado] = useState(false);

  const compartilharFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const compartilharWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(`${titulo} ${window.location.href}`)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const compartilharEmail = () => {
    window.location.href = `mailto:?subject=${encodeURIComponent(titulo)}&body=${encodeURIComponent(window.location.href)}`;
  };

  const copiarLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      // clipboard indisponível (ex.: contexto não seguro) — não quebra a página
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-[#526170]">Compartilhar</span>

      <button
        type="button"
        onClick={compartilharFacebook}
        aria-label="Compartilhar no Facebook"
        className={`${botaoClass} bg-[#1877F2]`}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="currentColor"
        >
          <path d="M14 7h3V4h-3a4 4 0 0 0-4 4v2H7v3h3v7h3v-7h2.6l.4-3h-3V8a1 1 0 0 1 1-1z" />
        </svg>
      </button>

      <button
        type="button"
        onClick={compartilharWhatsApp}
        aria-label="Compartilhar no WhatsApp"
        className={`${botaoClass} bg-[#25D366]`}
      >
        <svg {...iconeStrokeProps} className="h-5 w-5">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </button>

      <button
        type="button"
        onClick={compartilharEmail}
        aria-label="Compartilhar por e-mail"
        className={`${botaoClass} bg-[#0f6bab]`}
      >
        <svg {...iconeStrokeProps} className="h-5 w-5">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M22 4L12 13L2 4" />
        </svg>
      </button>

      <button
        type="button"
        onClick={copiarLink}
        aria-label={copiado ? "Link copiado" : "Copiar link"}
        className={`${botaoClass} bg-[#526170]`}
      >
        {copiado ? (
          <svg {...iconeStrokeProps} className="h-5 w-5">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        ) : (
          <svg {...iconeStrokeProps} className="h-5 w-5">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        )}
      </button>
    </div>
  );
}
