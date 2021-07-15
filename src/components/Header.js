import React from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineRight } from "react-icons/ai";

export function Header({
  showMenu,
  svgArr,
  handleMenuClick,
  setPlanetIndex,
  planetIndex,
  planetNamesArr,
}) {
  if (showMenu) {
    return (
      <>
        <header className="xl:flex items-start xl:border-b border-greydark">
          <div className="xl:pt-3 xl:m-0 xl:border-greydark xl:w-1/2 xl:items-start xl:justify-start md:justify-center md:border-0 border-b border-gray-700 pb-4 flex justify-between items-center">
            <h2 className=" uppercase font-medium tracking-tighter text-3xl">
              the planets
            </h2>
            <FiMenu
              size="2rem"
              className="cursor-pointer md:hidden"
              onClick={handleMenuClick}
            />
          </div>
          <nav className="mb-10 md:hidden">
            {planetNamesArr.map((item, index) => {
              return (
                <div
                  className={`cursor-pointer border-b  flex justify-between items-center py-3 hover:text-white  ${
                    planetIndex === index
                      ? `xl:pt-8 xl:border-b-0 xl:border-t-4 border-${svgArr[index].color} text-white`
                      : `xl:pt-8 border-gray-700 text-greylight`
                  }`}
                  onClick={() => {
                    setPlanetIndex(index);
                  }}
                  key={index}
                >
                  <div className="inline-block uppercase font-spartan text-xs font-semibold">
                    <div
                      className={`inline-block h-3 w-3 rounded-full mr-4 bg-${svgArr[index].color}`}
                    ></div>
                    {item}
                  </div>
                  <AiOutlineRight
                    className={`${
                      planetIndex === index
                        ? `text-${svgArr[index].color}`
                        : `text-gray-700`
                    }`}
                  />
                </div>
              );
            })}
          </nav>
          <nav className="hidden xl:mb-0 xl:border-b-0 xl:w-1/2 md:flex mb-10 border-b border-gray-700 flex-row justify-between">
            {planetNamesArr.map((item, index) => {
              return (
                <div
                  className={`cursor-pointer border-0 py-3 pb-6 hover:text-white  ${
                    planetIndex === index
                      ? `xl:pt-8 xl:border-b-0 xl:border-t-4 border-b-4 md:-mb-0.5 border-${svgArr[index].color} text-white`
                      : `xl:pt-8 border-gray-700 text-greylight`
                  }`}
                  onClick={() => {
                    setPlanetIndex(index);
                  }}
                  key={index}
                >
                  <div className="xl:text-sm uppercase font-spartan text-xs font-semibold">
                    {item}
                  </div>
                </div>
              );
            })}
          </nav>
        </header>
      </>
    );
  } else {
    return (
      <>
        <header className="xl:flex items-start xl:border-b border-greydark">
          <div className="xl:pt-3 xl:m-0 xl:border-greydark xl:w-1/2 xl:items-start xl:justify-end md:mb-4 md:justify-center md:flex-col md:border-0 border-b border-gray-700 pb-4 flex justify-between  items-center">
            <h2 className="uppercase font-medium tracking-tighter text-3xl">
              the planets
            </h2>
            <FiMenu
              size="2rem"
              className="cursor-pointer md:hidden"
              onClick={handleMenuClick}
            />
          </div>
          <nav className="hidden xl:mb-0 xl:border-b-0 xl:w-1/2 md:flex mb-10 border-b border-gray-700 flex-row justify-between">
            {planetNamesArr.map((item, index) => {
              return (
                <div
                  className={`cursor-pointer border-0 py-3 pb-6 hover:text-white  ${
                    planetIndex === index
                      ? `xl:pt-8 xl:border-b-0 xl:border-t-4 border-b-4 md:-mb-0.5 border-${svgArr[index].color} text-white`
                      : `xl:pt-8 border-gray-700 text-greylight`
                  }`}
                  onClick={() => {
                    setPlanetIndex(index);
                  }}
                >
                  <div className="xl:text-sm uppercase font-spartan text-xs font-semibold">
                    {item}
                  </div>
                </div>
              );
            })}
          </nav>
        </header>
      </>
    );
  }
}
