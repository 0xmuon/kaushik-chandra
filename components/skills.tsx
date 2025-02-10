"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

const skills = [
  "Web3",
  "Blockchain",
  "DeFi",
  "NFTs",
  "Layer 2",
  "Marketing Strategy",
  "Business Development",
  "Leadership",
  "Community Development",
  "Market Research",
  "Business Analysis",
  "Business Strategy",
  "Team Management",
  "Start-ups",
  "Finance",
  "Growth Hacking",
  "Product Development",
]

export function Skills() {
  return (
    <section id="skills" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-center text-sm">{skill}</CardTitle>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

