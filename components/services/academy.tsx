"use client"

import { useI18n } from "@/hooks/use-i18n"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, Palette, Video, Smartphone, Share2 } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export const Academy = () => {
  const { t } = useI18n()

  const courses = [
    { icon: Code, title: "Web Development", subtitle: "(React, Node.js)" },
    { icon: Palette, title: "Graphic Design", subtitle: "(Photoshop, Illustrator)" },
    { icon: Video, title: "Video Editing", subtitle: "(Premiere Pro, After Effects)" },
    { icon: Smartphone, title: "Mobile Apps", subtitle: "(Flutter, React Native)" },
    { icon: Share2, title: "Social Media Marketing", subtitle: "& Ads Strategy" },
    { icon: Palette, title: "UI/UX Design", subtitle: "(Figma)" },
  ]

  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <BookOpen className="w-8 h-8 text-primary flex-shrink-0 mt-2" />
              <div>
                <p className="text-sm text-primary/80 font-semibold mb-2">
                  {t("services.academy_title") || "Isomo Academy"}
                </p>
                <h2 className="text-4xl md:text-5xl font-bold">
                  {t("services.academy_learn") || "Learn the Skills We Master"}
                </h2>
              </div>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed">
              {t("services.academy_desc") ||
                "We don't just provide services; we empower the next generation of digital creators. Join our training programs to master the tools and technologies we use every day."}
            </p>

            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold rounded-lg"
              >
                {t("services.academy_cta") || "Enroll Now"}
              </Button>
            </Link>
          </motion.div>

          {/* Right Column - Courses Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {courses.map((course, idx) => {
              const Icon = course.icon
              return (
                <motion.div
                  key={idx}
                  className="glass p-6 group hover:bg-white/20 transition-all"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Icon className="w-10 h-10 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-sm">{course.title}</h4>
                  <p className="text-xs text-foreground/60 mt-1">{course.subtitle}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
