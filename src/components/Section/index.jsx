import React from "react";
import Button from "../Button";
import "./section.scss";

export default function Section(props) {
  const RegularInnerSection = () => {
    return (
      <div className="section-inner">
        <div
          className={
            props.alignRight ? "inner-right-bottom" : "inner-left-bottom"
          }
        >
          {props.image ? (
            <div
              className="section-image"
              style={{
                backgroundImage: `url("${props.image}")`,
              }}
            ></div>
          ) : null}

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
    );
  };

  const BelowImageSection = () => {
    return (
      <div className="below-image-section">
        <div
          className={
            props.alignRight ? "inner-right-bottom" : "inner-left-bottom"
          }
        >
          {props.image ? (
            <div
              className="section-image"
              style={{
                backgroundImage: `url("${props.image}")`,
              }}
            ></div>
          ) : null}

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
    );
  };
  return (
    <div className="section">
      <div
        className="background"
        style={{
          backgroundImage: props.backgroundImage
            ? `url("${props.backgroundImage}")`
            : "none",
        }}
      >
        {props.imageBottom ? (
          <div
            className="image-bottom"
            style={{
              backgroundImage: `url("${props.imageBottom}")`,
            }}
          ></div>
        ) : null}
        {props.belowImageSection ? (
          <BelowImageSection />
        ) : (
          <RegularInnerSection />
        )}
      </div>
    </div>
  );
}
