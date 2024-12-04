import React, { useState } from "react";

const DermatoglyphicsMultipleIntelligenceOverviewPanel = ({data,handleFifthCompHeadingChange,handleFifthCopmTextChange}) => {
  return (
    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 p-8">
      {data.map((section) => (
        <div
          key={section.id}
          className={`${section.bgColor} p-8 flex-1 lg:px-20`}
        >
          <input
            type="text"
            className="text-2xl lg:text-3xl font-bold text-center mb-3 bg-white heading-font rounded-lg p-2 text-[#022F46] block w-full"
            value={section.heading}
            onChange={(e) => handleFifthCompHeadingChange(section.id, e.target.value)}
            style={{ fontWeight: "600" }}
          />

          <textarea
            className={`w-full bg-white p-4 rounded-lg resize-none shadow-md focus:outline-none focus:ring-2 ${section.inputStyle}`}
            rows="15"
            value={section.text}
            onChange={(e) => handleFifthCopmTextChange(section.id, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default DermatoglyphicsMultipleIntelligenceOverviewPanel;
