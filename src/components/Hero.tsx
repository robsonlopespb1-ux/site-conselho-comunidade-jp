export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-[#d8e2ea] bg-white"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0f6bab] via-[#71ad44] to-[#e5b42b]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
        <div className="mobile-measure flex w-full min-w-0 flex-col justify-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#386c38]">
            João Pessoa/PB
          </p>
          <h1 className="mobile-measure mt-5 text-3xl font-bold tracking-tight text-[#153f63] sm:text-5xl lg:text-6xl">
            Conselho da Comunidade da Comarca de João Pessoa
          </h1>
          <p className="mobile-measure mt-6 text-lg leading-8 text-[#344555] sm:text-xl">
            Atuação social, cidadania e articulação comunitária no âmbito da
            execução penal.
          </p>
          <p className="mobile-measure mt-5 text-base leading-8 text-[#526170]">
            Uma ponte entre a sociedade civil, o sistema de justiça, a rede
            pública e as pessoas impactadas pelo sistema prisional.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#atuacao"
              className="inline-flex items-center justify-center rounded-sm bg-[#0f6bab] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#0d5d95] focus:outline-none focus:ring-2 focus:ring-[#e5b42b] focus:ring-offset-2"
            >
              Conheça nossa atuação
            </a>
            <a
              href="mailto:conselhodacomunidadejp@gmail.com"
              className="inline-flex items-center justify-center rounded-sm border border-[#0f6bab] bg-white px-6 py-3.5 text-sm font-bold text-[#0f6bab] transition hover:bg-[#eef6fc] focus:outline-none focus:ring-2 focus:ring-[#e5b42b] focus:ring-offset-2"
            >
              Fale com o Conselho
            </a>
          </div>
        </div>

        <div className="mobile-measure relative w-full min-w-0">
          <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full border-[18px] border-[#71ad44]/20" />
          <div className="absolute -bottom-8 left-8 h-24 w-24 rounded-full border-[14px] border-[#e5b42b]/25" />
          <div className="relative min-w-0 rounded-sm border border-[#cdd9e4] bg-[#f4f6f8] p-5 shadow-sm sm:p-8">
            <div className="mb-8 flex items-center gap-3 border-b border-[#d8e2ea] pb-5">
              <span className="h-3 w-3 rounded-full bg-[#0f6bab]" />
              <span className="h-3 w-3 rounded-full bg-[#71ad44]" />
              <span className="h-3 w-3 rounded-full bg-[#e5b42b]" />
              <span className="ml-auto min-w-0 text-right text-xs font-semibold uppercase tracking-[0.14em] text-[#526170]">
                Rede de atuação
              </span>
            </div>
            <div className="space-y-4">
              {[
                "Sistema de justiça",
                "Rede pública",
                "Sociedade civil",
                "Famílias e egressos",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 bg-white p-4 shadow-sm"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#0f6bab] text-sm font-bold text-white">
                    0{index + 1}
                  </span>
                  <span className="font-semibold text-[#153f63]">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-7 border-l-4 border-[#386c38] bg-white p-5">
              <p className="text-sm leading-6 text-[#526170]">
                Atuação orientada por dignidade, participação social,
                responsabilidade pública e reinserção comunitária.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
