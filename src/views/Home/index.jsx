import React from "react";
import Section from "../../components/Section";
import StarlinkBackground from "../../assets/images/starlink_11_mobile.webp";
import Saoc from "../../assets/images/saocom1b_mobile.webp";
import Splash from "../../assets/images/splashdown_mobile.webp";
import StarShip from "../../assets/images/starshipliftoff_mobile1.webp";
import ReturningHuman from "../../assets/images/home_demo2_mobile.webp";
import IssDocking from "../../assets/images/iss_docking_sim.webp";
import NasaSelects from "../../assets/images/home_moon_mobile.webp";
import "./home.scss";

export default function Home(props) {
  return (
    <div className="home-container-view">
      <Section
        eyebrowText="Recent lunch"
        headerText="Starlink Mission"
        backgroundImage={StarlinkBackground}
        text="replay"
      />
      <div className="section-two">
        <Section
          eyebrowText="Recent lunch"
          headerText="SAOCOM 1B Mission"
          backgroundImage={Saoc}
          text="replay"
        />
      </div>
      <Section
        eyebrowText="Mission Complete"
        headerText="Crew Dragon Returns from Space Station"
        backgroundImage={Splash}
        text="replay"
      />
      <Section
        headerText="Starship Takes Flight"
        backgroundImage={StarShip}
        text="replay"
      />

      <Section
        headerText="Returning Human Spaceflight to the United States"
        backgroundImage={ReturningHuman}
        text="learn more"
      />
      <Section
        headerText="Crew Dragon Returns from Space Station"
        backgroundImage={IssDocking}
        description="Crew Dragon is designed to autonomously dock and undock with the International Space Station. However, the crew can take manual control of the spacecraft if necessary."
        text="try it"
      />
      <Section
        starShipLanding="05/01/20"
        headerText="NASA SELECTS LUNAR OPTIMIZED STARSHIP"
        description="NASA selected SpaceX to develop a lunar optimized Starship to transport crew between lunar orbit and the surface of the Moon as part of NASA’s Artemis program."
        backgroundImage={NasaSelects}
        text="learn more"
      />
    </div>
  );
}
