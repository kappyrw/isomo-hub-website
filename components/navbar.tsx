"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useI18n } from "@/hooks/use-i18n"

export const Navbar = () => {
  const { t, lang, setLang } = useI18n()
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = savedTheme ? savedTheme === "dark" : prefersDark

    setIsDark(shouldBeDark)
    if (shouldBeDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newDarkState = !isDark
    setIsDark(newDarkState)
    document.documentElement.classList.toggle("dark")
    localStorage.setItem("theme", newDarkState ? "dark" : "light")
  }

  const toggleLanguage = () => {
    setLang(lang === "en" ? "fr" : "en")
  }

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/services", label: t("nav.services") },
    { href: "/portfolio", label: t("nav.portfolio") },
    { href: "/contact", label: t("nav.contact") },
  ]

  return (
    <nav className="glass sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="hover:scale-105 transition-transform duration-300">
            <img 
              src="/isomo-hub-logo.png" 
              alt="Isomo Hub Tech" 
              className="h-70 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link-underline text-foreground font-medium">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Controls and CTA */}
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden lg:block">
              <Button
                size="sm"
                className="bg-primary text-primary-foreground button-shine button-pulse px-6 font-semibold"
              >
                {t("home.cta_quote")}
              </Button>
            </Link>

            <button
              onClick={toggleTheme}
              className="p-2 icon-spin rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 icon-spin rounded-lg transition-colors">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-foreground hover:text-primary hover:bg-accent/20 rounded-lg transition-all duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="block px-4 py-2" onClick={() => setIsOpen(false)}>
              <Button size="sm" className="w-full bg-primary text-primary-foreground button-shine button-pulse">
                {t("home.cta_quote")}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
