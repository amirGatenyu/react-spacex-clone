import React from "react";
import Button from "../Button";
import "./section.scss";

export default function Section(props) {
  return (
    <div className="section">
      <div
        className="background"
        style={{ backgroundImage: `url("${props.backgroundImage}")` }}
      >
        <div className="section-inner">
          <div className="inner-right-bottom">
            <div className="section-eyebrow-header">{props.eyebrowText}</div>
            <div className="section-header">{props.headerText}</div>
            <Button
              text="Replay"
              externalLink="https://www.spacex.com/launches/"
            />
          </div>
        </div>
      </div>
      <div className="section-inner"></div>
    </div>
  );
}
