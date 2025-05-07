"use client";

import { Github, Linkedin, MapPin } from "lucide-react";
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

  return (
    <div id="about-me">
      <AnimatedSection className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedText
            as="h2"
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            About Me
          </AnimatedText>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:w-1/2"
            >
              <Image
                src="/profile.JPG"
                alt="José Román working"
                width={500}
                height={600}
                loading="lazy"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <div className="md:w-1/2">
              <AnimatedText
                as="h3"
                delay={0.2}
                className="text-2xl font-semibold mb-4"
              >
                My Story
              </AnimatedText>
              <AnimatedText
                as="p"
                delay={0.3}
                className="text-muted-foreground mb-6"
              >
                {contactInfo.paragraph1}
              </AnimatedText>
              <AnimatedText
                as="p"
                delay={0.4}
                className="text-muted-foreground mb-6"
              >
                {contactInfo.paragraph2}
              </AnimatedText>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center text-muted-foreground mb-4"
              >
                <MapPin className="mr-2 h-5 w-5" />
                <span>{contactInfo.address}</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex space-x-4"
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
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default AboutMeSection;
