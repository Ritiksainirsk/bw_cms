import React from "react";

const DermatoglyphicsMultipleIntelligenceOverviewPanel = ({ data, handleInputChange }) => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <input
        type="text"
        className="text-3xl font-bold text-center w-full mb-6"
        value={data?.title || ""}
        onChange={(e) => handleInputChange(data.id, "title", e.target.value)}
      />
      <input
        type="text"
        className="text-center text-gray-600 w-full mb-12"
        value={data?.description || ""}
        onChange={(e) => handleInputChange(data.id, "description", e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data?.cards?.map((feature) => (
          <div
            key={feature.id}
            className="bg-gray-100 p-6 rounded-lg shadow-lg space-y-4"
          >
            <input
              type="text"
              value={feature.title || ""}
              onChange={(e) => handleInputChange(data.id, "cards", {
                cardId: feature.id,
                key: "title",
                cardValue: e.target.value
              })}
              className="text-xl font-bold bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full"
            />
            <textarea
              value={feature.description || ""}
              onChange={(e) => handleInputChange(data.id, "cards", {
                cardId: feature.id,
                key: "description",
                cardValue: e.target.value
              })}
              className="bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full resize-none h-24"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DermatoglyphicsMultipleIntelligenceOverviewPanel;