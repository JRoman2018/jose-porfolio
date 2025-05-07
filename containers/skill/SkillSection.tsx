"use client";

import { motion } from "framer-motion";

import { CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";
import { AnimatedText } from "@/components/animated-text";
import { AnimatedSkill } from "@/components/animated-skill";
import { AnimatedCard } from "@/components/animated-card";
import { skills } from "@/app/data";

const SkillSection = () => {
  return (
    <div id="skills">
      <AnimatedSection className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <AnimatedText
            as="h2"
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            My Skills
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              {skills.slice(skills.length / 2).map((skill, index) => (
                <AnimatedSkill
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={0.2}
                />
              ))}
            </div>

            <div className="space-y-6">
              {skills.slice(0, skills.length / 2).map((skill, index) => (
                <AnimatedSkill
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default SkillSection;
