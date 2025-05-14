"use client";

import {
  Github,
  Linkedin,
  MapPin,
  Mail,
  Download,
  Code,
  Globe,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import { AnimatedText } from "@/components/animated-text";
import { contactInfo } from "@/app/data";

const AboutMeSection = () => {
  const handleClickSocialMedia = (url: string) => {
    window.open(url, "_blank");
  };

  const skills = [
    { name: "Frontend Development", icon: <Code className="h-5 w-5" /> },
    { name: "Backend Development", icon: <Zap className="h-5 w-5" /> },
    { name: "UI/UX Design", icon: <Globe className="h-5 w-5" /> },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/docs/resume.pdf";
    link.download = "Jose_Roman_CV.pdf";
    link.click();
  };

  return (
    <div id="about-me" className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob dark:bg-emerald-800"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000 dark:bg-emerald-700"></div>

      <AnimatedSection className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedText
            as="h2"
            className="text-3xl md:text-4xl font-bold text-center mb-6"
          >
            About Me
          </AnimatedText>

          <AnimatedText
            as="p"
            delay={0.1}
            className="text-center text-muted-foreground max-w-2xl mx-auto mb-16"
          >
            Passionate developer crafting exceptional digital experiences with
            modern technologies
          </AnimatedText>

          <div className="flex flex-col lg:flex-row items-start gap-16">
            {/* Profile image with reduced size */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-2/5 mx-auto lg:mx-0 max-w-[350px]"
            >
              <div className="relative">
                {/* Simple border */}
                <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-emerald-500 rounded-lg dark:border-emerald-400 z-0"></div>

                {/* Image container */}
                <div className="relative z-10 bg-white dark:bg-gray-900 p-2 rounded-lg shadow-md">
                  <Image
                    src="/profile.JPG"
                    alt="José Román"
                    width={350}
                    height={350}
                    loading="lazy"
                    className="rounded-md w-full h-auto max-h-[350px] object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* About me content */}
            <div className="lg:w-3/5">
              <AnimatedText
                as="h3"
                delay={0.2}
                className="text-2xl font-semibold mb-6 text-emerald-600 dark:text-emerald-400"
              >
                My Story
              </AnimatedText>

              <AnimatedText
                as="p"
                delay={0.3}
                className="text-muted-foreground mb-6 leading-relaxed"
              >
                {contactInfo.paragraph1}
              </AnimatedText>

              <AnimatedText
                as="p"
                delay={0.4}
                className="text-muted-foreground mb-8 leading-relaxed"
              >
                {contactInfo.paragraph2}
              </AnimatedText>

              {/* Skills section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mb-8"
              >
                <h4 className="text-lg font-medium mb-4">My Expertise</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="flex items-center p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors"
                    >
                      <div className="mr-3 p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-emerald-600 dark:text-emerald-400">
                        {skill.icon}
                      </div>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center text-muted-foreground mb-6"
              >
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-emerald-600 dark:text-emerald-400 mr-3">
                  <MapPin className="h-5 w-5" />
                </div>
                <span>{contactInfo.address}</span>
              </motion.div>

              {/* Contact and social buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  onClick={() => handleClickSocialMedia(contactInfo.github)}
                  variant="outline"
                  className="flex items-center gap-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-500 dark:text-emerald-500 dark:hover:bg-emerald-950/50"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </Button>
                <Button
                  onClick={() => handleClickSocialMedia(contactInfo.linkedin)}
                  variant="outline"
                  className="flex items-center gap-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-500 dark:text-emerald-500 dark:hover:bg-emerald-950/50"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </Button>
                <Button
                  onClick={handleDownloadResume}
                  variant="ghost"
                  className="flex items-center gap-2 hover:bg-emerald-50 dark:hover:bg-emerald-950/50"
                >
                  <Download className="h-5 w-5" />
                  Download CV
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default AboutMeSection;
