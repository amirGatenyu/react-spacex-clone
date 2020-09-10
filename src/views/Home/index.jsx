import React from "react";
import Section from "../../components/Section";
import StarlinkBackground from "../../assets/images/starlink_11_mobile.webp";
import "./home.scss";

export default function Home(props) {
  return (
    <div className="home-container-view">
      <Section
        eyebrowText="Recent lunch"
        headerText="Starlink Mission"
        backgroundImage={StarlinkBackground}
      />
      <Section
        eyebrowText="Recent lunch"
        headerText="Starlink Mission"
        backgroundImage={StarlinkBackground}
      />
      <Section
        eyebrowText="Recent lunch"
        headerText="Starlink Mission"
        backgroundImage={StarlinkBackground}
      />
    </div>
  );
}
