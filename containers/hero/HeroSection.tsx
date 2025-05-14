"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  ArrowDown,
  Download,
  ExternalLink,
  Code,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/animated-text";
import { contactInfo } from "@/app/data";

const HeroSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/docs/resume.pdf";
    link.download = "Jose_Roman_CV.pdf";
    link.click();
  };

  // Floating animation for decorative elements
  const floatingAnimation = {
    y: ["-10px", "10px"],
    transition: {
      y: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-emerald-50 via-emerald-50/50 to-transparent dark:from-emerald-950/30 dark:via-emerald-950/10 dark:to-transparent"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated circles */}
        <motion.div
          animate={floatingAnimation}
          className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-emerald-300/10 dark:bg-emerald-700/10 blur-3xl"
        />
        <motion.div
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 0.5 },
          }}
          className="absolute bottom-20 right-[10%] w-80 h-80 rounded-full bg-emerald-200/20 dark:bg-emerald-800/10 blur-3xl"
        />

        {/* Code-like decorative elements */}
        <div className="absolute top-[15%] left-[5%] text-emerald-300/30 dark:text-emerald-700/20 text-5xl font-mono hidden md:block">
          {"</>"}
        </div>
        <div className="absolute bottom-[15%] right-[5%] text-emerald-300/30 dark:text-emerald-700/20 text-5xl font-mono hidden md:block">
          {"{}"}
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-center opacity-[0.02] dark:opacity-[0.05]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 mb-16 md:mb-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium mb-6"
            >
              <span className="flex items-center">
                <Sparkles className="h-4 w-4 mr-2" />
                Full Stack Developer
              </span>
            </motion.div>

            <AnimatedText
              as="h1"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight"
            >
              Hi, I'm{" "}
              <span className="text-emerald-600 dark:text-emerald-500 relative inline-block">
                {contactInfo.name}
                <motion.span
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1, ease: "easeInOut" }}
                  className="absolute bottom-2 left-0 h-[6px] bg-emerald-300/30 dark:bg-emerald-700/30 rounded-full"
                ></motion.span>
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
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white group relative overflow-hidden"
                size="lg"
              >
                <span className="relative z-10 flex items-center">
                  View Projects
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-emerald-700 dark:bg-emerald-800 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>

              <Button
                onClick={handleDownloadResume}
                variant="outline"
                size="lg"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-500 dark:text-emerald-500 dark:hover:bg-emerald-950/50 group"
              >
                <span className="flex items-center">
                  Download CV
                  <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </span>
              </Button>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="mt-16 hidden md:flex items-center text-sm text-muted-foreground"
            >
              <div className="mr-2 h-px w-8 bg-muted-foreground/50"></div>
              Scroll down to explore
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  transition: {
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                  },
                }}
                className="ml-2"
              >
                <ArrowDown className="h-4 w-4" />
              </motion.div>
            </motion.div>
          </div>

          {/* Profile Image with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:w-1/2 flex justify-center relative"
          >
            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="w-[calc(100%-30px)] h-[calc(100%-30px)] rounded-full border-2 border-dashed border-emerald-200 dark:border-emerald-800/50"
                style={{ animationDelay: "0ms" }}
              ></motion.div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, rotate: -30 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="w-[calc(100%+30px)] h-[calc(100%+30px)] rounded-full border-2 border-emerald-200/50 dark:border-emerald-800/30"
              ></motion.div>
            </div>

            {/* Main image container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-900 shadow-2xl z-10">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 to-transparent z-10"></div>

              {/* Image */}
              <Image
                src="/profile.JPG"
                alt={contactInfo.name}
                fill
                className="object-cover"
                priority
              />

              {/* Shine effect */}
              <motion.div
                initial={{ x: "-100%", opacity: 0.5 }}
                animate={{ x: "200%" }}
                transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent z-20 skew-x-12"
              ></motion.div>
            </div>

            {/* Code badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -bottom-4 -right-4 md:bottom-10 md:right-10 bg-white dark:bg-gray-900 shadow-lg rounded-full p-3 z-20"
            >
              <div className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 rounded-full p-2">
                <Code className="h-6 w-6" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
