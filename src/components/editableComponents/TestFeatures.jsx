import React, { useState, useEffect } from "react";

export default function TestFeatures({data,handleForthCompData,handleFourthCompTitle,handleFourthCompDescription}) {
  
  return (
    <div className="bg-gray-200 py-5 mt-20 md:px-9">
      <div className="mb-16">
        {/* Editable Heading */}
        <input
          type="text"
          className="text-2xl lg:text-3xl font-bold text-center mb-3 mt-12 bg-white heading-font rounded-lg p-2 text-[#022F46] block w-full"
          value={data.title}
          onChange={(e) => handleFourthCompTitle(e.target.value)}
          style={{ fontWeight: "600" }}
        />

        {/* Editable Subtitle */}
        <input
          className="text-center mb-8 px-2 text-[16px] block w-full bg-white resize-none rounded-lg p-2"
          value={data.description}
          rows={2}
          onChange={(e) => handleFourthCompDescription(e.target.value)}
        />
        <div className="flex flex-wrap justify-center">
          {data.cards.map((feature, index) => (
            <DMITFeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              bgColor={feature.bgColor}
              onChange={handleForthCompData}
              id={feature.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const DMITFeatureCard = ({ title, description, icon, bgColor, onChange,id }) => {
  return (
    <div
      className={`relative bg-${bgColor}-500 rounded-lg p-6 m-4 flex flex-col items-center w-[450px]`}
    >
      <input
        type="text"
        className="text-xl lg:text-2xl font-bold bg-white w-full rounded-lg mb-2 heading-font text-center bg-transparent border-none outline-none"
        value={title}
        onChange={(e) => onChange(id,"title",e.target.value)}
      />
      <textarea
        className=" p-5 rounded-xl bg-white mb-10 bg-transparent border-none outline-none w-full resize-none"
        rows={10}
        value={description}
        onChange={(e) => onChange(id,"description", e.target.value)}
      />
      <div className="absolute left-20 bottom-[-25px]">
        <img
          src={icon}
          alt={title}
          className="w-20 h-20 rounded-full"
          width={120}
          height={120}
        />
      </div>
    </div>
  );
};
