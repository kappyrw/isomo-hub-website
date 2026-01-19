"use client"

import { useI18n } from "@/hooks/use-i18n"
import { Code, Palette, Zap, Smartphone, Share2, Video, BookOpen } from "lucide-react"
import { motion } from "framer-motion"

export const Services = () => {
  const { t } = useI18n()

  const services = [
    {
      icon: Code,
      title: t("services.web_dev"),
      description: "Modern, responsive websites that drive results",
    },
    {
      icon: Palette,
      title: t("services.graphic_design"),
      description: "Compelling visual designs for your brand",
    },
    {
      icon: Zap,
      title: t("services.software_dev"),
      description: "Powerful software solutions tailored to your needs",
    },
    {
      icon: Smartphone,
      title: t("services.mobile_apps"),
      description: "Native and cross-platform mobile applications",
    },
    {
      icon: Share2,
      title: t("services.social_media"),
      description: "Strategic social media and advertising campaigns",
    },
    {
      icon: Video,
      title: t("services.video_editing"),
      description: "Professional video production and editing",
    },
    {
      icon: BookOpen,
      title: "Teaching & Training",
      description: "Master the skills we use - comprehensive training programs",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">{t("home.services_title")}</h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass p-8 group hover:bg-white/20 dark:hover:bg-white/20 transition-all duration-300 cursor-pointer button-pulse hover-lift border border-primary/30 dark:border-primary/40"
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: idx * 0.2 }}
                >
                  <Icon className="w-12 h-12 text-primary mb-4 icon-spin group-hover:text-accent transition-colors" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-foreground/70 group-hover:text-foreground transition-colors">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
