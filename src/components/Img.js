import React from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

export function Img({
  svgArr,
  planetIndex,
  currentPlanetName,
  currentPlanetData,
  subMenuIndex,
}) {
  const { width } = useWindowDimensions();
  if (subMenuIndex === 1) {
    return (
      <div className="xl:w-4/6 xl:flex-shrink-0 flex justify-center items-center pb-20 pt-16">
        <img
          src={svgArr[planetIndex][currentPlanetName + `Internal`]}
          alt={currentPlanetName}
          height={(width * 0.26).toFixed(0)}
          width={(width * 0.26).toFixed(0)}
        />
      </div>
    );
  }
  if (subMenuIndex === 2) {
    return (
      <div className="xl:w-4/6 xl:flex-shrink-0 relative flex justify-center items-center pb-20 pt-16">
        <img
          src={svgArr[planetIndex][currentPlanetName]}
          alt={currentPlanetData.name}
          height={(width * 0.26).toFixed(0)}
          width={(width * 0.26).toFixed(0)}
        />
        <img
          className="absolute bottom-9 z-10"
          src={svgArr[planetIndex][currentPlanetName + `Geo`]}
          alt={currentPlanetData.name}
          height={(width * 0.1).toFixed(0)}
          width={(width * 0.1).toFixed(0)}
        />
      </div>
    );
  }

  return (
    <div className="xl:w-4/6 xl:flex-shrink-0 flex justify-center items-center pb-20 pt-16">
      <img
        src={svgArr[planetIndex][currentPlanetName]}
        alt={currentPlanetData.name}
        height={(width * 0.26).toFixed(0)}
        width={(width * 0.26).toFixed(0)}
      />
    </div>
  );
}
