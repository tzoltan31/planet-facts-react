import earth from "../assets/planet-earth.svg";
import jupiter from "../assets/planet-jupiter.svg";
import mars from "../assets/planet-mars.svg";
import mercury from "../assets/planet-mercury.svg";
import saturn from "../assets/planet-saturn.svg";
import venus from "../assets/planet-venus.svg";
import neptune from "../assets/planet-neptune.svg";
import uranus from "../assets/planet-uranus.svg";

import earthInternal from "../assets/planet-earth-internal.svg";
import jupiterInternal from "../assets/planet-jupiter-internal.svg";
import marsInternal from "../assets/planet-mars-internal.svg";
import mercuryInternal from "../assets/planet-mercury-internal.svg";
import saturnInternal from "../assets/planet-saturn-internal.svg";
import venusInternal from "../assets/planet-venus-internal.svg";
import neptuneInternal from "../assets/planet-neptune-internal.svg";
import uranusInternal from "../assets/planet-uranus-internal.svg";

import earthGeo from "../assets/geology-earth.png";
import jupiterGeo from "../assets/geology-jupiter.png";
import marsGeo from "../assets/geology-mars.png";
import mercuryGeo from "../assets/geology-mercury.png";
import saturnGeo from "../assets/geology-saturn.png";
import venusGeo from "../assets/geology-venus.png";
import neptuneGeo from "../assets/geology-neptune.png";
import uranusGeo from "../assets/geology-uranus.png";

export const data = require("./data.json");

export const svgArr = [
  { mercury, mercuryInternal, mercuryGeo, color: "mercury" },
  { venus, venusInternal, venusGeo, color: "venus" },
  { earth, earthInternal, earthGeo, color: "earth" },
  { mars, marsInternal, marsGeo, color: "mars" },
  { jupiter, jupiterInternal, jupiterGeo, color: "jupiter" },
  { saturn, saturnInternal, saturnGeo, color: "saturn" },
  { uranus, uranusInternal, uranusGeo, color: "uranus" },
  { neptune, neptuneInternal, neptuneGeo, color: "neptune" },
];

export const contentImgArr = [
  earth,
  jupiter,
  mars,
  mercury,
  saturn,
  venus,
  neptune,
  uranus,
];

export const geoImgArr = [
  earthGeo,
  jupiterGeo,
  marsGeo,
  mercuryGeo,
  saturnGeo,
  venusGeo,
  neptuneGeo,
  uranusGeo,
];

export const surfaceImgArr = [
  earthInternal,
  jupiterInternal,
  marsInternal,
  mercuryInternal,
  saturnInternal,
  venusInternal,
  neptuneInternal,
  uranusInternal,
];

export const subMenuTitleArr = ["overview", "structure", "surface"];
export const subMenuTitleDesktopArr = [
  "overview",
  "internal structure",
  "surface geology",
];
