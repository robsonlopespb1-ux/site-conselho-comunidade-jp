"use client";

import { useEffect } from "react";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const channels = [
  {
    href: "https://wa.me/5583999999999",
    external: true,
    title: "Atendimento via WhatsApp",
    support: "Para dúvidas e respostas rápidas",
    bg: "bg-[#f0fdf4]",
    border: "border-[#16a34a]",
    color: "text-[#16a34a]",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    href: "mailto:conselhodacomunidadejp@gmail.com",
    external: false,
    title: "E-mail Institucional",
    support: "Para envio de ofícios e documentos formais",
    bg: "bg-[#eff6ff]",
    border: "border-[#0f6bab]",
    color: "text-[#0f6bab]",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
];

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md relative mx-4"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full text-[#526170] transition hover:bg-[#f4f6f8] hover:text-[#153f63] focus:outline-none focus:ring-2 focus:ring-[#0f6bab] focus:ring-offset-2 lg:h-9 lg:w-9"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <h2
          id="contact-modal-title"
          className="pr-10 text-2xl font-bold text-[#153f63]"
        >
          Fale com o Conselho
        </h2>
        <p className="mt-1 text-sm text-[#526170]">
          Escolha o canal de atendimento:
        </p>

        <div className="mt-6 flex flex-col gap-3">
          {channels.map((channel) => (
            <a
              key={channel.title}
              href={channel.href}
              {...(channel.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={`flex w-full items-center gap-4 rounded-lg border ${channel.border} ${channel.bg} p-4 text-left transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0f6bab]`}
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm ${channel.color}`}
              >
                {channel.icon}
              </span>
              <span className="flex min-w-0 flex-col">
                <span className="text-base font-bold text-[#153f63]">
                  {channel.title}
                </span>
                <span className="text-sm text-[#526170]">
                  {channel.support}
                </span>
              </span>
            </a>
          ))}

          <a
            href="#contato"
            onClick={onClose}
            className="flex w-full items-center gap-4 rounded-lg border border-[#64748b] bg-[#f8fafc] p-4 text-left transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0f6bab]"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-[#64748b] shadow-sm">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
                <path d="M9 9h1" />
                <path d="M9 13h6" />
                <path d="M9 17h6" />
              </svg>
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="text-base font-bold text-[#153f63]">
                Enviar Relato ou Sugestão
              </span>
              <span className="text-sm text-[#526170]">
                Canal seguro para encaminhamentos
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
