"use client"
import { I18nProvider } from "@/lib/i18n-context"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid"

export default function PortfolioPage() {
  return (
    <I18nProvider>
      <Navbar />
      <main className="min-h-screen">
        <PortfolioGrid />
      </main>
      <Footer />
    </I18nProvider>
  )
}
