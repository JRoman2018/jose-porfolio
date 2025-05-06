import React, {useContext, useState} from "react";
import "./FilterableProjectsSection.scss";
import ProjectCard from "../projectCard/ProjectCard";
import {bigProjects} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const MAX_VISIBLE = 3;

function FilterableProjectsSection() {
  const {isDark} = useContext(StyleContext);
  const [selectedTech, setSelectedTech] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const techOptions = [
    ...new Set(bigProjects.projects.flatMap(p => p.technologies))
  ];
  const sizeOptions = ["small", "medium", "large"]; // Size options

  const filtered = bigProjects.projects.filter(project => {
    const techMatch = selectedTech
      ? project.technologies.includes(selectedTech)
      : true;
    const sizeMatch = selectedSize ? project.size === selectedSize : true;
    return techMatch && sizeMatch;
  });

  const visible = expanded ? filtered : filtered.slice(0, MAX_VISIBLE);
  const hasMore = filtered.length > MAX_VISIBLE;

  const onClickTech = tech => {
    setSelectedTech(tech);
    setExpanded(false);
  };

  return (
    <section className="projects">
      <div className="projects__filters">
        {sizeOptions.map(size => (
          <button
            key={size}
            className={`${
              isDark ? "dark-mode" : ""
            } projects__filter-button ${size} ${
              selectedSize === size ? "active" : ""
            }`}
            onClick={() => {
              setSelectedSize(size);
              setExpanded(false);
            }}
          >
            {size.charAt(0).toUpperCase() + size.slice(1)}
          </button>
        ))}
      </div>

      <div className="projects__filters">
        <button
          className={`${isDark ? "dark-mode" : ""} projects__filter-button ${
            selectedTech === null ? "active" : ""
          }`}
          onClick={() => onClickTech(null)}
        >
          All
        </button>
        {techOptions.map(tech => (
          <button
            key={tech}
            className={`${isDark ? "dark-mode" : ""} projects__filter-button ${
              selectedTech === tech ? "active" : ""
            }`}
            onClick={() => onClickTech(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="projects-container fade-in" key={selectedTech || "all"}>
        {visible.length === 0 ? (
          <p className="no-projects-message">No projects found.</p>
        ) : (
          visible.map((project, i) => (
            <ProjectCard
              key={`${project.title}-${i}`}
              {...project}
              onClickTech={onClickTech}
              isDark={isDark}
            />
          ))
        )}
      </div>

      {hasMore && (
        <div className="projects__toggle">
          <button
            className="projects__toggle-button"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </section>
  );
}

export default FilterableProjectsSection;
