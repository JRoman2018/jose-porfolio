import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import "./ProjectCard.scss"; // Assuming SCSS is in same dir
import {contactInfo} from "../../portfolio";

function ProjectCard({
  title,
  description,
  technologies,
  medias,
  githubUrl,
  liveDemoUrl,
  requestDemo,
  onClickTech,
  isDark,
  size
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isVideo = url => url.match(/\.(mp4|webm|ogg)$/i);

  useEffect(() => {
    if (medias.length <= 1) return;
    if (!isVideo(medias[currentIndex])) {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % medias.length);
      }, 10000);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line
  }, [medias]);

  return (
    <article
      className={
        isDark
          ? "dark-mode project-card project-card-dark"
          : "project-card project-card-light"
      }
    >
      <div>
        {size && (
          <div className="badge-container">
            <div className={`project-size-badge ${size}`}>
              {size.charAt(0).toUpperCase() + size.slice(1)}
            </div>
          </div>
        )}
        <div className="project-image">
          {medias.length > 0 && (
            <>
              {isVideo(medias[currentIndex]) ? (
                <>
                  <div
                    className="video-wrapper"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <video
                      className="card-video"
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={medias[currentIndex]} type="video/mp4" />
                    </video>
                    <div className="video-overlay">🔍</div>
                  </div>
                  {isModalOpen && (
                    <div
                      className="modal-backdrop"
                      onClick={() => setIsModalOpen(false)}
                    >
                      <div
                        className="modal-content"
                        onClick={e => e.stopPropagation()}
                      >
                        <video
                          src={medias[currentIndex]}
                          autoPlay
                          controls
                          loop
                          muted
                          className="modal-video"
                        />
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <img
                  src={medias[currentIndex]}
                  alt={`${title} preview`}
                  className="card-image"
                />
              )}
            </>
          )}
        </div>

        {medias.length > 1 && (
          <div className="carousel-dots">
            {medias.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        )}
      </div>
      <div className="project-detail">
        <h3 className={isDark ? "dark-mode card-title" : "card-title"}>
          {title}
        </h3>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {description}
        </p>
      </div>
      <footer className="project-card-footer">
        {technologies.map((tech, i) => (
          <span
            onClick={() => onClickTech(tech)}
            key={i}
            className="project-tag"
          >
            {tech}
          </span>
        ))}
        <div className="project-card-links">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {liveDemoUrl && (
            <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          )}
          {requestDemo && (
            <a
              href={"mailto:" + contactInfo.email_address}
              rel="noopener noreferrer"
            >
              Request Demo
            </a>
          )}
        </div>
      </footer>
    </article>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  medias: PropTypes.arrayOf(PropTypes.string),
  githubUrl: PropTypes.string,
  liveDemoUrl: PropTypes.string,
  requestDemo: PropTypes.bool,
  onClickTech: PropTypes.func,
  isDark: PropTypes.bool.isRequired,
  size: PropTypes.string
};

export default ProjectCard;
