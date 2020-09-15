import React from "react";
import "./side-menu.scss";

export default function SideMenu(props) {
  return (
    <div
      className={
        props.open ? "side-menu-container open" : "side-menu-container"
      }
    >
      <div className="inner-side-menu">
        <a href="#">falcon 9</a>
        <hr />
        <a href="#">Falcon Heavy</a>
        <hr />
        <a href="#">dragon</a>
        <hr />
        <a href="#">starship</a>
        <hr />
        <a href="#">human spacelight</a>
        <hr />
        <a href="#">rideshare</a>
        <hr />
        <a href="#">mission</a>
        <hr />
        <a href="#">launches</a>
        <hr />
        <a href="#">careers</a>
        <hr />
        <a href="#">updates</a>
        <hr />
        <a href="#">shop</a>
        <hr />
      </div>
      {/* <div
        className={
          props.close ? "side-menu-container close" : "side-menu-container"
        }
      >
        <div className="inner-side-menu">
          <a href="#">falcon 9</a>
          <hr />
          <a href="#">falcon 9</a>
          <hr />
          <a href="#">falcon 9</a>
          <hr />
          <a href="#">falcon 9</a>
          <hr />
          <a href="#">falcon 9</a>
          <hr />
          <a href="#">falcon 9</a>
          <hr />
          <a href="#">falcon 9</a>
          <hr />
          <a href="#">falcon 9</a>
          <hr />
          <a href="#">falcon 9</a>
          <hr />
          <a href="#">falcon 9</a>
          <hr />
          <a href="#">falcon 9</a>
          <hr />
        </div>
      </div> */}
    </div>
  );
}
