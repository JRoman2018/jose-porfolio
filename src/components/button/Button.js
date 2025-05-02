import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab}) {
  return (
    <div className={className}>
      <a className="talk-button mr" href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
}
