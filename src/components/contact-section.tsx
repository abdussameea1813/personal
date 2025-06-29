"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Twitter, MapPin } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Drop me a line anytime",
    value: "abdussameea1@gmail.com",
    href: "mailto:abdussameea1@gmail.com",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Github,
    title: "GitHub",
    description: "Check out my code",
    value: "@abdussameea1813",
    href: "https://github.com/abdussameea1813",
    color: "text-gray-600 dark:text-gray-400",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Let's connect professionally",
    value: "Abdussameea",
    href: "https://linkedin.com/in/abdussameea-patel",
    color: "text-blue-700 dark:text-blue-300",
  },
  // {
  //   icon: Twitter,
  //   title: "Twitter",
  //   description: "Follow my journey",
  //   value: "@alexchen_dev",
  //   href: "https://twitter.com/alexchen_dev",
  //   color: "text-sky-500 dark:text-sky-400",
  // },
]

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Get In <span className="gradient-text">Touch</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method) => {
              const IconComponent = method.icon
              return (
                <Card key={method.title} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <div
                      className={`mx-auto w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform ${method.color}`}
                    >
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button asChild variant="outline" className="w-full">
                      <Link href={method.href} target="_blank" rel="noopener noreferrer">
                        {method.value}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <MapPin className="h-5 w-5 text-muted-foreground mr-2" />
                  <span className="text-muted-foreground">Toronto, ON, Canada</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Ready to work together?</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                  want to say hi, I'll try my best to get back to you!
                </p>
                <Button asChild size="lg" className="group">
                  <Link href="mailto:abdussameea1@example.com">
                    <Mail className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    Send Message
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
