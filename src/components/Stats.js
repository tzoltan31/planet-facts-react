import React from "react";
import { SingleStat } from "./SingleStat";

export const Stats = ({ currentPlanetData }) => {
  const titles = ["rotation time", "revolution time", "radius", "temperature"];
  const values = [
    currentPlanetData.rotation,
    currentPlanetData.revolution,
    currentPlanetData.radius,
    currentPlanetData.temperature,
  ];
  return (
    <section className="xl:px-6 xl:pt-0 md:pt-10 md:flex-row md:justify-between flex flex-col ">
      {values.map((item, i) => {
        return (
          <SingleStat key={i} title={titles[i]} value={values[i]}></SingleStat>
        );
      })}
    </section>
  );
};
