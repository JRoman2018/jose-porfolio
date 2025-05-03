import React, {useState, useContext} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  const [achievementsToShow, setAchievementsToShow] = useState(5);
  const initialCount = 5;

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
            {achievementSection.achievementsCards
              .slice(0, achievementsToShow)
              .map((card, i) => {
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
              })}
          </div>
          <div className="show-button-container">
            {achievementSection.achievementsCards.length > initialCount && (
              <span
                className={isDark ? "dark-mode achivement-tag" : "achivement-tag"} // You can style this button
                onClick={() =>
                  setAchievementsToShow(
                    achievementSection.achievementsCards.length
                  )
                }
              >
                {achievementsToShow ===
                achievementSection.achievementsCards.length
                  ? "Show Less"
                  : "Show More"}
              </span>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
