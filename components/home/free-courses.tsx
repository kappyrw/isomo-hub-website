"use client"

import { useI18n } from "@/hooks/use-i18n"
import { Button } from "@/components/ui/button"
import { Code, Palette, Gift, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export const FreeCourses = () => {
  const { t } = useI18n()

  const freeCourses = [
    {
      icon: Code,
      title: "Free Web Development Course",
      description: "Learn React, HTML, CSS, and JavaScript fundamentals. Build your first responsive website from scratch.",
      duration: "4 Weeks",
      googleFormUrl: "https://forms.gle/webdev-course", // Replace with actual Google Form URL
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: "Free Graphic Design Basics",
      description: "Master design principles, color theory, and learn Figma and Photoshop essentials for beginners.",
      duration: "3 Weeks",
      googleFormUrl: "https://forms.gle/graphic-design-course", // Replace with actual Google Form URL
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full w-fit">
              <Gift className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">FREE LEARNING</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            {t("free courses") || "Master Digital Skills for Free"}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t("APPLY TODAY") ||
              "Start your digital journey with our free beginner courses. No credit card required, just pure knowledge."}
          </p>
        </motion.div>


        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {freeCourses.map((course, idx) => {
            const Icon = course.icon
            return (
              <motion.div
                key={idx}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Card Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${course.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />

                {/* Card Content */}
                <div className="relative bg-card border border-primary/20 rounded-2xl p-8 h-full hover:border-primary/40 transition-colors duration-300">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${course.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                    whileHover={{ rotate: 10 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Course Info */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Duration Badge */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm font-medium text-foreground/60">{course.duration}</span>
                  </div>

                  {/* CTA Button */}
                  <a href={course.googleFormUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className={`w-full bg-gradient-to-r ${course.color} text-white hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group/btn font-semibold py-6`}
                    >
                      <span>Enroll Now - It's Free</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </a>

                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-semibold">
                    100% FREE
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-foreground/80 mb-4">
            <span className="font-semibold">Limited Spots Available!</span> Our courses fill up quickly. Sign up today to secure your place.
          </p>
          <p className="text-sm text-foreground/60">
            After completing the free course, you'll get exclusive access to our premium training programs at a special discount.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
