"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/home/hero"
import { Services } from "@/components/home/services"
import { TechMarquee } from "@/components/home/tech-marquee"
import { ValueProp } from "@/components/home/value-prop"
import { Testimonials } from "@/components/home/testimonials"
import { CTASection } from "@/components/home/cta-section"
import { Footer } from "@/components/footer"
import { I18nProvider } from "@/lib/i18n-context"
import { HowItWorks } from "@/components/home/how-it-works"
import { FreeCourses } from "@/components/home/free-courses"
import { CourseApplicationForm } from "@/components/home/course-application-form"


export default function Home() {
  return (
    <I18nProvider>
      <Navbar />
      <main className="min-h-screen">
      
        <Hero />
        <TechMarquee />
        <Services />
        <FreeCourses />
        <CourseApplicationForm />
        <HowItWorks />
        <ValueProp />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </I18nProvider>
  )
}
