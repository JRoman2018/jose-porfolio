"use client";

import { type FC, useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Project } from "@/app/types";

const ProjectCard: FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Lazy load images when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  // Image carousel functionality
  useEffect(() => {
    if (!isVisible || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % project.images.length);
      // Reset image loaded state when changing images
      setImageLoaded(false);
    }, 10000);

    return () => clearInterval(interval);
  }, [project.images, isVisible]);

  const onClickAction = () => {
    if (project.request_demo) {
      window.open(
        `https://wa.me/+18299623287?text=Hello!%20I%20would%20like%20to%20request%20a%20demo%20of%20the%20project: ${project.title}.`,
        "_blank"
      );
    } else {
      window.open(project.link, "_blank");
    }
  };

  // Preload the next image in the carousel
  useEffect(() => {
    if (!isVisible || project.images.length <= 1) return;

    const nextImageIndex = (currentImage + 1) % project.images.length;
    const nextImageUrl = project.images[nextImageIndex];

    if (nextImageUrl) {
      const imgElement = document.createElement("img");
      imgElement.src = nextImageUrl;
    }
  }, [currentImage, project.images, isVisible]);

  return (
    <motion.div
      ref={cardRef}
      layout
      key={project.id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: 0.05 * (index % 3) }}
      whileHover={{ y: -10 }}
      className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-56 overflow-hidden bg-gray-200 dark:bg-gray-800">
        {/* Skeleton loader */}
        {(!isVisible || !imageLoaded) && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
        )}

        {/* Only render image when card is visible */}
        {isVisible && (
          <Image
            src={project.images?.[currentImage] || "/placeholder.svg"}
            alt={`${project.title} image ${currentImage + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 3} // Only prioritize first 3 images
            loading={index < 3 ? "eager" : "lazy"}
            className={`object-contain transition-transform duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 text-white">
            <h4 className="font-semibold">{project.title}</h4>
            <p className="text-sm text-gray-200">{project.tags.join(", ")}</p>
          </div>
        </div>

        {/* Complexity Badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`px-3 py-1 text-xs font-medium rounded-full ${
              project.complexity === "Beginner"
                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                : project.complexity === "Intermediate"
                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
            }`}
          >
            {project.complexity}
          </span>
        </div>

        {/* Carousel Dots */}
        {isVisible && project.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {project.images?.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentImage(i);
                  setImageLoaded(false);
                }}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  i === currentImage
                    ? "bg-white"
                    : "bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-col justify-self-end">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={`${project.id}-${tag}`}
                className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-full dark:bg-emerald-950 dark:text-emerald-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <Button
            onClick={onClickAction}
            variant="outline"
            className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-500 dark:text-emerald-500 dark:hover:bg-emerald-950/50"
          >
            {project.request_demo ? "Request Demo" : "View Project"}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
