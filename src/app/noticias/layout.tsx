import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Todas as Notícias | Conselho da Comunidade da Comarca de João Pessoa/PB",
  description:
    "Registros institucionais e notícias do Conselho da Comunidade da Comarca de João Pessoa/PB.",
};

export default function NoticiasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
