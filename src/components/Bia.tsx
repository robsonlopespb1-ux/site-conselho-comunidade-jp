"use client";

import { useEffect, useRef, useState } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const INITIAL_MESSAGE =
  "Olá! Sou a BIA, assistente do Conselho da Comunidade de João Pessoa. Posso te ajudar com informações sobre nossa atuação, como nos contatar e como podemos apoiar você. Como posso ajudar?";

function BiaAvatar({ className }: { className: string }) {
  return (
    <img
      src="/bia-avatar.png"
      alt="Avatar da assistente BIA"
      className={className}
    />
  );
}

export function Bia() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: INITIAL_MESSAGE },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, isOpen]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: text },
    ];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/bia", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = (await response.json()) as { reply?: string; error?: string };
      const reply =
        data.reply ||
        "Não tenho essa informação no momento. Para mais detalhes, entre em contato pelo e-mail conselhodacomunidadejp@gmail.com ou acesse a seção Contato do nosso site.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Desculpe, tive um problema para responder agora. Tente novamente em instantes ou fale conosco pelo e-mail conselhodacomunidadejp@gmail.com.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Janela de chat */}
      {isOpen && (
        <div className="fixed bottom-28 left-8 z-50 w-80 overflow-hidden rounded-xl border border-[#d8e2ea] bg-white shadow-2xl sm:w-96">
          {/* Header */}
          <div className="flex items-center gap-3 bg-[#0f6bab] px-4 py-3">
            <BiaAvatar className="h-8 w-8 rounded-full object-cover" />
            <div className="min-w-0 flex-1">
              <p className="flex items-center gap-2 text-sm font-bold text-white">
                BIA
                <span className="inline-block h-2 w-2 rounded-full bg-green-400" />
              </p>
              <p className="text-xs text-white/70">Assistente Virtual do Conselho</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar chat"
              className="text-white transition hover:text-white/80"
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
          </div>

          {/* Mensagens */}
          <div className="h-72 space-y-3 overflow-y-auto bg-white p-4">
            {messages.map((message, index) =>
              message.role === "user" ? (
                <div key={index} className="flex justify-end">
                  <div className="max-w-[80%] rounded-tl-xl rounded-tr-xl rounded-bl-xl bg-[#0f6bab] p-3 text-sm text-white">
                    {message.content}
                  </div>
                </div>
              ) : (
                <div key={index} className="flex items-end gap-2">
                  <BiaAvatar className="h-7 w-7 shrink-0 rounded-full object-cover" />
                  <div className="max-w-[80%] rounded-tl-xl rounded-tr-xl rounded-br-xl bg-[#f4f6f8] p-3 text-sm text-[#153f63]">
                    {message.content.split('\n').map((line, i) => line === '' ? <br key={i} /> : <span key={i}>{line}<br /></span>)}
                  </div>
                </div>
              ),
            )}

            {loading && (
              <div className="flex items-end gap-2">
                <BiaAvatar className="h-7 w-7 shrink-0 rounded-full object-cover" />
                <div className="flex items-center gap-1 rounded-tl-xl rounded-tr-xl rounded-br-xl bg-[#f4f6f8] p-3">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-[#0f6bab] [animation-delay:-0.3s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-[#0f6bab] [animation-delay:-0.15s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-[#0f6bab]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex gap-2 border-t border-[#d8e2ea] p-3">
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Digite sua mensagem..."
              aria-label="Mensagem para a BIA"
              className="min-w-0 flex-1 rounded-full border border-[#d8e2ea] px-4 py-2 text-sm text-[#153f63] focus:border-[#0f6bab] focus:outline-none focus:ring-2 focus:ring-[#0f6bab]/30"
            />
            <button
              type="button"
              onClick={sendMessage}
              disabled={loading}
              aria-label="Enviar mensagem"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0f6bab] text-white transition hover:bg-[#0d5d95] focus:outline-none focus:ring-2 focus:ring-[#e5b42b] focus:ring-offset-2 disabled:opacity-60"
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
                <path d="M22 2 11 13" />
                <path d="M22 2 15 22l-4-9-9-4 20-7z" />
              </svg>
            </button>
          </div>

          {/* Rodapé */}
          <p className="py-1 text-center text-xs text-[#526170]">
            Assistente informativo do Conselho da Comunidade JP
          </p>
        </div>
      )}

      {/* Botão flutuante */}
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Fechar assistente BIA" : "Abrir assistente BIA"}
        className="fixed bottom-8 left-8 z-50 flex flex-col items-center focus:outline-none"
      >
        <span className="mb-1 rounded-full bg-[#0f6bab] px-2 py-0.5 text-xs font-bold text-white shadow">
          BIA
        </span>
        <span className="relative">
          <BiaAvatar className="h-14 w-14 rounded-full border-2 border-[#0f6bab] object-cover shadow-lg" />
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
        </span>
      </button>
    </>
  );
}
