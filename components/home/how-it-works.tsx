"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/hooks/use-i18n"
import { ShoppingCart, Sparkles, ThumbsUp } from "lucide-react"

export const HowItWorks = () => {
  const { t } = useI18n()

  const steps = [
    {
      icon: ShoppingCart,
      number: "01",
      title: "Consultation & Planning",
      description:
        "We start by understanding your vision and requirements. Our team gathers insights to create a customized strategy for your project.",
      image: "/tech-consultation-tools.jpg",
    },
    {
      icon: Sparkles,
      number: "02",
      title: "Design & Development",
      description:
        "Our creative and technical teams collaborate to bring your vision to life with cutting-edge technology and beautiful design.",
      image: "/tech-development-process.jpg",
    },
    {
      icon: ThumbsUp,
      number: "03",
      title: "Launch & Support",
      description:
        "We deploy your project and provide ongoing support to ensure it continues performing excellently and meeting your goals.",
      image: "/tech-deployment-launch.jpg",
    },
  ]

  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-semibold mb-3">How it Works</p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">The Isomo Hub Digital Journey</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="group flex flex-col"
              >
                {/* Image - Now more prominent */}
                {step.image && (
                  <div className="mb-6 rounded-2xl overflow-hidden h-64 md:h-72 shadow-lg relative">
                    <img
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    {/* Step number badge */}
                    <div className="absolute top-4 right-4 bg-primary text-white font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                      {step.number}
                    </div>
                  </div>
                )}

                {/* Icon and Content */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-700 dark:to-slate-700 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 flex-1 flex flex-col">
                  <div className="flex justify-center mb-4">
                    <motion.div 
                      className="bg-primary/10 dark:bg-primary/20 p-4 rounded-full group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <Icon className="w-7 h-7 text-primary dark:text-cyan-400" />
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">{step.title}</h3>
                  <p className="text-gray-700 dark:text-gray-100 text-sm leading-relaxed flex-1 font-medium">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
