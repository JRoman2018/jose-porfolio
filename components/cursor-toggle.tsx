"use client"
import { motion } from "framer-motion"
import { MousePointer, MouseOffIcon as MousePointerOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface CursorToggleProps {
  onToggle: (enabled: boolean) => void
  enabled: boolean
}

export function CursorToggle({ onToggle, enabled }: CursorToggleProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onToggle(!enabled)}
            className="h-9 w-9 rounded-full"
            aria-label={enabled ? "Disable custom cursor" : "Enable custom cursor"}
          >
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }}>
              {enabled ? (
                <MousePointer className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <MousePointerOff className="h-[1.2rem] w-[1.2rem]" />
              )}
            </motion.div>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{enabled ? "Disable custom cursor" : "Enable custom cursor"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
