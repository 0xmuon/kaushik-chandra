"use client"

import { motion } from "framer-motion"
import { TypewriterEffectSmooth } from "./ui/typewriter-effect"
import { Button } from "./ui/button"
import HalftoneWave from "@/components/canvas/HalftoneWave"

export function Hero() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "Web3",
    },
    {
      text: "experiences",
    },
    {
      text: "with",
    },
    {
      text: "Kaushik.",
    },
  ]
  return (
    <div
      id="hero"
      className="h-[40rem] w-full dark:bg-black bg-white relative flex items-center justify-center overflow-hidden"
    >
      <HalftoneWave />
      <div className="relative z-10 text-center">
        <TypewriterEffectSmooth words={words} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <Button className="mt-8" size="lg">
            Get in touch
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

