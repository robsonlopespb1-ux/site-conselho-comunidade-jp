import { RedeAtuacaoTabs } from "@/components/RedeAtuacaoTabs";

export function Hero() {
  return (
    <section className="relative border-b border-[#d8e2ea] bg-white">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0f6bab] via-[#71ad44] to-[#e5b42b]" />
      <div
        id="inicio"
        className="mx-auto grid min-h-[calc(100vh-130px)] max-w-7xl scroll-mt-0 gap-12 px-6 py-8 sm:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-12"
      >
        <div className="mobile-measure flex w-full min-w-0 flex-col justify-center pb-8">
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
          <RedeAtuacaoTabs />
        </div>
      </div>
    </section>
  );
}
