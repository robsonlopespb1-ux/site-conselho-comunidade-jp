import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Conselho da Comunidade da Comarca de João Pessoa/PB",
  description:
    "Site institucional do Conselho da Comunidade da Comarca de João Pessoa/PB.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
