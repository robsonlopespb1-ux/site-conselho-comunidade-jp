"use client";

import { useState } from "react";

const overviewItems = [
  "Integração com o Judiciário",
  "Articulação de Políticas Públicas",
  "Engajamento da Sociedade Civil",
  "Acolhimento a Famílias e Egressos",
];

const tabs = [
  {
    title: "Menu Principal / Visão Geral",
    label: "Visão geral",
    content: "",
    visualLabel: "",
    visualNumber: "",
  },
  {
    title: "Integração com o Judiciário",
    label: "Integração com o Judiciário",
    content:
      "Atuamos como um braço fiscalizador e consultivo permanente junto à Vara de Execução Penal e ao Ministério Público. Nossa missão é fornecer relatórios técnicos precisos, realizar vistorias e garantir que a execução penal ocorra com a legalidade e a transparência que a sociedade exige.",
    visualLabel: "Justiça",
    visualNumber: "01",
  },
  {
    title: "Articulação de Políticas Públicas",
    label: "Articulação de Políticas Públicas",
    content:
      "Conectamos o ambiente prisional às redes de saúde, educação e assistência social. Focamos na implementação de soluções estruturais em parceria com o Estado para garantir que a ressocialização seja uma política pública contínua, e não apenas uma ação isolada.",
    visualLabel: "Rede de Proteção",
    visualNumber: "02",
  },
  {
    title: "Engajamento da Sociedade Civil",
    label: "Engajamento da Sociedade Civil",
    content:
      "Mobilizamos empresas privadas, instituições de ensino e voluntários para atuarem ativamente no processo de reintegração. Construímos uma rede de apoio sólida, transformando a execução penal em um compromisso compartilhado por toda a comunidade.",
    visualLabel: "Comunidade",
    visualNumber: "03",
  },
  {
    title: "Acolhimento a Famílias e Egressos",
    label: "Acolhimento a Famílias e Egressos",
    content:
      "Oferecemos suporte direto a quem busca recomeçar. Por meio de assistência humanizada, orientação jurídica e direcionamento profissional, entregamos a estrutura necessária para que egressos e seus familiares reconstruam suas vidas com dignidade.",
    visualLabel: "Acolhimento",
    visualNumber: "04",
  },
];

function InstitutionalVisual({
  label,
  number,
}: {
  label: string;
  number: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-sm border border-[#d8e2ea] bg-white p-5">
      <div className="absolute -right-7 -top-7 h-24 w-24 rounded-full border-[14px] border-[#71ad44]/20" />
      <div className="absolute -bottom-8 left-6 h-20 w-20 rounded-full border-[12px] border-[#e5b42b]/25" />
      <div className="relative flex min-h-28 items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-[#0f6bab] text-sm font-bold text-white shadow-sm">
          {number}
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#386c38]">
            Eixo institucional
          </p>
          <p className="mt-2 text-lg font-bold text-[#153f63]">{label}</p>
        </div>
      </div>
    </div>
  );
}

export function RedeAtuacaoTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = tabs[activeIndex];

  return (
    <section
      aria-label="Rede de atuação"
      className="relative min-w-0 rounded-sm border border-[#cdd9e4] bg-[#f4f6f8] p-5 shadow-sm sm:p-8"
    >
      <style>{`
        @keyframes redeAtuacaoFadeIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div className="mb-7 flex items-center gap-3 border-b border-[#d8e2ea] pb-5">
        <div className="flex items-center gap-2" role="tablist" aria-label="Abas da rede de atuação">
          {tabs.map((tab, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={tab.label}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Abrir aba ${index + 1}: ${tab.label}`}
                onClick={() => setActiveIndex(index)}
                className={[
                  "h-3.5 w-3.5 cursor-pointer rounded-full transition duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-[#0f6bab] focus:ring-offset-2",
                  isActive
                    ? "scale-110 bg-[#0f6bab] ring-2 ring-[#0f6bab]/25 ring-offset-2"
                    : "bg-[#71ad44] opacity-70",
                  index === 4 && !isActive ? "bg-[#e5b42b]" : "",
                ].join(" ")}
              />
            );
          })}
        </div>
        <h2 className="ml-auto min-w-0 text-right text-xs font-semibold uppercase tracking-[0.14em] text-[#526170]">
          REDE DE ATUAÇÃO
        </h2>
      </div>

      <div
        key={activeIndex}
        style={{ animation: "redeAtuacaoFadeIn 0.3s ease" }}
      >
        {activeIndex === 0 ? (
          <div className="space-y-4">
            {overviewItems.map((item, index) => (
              <article
                key={item}
                className="flex items-center gap-4 rounded-sm bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#0f6bab] text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-semibold text-[#153f63] sm:text-base">
                  {item}
                </h3>
              </article>
            ))}
            <p className="mt-5 border-l-4 border-[#386c38] pl-4 text-sm leading-relaxed text-[#526170]">
              Atuação orientada por dignidade, participação social,
              responsabilidade pública e reinserção comunitária.
            </p>
          </div>
        ) : (
          <article className="space-y-5">
            <InstitutionalVisual
              label={activeTab.visualLabel}
              number={activeTab.visualNumber}
            />
            <div className="border-l-4 border-[#386c38] bg-white p-5">
              <h3 className="text-xl font-bold text-[#153f63]">
                {activeTab.title}
              </h3>
              <p
                className="mt-4 text-sm leading-7 text-[#526170]"
                style={{ textAlign: "justify" }}
              >
                {activeTab.content}
              </p>
            </div>
          </article>
        )}
      </div>
    </section>
  );
}
