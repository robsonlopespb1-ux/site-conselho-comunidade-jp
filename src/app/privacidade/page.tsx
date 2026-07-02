import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | Conselho da Comunidade da Comarca de João Pessoa/PB",
  description:
    "Política de Privacidade do Conselho da Comunidade da Comarca de João Pessoa/PB.",
};

export default function PrivacidadePage() {
  return (
    <main className="bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="text-sm font-semibold text-[#0f6bab] underline-offset-4 transition hover:underline"
        >
          ← Voltar ao início
        </Link>

        <h1 className="mt-6 text-3xl font-bold text-[#153f63]">
          Política de Privacidade
        </h1>
        <p className="mt-2 font-semibold text-[#386c38]">
          Conselho da Comunidade da Comarca de João Pessoa/PB
        </p>

        <div className="mt-8 space-y-6">
          <p className="text-justify leading-8 text-[#344555]">
            O Conselho da Comunidade da Comarca de João Pessoa/PB tem compromisso
            com a segurança das informações dos usuários e visitantes deste
            Portal. O acesso aos conteúdos é livre e gratuito.
          </p>
          <p className="text-justify leading-8 text-[#344555]">
            As informações fornecidas ao entrar em contato com o Conselho, ou
            aquelas coletadas automaticamente durante o uso deste portal, são
            transmitidas via protocolos seguros, de acordo com padrões de
            segurança, confidencialidade e integridade.
          </p>
          <p className="text-justify leading-8 text-[#344555]">
            As informações pessoais obtidas serão tratadas exclusivamente para as
            finalidades propostas pelo Conselho e para fins estatísticos
            agregados, visando melhorar continuamente os níveis de serviço e a
            comunicação institucional.
          </p>
          <p className="text-justify leading-8 text-[#344555]">
            O fornecimento de informações de caráter pessoal ou confidencial a
            terceiros somente ocorrerá mediante autorização ou determinação legal
            ou judicial.
          </p>
          <p className="text-justify leading-8 text-[#344555]">
            As condutas de privacidade aqui estabelecidas estão sujeitas a
            alterações sem aviso prévio. Recomendamos a verificação periódica
            desta página.
          </p>
        </div>
      </div>
    </main>
  );
}
