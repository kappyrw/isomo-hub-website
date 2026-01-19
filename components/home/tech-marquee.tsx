"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/hooks/use-i18n"
import {
  Code2,
  FileJson,
  Server,
  Pencil,
  Smartphone,
  Palette,
  Video,
  Zap,
  Database,
  Dock as Docker,
  Brackets,
  Grid3x3,
} from "lucide-react"

const technologies = [
  { name: "React", icon: Code2, color: "#61dafb" },
  { name: "TypeScript", icon: FileJson, color: "#3178c6" },
  { name: "Node.js", icon: Server, color: "#68a063" },
  { name: "Python", icon: Pencil, color: "#3776ab" },
  { name: "Flutter", icon: Smartphone, color: "#02569b" },
  { name: "Figma", icon: Palette, color: "#f24e1e" },
  { name: "Premiere Pro", icon: Video, color: "#9999ff" },
  { name: "After Effects", icon: Zap, color: "#9999ff" },
  { name: "Tailwind", icon: Grid3x3, color: "#06b6d4" },
  { name: "Next.js", icon: Brackets, color: "#000000" },
  { name: "PostgreSQL", icon: Database, color: "#336791" },
  { name: "Docker", icon: Docker, color: "#2496ed" },
]

export const TechMarquee = () => {
  const { t } = useI18n()

  const duplicatedTechs = [...technologies, ...technologies]

  return (
    <section className="py-20 bg-background/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("home.tech_label") || "Powered by Modern Tech"}</h2>
          <p className="text-foreground/70">
            {t("home.tech_subtitle") || "We use industry-leading technologies to build solutions"}
          </p>
        </div>

        <div className="relative overflow-hidden py-8">
          {/* Gradient fade effect left */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          {/* Gradient fade effect right */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

          <motion.div
            className="flex gap-8"
            animate={{ x: [0, -1500] }}
            transition={{
              duration: 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {duplicatedTechs.map((tech, idx) => {
              const IconComponent = tech.icon
              return (
                <motion.div
                  key={idx}
                  className="flex-shrink-0 px-6 py-4 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-colors min-w-max"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: idx * 0.1,
                      }}
                    >
                      <IconComponent size={24} style={{ color: tech.color }} className="drop-shadow-md" />
                    </motion.div>
                    <span className="font-medium text-foreground">{tech.name}</span>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
