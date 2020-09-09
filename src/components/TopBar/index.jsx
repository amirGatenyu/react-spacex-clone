import React from "react";
import { Turn as Hamburger, Turn } from "hamburger-react";
import { ReactComponent as Logo } from "../../assets/icons/spacex-logo.svg";
import "./top-bar.scss";

export default function TopBar() {
  return (
    <div className="top-bar-container">
      <div className="top-bar-space"></div>
      <div className="top-bar-inner">
        <a href="">
          <Logo />
        </a>
        <Turn direction="right" size={16} distance="sm" color="#fff" />
      </div>
    </div>
  );
}
