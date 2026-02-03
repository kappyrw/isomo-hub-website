"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/hooks/use-i18n"
import { motion } from "framer-motion"
import { Mail, Phone, User, BookOpen, Check } from "lucide-react"

interface FormData {
  fullName: string
  email: string
  phone: string
  selectedCourse: string
  experience: string
  motivation: string
}

export const CourseApplicationForm = () => {
  const { t } = useI18n()
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    selectedCourse: "web-development",
    experience: "beginner",
    motivation: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const courses = [
    { id: "web-development", label: "Web Development Course", googleFormUrl: "https://forms.gle/webdev-course" },
    { id: "graphic-design", label: "Graphic Design Course", googleFormUrl: "https://forms.gle/graphic-design-course" },
    { id: "video-editing", label: "Video Editing Course", googleFormUrl: "https://forms.gle/video-editing-course" },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Get the selected course's Google Form URL
      const selectedCourseData = courses.find((c) => c.id === formData.selectedCourse)
      const googleFormUrl = selectedCourseData?.googleFormUrl

      // Construct the Google Form submission URL with pre-filled data
      const params = new URLSearchParams()
      // Note: You need to update these field IDs with your actual Google Form field IDs
      // To get field IDs, inspect the Google Form HTML
      params.append("entry.123456", formData.fullName) // Replace 123456 with actual field ID
      params.append("entry.789012", formData.email) // Replace 789012 with actual field ID
      params.append("entry.345678", formData.phone) // Replace 345678 with actual field ID
      params.append("entry.901234", formData.selectedCourse) // Replace 901234 with actual field ID
      params.append("entry.567890", formData.experience) // Replace 567890 with actual field ID
      params.append("entry.234567", formData.motivation) // Replace 234567 with actual field ID

      // Open Google Form in new tab with pre-filled data
      if (googleFormUrl) {
        window.open(`${googleFormUrl}?${params.toString()}`, "_blank")
      }

      // Reset form and show success message
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        selectedCourse: "web-development",
        experience: "beginner",
        motivation: "",
      })
      setIsSubmitted(true)

      // Hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-50 via-white to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-balance text-black dark:text-white">
            Apply for a Free Course Today
          </h2>
          <p className="text-lg text-gray-700 dark:text-white max-w-2xl mx-auto">
            Fill out the form below and we'll add you to your selected course. No credit card required!
          </p>
        </motion.div>

        <motion.div
          className="bg-card border border-primary/20 rounded-3xl p-8 md:p-12 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {isSubmitted ? (
            <motion.div
              className="text-center py-12 space-y-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Application Submitted!</h3>
              <p className="text-foreground/70">
                Your application has been sent to our Google Form. You'll receive a confirmation email shortly with course details and access instructions.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">
                  <User className="inline w-4 h-4 mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">
                  <Mail className="inline w-4 h-4 mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">
                  <Phone className="inline w-4 h-4 mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300"
                />
              </div>

              {/* Course Selection */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">
                  <BookOpen className="inline w-4 h-4 mr-2" />
                  Select Course
                </label>
                <select
                  name="selectedCourse"
                  value={formData.selectedCourse}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300"
                >
                  {courses.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Experience Level */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Experience Level</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300"
                >
                  <option value="beginner">Beginner - I'm new to this field</option>
                  <option value="intermediate">Intermediate - I have some experience</option>
                  <option value="advanced">Advanced - I'm looking to deepen my skills</option>
                </select>
              </div>

              {/* Motivation */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Tell us your motivation</label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  placeholder="Why are you interested in this course? What do you hope to learn?"
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 button-shine button-pulse py-6 text-base font-semibold"
              >
                {isSubmitting ? "Submitting..." : "Send Application"}
              </Button>

              <p className="text-center text-sm text-foreground/60">
                By submitting, you'll be redirected to our Google Form to complete your application.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
    )
}
