import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export const metadata: Metadata = {
  title: "Valgykla",
  description: "Valgykla - maisto užsakymo sistema",
};

export default function RootLayout({
  children,
}: Readonly <{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lt">
      <body className="container mx-auto max-w-screen-x1">
        <Header />
        {children}
        <Footer />
        </body>
  </html>
  );
}

