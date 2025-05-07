"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { contactInfo } from "@/app/data";

const FooterSection = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 dark:bg-gray-950 text-white py-12"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="font-bold text-2xl mb-2">{contactInfo.name}</div>
            <p className="text-gray-400">{contactInfo.title}</p>
          </div>
          <div className="flex space-x-6">
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
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {contactInfo.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default FooterSection;
