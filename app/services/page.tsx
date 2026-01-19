"use client"

import { I18nProvider } from "@/lib/i18n-context"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServicesGrid } from "@/components/services/services-grid"
import { Academy } from "@/components/services/academy"
import { CustomSolutionCTA } from "@/components/services/custom-solution-cta"
import { FreeCourses } from "@/components/home/free-courses"

export default function ServicesPage() {
  return (
    <I18nProvider>
      <Navbar />
      <main className="min-h-screen">
        <ServicesGrid />
        <Academy />
        <FreeCourses />
        <CustomSolutionCTA />
      </main>
      <Footer />
    </I18nProvider>
  )
}
