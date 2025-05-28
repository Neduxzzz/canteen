import type { Metadata } from "next"
import "./globals.css"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"

export const metadata: Metadata = {
  title: "Valgykla",
  description: "Valgykla ",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="lt">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
