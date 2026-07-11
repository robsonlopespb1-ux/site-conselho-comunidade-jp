import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Doações — Conselho da Comunidade da Comarca de João Pessoa/PB",
  description:
    "Apoie o Conselho da Comunidade com sua doação. Dados bancários e chave PIX para contribuições.",
};

export default function DoacoesPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/#doacoes"
          className="text-sm font-semibold text-[#0f6bab] underline-offset-4 transition hover:underline"
        >
          ← Voltar ao início
        </Link>

        <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-[#386c38]">
          Doações
        </p>
        <h1 className="mt-3 text-3xl font-bold text-[#153f63]">
          Apoie o Conselho da Comunidade
        </h1>
        <div className="mt-2 mb-8 h-1 w-16 bg-[#e5b42b]" />

        <blockquote className="mx-auto mb-10 max-w-3xl border-l-4 border-[#e5b42b] py-2 pl-6 text-center text-xl font-semibold italic text-[#153f63] lg:text-2xl">
          &ldquo;Investir em dignidade é transformar vidas — dentro e fora do
          sistema prisional.&rdquo;
        </blockquote>

        <p className="mb-6 leading-relaxed text-[#344555] text-justify">
          O Conselho da Comunidade da Comarca de João Pessoa é um órgão
          auxiliar da execução penal, de natureza civil e sem fins lucrativos,
          que atua na fiscalização das condições do sistema prisional e na
          promoção de ações voltadas à dignidade, ao acolhimento de familiares
          e à reinserção social de pessoas privadas de liberdade e egressos.
        </p>

        <p className="mb-10 leading-relaxed text-[#344555] text-justify">
          Sua contribuição é fundamental para a continuidade dos projetos
          sociais, visitas de inspeção, campanhas educativas e ações de
          cidadania promovidas pelo Conselho. Toda doação é registrada e
          prestada em contas públicas, conforme a legislação vigente.
        </p>

        <div className="mb-10 rounded-lg border border-[#d8e2ea] bg-[#eef6fc] p-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#386c38]">
            Fundamentação Legal
          </p>
          <p className="leading-relaxed italic text-[#344555] text-justify">
            Conforme previsto na Resolução CNJ nº 488/2023, art. 13, parágrafo
            único: &ldquo;Os Conselhos da Comunidade poderão receber valores
            decorrentes de fundos federais, estaduais e municipais de políticas
            penais, dotações orçamentárias, doações e recursos de outras fontes
            não vedadas em lei, devendo utilizá-los para o custeio das despesas
            administrativas e para o desempenho de suas atribuições, mediante a
            apresentação de plano de aplicação de recursos e posterior
            prestação de contas.&rdquo;
          </p>
        </div>

        <div className="mx-auto max-w-lg rounded-lg border border-[#d8e2ea] bg-[#f4f6f8] p-8 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#386c38]">
            Dados para Doação
          </p>

          <div className="space-y-3 text-[#344555]">
            <p>
              <span className="font-semibold">Banco:</span> Banco do Brasil
            </p>
            <p>
              <span className="font-semibold">Agência:</span> 1636-5
            </p>
            <p>
              <span className="font-semibold">Conta Corrente:</span> 63164-7
            </p>
          </div>

          <div className="my-5 h-px bg-[#d8e2ea]" />

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#386c38]">
            Chave PIX
          </p>
          <p className="mb-2 text-2xl font-bold text-[#0f6bab]">
            22.937.599/0001-27
          </p>
          <p className="text-sm text-[#526170]">
            (CNPJ do Conselho da Comunidade)
          </p>

          <div className="my-5 h-px bg-[#d8e2ea]" />

          <p className="text-sm text-[#526170]">
            <span className="font-semibold">Titular:</span> Conselho da
            Comunidade da Comarca de João Pessoa/PB
          </p>

          <div className="my-5 h-px bg-[#d8e2ea]" />

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#386c38]">
            QR Code PIX
          </p>
          <img
            src="/qrcode-doacoes.jpeg"
            alt="QR Code para doação via PIX"
            className="mx-auto h-48 w-48 rounded-lg border border-[#d8e2ea]"
          />
          <p className="mt-3 text-sm text-[#526170]">
            Escaneie com o aplicativo do seu banco para doar via PIX
          </p>
        </div>
      </div>
    </main>
  );
}
