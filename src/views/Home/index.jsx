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
import SaocomDesktop from "../../assets/images/desktop/saocom1b_desktop.webp";
import SplashdownDesktop from "../../assets/images/desktop/splashdown_1.webp";
import StarShipDesktop from "../../assets/images/desktop/starshipliftoff_desktop1.webp";
import ReturnHomeDesktop from "../../assets/images/desktop/home_demo2.webp";
import NasaSelectsDesktop from "../../assets/images/desktop/home_moon.webp";
import "./home.scss";

export default function Home(props) {
  // Get width and height of device
  const { height, width } = useWindowDimensions();
  return (
    <div className="home-container-view">
      <Section
        eyebrowText={width > 768 ? "UPCOMING LAUNCH" : "Recent lunch"}
        headerText="Starlink Mission"
        // based on device width, send different background props
        backgroundImage={
          width > 768 ? StarlinkBackgroundDesktop : StarlinkBackgroundMobile
        }
        text={width > 768 ? "watch" : "replay"}
        alignRight={true}
      />
      <Section
        eyebrowText={"Recent lunch"}
        headerText="SAOCOM 1B Mission"
        backgroundImage={width > 768 ? SaocomDesktop : Saoc}
        text="replay"
      />
      <Section
        eyebrowText="Mission Complete"
        headerText="Crew Dragon Returns from Space Station"
        backgroundImage={width > 768 ? SplashdownDesktop : Splash}
        text="replay"
      />
      <Section
        headerText="Starship Takes Flight"
        backgroundImage={width > 768 ? StarShipDesktop : StarShip}
        text="replay"
      />

      <Section
        headerText="Returning Human Spaceflight to the United States"
        backgroundImage={width > 762 ? ReturnHomeDesktop : ReturningHuman}
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
        imageBottom={width > 768 ? NasaSelectsDesktop : NasaSelects}
        text="learn more"
        belowImageSection={true}
      />
      <Footer />
    </div>
  );
}
