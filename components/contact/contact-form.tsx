"use client"

import type React from "react"
import { useState } from "react"
import { useI18n } from "@/hooks/use-i18n"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface ContactFormProps {
  onSubmit: (data: { name: string; email: string; subject: string; message: string }) => void
}

export const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const { t } = useI18n()
  const [formData, setFormData] = useState({ name: "", email: "", subject: "Website Development", message: "" })
  const [isLoading, setIsLoading] = useState(false)

  const subjectOptions = [
    "Website Development",
    "Mobile App",
    "Graphic Design",
    "Video Editing",
    "Social Media Management",
    "Other",
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      onSubmit(formData)
      setIsLoading(false)
    }, 500)
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="glass p-8 space-y-6 rounded-lg hover-glow"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold">{t("contact.form_title") || "Send us a message"}</h2>

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          {t("contact.name") || "Name"} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-black/20 border border-white/10 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:scale-105 hover:bg-black/30 transition-all"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          {t("contact.email_field") || "Email"} <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-black/20 border border-white/10 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:scale-105 hover:bg-black/30 transition-all"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject <span className="text-red-500">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-black/20 border border-white/10 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary hover:bg-black/30 transition-all cursor-pointer"
        >
          {subjectOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          {t("contact.message") || "Message"} <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 bg-black/20 border border-white/10 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:scale-105 hover:bg-black/30 transition-all resize-none"
          placeholder="Your message..."
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 font-semibold py-2 rounded-lg transition-all button-shine button-pulse"
      >
        {isLoading ? "Processing..." : t("contact.send") || "Send Message"}
      </Button>
    </motion.form>
  )
}
