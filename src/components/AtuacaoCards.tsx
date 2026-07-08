"use client";

import { useEffect, useState } from "react";
import { InfoCard } from "@/components/InfoCard";

type WorkArea = {
  title: string;
  description: string;
};

export function AtuacaoCards({ items }: { items: WorkArea[] }) {
  const [atual, setAtual] = useState(0);
  const [porTela, setPorTela] = useState(3);

  // Cards visíveis por breakpoint (lg: 3, sm: 2, mobile: 1)
  useEffect(() => {
    const calcular = () => {
      if (window.innerWidth >= 1024) setPorTela(3);
      else if (window.innerWidth >= 640) setPorTela(2);
      else setPorTela(1);
    };
    calcular();
    window.addEventListener("resize", calcular);
    return () => window.removeEventListener("resize", calcular);
  }, []);

  // Última posição possível da janela (ex.: 6 - 3 = 3 → índices 0,1,2,3)
  const totalPosicoes = Math.max(0, items.length - porTela);

  // Se o breakpoint mudou e a posição atual não existe mais, corrige
  useEffect(() => {
    setAtual((prev) => Math.min(prev, totalPosicoes));
  }, [totalPosicoes]);

  // Avanço automático de 3s — 1 card por vez; volta a 0 após a última janela
  useEffect(() => {
    const interval = setInterval(() => {
      setAtual((prev) => (prev >= totalPosicoes ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [totalPosicoes]);

  return (
    <div className="mt-12">
      <div className="overflow-hidden">
        <div
          className="flex"
          style={{
            transform: `translateX(-${atual * (100 / porTela)}%)`,
            transition: "transform 500ms ease-in-out",
          }}
        >
          {items.map((item, index) => (
            <div
              key={item.title}
              className="flex-shrink-0 px-2.5"
              style={{ width: `calc(100% / ${porTela})` }}
            >
              <InfoCard
                index={index + 1}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bolinhas de navegação — uma por posição da janela (totalPosicoes + 1) */}
      <div className="mt-6 flex justify-center gap-1.5">
        {Array.from({ length: totalPosicoes + 1 }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setAtual(index)}
            aria-label={`Ir para a posição ${index + 1} do carrossel`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              atual === index
                ? "w-6 bg-[#0f6bab]"
                : "w-2.5 bg-[#d8e2ea] hover:bg-[#0f6bab]/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
