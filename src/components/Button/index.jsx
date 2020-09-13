import React from "react";
import "./button.scss";

export default function index(props) {
  return (
    <React.Fragment>
      <a href={props.externalLink}>
        <button className="primery-btn" onClick={props.onClick}>
          {props.text}
        </button>
      </a>
    </React.Fragment>
  );
}
