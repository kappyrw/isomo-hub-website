"use client"

import { I18nProvider } from "@/lib/i18n-context"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact/contact-section"

export default function ContactPage() {
  return (
    <I18nProvider>
      <Navbar />
      <main className="min-h-screen">
        <ContactSection />
      </main>
      <Footer />
    </I18nProvider>
  )
}
