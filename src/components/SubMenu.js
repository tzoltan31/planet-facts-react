import React from "react";

export function SubMenu({
  title,
  currentPlanetName,
  index,
  subMenuIndex,
  setSubMenuIndex,
}) {
  return (
    <div className="md:flex-grow md:flex md:justify-center md:items-center ">
      <div
        className={`md:border-0 md:flex-grow ${
          subMenuIndex === index
            ? ` py-5 px-1 border-b-4 border-${currentPlanetName} -mb-0.5 hover:text-white cursor-pointer`
            : ` md:border-0 py-5 px-1 text-greylight hover:text-white cursor-pointer`
        }`}
        onClick={() => {
          setSubMenuIndex(index);
        }}
      >
        {title}
      </div>
    </div>
  );
}

/* for Tailwind

bg-mercury;
bg-venus;
bg-earth;
bg-mars;
bg-jupiter;
bg-saturn;
bg-uranus;
bg-neptune;
bg-background;
bg-greydark;
bg-greylight;

border-mercury;
border-venus;
border-earth;
border-mars;
border-jupiter;
border-saturn;
border-uranus;
border-neptune;
border-background;
border-greydark;
border-greylight;

text-mercury;
text-venus;
text-earth;
text-mars;
text-jupiter;
text-saturn;
text-uranus;
text-neptune;
text-background;
text-greydark;
text-greylight; */
