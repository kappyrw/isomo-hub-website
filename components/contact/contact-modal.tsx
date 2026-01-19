"use client"

import { useI18n } from "@/hooks/use-i18n"
import { Button } from "@/components/ui/button"
import { X, MessageCircle, Mail } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  formData: { name: string; email: string; message: string }
}

export const ContactModal = ({ isOpen, onClose, formData }: ContactModalProps) => {
  const { t } = useI18n()

  if (!isOpen) return null

  const whatsappMessage = encodeURIComponent(
    `Hello, I'm ${formData.name}. ${formData.message}\n\nYou can reach me at ${formData.email}`,
  )

  const emailSubject = encodeURIComponent("Message from Isomo Hub Contact Form")
  const emailBody = encodeURIComponent(`From: ${formData.name} <${formData.email}>\n\nMessage:\n${formData.message}`)

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass max-w-md w-full p-8 rounded-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold mb-2">{t("contact.form_modal")}</h2>
        <p className="text-foreground/70 mb-6">Choose how you'd like to send your message:</p>

        <div className="space-y-4">
          <a
            href={`https://wa.me/250781718040?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 glass hover:bg-white/20 rounded-lg transition-all w-full text-left group"
          >
            <MessageCircle className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            <div>
              <p className="font-semibold">{t("contact.whatsapp")}</p>
              <p className="text-sm text-foreground/70">Quick and convenient</p>
            </div>
          </a>

          <a
            href={`mailto:${t("contact.email")}?subject=${emailSubject}&body=${emailBody}`}
            className="flex items-center gap-3 p-4 glass hover:bg-white/20 rounded-lg transition-all w-full text-left group"
          >
            <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            <div>
              <p className="font-semibold">{t("contact.email_option")}</p>
              <p className="text-sm text-foreground/70">Formal communication</p>
            </div>
          </a>
        </div>

        <Button onClick={onClose} variant="outline" className="w-full mt-6 bg-transparent">
          Close
        </Button>
      </div>
    </div>
  )
}
