import Link from "next/link"
import { Github, Linkedin, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary/20 border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Abdussameea
            </p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://github.com/abdussameea1813"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/abdussameea-patel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            {/* <Link
              href="https://twitter.com/abdussameea1813"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </Link> */}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t text-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Abdussameea. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
