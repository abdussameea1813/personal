"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "AI Workout and Diet Planner",
    description: "A fitness app that uses AI to generate personalized workout and diet plans.",
    image: "/yeahbuddy.png", // Replace this with your actual project thumbnail if you have one
    technologies: ["Next.js", "Tailwind CSS", "Shadcn ui", "Gemini LLM", "typescript", "convex", "Clerk", "vercel"],
    liveUrl: "https://fitness-ai-dusky.vercel.app/",
    githubUrl: "https://github.com/abdussameea1813/Fitness-AI"
  }
  ,
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with product browsing, cart, checkout, and admin features. Built using Vite + React frontend, Express backend, and Stripe integration.",
    image: "/ecommerce.png", // Replace this with your actual project thumbnail if you have one
    technologies: ["React", "Vite", "Express", "MongoDB", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://e-commerce-ysvq.onrender.com/",
    githubUrl: "https://github.com/abdussameea1813/E-commerce"
  },
  {
    title: "Job Tracker",
    description: "A job tracking app built with Next.js and Prisma ORM.",
    image: "/job-tracker.png",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Framer Motion"],
    liveUrl: "https://tracker-cid8a8lux-abdussameeas-projects.vercel.app",
    githubUrl: "https://github.com/abdussameea1813/Tracker",
  },
  {
    title: "X Clone",
    description: "A clone of the popular social media platform X.",
    image: "/x-clone.png",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Shadcn UI", "Axios", "jsonwebtoken", "bcrypt", "mongoose"],
    liveUrl: "https://x-clone-xdca.onrender.com/login",
    githubUrl: "https://github.com/abdussameea1813/X",
  },
]

export default function ProjectsSection() {
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
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button asChild size="sm" variant="secondary" className="bg-white/10 text-white border-white/20">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-white">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="bg-white/10 text-white border-white/20">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2 bg" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
