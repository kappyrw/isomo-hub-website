"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { I18nProvider } from "@/lib/i18n-context"
import { useI18n } from "@/hooks/use-i18n"
import { motion } from "framer-motion"
import { Target, Lightbulb, Shield } from "lucide-react"

const AboutContent = () => {
  const { t } = useI18n()

  const values = [
    {
      icon: Target,
      title: t("about.mission_title") || "Mission",
      description:
        t("about.mission_desc") ||
        "To provide innovative digital solutions that enable businesses to scale, compete, and thrive in an ever-evolving market.",
    },
    {
      icon: Lightbulb,
      title: t("about.vision_title") || "Vision",
      description:
        t("about.vision_desc") ||
        "To be the leading digital powerhouse known for creativity, technical excellence, and transformative business results.",
    },
    {
      icon: Shield,
      title: t("about.values_title") || "Values",
      description:
        t("about.values_desc") ||
        "Professionalism, Creativity, Innovation, and Reliability are the pillars that support every project we undertake.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section className="px-4 py-16 max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-balance mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t("about.title") || "About Isomo Hub"}
          </motion.h1>
          <motion.p
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t("about.subtitle") || "Comprehensive digital solutions and professional training for modern businesses"}
          </motion.p>
        </section>

        {/* Mission, Vision, Values */}
        <section className="px-4 py-20 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={idx}
                  className="glass p-8 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Icon className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Story Section */}
        <section className="px-4 py-20 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img src="/team-office-workspace.jpg" alt="Isomo Hub team" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold">
                {t("about.story_title") || "Driven by Passion, Defined by Quality"}
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                {t("about.story_desc") ||
                  "At Isomo Hub, we believe that great digital solutions come from a combination of creativity, technical expertise, and a deep understanding of our clients' needs. Every project we undertake is approached with passion and attention to detail."}
              </p>
              <p className="text-foreground/70 leading-relaxed">
                {t("about.story_desc2") ||
                  "Our team of experts brings years of experience in web development, graphic design, video production, and digital marketing. We're committed to helping businesses grow and succeed in the digital landscape."}
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default function AboutPage() {
  return (
    <I18nProvider>
      <AboutContent />
    </I18nProvider>
  )
}
