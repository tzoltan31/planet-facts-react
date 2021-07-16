import React from "react";
import { ImArrowUpRight2 } from "react-icons/im";

export function Description({ name, content, source }) {
  return (
    <div className="xl:w-full md:w-3/5 md:pr-9">
      <h1 className="xl:text-6xl md:text-5xl md:text-left uppercase text-center font-medium text-4xl pb-6">
        {name}
      </h1>
      <p className="xl:h-40 xl:text-base md:px-0 md:text-left text-xs font-spartan leading-6 px-3 text-center">
        {content}
      </p>
      <div className="md:py-9 md:justify-start flex justify-center items-center py-5">
        <span className="xl:text-xl text-gray-500 font-spartan tracking-tighter text-sm font-medium">
          Source :&nbsp;
        </span>
        <a
          href={source}
          className="xl:text-lg text-gray-400 border-b border-gray-700 text-sm"
        >
          Wikipedia&nbsp;
        </a>
        <ImArrowUpRight2
          className="inline-block bg-gray-400 rounded-sm"
          color="black"
          size="11"
        />
      </div>
    </div>
  );
}
