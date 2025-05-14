"use client";

import type React from "react";

import { useState, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowRight,
  Loader2,
  AlertCircle,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

import { AnimatedSection } from "@/components/animated-section";
import { AnimatedText } from "@/components/animated-text";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/app/data";

type FormStatus = "idle" | "submitting" | "error";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type FormTouched = {
  name: boolean;
  email: boolean;
  message: boolean;
};

const ContactSection = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string;
  }>({});
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState<FormTouched>({
    name: false,
    email: false,
    message: false,
  });
  const formRef = useRef<HTMLFormElement>(null);

  const socialLinks = [
    {
      id: "github",
      icon: <Github className="h-5 w-5" />,
      href: contactInfo.github,
      label: "GitHub",
    },
    {
      id: "linkedin",
      icon: <Linkedin className="h-5 w-5" />,
      href: contactInfo.linkedin,
      label: "LinkedIn",
    },
    {
      id: "email",
      icon: <Mail className="h-5 w-5" />,
      href: `mailto:${contactInfo.email}`,
      label: "Email",
    },
  ];

  // Generate WhatsApp URL with pre-filled message
  const generateWhatsAppUrl = (values: FormValues) => {
    const whatsappPhone = contactInfo.whatsapp || "1234567890"; // Replace with your WhatsApp number

    // Create message text
    const messageText = `Hello! I just submitted a contact form on your website.\n\nName: ${values.name}\nEmail: ${values.email}\n\nMessage: ${values.message}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(messageText);

    // Generate WhatsApp URL
    return `https://wa.me/+${whatsappPhone}?text=${encodedMessage}`;
  };

  // Validate a single field
  const validateField = (name: keyof FormValues, value: string): string => {
    if (!value || value.trim() === "") {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }

    if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
      return "Please enter a valid email address";
    }

    if (name === "message" && value.trim().length < 10) {
      return "Message must be at least 10 characters";
    }

    return "";
  };

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Update form values
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    // If field has been touched, validate it
    if (touched[name as keyof FormTouched]) {
      const error = validateField(name as keyof FormValues, value);

      setValidationErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  // Handle blur events to mark fields as touched
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Mark field as touched
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    // Validate the field
    const error = validateField(name as keyof FormValues, value);

    setValidationErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  // Validate all fields
  const validateForm = (): boolean => {
    const errors: { [key: string]: string } = {};
    let isValid = true;

    // Validate each field
    Object.entries(formValues).forEach(([key, value]) => {
      const error = validateField(key as keyof FormValues, value);
      if (error) {
        errors[key] = error;
        isValid = false;
      }
    });

    setValidationErrors(errors);
    return isValid;
  };

  // Handle form submission
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Prevent default form submission

    setFormStatus("submitting");

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      message: true,
    });

    // Validate all fields
    if (!validateForm()) {
      setFormStatus("error");
      return;
    }

    try {
      // Simulate network delay (you can remove this in production)
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Generate WhatsApp URL with the form data
      const whatsappUrl = generateWhatsAppUrl(formValues);

      // Redirect to WhatsApp in the same window
      window.location.href = whatsappUrl;

      // Reset form (this will only happen if the redirect is blocked)
      setFormValues({
        name: "",
        email: "",
        message: "",
      });

      setTouched({
        name: false,
        email: false,
        message: false,
      });

      setValidationErrors({});
    } catch (error) {
      setFormStatus("error");
      setErrorMessage(
        "An error occurred while processing your message. Please try again."
      );
      console.error("Error processing message:", error);
    } finally {
      // Reset form status in case the redirect doesn't happen
      setFormStatus("idle");
    }
  }

  return (
    <div id="contact">
      <AnimatedSection className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-16 items-start">
              {/* Left Column - Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2 md:sticky md:top-24"
              >
                <div className="inline-block mb-6">
                  <div className="h-px w-12 bg-emerald-500 mb-6"></div>
                  <AnimatedText
                    as="h2"
                    className="text-3xl md:text-4xl font-bold tracking-tight"
                  >
                    Let's start a conversation
                  </AnimatedText>
                </div>

                <AnimatedText
                  as="p"
                  delay={0.1}
                  className="text-gray-600 dark:text-gray-400 mb-8 text-lg"
                >
                  Have a project in mind or want to explore opportunities for
                  collaboration? I'd love to hear from you.
                </AnimatedText>

                <div className="space-y-6 mb-10">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex items-start"
                  >
                    <div className="mr-4 p-2 border border-gray-200 dark:border-gray-800 rounded-full">
                      <Mail className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                        Email
                      </p>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-lg hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="flex items-start"
                  >
                    <div className="mr-4 p-2 border border-gray-200 dark:border-gray-800 rounded-full">
                      <MapPin className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                        Location
                      </p>
                      <p className="text-lg">{contactInfo.address}</p>
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    Connect with me
                  </p>
                  <div className="flex items-center space-x-6">
                    {socialLinks.map((link) => (
                      <motion.a
                        key={link.id}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative"
                        onMouseEnter={() => setHoveredIcon(link.id)}
                        onMouseLeave={() => setHoveredIcon(null)}
                        whileHover={{ y: -5 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <div className="p-3 border border-gray-200 dark:border-gray-800 rounded-full hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors">
                          {link.icon}
                        </div>

                        {/* Tooltip */}
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={
                            hoveredIcon === link.id
                              ? { opacity: 1, y: 0, scale: 1 }
                              : { opacity: 0, y: 10, scale: 0.9 }
                          }
                          transition={{ duration: 0.2 }}
                          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap"
                        >
                          <div className="bg-gray-900 dark:bg-gray-800 text-white px-3 py-1 rounded text-sm">
                            {link.label}
                          </div>
                          <div className="w-2 h-2 bg-gray-900 dark:bg-gray-800 transform rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
                        </motion.div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:w-1/2 w-full"
              >
                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-10 border border-gray-100 dark:border-gray-800">
                  <h3 className="text-xl font-semibold mb-6">
                    <span className="flex items-center">
                      Send a message
                      <MessageCircle className="ml-2 h-5 w-5 text-green-600 dark:text-green-500" />
                    </span>
                  </h3>

                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {formStatus === "error" && errorMessage && (
                      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 rounded-lg p-4 mb-4">
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-red-800 dark:text-red-300">
                              There was an error sending your message
                            </h3>
                            <p className="text-sm text-red-700 dark:text-red-400 mt-1">
                              {errorMessage}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 bg-white dark:bg-gray-800 border ${
                          validationErrors.name && touched.name
                            ? "border-red-500 dark:border-red-500"
                            : "border-gray-200 dark:border-gray-700"
                        } rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all`}
                        placeholder="Your name"
                      />
                      {validationErrors.name && touched.name && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {validationErrors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 bg-white dark:bg-gray-800 border ${
                          validationErrors.email && touched.email
                            ? "border-red-500 dark:border-red-500"
                            : "border-gray-200 dark:border-gray-700"
                        } rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all`}
                        placeholder="your@email.com"
                      />
                      {validationErrors.email && touched.email && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {validationErrors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formValues.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 bg-white dark:bg-gray-800 border ${
                          validationErrors.message && touched.message
                            ? "border-red-500 dark:border-red-500"
                            : "border-gray-200 dark:border-gray-700"
                        } rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none`}
                        placeholder="Your message..."
                      ></textarea>
                      {validationErrors.message && touched.message && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {validationErrors.message}
                        </p>
                      )}
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={formStatus === "submitting"}
                        className="w-full bg-green-600 hover:bg-green-700 text-white group"
                      >
                        {formStatus === "submitting" ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send via WhatsApp
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </Button>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">
                        Your message will be sent directly to WhatsApp
                      </p>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ContactSection;
