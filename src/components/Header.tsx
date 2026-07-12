import Image from "next/image";
import Link from "next/link";
import fs from "node:fs";
import path from "node:path";
import { ContactButton } from "@/components/ContactButton";

const navItems = [
  { label: "Início", href: "/#inicio" },
  { label: "Notícias", href: "/#noticias" },
  { label: "Base Legal", href: "/#base-legal" },
  { label: "Atuação", href: "/#atuacao" },
  { label: "Parceiros", href: "/#parceiros" },
  { label: "Doações", href: "/#doacoes" },
  { label: "Transparência", href: "/#transparencia" },
  { label: "Enviar Relato", href: "/#enviar-relato" },
  { label: "Contato", href: "/#contato" },
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
    <>
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-[#0f6bab] focus:px-4 focus:py-2 focus:text-white"
      >
        Ir para o conteúdo principal
      </a>

      {/* CAMADA 1: Barra de utilidades — NÃO sticky */}
      <div className="bg-[#0f2744] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-2">
          <span className="min-w-0 truncate text-xs text-white/90 sm:text-sm">
            Conselho da Comunidade da Comarca de João Pessoa/PB
            <span className="hidden opacity-60 sm:inline" aria-hidden="true">
              {"  |  "}
            </span>
            <span className="hidden sm:inline">
              Garantindo direitos, estruturando novas oportunidades.
            </span>
          </span>
          <div className="flex shrink-0 items-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="inline-flex h-8 w-8 items-center justify-center rounded-sm text-white transition hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-[#0f2744]"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-[#0f6bab] via-[#71ad44] to-[#e5b42b]" />

      {/* CAMADA 2: Masthead institucional — NÃO sticky */}
      <div className="border-b border-[#d8e2ea] bg-white py-4 lg:py-6">
        <div className="mx-auto flex max-w-7xl items-center px-4">
          <Link href="/#inicio" className="flex min-w-0 shrink-0 items-center gap-3">
            {logoAvailable ? (
              <Image
                src="/logo-conselho.png"
                alt="Conselho da Comunidade João Pessoa PB"
                width={112}
                height={92}
                priority
                className="h-20 w-auto object-contain lg:h-24 xl:h-28"
              />
            ) : (
              <span className="flex h-16 w-16 items-center justify-center rounded-sm bg-[#0f6bab] text-sm font-bold text-white">
                CC
              </span>
            )}
            <span className="min-w-0">
              <span className="block text-lg font-bold leading-6 text-[#153f63] lg:text-xl">
                Conselho da Comunidade
              </span>
              <span className="block text-sm text-[#526170] lg:text-base">
                Comarca de João Pessoa/PB
              </span>
            </span>
          </Link>

          <img
            src="/ilustracaojoaopessoa.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none ml-auto hidden h-28 w-auto max-w-[60%] select-none object-contain mix-blend-multiply md:block lg:h-36 lg:max-w-[55%] xl:h-40"
          />
        </div>
      </div>

      {/* CAMADA 3: Menu de navegação — STICKY */}
      <header className="sticky top-0 z-50 bg-[#0f6bab] shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <nav
            aria-label="Navegação principal"
            className="flex min-w-0 items-center gap-x-4 overflow-x-auto text-sm font-medium [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-6 lg:overflow-visible"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="main-nav-link shrink-0 whitespace-nowrap py-3 text-white transition-colors hover:text-[#e5b42b] lg:py-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <ContactButton className="shrink-0 whitespace-nowrap rounded-lg bg-white px-4 py-3 text-sm font-semibold text-[#0f6bab] transition-colors hover:bg-[#e5b42b] hover:text-white focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-[#0f6bab] lg:py-2">
            Fale com o Conselho
          </ContactButton>
        </div>
      </header>
    </>
  );
}
