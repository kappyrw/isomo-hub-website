"use client"

import { useI18n } from "@/hooks/use-i18n"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export const CustomSolutionCTA = () => {
  const { t } = useI18n()

  return (
    <section className="py-20 px-4 bg-background">
      <motion.div
        className="max-w-4xl mx-auto glass rounded-lg p-12 md:p-16 text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">{t("services.custom_title") || "Need a Custom Solution?"}</h2>
        <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
          {t("services.custom_desc") ||
            "We understand that every business is unique. Contact us to discuss a tailored package that fits your specific goals and budget."}
        </p>
        <Link href="/contact">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold rounded-lg"
          >
            {t("services.custom_cta") || "Contact Us"}
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}
