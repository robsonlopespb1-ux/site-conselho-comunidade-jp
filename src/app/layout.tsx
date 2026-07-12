import type { Metadata } from "next";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Conselho da Comunidade da Comarca de João Pessoa/PB",
  description:
    "Garantindo direitos, estruturando novas oportunidades. Atuação social, cidadania e articulação comunitária no âmbito da execução penal.",
  openGraph: {
    title: "Conselho da Comunidade da Comarca de João Pessoa/PB",
    description: "Garantindo direitos, estruturando novas oportunidades.",
    url: "https://www.conselhodacomunidadejp.com.br",
    siteName: "Conselho da Comunidade JP",
    images: [
      {
        url: "https://www.conselhodacomunidadejp.com.br/og-image.png",
        width: 1200,
        height: 630,
        alt: "Conselho da Comunidade da Comarca de João Pessoa/PB",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conselho da Comunidade da Comarca de João Pessoa/PB",
    description: "Garantindo direitos, estruturando novas oportunidades.",
    images: ["https://www.conselhodacomunidadejp.com.br/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased" data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col">
        <ClientLayout>
          <Header />
          {children}
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
