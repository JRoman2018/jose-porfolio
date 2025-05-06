import React, {useState, useContext} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

const MAX_VISIBLE = 5;

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  const [expanded, setExpanded] = useState(false);
  const hasMore = achievementSection.achievementsCards.length > MAX_VISIBLE;

  const visible = expanded
    ? achievementSection.achievementsCards
    : achievementSection.achievementsCards.slice(0, MAX_VISIBLE);

  if (!achievementSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {achievementSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            {visible.length === 0 ? (
              <p className="no-projects-message">No achivement found.</p>
            ) : (
              visible.map((card, i) => {
                return (
                  <AchievementCard
                    key={i}
                    isDark={isDark}
                    cardInfo={{
                      title: card.title,
                      description: card.subtitle,
                      image: card.image,
                      imageAlt: card.imageAlt,
                      footer: card.footerLink
                    }}
                  />
                );
              })
            )}
          </div>
          <div className="show-button-container">
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
          </div>
        </div>
      </div>
    </Fade>
  );
}
