"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface AnimatedTextProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
}

export function AnimatedText({ children, delay = 0, className, as = "p" }: AnimatedTextProps) {
  const Component = motion[as]

  return (
    <Component
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </Component>
  )
}
