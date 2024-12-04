import React, { useState } from "react";

const EditableCard = ({ title, description, imageUrl,link,handleThirdCompData,id }) => {
  

  // Function to handle image deletion
  const handleImageDelete = () => {
     // Set the image URL to null when deleting the image
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
        value={link}
        onChange={(e) =>
          handleThirdCompData(id,"link",e.target.value)
        }
        className="mt-8 p-2 w-full border border-gray-300 rounded-md text-center text-lg font-bold"
        placeholder="Link"
      />

      <h3 className="font-bold text-lg text-center mt-4">{title}</h3>

      {/* Editable Text Area */}
      <textarea
        value={description}
        onChange={(e) =>
          handleThirdCompData(id,"description",e.target.value)
        }
        className="mt-2 p-2 w-full border border-gray-300 rounded-md text-center text-gray-600"
        placeholder="Edit description"
        rows="3"
      />
    </div>
  );
};

const BenefitsForAllAges = ({data,handleThirdCompData,handleThirdCompTitle}) => {

  return (
    <div className="2xl:px-56 py-6 bg-gray-200">
      <div className="w-full flex justify-center ">
        <input
          type="text"
          value={data.title}
          onChange={(e) =>handleThirdCompTitle(e.target.value)}
          className="w-full max-w-3xl border border-gray-300 rounded-md text-center p-2 font-bold text-lg"
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {data.cards.map((card) => (
          <EditableCard
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            link={card.link}
            handleThirdCompData={handleThirdCompData}
            id={card.id}
          />
        ))}
      </div>
    </div>
  );
};

export default BenefitsForAllAges;
