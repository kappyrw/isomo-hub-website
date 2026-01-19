"use client"

import { motion } from "framer-motion"
import {
  Code,
  Palette,
  Smartphone,
  Video,
  FileText,
  Zap,
  Globe,
  Lock,
  Cpu,
  Database,
  Cloud,
  Layers,
} from "lucide-react"

export const AnimatedTechBg = () => {
  const icons = [
    { Icon: Code, delay: 0 },
    { Icon: Palette, delay: 0.5 },
    { Icon: Smartphone, delay: 1 },
    { Icon: Video, delay: 1.5 },
    { Icon: FileText, delay: 2 },
    { Icon: Zap, delay: 2.5 },
    { Icon: Globe, delay: 3 },
    { Icon: Lock, delay: 3.5 },
    { Icon: Cpu, delay: 4 },
    { Icon: Database, delay: 4.5 },
    { Icon: Cloud, delay: 5 },
    { Icon: Layers, delay: 5.5 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay }, idx) => (
        <motion.div
          key={idx}
          className="absolute text-primary/20 hover:text-primary/40 transition-colors"
          style={{
            left: `${(idx % 4) * 25 + 12.5}%`,
            top: `${Math.floor(idx / 4) * 33 + 16}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 6,
            delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Icon size={48} />
        </motion.div>
      ))}
    </div>
  )
}
