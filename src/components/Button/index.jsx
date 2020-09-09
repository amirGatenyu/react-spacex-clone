import React from "react";
import { Link } from "react-router-dom";
import "./button.scss";

export default function index(props) {
  return (
    <React.Fragment>
      <a href={props.externalLink}>
        <button onClick={props.onClick}>{props.text}</button>
      </a>
    </React.Fragment>
  );
}
