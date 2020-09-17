import React from "react";
import Section from "../../components/Section";
import useWindowDimensions from "../../hooks/useWindowDimensions";

// Mobile Images
import StarlinkBackgroundMobile from "../../assets/images/mobile/starlink_11_mobile.webp";
import Saoc from "../../assets/images/mobile/saocom1b_mobile.webp";
import Splash from "../../assets/images/mobile/splashdown_mobile.webp";
import StarShip from "../../assets/images/mobile/starshipliftoff_mobile1.webp";
import ReturningHuman from "../../assets/images/mobile/home_demo2_mobile.webp";
import IssDocking from "../../assets/images/mobile/iss_docking_sim.webp";
import NasaSelects from "../../assets/images/mobile/home_moon_mobile.webp";
import Footer from "../../components/Footer";

// Desktop Images
import StarlinkBackgroundDesktop from "../../assets/images/desktop/starlink_11_dekstop.webp";

import "./home.scss";

export default function Home(props) {
  // Get width and height of device
  const { height, width } = useWindowDimensions();
  return (
    <div className="home-container-view">
      <Section
        eyebrowText="Recent lunch"
        headerText="Starlink Mission"
        // based on device width, send different background props
        backgroundImage={
          width > 768 ? StarlinkBackgroundDesktop : StarlinkBackgroundMobile
        }
        text="replay"
        alignRight={true}
      />
      <Section
        eyebrowText="Recent lunch"
        headerText="SAOCOM 1B Mission"
        backgroundImage={Saoc}
        text="replay"
      />
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
        headerText="Crew Dragon Docking Simulator"
        image={IssDocking}
        description="Crew Dragon is designed to autonomously dock and undock with the International Space Station. However, the crew can take manual control of the spacecraft if necessary."
        text="try it"
      />
      <Section
        starShipLanding="05/01/20"
        headerText="NASA SELECTS LUNAR OPTIMIZED STARSHIP"
        description="NASA selected SpaceX to develop a lunar optimized Starship to transport crew between lunar orbit and the surface of the Moon as part of NASA’s Artemis program."
        imageBottom={NasaSelects}
        text="learn more"
        belowImageSection={true}
      />
      <Footer />
    </div>
  );
}
