"use client"

import * as React from "react"
import { motion } from "framer-motion"

interface Word {
  text: string
}

interface TypewriterEffectSmoothProps {
  words: Word[]
}

export const TypewriterEffectSmooth = ({ words }: TypewriterEffectSmoothProps) => {
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0)
  const [currentLetterIndex, setCurrentLetterIndex] = React.useState(0)
  const [isDeleting, setIsDeleting] = React.useState(false)

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!isDeleting && currentLetterIndex === words[currentWordIndex].text.length) {
        setIsDeleting(true)
      } else if (isDeleting && currentLetterIndex === 0) {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
        setIsDeleting(false)
      } else if (isDeleting) {
        setCurrentLetterIndex((prevIndex) => prevIndex - 1)
      } else {
        setCurrentLetterIndex((prevIndex) => prevIndex + 1)
      }
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [currentLetterIndex, isDeleting, currentWordIndex, words])

  const currentWord = words[currentWordIndex].text
  const displayedText = isDeleting
    ? currentWord.substring(0, currentLetterIndex)
    : currentWord.substring(0, currentLetterIndex)

  return (
    <motion.h1
      className="text-5xl font-bold text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      <span className="text-transparent">|</span>
    </motion.h1>
  )
}

