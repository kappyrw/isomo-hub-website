"use client"

import { Button } from "@/components/ui/button"
import { useI18n } from "@/hooks/use-i18n"
import { motion } from "framer-motion"
import Link from "next/link"

const portfolioItems = [
  { id: 1, image: "/logo-design-showcase.jpg", alt: "Logo Design", delay: 0 },
  { id: 2, image: "/brand-identity-showcase.jpg", alt: "Brand Identity", delay: 0.1 },
  { id: 3, image: "/web-design-mockup.jpg", alt: "Web Design", delay: 0.2 },
  { id: 4, image: "/app-design-showcase.jpg", alt: "App Design", delay: 0.3 },
  { id: 5, image: "/marketing-design.jpg", alt: "Marketing Design", delay: 0.4 },
  { id: 6, image: "/packaging-design.jpg", alt: "Packaging Design", delay: 0.5 },
  { id: 7, image: "/graphic-design-poster.jpg", alt: "Graphic Design", delay: 0.6 },
  { id: 8, image: "/video-production-thumbnail.jpg", alt: "Video Production", delay: 0.7 },
]

export const Hero = () => {
  const { t } = useI18n()

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-900 dark:via-background dark:to-slate-900 relative overflow-hidden pt-20 md:pt-0">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Column - Text Content */}
        <motion.div
          className="space-y-6 md:space-y-8 z-10"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance text-black dark:text-blue-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {t("home.hero_title") || "Digital Solutions Made Simple"}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-700 dark:text-white mt-4 text-balance max-w-xl font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t("home.hero_subtitle") ||
                "Premium digital services that transform your business. Creative, innovative, and results-driven."}
            </motion.p>
          </div>

          {/* Hashtags */}
          <motion.div
            className="flex flex-wrap gap-3 text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-primary">#TUNGA_WEBSITE</span>
            <span className="text-accent">#DigitalSolutions</span>
            <span className="text-primary">#CreativeTech</span>
            <span className="text-accent">#IsomoHub</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground button-shine button-pulse px-8 py-6 text-base md:text-lg font-semibold"
              >
                {t("home.cta_quote") || "Get Started"}
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-base md:text-lg font-semibold button-pulse bg-transparent"
              >
                {t("home.cta_portfolio") || "View Portfolio"}
              </Button>
            </Link>
          </motion.div>

          {/* Reviews/Trust Section */}
          <motion.div
            className="flex items-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
            <p className="text-sm font-medium text-gray-700 dark:text-white">
              <span className="font-bold">500+ Projects</span> delivered with excellence
            </p>
          </motion.div>
        </motion.div>

        {/* Right Column - Portfolio Grid Showcase */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Grid showcase with floating cards */}
          <div className="relative h-full min-h-96 md:min-h-[600px]">
            <div className="grid grid-cols-2 gap-3 md:gap-4 perspective">
              {portfolioItems.map((item, idx) => (
                <Link key={item.id} href="/contact">
                  <motion.div
                    className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group"
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + item.delay }}
                    whileHover={{ scale: 1.05, rotate: 2, zIndex: 50 }}
                    style={{
                      height: idx % 3 === 0 ? "120px" : idx % 3 === 1 ? "140px" : "100px",
                    }}
                  >
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-start p-3">
                      <div className="flex flex-col gap-1">
                        <p className="text-white text-sm font-semibold">{item.alt}</p>
                        <p className="text-white/80 text-xs">Click to contact</p>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  )
}
