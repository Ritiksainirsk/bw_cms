import React from "react";

const EditableCard = ({ title, description, imageUrl, link, handleInputChange, id, componentId }) => {
  const handleImageDelete = () => {
    handleInputChange(componentId, "cards", {
      cardId: id,
      key: "imageUrl",
      cardValue: null
    });
  };

  return (
    <div className="max-w-xs bg-white rounded-lg shadow-md p-6 m-4 flex flex-col items-center">
      {/* Circular Image Section */}
      {imageUrl ? (
        <div className="relative">
          <img
            className="w-20 h-20 object-cover rounded-full"
            src={imageUrl}
            alt={title}
          />
          <button
            className="absolute bottom-[-30px] right-0 bg-red-500 text-white font-bold py-1 px-2 rounded-full m-2 text-xs"
            onClick={handleImageDelete}
          >
            Delete
          </button>
        </div>
      ) : (
        <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-gray-500 text-sm">Image Deleted</span>
        </div>
      )}

      {/* Editable Title Section */}
      <input
        type="text"
        value={link || ""}
        onChange={(e) =>
          handleInputChange(componentId, "cards", {
            cardId: id,
            key: "link",
            cardValue: e.target.value
          })
        }
        className="mt-8 p-2 w-full border border-gray-300 rounded-md text-center text-lg font-bold"
        placeholder="Link"
      />

      <input
        type="text"
        value={title || ""}
        onChange={(e) =>
          handleInputChange(componentId, "cards", {
            cardId: id,
            key: "title",
            cardValue: e.target.value
          })
        }
        className="mt-4 p-2 w-full border border-gray-300 rounded-md text-center text-lg font-bold"
        placeholder="Title"
      />

      {/* Editable Text Area */}
      <textarea
        value={description || ""}
        onChange={(e) =>
          handleInputChange(componentId, "cards", {
            cardId: id,
            key: "description",
            cardValue: e.target.value
          })
        }
        className="mt-2 p-2 w-full border border-gray-300 rounded-md text-center text-gray-600"
        placeholder="Edit description"
        rows="3"
      />
    </div>
  );
};

const BenefitsForAllAges = ({ data, handleInputChange }) => {
  return (
    <div className="2xl:px-56 py-6 bg-gray-200">
      <div className="w-full flex justify-center">
        <input
          type="text"
          value={data.title || ""}
          onChange={(e) => handleInputChange(data.id, "title", e.target.value)}
          className="w-full max-w-3xl border border-gray-300 rounded-md text-center p-2 font-bold text-lg"
          placeholder="Enter section title"
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {data.cards.map((card) => (
          <EditableCard
            key={card.id}
            {...card}
            componentId={data.id}
            handleInputChange={handleInputChange}
            id={card.id}
          />
        ))}
      </div>
    </div>
  );
};

export default BenefitsForAllAges;
