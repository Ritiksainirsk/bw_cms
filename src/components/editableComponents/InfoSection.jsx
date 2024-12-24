import React, { useState } from "react";

const InfoSection = ({ data }) => {
  console.log(data);

  return (
    <div className="bg-blue-100 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.cards.map((section) => (
          <div
            key={section.id}
            className="bg-white p-6 rounded-lg shadow-md space-y-4"
          >
            <input
              type="text"
              value={section.heading}
              onChange={(e) =>
                handleInputChange(section.id, "heading", e.target.value)
              }
              className="w-full text-xl font-bold bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <textarea
              value={section.text}
              onChange={(e) =>
                handleInputChange(section.id, "text", e.target.value)
              }
              className="w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 h-48 resize-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;



