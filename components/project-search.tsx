"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface ProjectSearchProps {
  onSearch: (searchTerm: string) => void
}

export function ProjectSearch({ onSearch }: ProjectSearchProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto mb-8 relative"
    >
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={handleSearch}
          className="pl-10 border-emerald-600/30 focus:border-emerald-600 dark:border-emerald-500/30 dark:focus:border-emerald-500"
        />
      </div>
    </motion.div>
  )
}
