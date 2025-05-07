"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";
import { AnimatedText } from "@/components/animated-text";

const TestimonialsSection = () => {
  return (
    <div id="testimonials">
      <AnimatedSection className="py-20 bg-emerald-50 dark:bg-emerald-950/10">
        <div className="container mx-auto px-4">
          <AnimatedText
            as="h2"
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            What Clients Say
          </AnimatedText>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart",
                content:
                  "José delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and ability to translate our vision into reality was impressive.",
              },
              {
                name: "Michael Chen",
                role: "Product Manager, InnovateCo",
                content:
                  "Working with José was a pleasure. He's not only technically skilled but also brings creative solutions to complex problems. Our dashboard project was delivered on time and on budget.",
              },
              {
                name: "Emily Rodriguez",
                role: "Marketing Director, GrowthLabs",
                content:
                  "José's expertise in React and TypeScript helped us create a beautiful, high-performance website that significantly improved our conversion rates. Highly recommended!",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                whileHover={{ y: -10 }}
                className="bg-card p-6 shadow-md hover:shadow-lg transition-all duration-300 rounded-lg"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: 0.2 * (index + 1),
                        }}
                        className="w-12 h-12 rounded-full overflow-hidden"
                      >
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt="Client"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </motion.div>
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default TestimonialsSection;
