"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/hooks/use-i18n"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const CTASection = () => {
  const { t } = useI18n()

  return (
    <section className="py-20 max-w-7xl mx-auto px-4">
      <motion.div
        className="glass rounded-lg p-12 md:p-16 text-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("home.cta_ready_title") || "Ready to Transform Your Business?"}
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            {t("home.cta_ready_desc") ||
              "Let's partner to create digital solutions that drive growth and success for your organization."}
          </p>
        </div>
        <Link href="/contact">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg">
            {t("home.cta_start_project") || "Start Your Project"}
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}
