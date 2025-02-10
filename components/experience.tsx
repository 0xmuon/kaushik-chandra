"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const experiences = [
  {
    title: "Bitcoin Ecosystem",
    company: "3poch Labs",
    date: "Dec 2023 - Aug 2024",
    description:
      "Analyzed Bitcoin Ecosystem projects for investments, deep-dived into BRC-20s, BRC-420s, Ordinals, Runes, BTC L2s. Devised strategies for memes and altcoin trading.",
  },
  {
    title: "Mage, Polygon Guild Surat",
    company: "Polygon Technology",
    date: "Apr 2022 - Jul 2024",
    description:
      "Organized meetups and hackathons, educated developers about layer-2 solutions, and increased brand reach across colleges.",
  },
  {
    title: "Research Analyst",
    company: "Mantle Network",
    date: "Jan 2023 - Mar 2023",
    description:
      "Conducted deep analysis of 100+ projects for investment and onboarding on Mantle Ecosystem. Used various onchain platforms and tools for market analysis.",
  },
  {
    title: "Growth",
    company: "Onecdot",
    date: "Jun 2021 - Jun 2022",
    description:
      "Managed a team of 7, strategized pivot from NFT marketplace to API suite, led B2B partnerships, and onboarded clients.",
  },
  {
    title: "Co-Founder & CEO",
    company: "KARMAC",
    date: "Jan 2021 - Apr 2022",
    description:
      "Managed a core team of 8, launched website and android app for car servicing platform. Conducted market research and product development.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{exp.title}</CardTitle>
                  <CardDescription>
                    {exp.company} | {exp.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

