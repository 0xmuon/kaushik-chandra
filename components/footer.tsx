import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by Kaushik Chandra. The source code is available on GitHub.
        </p>
        <div className="flex items-center space-x-4">
          <a href="https://github.com/kaushikchandra" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/kaushikchandra" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://twitter.com/kaushikchandra" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

