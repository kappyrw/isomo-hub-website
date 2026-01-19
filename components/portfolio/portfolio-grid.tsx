"use client"

import { useState } from "react"
import Link from "next/link"
import { useI18n } from "@/hooks/use-i18n"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink } from "lucide-react"

type Category = "all" | "websites" | "designs" | "apps" | "social-media" | "video"

export const PortfolioGrid = () => {
  const { t } = useI18n()
  const [activeCategory, setActiveCategory] = useState<Category>("all")

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "websites",
      image: "/ecommerce-website.jpg",
      description: "Modern e-commerce solution with payment integration",
    },
    {
      id: 2,
      title: "Brand Identity Design",
      category: "designs",
      image: "/brand-identity-design.jpg",
      description: "Complete branding package including logo and guidelines",
    },
    {
      id: 3,
      title: "Fitness Mobile App",
      category: "apps",
      image: "/fitness-mobile-app.jpg",
      description: "Cross-platform fitness tracking application",
    },
    {
      id: 4,
      title: "Social Media Campaign",
      category: "social-media",
      image: "/marketing-video-production.jpg",
      description: "Strategic social media management campaign",
    },
    {
      id: 5,
      title: "Corporate Website",
      category: "websites",
      image: "/corporate-website.jpg",
      description: "Enterprise-level corporate presence",
    },
    {
      id: 6,
      title: "Social Media Design",
      category: "designs",
      image: "/social-media-design.jpg",
      description: "Complete social media campaign visual design",
    },
    {
      id: 7,
      title: "SaaS Platform",
      category: "apps",
      image: "/saas-platform.jpg",
      description: "Cloud-based software as a service platform",
    },
    {
      id: 8,
      title: "Product Showcase",
      category: "video",
      image: "/product-showcase-video.jpg",
      description: "Dynamic product demonstration video",
    },
  ]

  const categories: { value: Category; label: string }[] = [
    { value: "all", label: t("portfolio.all") || "All" },
    { value: "websites", label: t("portfolio.websites") || "Websites" },
    { value: "designs", label: t("portfolio.designs") || "Designs" },
    { value: "apps", label: t("portfolio.apps") || "Apps" },
    { value: "social-media", label: "Social Media" },
    { value: "video", label: t("portfolio.video") || "Video" },
  ]

  const filteredProjects = activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="py-20 px-4 bg-background pt-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">{t("portfolio.title") || "Our Work"}</h1>
          <p className="text-lg text-foreground/70">
            {t("portfolio.subtitle") || "Showcase of our successful projects and client work"}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-3 mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeCategory === cat.value
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-white/10 text-foreground border border-white/20 hover:bg-white/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                className="glass group overflow-hidden rounded-lg hover:shadow-2xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -10 }}
              >
                <div className="overflow-hidden h-48 bg-accent/20 relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-primary/80 font-semibold mb-2 uppercase">{project.category}</p>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
                  <Link
                    href="/portfolio"
                    className="text-primary text-sm font-semibold hover:gap-2 transition-all flex items-center gap-1 group/link"
                  >
                    View Project
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
