"use client"

import { useI18n } from "@/hooks/use-i18n"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

export const Testimonials = () => {
  const { t } = useI18n()

  const testimonials = [
    {
      text: "Isomo Hub transformed our digital presence with incredible attention to detail.",
      author: "Sarah Johnson",
      type: "client",
      avatar: "/professional-woman-avatar.jpg",
    },
    {
      text: "The training program was comprehensive and professionally delivered. Highly recommended!",
      author: "John Kamara",
      type: "student",
      avatar: "/professional-man-avatar.jpg",
    },
    {
      text: "Outstanding service and deliverables. They truly understand modern business needs.",
      author: "Marie Dubois",
      type: "client",
      avatar: "/professional-woman-avatar-2.jpg",
    },
    {
      text: "I gained practical skills that immediately applied to my work. Excellent mentorship.",
      author: "Alex Nkosi",
      type: "student",
      avatar: "/professional-man-avatar-2.jpg",
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
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
          {t("home.testimonials_title")}
        </h2>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div key={idx} variants={itemVariants} className="glass p-8 hover-lift button-pulse group">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-primary text-primary group-hover:fill-accent group-hover:text-accent transition-colors"
                  />
                ))}
              </div>
              <p className="text-foreground/90 mb-6 italic group-hover:text-foreground transition-colors">
                "{testimonial.text}"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/30 group-hover:scale-110 group-hover:border-primary transition-all duration-300 group-hover:shadow-lg"
                  />
                  <div>
                    <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                      {testimonial.author}
                    </p>
                    <span className="text-xs text-foreground/60 group-hover:text-foreground/80 transition-colors">
                      {testimonial.type === "client" ? t("home.client_badge") : t("home.student_badge")}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
