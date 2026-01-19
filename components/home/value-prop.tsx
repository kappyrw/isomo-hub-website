"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/hooks/use-i18n"
import { Check } from "lucide-react"

export const ValueProp = () => {
  const { t } = useI18n()

  const benefits = [
    t("home.value_benefit1") || "Innovative Design Solutions",
    t("home.value_benefit2") || "Technical Excellence & Reliability",
    t("home.value_benefit3") || "Data-Driven Marketing Strategies",
    t("home.value_benefit4") || "Full-Service Digital Partnership",
  ]

  return (
    <section className="py-20 max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("home.value_title") || "Why Choose Isomo Hub?"}</h2>
            <p className="text-foreground/70 text-lg">
              {t("home.value_desc") ||
                "We combine cutting-edge technology with creative excellence to deliver solutions that transform your business."}
            </p>
          </div>

          <div className="space-y-4">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground/80 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="aspect-video rounded-lg overflow-hidden"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src="/digital-business-growth-concept.jpg" alt="Digital growth" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </section>
  )
}
