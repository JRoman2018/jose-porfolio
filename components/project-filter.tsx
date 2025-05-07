"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Project } from "@/app/types";
import { projects } from "@/app/data/projects";
import { ProjectSearch } from "@/components/project-search";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "./project-card";

export function ProjectFilter() {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [activeComplexity, setActiveComplexity] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Extract all unique tags from projects
  const allTags = [
    "All",
    ...Array.from(new Set(projects.flatMap((project) => project.tags))),
  ];

  // Complexity levels
  const complexityLevels = ["All", "Beginner", "Intermediate", "Advanced"];

  const handleFilterClick = (tag: string) => {
    setActiveFilter(tag);
    applyFilters(tag, activeComplexity, searchTerm);
  };

  const handleComplexityChange = (complexity: string) => {
    setActiveComplexity(complexity);
    applyFilters(activeFilter, complexity, searchTerm);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    applyFilters(activeFilter, activeComplexity, term);
  };

  const applyFilters = (tag: string, complexity: string, term: string) => {
    let filtered = projects;

    // Apply tag filter
    if (tag !== "All") {
      filtered = filtered.filter((project) => project.tags.includes(tag));
    }

    // Apply complexity filter
    if (complexity !== "All") {
      filtered = filtered.filter(
        (project) => project.complexity === complexity
      );
    }

    // Apply search filter
    if (term.trim() !== "") {
      const searchLower = term.toLowerCase();
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchLower) ||
          project.description.toLowerCase().includes(searchLower) ||
          project.tags.some((tag) => tag.toLowerCase().includes(searchLower))
      );
    }

    setFilteredProjects(filtered);
  };

  return (
    <div>
      {/* Search */}
      <ProjectSearch onSearch={handleSearch} />

      {/* Complexity Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex justify-center mb-8"
      >
        <Tabs
          defaultValue="All"
          value={activeComplexity}
          onValueChange={handleComplexityChange}
          className="w-full max-w-md"
        >
          <TabsList className="grid grid-cols-4 w-full">
            {complexityLevels.map((level) => (
              <TabsTrigger
                key={level}
                value={level}
                className={
                  activeComplexity === level
                    ? "data-[state=active]:bg-emerald-600 data-[state=active]:text-white dark:data-[state=active]:bg-emerald-500"
                    : ""
                }
              >
                {level}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-2 mb-12"
      >
        {allTags.map((tag, index) => (
          <motion.button
            key={tag}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 * index }}
            whileHover={{ y: -5 }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === tag
                ? "bg-emerald-600 text-white dark:bg-emerald-500"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
            onClick={() => handleFilterClick(tag)}
          >
            {tag}
          </motion.button>
        ))}
      </motion.div>

      {/* Project Count */}
      <motion.div
        key={`${activeFilter}-${activeComplexity}-${filteredProjects.length}-${searchTerm}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center mb-8 text-muted-foreground"
      >
        {searchTerm ? (
          <p>
            Found {filteredProjects.length}
            {activeComplexity !== "All"
              ? ` ${activeComplexity.toLowerCase()}`
              : ""}
            {activeFilter !== "All" ? ` ${activeFilter}` : ""}
            project{filteredProjects.length !== 1 ? "s" : ""} matching "
            {searchTerm}"
          </p>
        ) : activeFilter === "All" && activeComplexity === "All" ? (
          <p>Showing all {filteredProjects.length} projects</p>
        ) : (
          <p>
            Showing {filteredProjects.length} of {projects.length} projects
            {activeComplexity !== "All" ? (
              <span>
                {" "}
                with{" "}
                <span className="font-medium text-emerald-600 dark:text-emerald-500">
                  {activeComplexity.toLowerCase()}
                </span>{" "}
                complexity
              </span>
            ) : (
              ""
            )}
            {activeFilter !== "All" ? (
              <span>
                {" "}
                using{" "}
                <span className="font-medium text-emerald-600 dark:text-emerald-500">
                  {activeFilter}
                </span>
              </span>
            ) : (
              ""
            )}
          </p>
        )}
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-lg text-muted-foreground">
            No projects found matching your criteria.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Button
              className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white"
              onClick={() => {
                setActiveFilter("All");
                setActiveComplexity("All");
                applyFilters("All", "All", searchTerm);
              }}
            >
              Reset Filters
            </Button>
            {searchTerm && (
              <Button
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-500 dark:text-emerald-500 dark:hover:bg-emerald-950/50"
                onClick={() => {
                  setSearchTerm("");
                  applyFilters(activeFilter, activeComplexity, "");
                }}
              >
                Clear Search
              </Button>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}
