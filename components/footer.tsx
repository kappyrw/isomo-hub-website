"use client"

import { useI18n } from "@/hooks/use-i18n"
import { Mail, Phone, Facebook, Twitter, Linkedin, Instagram, Video } from "lucide-react"

export const Footer = () => {
  const { t } = useI18n()

  const socials = [
    { icon: Phone, href: "https://wa.me/250781718040", label: "WhatsApp" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Video, href: "https://tiktok.com", label: "TikTok" },
  ]

  return (
    <footer className="bg-card border-t border-border/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">Isomo Hub</h3>
            <p className="text-foreground/70 text-sm">
              Digital services and professional training for modern businesses.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-foreground/70">
              <p className="flex items-center gap-2">
                <Phone size={16} /> {t("contact.phone")}
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} /> {t("contact.email")}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-accent/20 rounded-lg transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center text-sm text-foreground/60">
          <p>&copy; 2026 Isomo Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
