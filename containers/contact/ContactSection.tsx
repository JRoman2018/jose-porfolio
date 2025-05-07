"use client";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

import { AnimatedSection } from "@/components/animated-section";
import { AnimatedText } from "@/components/animated-text";
import React from "react";
import { contactInfo } from "@/app/data";

const ContactSection = () => {
  return (
    <div id="contact">
      <AnimatedSection className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedText
            as="h2"
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Get In Touch
          </AnimatedText>
          <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="md:w-full text-center bg-emerald-600 dark:bg-emerald-700 text-white p-8"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  Contact Information
                </h3>
                <div className="space-y-2 flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex items-center"
                  >
                    <Mail className="mr-4 h-5 w-5" />
                    <span>{contactInfo.email}</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-center"
                  >
                    <MapPin className="mr-4 h-5 w-5" />
                    <span>{contactInfo.address}</span>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-8"
                >
                  <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
                  <div className="flex justify-center space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href={contactInfo.github}
                      target="_blank"
                      className="hover:text-emerald-200 transition-colors"
                    >
                      <Github className="h-6 w-6" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href={contactInfo.linkedin}
                      target="_blank"
                      className="hover:text-emerald-200 transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href={`mailto:${contactInfo.email}`}
                      className="hover:text-emerald-200 transition-colors"
                    >
                      <Mail className="h-6 w-6" />
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
              {/* <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:w-3/5 p-8"
            >
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-muted-foreground mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-input rounded-md bg-background focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Your name"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-muted-foreground mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-input rounded-md bg-background focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="your@email.com"
                    />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-muted-foreground mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-input rounded-md bg-background focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Subject of your message"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-muted-foreground mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-input rounded-md bg-background focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Your message..."
                  ></textarea>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white">
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div> */}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ContactSection;
