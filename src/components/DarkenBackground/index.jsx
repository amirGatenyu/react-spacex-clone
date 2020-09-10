import React from "react";
import "./darken-background.scss";

export default function DarkenBackground(props) {
  return <div className={props.open ? "darken-background" : null}></div>;
}
