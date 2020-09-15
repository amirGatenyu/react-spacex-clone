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
        <ul>
          <li>
            <a href="#">falcon 9</a>
            <hr />
          </li>

          <li>
            <a href="#">Falcon Heavy</a>
            <hr />
          </li>

          <li>
            <a href="#">dragon</a>
            <hr />
          </li>

          <li>
            <a href="#">starship</a>
            <hr />
          </li>

          <li>
            <a href="#">human spacelight</a>
            <hr />
          </li>
          <li>
            <a href="#">rideshare</a>
            <hr />
          </li>

          <li>
            <a href="#">mission</a>
            <hr />
          </li>

          <li>
            <a href="#">launches</a>
            <hr />
          </li>

          <li>
            <a href="#">careers</a>
            <hr />
          </li>

          <li>
            <a href="#">updates</a>
            <hr />
          </li>

          <li>
            <a href="#">shop</a>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
}
