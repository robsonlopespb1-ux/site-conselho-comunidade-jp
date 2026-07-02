const footerLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Projetos", href: "#projetos" },
  { label: "Transparência", href: "#transparencia" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#d8e2ea] bg-[#153f63] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <h2 className="text-xl font-bold">
            Conselho da Comunidade da Comarca de João Pessoa/PB
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-50">
            Atuação social, cidadania e articulação comunitária no âmbito da
            execução penal, fortalecendo pontes entre comunidade, instituições
            públicas e rede de proteção.
          </p>
        </div>
        <nav
          aria-label="Navegação do rodapé"
          className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3"
        >
          {footerLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-blue-50 transition hover:text-white hover:underline"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-blue-100 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>© 2026 Conselho da Comunidade de João Pessoa/PB.</span>
          <span>Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
