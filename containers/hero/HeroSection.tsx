"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/animated-text";
import { contactInfo } from "@/app/data";

const HeroSection = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/docs/resume.pdf";
    link.download = "Jose_Roman_CV.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="py-20 md:py-32 bg-gradient-to-br from-emerald-50 to-transparent dark:from-emerald-950/20 dark:to-transparent overflow-hidden"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <AnimatedText
            as="h1"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Hi, I'm{" "}
            <span className="text-emerald-600 dark:text-emerald-500">
              {contactInfo.name}
            </span>
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            {contactInfo.title}
          </AnimatedText>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex space-x-4"
          >
            <Button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white"
            >
              View Projects
            </Button>
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-500 dark:text-emerald-500 dark:hover:bg-emerald-950/50"
            >
              Download CV
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-xl">
            <Image
              src="/profile.JPG"
              alt={contactInfo.name}
              fill
              className=""
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
