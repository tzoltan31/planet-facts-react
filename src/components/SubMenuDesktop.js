import React from "react";

export function SubMenuDesktop({
  subMenuTitleDesktopArr,
  subMenuIndex,
  setSubMenuIndex,
  currentPlanetName,
}) {
  return (
    <div className="xl:w-full md:flex justify-center font-spartan tracking-widest font-semibold text-xs hidden uppercase flex-col w-2/5">
      {subMenuTitleDesktopArr.map((item, index) => {
        return (
          <div
            className={
              subMenuIndex === index
                ? `xl:tracking-widest xl:text-base xl:pb-3 xl:pt-4 pb-2 pt-3 mb-3 border border-greydark cursor-pointer bg-${currentPlanetName}`
                : `xl:tracking-widest xl:text-base xl:pb-3 xl:pt-4 pb-2 pt-3 mb-3 border border-greydark hover:bg-greydark cursor-pointer`
            }
            onClick={() => setSubMenuIndex(index)}
            key={index}
          >
            <span className="px-4 text-greylight">{`0${index + 1} `}</span>
            {item}
          </div>
        );
      })}
    </div>
  );
}
