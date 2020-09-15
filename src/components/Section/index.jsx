import React from "react";
import Button from "../Button";
import "./section.scss";

export default function Section(props) {
  return (
    <div className="section">
      <div
        className="background"
        style={{
          backgroundImage: `url("${props.backgroundImage}")`,
        }}
      >
        <div className="section-inner">
          <div
            className={
              props.alignRight ? "inner-right-bottom" : "inner-left-bottom"
            }
          >
            <div
              className="section-image"
              style={{
                backgroundImage: `url("${props.image}")`,
              }}
            ></div>
            {
              <div
                className="image-bottom"
                style={{
                  backgroundImage: `url("${props.imageBottom}")`,
                }}
              ></div>
            }
            <div className="section-eyebrow-header">{props.eyebrowText}</div>
            <div className="date">{props.starShipLanding}</div>
            <div className="section-header">{props.headerText}</div>
            <div className="description">{props.description}</div>
            <Button
              text={props.text}
              externalLink="https://www.spacex.com/launches/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
