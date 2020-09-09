import React from "react";
import "./section.scss";

export default function Section(props) {
  return (
    <div className="section">
      <div className="background">
        <div className="description">
          <span className="h1">{props.H1Text}</span>
          <span className="h2">{props.H2Text}</span>
          <button className="btn-replay">
            <span className="inner-text">{props.BtnReplay}</span>
          </button>
        </div>
      </div>
      <div className="section-inner"></div>
    </div>
  );
}
