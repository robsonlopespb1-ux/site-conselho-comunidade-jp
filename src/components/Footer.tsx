import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0f2744] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Coluna esquerda — Mapa */}
          <div className="h-56 w-full overflow-hidden rounded-lg">
            <iframe
              title="Localização do Conselho da Comunidade — Fórum Criminal Ministro Oswaldo Trigueiro de Albuquerque Mello, João Pessoa/PB"
              src="https://maps.google.com/maps?q=Fórum+Criminal+Ministro+Oswaldo+Trigueiro+de+Albuquerque+Mello,+João+Pessoa+-+PB&z=17&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          {/* Coluna direita — Informações institucionais + links */}
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Subcoluna 1 — Dados do Conselho */}
            <div>
              <h2 className="text-base font-bold leading-6">
                Conselho da Comunidade da Comarca de João Pessoa/PB
              </h2>
              <address className="mt-4 space-y-2 text-sm not-italic leading-6 text-blue-50">
                <p>Av. João Machado, s/n - Centro, João Pessoa - PB</p>
                <p>CEP: 58013-520</p>
                <p>
                  <a
                    href="mailto:conselhodacomunidadejp@gmail.com"
                    className="break-words underline-offset-4 transition hover:text-white hover:underline"
                  >
                    conselhodacomunidadejp@gmail.com
                  </a>
                </p>
                <p>CNPJ: 22.937.599/0001-27</p>
              </address>
            </div>

            {/* Subcoluna 2 — Links institucionais */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-blue-100">
                Institucional
              </h3>
              <nav
                aria-label="Links institucionais do rodapé"
                className="mt-4 flex flex-col gap-2 text-sm"
              >
                <a
                  href="#contato"
                  className="text-blue-50 underline-offset-4 transition hover:text-white hover:underline"
                >
                  Contato
                </a>
                <Link
                  href="/privacidade"
                  className="text-blue-50 underline-offset-4 transition hover:text-white hover:underline"
                >
                  Política de Privacidade
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="border-t border-white/15">
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
          <p className="text-center text-xs text-blue-100">
            © 2026 Conselho da Comunidade da Comarca de João Pessoa/PB. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
