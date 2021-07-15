import { useState, useEffect } from "react";
import { SingleStat } from "./components/SingleStat";
import earth from "./assets/planet-earth.svg";
import jupiter from "./assets/planet-jupiter.svg";
import mars from "./assets/planet-mars.svg";
import mercury from "./assets/planet-mercury.svg";
import saturn from "./assets/planet-saturn.svg";
import venus from "./assets/planet-venus.svg";
import neptune from "./assets/planet-neptune.svg";
import uranus from "./assets/planet-uranus.svg";

import earthInternal from "./assets/planet-earth-internal.svg";
import jupiterInternal from "./assets/planet-jupiter-internal.svg";
import marsInternal from "./assets/planet-mars-internal.svg";
import mercuryInternal from "./assets/planet-mercury-internal.svg";
import saturnInternal from "./assets/planet-saturn-internal.svg";
import venusInternal from "./assets/planet-venus-internal.svg";
import neptuneInternal from "./assets/planet-neptune-internal.svg";
import uranusInternal from "./assets/planet-uranus-internal.svg";

import earthGeo from "./assets/geology-earth.png";
import jupiterGeo from "./assets/geology-jupiter.png";
import marsGeo from "./assets/geology-mars.png";
import mercuryGeo from "./assets/geology-mercury.png";
import saturnGeo from "./assets/geology-saturn.png";
import venusGeo from "./assets/geology-venus.png";
import neptuneGeo from "./assets/geology-neptune.png";
import uranusGeo from "./assets/geology-uranus.png";

import { Description } from "./components/Description";
import { SubMenu } from "./components/SubMenu";
import { Img } from "./components/Img";
import { Header } from "./components/Header";
import { SubMenuDesktop } from "./components/SubMenuDesktop";

function App() {
  const svgArr = [
    { mercury, mercuryInternal, mercuryGeo, color: "mercury" },
    { venus, venusInternal, venusGeo, color: "venus" },
    { earth, earthInternal, earthGeo, color: "earth" },
    { mars, marsInternal, marsGeo, color: "mars" },
    { jupiter, jupiterInternal, jupiterGeo, color: "jupiter" },
    { saturn, saturnInternal, saturnGeo, color: "saturn" },
    { uranus, uranusInternal, uranusGeo, color: "uranus" },
    { neptune, neptuneInternal, neptuneGeo, color: "neptune" },
  ];

  const subMenuTitleArr = ["overview", "structure", "surface"];
  const subMenuTitleDesktopArr = [
    "overview",
    "internal structure",
    "surface geology",
  ];

  const [planetIndex, setPlanetIndex] = useState(2);
  const [subMenuIndex, setSubMenuIndex] = useState(0);
  const [showMenu, setShowMenu] = useState(true);
  const data = require("./data.json");
  const currentPlanetData = data[planetIndex];
  const currentPlanetTextArr = [
    currentPlanetData.overview.content,
    currentPlanetData.structure.content,
    currentPlanetData.geology.content,
  ];
  const currentPlanetSourceArr = [
    currentPlanetData.overview.source,
    currentPlanetData.structure.source,
    currentPlanetData.geology.source,
  ];
  const currentPlanetName = data[planetIndex].name.toLowerCase();

  const planetNamesArr = data.map((item) => {
    return item.name;
  });

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="xl:pt-0 md:p-9 App font-antonio text-gray-50 p-5">
      {/* the planets - navicon */}

      <Header
        planetNamesArr={planetNamesArr}
        showMenu={showMenu}
        handleMenuClick={handleMenuClick}
        svgArr={svgArr}
        setPlanetIndex={setPlanetIndex}
        planetIndex={planetIndex}
      />
      {/* container */}
      <main className="xl:flex xl:mt-24">
        {/* Submenu for mobile*/}
        <ul className="md:hidden -mx-4 px-4 flex justify-between  uppercase tracking-widest font-spartan font-semibold text-1xs  border-b border-gray-700">
          {subMenuTitleArr.map((item, index) => {
            return (
              <SubMenu
                title={item}
                key={index}
                setSubMenuIndex={setSubMenuIndex}
                subMenuIndex={subMenuIndex}
                currentPlanetName={currentPlanetName}
                index={index}
              />
            );
          })}
        </ul>
        {/* img */}
        <Img
          planetIndex={planetIndex}
          currentPlanetName={currentPlanetName}
          currentPlanetData={currentPlanetData}
          svgArr={svgArr}
          subMenuIndex={subMenuIndex}
        />
        {/* container for desc/submenu tablet/desktop */}
        <div className="md:flex xl:flex-col h-72 xl:p-10 xl:pl-0 xl:mt-4">
          {/* planettitle - p - source*/}
          <Description
            name={currentPlanetData.name}
            content={currentPlanetTextArr[subMenuIndex]}
            source={currentPlanetSourceArr[subMenuIndex]}
          />
          {/* submenu for tablet/desktop */}

          <SubMenuDesktop
            subMenuTitleDesktopArr={subMenuTitleDesktopArr}
            setSubMenuIndex={setSubMenuIndex}
            subMenuIndex={subMenuIndex}
            currentPlanetName={currentPlanetName}
          />
        </div>
      </main>
      {/* stats */}
      <div className="xl:px-6 xl:pt-20 md:flex-row md:justify-between flex flex-col ">
        <SingleStat title="rotation time" value={currentPlanetData.rotation} />
        <SingleStat
          title="revolution time"
          value={currentPlanetData.revolution}
        />
        <SingleStat title="radius" value={currentPlanetData.radius} />
        <SingleStat title="temperature" value={currentPlanetData.temperature} />
      </div>
    </div>
  );
}

export default App;
