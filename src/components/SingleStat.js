import React from "react";

export function SingleStat({ title, value }) {
  return (
    <div className="xl:ml-7 xl:w-1/6 xl:flex-shrink-0 md:flex-grow md:mr-4 md:flex-col md:px-6 flex md:items-start justify-between items-center my-1 py-2 px-6 font-medium border border-gray-700 rounded-sm">
      <div className="xl:text-lg text-gray-500 text-xs uppercase tracking-widest">
        {title}
      </div>
      <div className="xl:text-4xl md:mt-2 md:text-2xl text-white uppercase text-lg">
        {value}
      </div>
    </div>
  );
}
