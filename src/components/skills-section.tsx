"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS"],
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    title: "Styling",
    skills: ["CSS3", "Sass", "Styled Components", "Tailwind CSS", "Bootstrap", "Framer Motion", "Shadcn UI", "PostCSS"],
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  {
    title: "Tools & Build",
    skills: ["Webpack", "Vite", "ESLint", "Prettier"],
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  {
    title: "DevOps",
    skills: ["Docker", "GitHub Actions", "Netlify", "Vercel", "Git", "CI/CD"],
    color: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
  },
]

export default function SkillsSection() {
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
    <section id="skills" ref={sectionRef} className="py-20 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={category.title} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className={`${category.color} hover:scale-105 transition-transform cursor-default`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always learning and exploring new technologies. Currently diving deep into Web3, AI integration, and
              advanced animation techniques.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
