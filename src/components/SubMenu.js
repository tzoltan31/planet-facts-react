import React from "react";

export function SubMenu({
  title,
  currentPlanetName,
  index,
  subMenuIndex,
  setSubMenuIndex,
}) {
  return (
    <li className="md:flex-grow md:flex md:justify-center md:items-center ">
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
    </li>
  );
}
