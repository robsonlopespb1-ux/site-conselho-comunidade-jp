import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import { ContactButton } from "@/components/ContactButton";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Notícias", href: "#noticias" },
  { label: "Base Legal", href: "#base-legal" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Parceiros", href: "#parceiros" },
  { label: "Transparência", href: "#transparencia" },
  { label: "Enviar Relato", href: "#enviar-relato" },
  { label: "Contato", href: "#contato" },
];

const socialLinks = [
  {
    label: "Instagram do Conselho da Comunidade",
    href: "https://www.instagram.com/conselhodacomunidadejp",
    icon: (
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
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </svg>
    ),
  },
];

function hasLogo() {
  return fs.existsSync(path.join(process.cwd(), "public", "logo-conselho.png"));
}

export function Header() {
  const logoAvailable = hasLogo();

  return (
    <header className="sticky top-0 z-50 border-b border-[#d8e2ea] bg-white/95 backdrop-blur">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-[#0f6bab] focus:px-4 focus:py-2 focus:text-white"
      >
        Ir para o conteúdo principal
      </a>
      <div className="bg-[#0f6bab] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-2 text-xs sm:flex-row sm:items-center sm:justify-between sm:text-sm lg:px-8">
          <span className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 leading-5">
            <span>Conselho da Comunidade da Comarca de João Pessoa/PB</span>
            <span className="hidden text-blue-100 sm:inline" aria-hidden="true">
              |
            </span>
            <span className="hidden text-blue-50 sm:inline">
              Garantindo direitos, estruturando novas oportunidades.
            </span>
          </span>
          <div className="flex shrink-0 items-center gap-2 sm:justify-end">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="inline-flex h-8 w-8 items-center justify-center rounded-sm text-blue-50 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-[#0f6bab]"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-stretch justify-between gap-4 px-6 py-4 sm:flex-row sm:items-center lg:px-8">
        <a href="#inicio" className="flex min-w-0 items-center gap-3">
          {logoAvailable ? (
            <Image
              src="/logo-conselho.png"
              alt="Conselho da Comunidade João Pessoa PB"
              width={112}
              height={92}
              priority
              className="h-14 w-auto object-contain sm:h-16"
            />
          ) : (
            <span className="flex h-14 w-14 items-center justify-center rounded-sm bg-[#0f6bab] text-sm font-bold text-white">
              CC
            </span>
          )}
          <span className="hidden max-w-64 text-sm font-bold leading-5 text-[#153f63] sm:block">
            Conselho da Comunidade
            <span className="block font-medium text-[#386c38]">
              João Pessoa/PB
            </span>
          </span>
        </a>

        <nav
          aria-label="Navegação principal"
          className="flex items-center gap-x-3 gap-y-2 overflow-x-auto text-sm font-semibold text-[#344555] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex-wrap lg:justify-center lg:overflow-visible xl:gap-x-4"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="main-nav-link shrink-0 whitespace-nowrap py-3 hover:text-[#0f6bab] lg:py-0"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ContactButton className="inline-flex w-full items-center justify-center rounded-sm bg-[#386c38] px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#2f5c2f] focus:outline-none focus:ring-2 focus:ring-[#e5b42b] focus:ring-offset-2 sm:w-auto sm:shrink-0">
          Fale com o Conselho
        </ContactButton>
      </div>
    </header>
  );
}
