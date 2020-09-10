import React, { useState } from "react";
import { Turn as Hamburger, Turn } from "hamburger-react";
import { ReactComponent as Logo } from "../../assets/icons/spacex-logo.svg";
import SideMenu from "../SideMenu";
import DarkenBackground from "../DarkenBackground";
import "./top-bar.scss";

export default function TopBar() {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      {/* Top Bar Section */}
      <div className="top-bar-container">
        <div className="top-bar-space"></div>
        <div className="top-bar-inner">
          <a href="">
            <Logo />
          </a>
          <Turn
            toggled={open}
            toggle={setOpen}
            direction="right"
            size={16}
            distance="sm"
            color="#fff"
          />
        </div>
      </div>
      {/* SideMenuSection */}
      <SideMenu open={open} />
      <DarkenBackground open={open} />
    </React.Fragment>
  );
}
