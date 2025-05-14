"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { Project } from "@/app/types";
import { projects } from "@/app/data/projects";
import { ProjectSearch } from "@/components/project-search";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "./project-card";

export function ProjectFilter() {
  // Changed default complexity to "Advanced"
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [activeComplexity, setActiveComplexity] = useState<string>("Advanced");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [batchSize, setBatchSize] = useState(6);

  // Extract all unique tags from projects - memoized to prevent recalculation
  const allTags = useMemo(() => {
    return [
      "All",
      ...Array.from(new Set(projects.flatMap((project) => project.tags))),
    ];
  }, []);

  // Complexity levels
  const complexityLevels = ["All", "Beginner", "Intermediate", "Advanced"];

  // Memoize the filter function to prevent unnecessary recalculations
  const applyFilters = useCallback(
    (tag: string, complexity: string, term: string) => {
      setIsLoading(true);

      // Use requestAnimationFrame to prevent UI blocking during filtering
      requestAnimationFrame(() => {
        let filtered = [...projects]; // Create a new array to avoid mutation

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
              project.tags.some((tag) =>
                tag.toLowerCase().includes(searchLower)
              )
          );
        }

        setFilteredProjects(filtered);
        // Only show first batch initially
        setVisibleProjects(filtered.slice(0, batchSize));
        setIsLoading(false);
      });
    },
    [batchSize]
  );

  // Initialize projects on first render - now filtering for Advanced projects by default
  useEffect(() => {
    if (isInitialRender) {
      // Filter for Advanced projects on initial load
      const advancedProjects = projects.filter(
        (project) => project.complexity === "Advanced"
      );
      setFilteredProjects(advancedProjects);
      setVisibleProjects(advancedProjects.slice(0, batchSize));
      setIsInitialRender(false);
    }
  }, [isInitialRender, batchSize]);

  // Load more projects when user scrolls to bottom
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 500
      ) {
        if (visibleProjects.length < filteredProjects.length) {
          setVisibleProjects((prev) => [
            ...prev,
            ...filteredProjects.slice(prev.length, prev.length + batchSize),
          ]);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [filteredProjects, visibleProjects, batchSize]);

  const handleFilterClick = useCallback(
    (tag: string) => {
      setActiveFilter(tag);
      applyFilters(tag, activeComplexity, searchTerm);
    },
    [activeComplexity, searchTerm, applyFilters]
  );

  const handleComplexityChange = useCallback(
    (complexity: string) => {
      setActiveComplexity(complexity);
      applyFilters(activeFilter, complexity, searchTerm);
    },
    [activeFilter, searchTerm, applyFilters]
  );

  const handleSearch = useCallback(
    (term: string) => {
      setSearchTerm(term);
      applyFilters(activeFilter, activeComplexity, term);
    },
    [activeFilter, activeComplexity, applyFilters]
  );

  // Handle manual load more
  const handleLoadMore = () => {
    setVisibleProjects((prev) => [
      ...prev,
      ...filteredProjects.slice(prev.length, prev.length + batchSize),
    ]);
  };

  // Handle "View All" button click
  const handleViewAll = () => {
    setActiveComplexity("All");
    applyFilters(activeFilter, "All", searchTerm);
  };

  return (
    <div>
      {/* Search */}
      <ProjectSearch onSearch={handleSearch} />

      {/* Complexity Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex justify-center mb-8"
      >
        <Tabs
          defaultValue="Advanced" // Set default value to Advanced
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
        transition={{ duration: 0.3 }}
        className="mb-12 overflow-x-auto pb-2"
      >
        <div className="flex flex-wrap justify-center gap-2 w-full">
          {allTags.map((tag) => (
            <motion.button
              key={tag}
              whileHover={{ y: -5 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === tag
                  ? "bg-emerald-600 text-white dark:bg-emerald-500"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
              onClick={() => handleFilterClick(tag)}
            >
              {tag}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Project Count with View All button when showing only Advanced */}
      <motion.div
        key={`count-${filteredProjects.length}-${activeComplexity}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center mb-8"
      >
        <div className="text-muted-foreground">
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
        </div>

        {/* View All button when only showing Advanced projects */}
        {activeComplexity === "Advanced" && (
          <Button
            onClick={handleViewAll}
            variant="outline"
            className="mt-4 border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-500 dark:text-emerald-500 dark:hover:bg-emerald-950/50"
          >
            View All Projects
          </Button>
        )}
      </motion.div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center mb-8">
          <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Load More Button */}
      {!isLoading && visibleProjects.length < filteredProjects.length && (
        <div className="flex justify-center mt-8 mb-8">
          <Button
            onClick={handleLoadMore}
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            Load More ({filteredProjects.length - visibleProjects.length}{" "}
            remaining)
          </Button>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && filteredProjects.length === 0 && (
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
