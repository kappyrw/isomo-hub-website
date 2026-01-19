"use client"

import { useState } from "react"
import { useI18n } from "@/hooks/use-i18n"
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, MessageCircle } from "lucide-react"
import { ContactForm } from "./contact-form"
import { ContactModal } from "./contact-modal"
import { motion } from "framer-motion"

export const ContactSection = () => {
  const { t } = useI18n()
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })

  const handleFormSubmit = (data: typeof formData) => {
    setFormData(data)
    setShowModal(true)
  }

  const socials = [
    { icon: Facebook, href: "https://facebook.com/isomohub", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/isomohub", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/isomohub", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/isomohub", label: "LinkedIn" },
    { icon: MessageCircle, href: "https://tiktok.com/@isomohub", label: "TikTok" },
  ]

  return (
    <section className="py-20 px-4 bg-background pt-32 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">{t("contact.title") || "Get in Touch"}</h1>
          <p className="text-lg text-foreground/70">
            {t("contact.subtitle") || "Have a project in mind? We'd love to hear from you..."}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="glass p-6 flex items-start gap-4 group hover:bg-white/20 transition-all">
                  <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a
                      href={`tel:${t("contact.phone")}`}
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      {t("contact.phone")}
                    </a>
                  </div>
                </div>

                <div className="glass p-6 flex items-start gap-4 group hover:bg-white/20 transition-all">
                  <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href={`mailto:${t("contact.email")}`}
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      {t("contact.email")}
                    </a>
                  </div>
                </div>

                <div className="glass p-6 flex items-start gap-4 group hover:bg-white/20 transition-all">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-foreground/70">Kigali, Rwanda</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Follow Us</h2>
              <div className="flex flex-wrap gap-4">
                {socials.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass p-4 hover:bg-white/20 transition-all rounded-lg group"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <ContactForm onSubmit={handleFormSubmit} />
        </div>
      </div>

      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} formData={formData} />
    </section>
  )
}
