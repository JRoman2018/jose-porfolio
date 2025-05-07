"use client"

import { type ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card } from "@/components/ui/card"

interface AnimatedCardProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function AnimatedCard({ children, delay = 0, className }: AnimatedCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
    >
      <Card className={className}>{children}</Card>
    </motion.div>
  )
}
