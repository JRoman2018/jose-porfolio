import React, {useState, useRef, useEffect} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

const ExperienceCard = ({cardInfo, isDark}) => {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const descRef = useRef(null);
  const [descHeight, setDescHeight] = useState("auto");

  useEffect(() => {
    if (isExpanded && descRef.current) {
      setDescHeight(`${descRef.current.scrollHeight}px`);
    } else {
      setDescHeight("auto");
    }
  }, [isExpanded]);

  const getColorArrays = () => {
    if (imgRef.current) {
      try {
        const colorThief = new ColorThief();
        setColorArrays(colorThief.getColor(imgRef.current));
      } catch (error) {
        console.error("ColorThief error:", error);
        // Handle the error, e.g., set a default color
        setColorArrays([0, 0, 0]); // Black
      }
    }
  };

  const rgb = values => {
    return typeof values === "undefined" ? null : `rgb(${values.join(", ")})`;
  };

  const GetDescBullets = ({descBullets, isDark}) => {
    // Removed : React.FC<{ descBullets?: string[]; isDark: boolean }>
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div
        style={{background: cardInfo.bgColor ?? rgb(colorArrays)}}
        className="experience-banner"
      >
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={getColorArrays}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        {cardInfo.desc.length > 150 && (
          <span
            className={isDark ? "dark-mode experience-tag" : "experience-tag"}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? <>Show Less</> : <>Show More</>}
          </span>
        )}
        <div
          ref={descRef}
          className="relative overflow-hidden"
          style={{
            height: isExpanded ? descHeight : "2.4em",
            transition: "height 0.3s ease-out",
            overflow: "hidden"
          }}
        >
          <p
            className={
              isDark
                ? "subTitle experience-text-desc dark-mode-text"
                : "subTitle experience-text-desc"
            }
          >
            {cardInfo.desc}
          </p>

          <ul>
            <GetDescBullets
              descBullets={cardInfo.descBullets}
              isDark={isDark}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
