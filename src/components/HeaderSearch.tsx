"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function HeaderSearch() {
  const [valor, setValor] = useState("");
  const router = useRouter();

  const buscar = () => {
    const termo = valor.trim();
    if (!termo) return;
    router.push(`/noticias?busca=${encodeURIComponent(termo)}`);
    setValor("");
  };

  return (
    <div className="hidden shrink-0 items-center md:flex">
      <input
        type="text"
        placeholder="Procurar..."
        value={valor}
        onChange={(event) => setValor(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            buscar();
          }
        }}
        aria-label="Buscar notícias"
        className="w-40 rounded-l-lg border border-[#d8e2ea] px-3 py-2 text-sm text-[#344555] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#0f6bab] lg:w-48"
      />
      <button
        type="button"
        onClick={buscar}
        aria-label="Buscar"
        className="rounded-r-lg border border-[#0f6bab] bg-[#0f6bab] px-3 py-2 text-white transition-colors hover:bg-[#153f63] focus:outline-none focus:ring-2 focus:ring-[#e5b42b]"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </button>
    </div>
  );
}
