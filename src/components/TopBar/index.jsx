import React, { useState } from "react";
import { Turn } from "hamburger-react";
import { ReactComponent as Logo } from "../../assets/icons/spacex-logo.svg";
import SideMenu from "../SideMenu";
import DarkenBackground from "../DarkenBackground";
import { Link } from "react-router-dom";
import "./top-bar.scss";

export default function TopBar() {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      {/* Top Bar Section */}
      <div className="top-bar-container">
        <div className="top-bar-space"></div>
        <div className="top-bar-inner">
          <Link to="/">
            <Logo />
          </Link>
          <Turn
            toggled={open}
            toggle={setOpen}
            direction="right"
            size={16}
            distance="sm"
            color="#fff"
            // className="humborger"
          />
          <div className="nav-desktop">
            <a href="#">falcon 9</a>
            <a href="#">falcon heavy</a>
            <a href="#">dragon</a>
            <a href="#">starship</a>
            <a href="#">human spaceflight</a>
            <a href="#">rideshare</a>
          </div>
        </div>
      </div>
      {/* SideMenuSection */}
      <SideMenu open={open} />
      <DarkenBackground open={open} />
    </React.Fragment>
  );
}
