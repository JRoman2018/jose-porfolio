"use client";

import { AnimatedSection } from "@/components/animated-section";
import { AnimatedText } from "@/components/animated-text";
import { ProjectFilter } from "@/components/project-filter";

const ProjectSection = () => {
  return (
    <div id="projects">
      <AnimatedSection className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedText
            as="h2"
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Featured Projects
          </AnimatedText>
          <ProjectFilter />
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ProjectSection;
