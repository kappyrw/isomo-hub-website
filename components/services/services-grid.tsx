"use client"

import { useI18n } from "@/hooks/use-i18n"
import { Code, Palette, Zap, Smartphone, Share2, Video, BookOpen, ArrowRight } from "lucide-react"

export const ServicesGrid = () => {
  const { t } = useI18n()

  const servicesDetail = [
    {
      icon: Code,
      title: t("services.web_dev"),
      description:
        "Build modern, responsive websites with cutting-edge technologies. From simple landing pages to complex web applications, we deliver digital excellence.",
      features: ["Responsive Design", "SEO Optimization", "Fast Performance", "Modern Stack"],
    },
    {
      icon: Palette,
      title: t("services.graphic_design"),
      description:
        "Create compelling visual identities that resonate with your audience. Logo design, branding, marketing materials, and more.",
      features: ["Logo Design", "Brand Identity", "Marketing Materials", "UI/UX Design"],
    },
    {
      icon: Zap,
      title: t("services.software_dev"),
      description:
        "Custom software solutions tailored to your business requirements. Enterprise-grade applications built with scalability in mind.",
      features: ["Custom Development", "Cloud Integration", "Database Design", "API Development"],
    },
    {
      icon: Smartphone,
      title: t("services.mobile_apps"),
      description:
        "Native iOS/Android and cross-platform mobile applications. Deliver engaging mobile experiences to your users.",
      features: ["iOS Development", "Android Development", "Cross-Platform", "App Store Optimization"],
    },
    {
      icon: Share2,
      title: t("services.social_media"),
      description:
        "Strategic social media management and targeted advertising campaigns. Grow your online presence and reach your audience.",
      features: ["Content Strategy", "Paid Ads", "Community Management", "Analytics"],
    },
    {
      icon: Video,
      title: t("services.video_editing"),
      description:
        "Professional video production, editing, and post-production. Create compelling video content for marketing and engagement.",
      features: ["Video Editing", "Motion Graphics", "Color Grading", "Sound Design"],
    },
    {
      icon: BookOpen,
      title: "Teaching & Training",
      description:
        "We teach all the services we master. From web development to video editing, our academy programs empower the next generation of digital creators.",
      features: ["Web Development", "Design & Branding", "Mobile Development", "Video Production"],
    },
  ]

  return (
    <section className="py-20 px-4 bg-background pt-32">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-balance">{t("services.title")}</h1>
        <p className="text-lg text-foreground/70 mb-16 max-w-2xl">
          We offer comprehensive digital services designed to transform your business and help you succeed in the
          digital age.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesDetail.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="glass p-8 group hover:bg-white/20 dark:hover:bg-white/20 transition-all duration-300 cursor-pointer flex flex-col"
              >
                <Icon className="w-16 h-16 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/70 mb-6 flex-grow">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <ArrowRight size={16} className="text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
