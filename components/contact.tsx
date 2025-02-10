"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { LinkedinIcon as LinkedIn, Mail, Twitter } from "lucide-react"
import { FaMedium } from "react-icons/fa"
import { SiSubstack } from "react-icons/si"
import { toast } from "sonner"

export function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast.success("Message submitted successfully!")
    // Reset form
    setName("")
    setEmail("")
    setMessage("")
    setIsLoading(false)
  }

  return (
    <section id="contact" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Contact Me</CardTitle>
              <CardDescription>Get in touch for collaborations or inquiries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" size="icon" asChild className="rounded-full hover:bg-muted">
                    <a
                      href="https://twitter.com/Stingertwts"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="rounded-full hover:bg-muted">
                    <a
                      href="https://www.linkedin.com/in/kaushik-chandra/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <LinkedIn className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="rounded-full hover:bg-muted">
                    <a
                      href="https://medium.com/@kcstinger10"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Medium"
                    >
                      <FaMedium className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="rounded-full hover:bg-muted">
                    <a
                      href="https://substack.com/@kaushikchandra"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Substack"
                    >
                      <SiSubstack className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="rounded-full hover:bg-muted">
                    <a href="mailto:kc@3poch.xyz" aria-label="Email">
                      <Mail className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

