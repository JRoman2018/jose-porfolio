"use client"

import { motion } from "framer-motion"

interface ProjectCountProps {
  count: number
  total: number
  filter: string
}

export function ProjectCount({ count, total, filter }: ProjectCountProps) {
  return (
    <motion.div
      key={`${filter}-${count}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="text-center mb-8 text-muted-foreground"
    >
      {filter === "All" ? (
        <p>Showing all {count} projects</p>
      ) : (
        <p>
          Showing {count} of {total} projects filtered by{" "}
          <span className="font-medium text-emerald-600 dark:text-emerald-500">{filter}</span>
        </p>
      )}
    </motion.div>
  )
}
