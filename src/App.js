import { useState } from "react";

import { Description } from "./components/Description";
import { SubMenu } from "./components/SubMenu";
import { Img } from "./components/Img";
import { Header } from "./components/Header";
import { SubMenuDesktop } from "./components/SubMenuDesktop";
import { Stats } from "./components/Stats";

// img & content data
import {
  data,
  svgArr,
  subMenuTitleArr,
  subMenuTitleDesktopArr,
} from "./data/sources";

export function App() {
  const [planetIndex, setPlanetIndex] = useState(0);
  const [subMenuIndex, setSubMenuIndex] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

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
      <main className="xl:flex xl:mt-14 ">
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
        <div className="md:flex xl:flex-col xl:h-auto h-60 xl:p-10 xl:pl-0 xl:mt-4">
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
      <Stats currentPlanetData={currentPlanetData} />
    </div>
  );
}
