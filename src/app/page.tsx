import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Abdussameea - Full Stack Software Developer & AI Integration",
  description:
    "Passionate full stack software developer specializing in React.js, Next.js, Node.js, and AI integration. Currently seeking full stack, frontend, backend, and similar roles.",
  keywords: "full stack developer, React.js, Next.js, Node.js, AI integration, SQL, NoSql, portfolio, frontend, backend",
  authors: [{ name: "Abdussameea" }],
  creator: "Abdussameea",
  openGraph: {
    title: "Abdussameea - Full Stack Software Developer",
    description: "Building powerful web applications with React.js, Next.js, Node.js, and AI.",
    url: "https://abdussameea.dev", // Placeholder URL, update this when you have it
    siteName: "Samee Portfolio",
    images: [
      {
        url: "/og-image.jpg", // This will be the path to the image you provide
        width: 1200, // You might want to adjust these based on your image dimensions
        height: 630, // You might want to adjust these based on your image dimensions
        alt: "Abdussameea - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdussameea - Full Stack Software Developer",
    description: "Building powerful web applications with React.js, Next.js, Node.js, and AI.",
    images: ["/og-image.jpg"], // This will be the path to the image you provide
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  )
}
