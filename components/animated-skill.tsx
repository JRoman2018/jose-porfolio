"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Progress } from "@/components/ui/progress";

interface AnimatedSkillProps {
  name: string;
  percentage: number;
  delay?: number;
}

export function AnimatedSkill({
  name,
  percentage,
  delay = 0,
}: AnimatedSkillProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between">
        <h3 className="font-medium">{name}</h3>
        <span>{percentage}%</span>
      </div>
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: "100%" } : { width: 0 }}
        transition={{ duration: 0.7, delay, ease: "easeOut" }}
      >
        <Progress value={percentage} className="h-2 bg-muted" />
      </motion.div>
    </div>
  );
}
