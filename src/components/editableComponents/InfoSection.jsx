import React from "react";

const InfoSection = ({ data, handleInputChange }) => {

  // Handle input changes for a card
  const handleCardChange = (cardId, field, value) => {
    const updatedCards = data.cards.map(card => 
      card.id === cardId ? { ...card, [field]: value } : card
    );
    handleInputChange(data.id, "cards", updatedCards);
  };

  // Handle adding a new card
  const handleAddCard = () => {
    const newCard = {
      id: `card${data.cards.length + 1}`,
      heading: "",
      text: ""
    };
    handleInputChange(data.id, "cards", [...data.cards, newCard]);
  };

  return (
    <div className="bg-blue-100 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.cards.map((card) => (
          <div
            key={card.id}
            className="bg-white p-6 rounded-lg shadow-md space-y-4"
          >
            <input
              type="text"
              value={card.heading}
              onChange={(e) =>
                handleCardChange(card.id, "heading", e.target.value.trim())
              }
              className="w-full text-xl font-bold bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter heading"
            />
            <textarea
              value={card.text}
              onChange={(e) =>
                handleCardChange(card.id, "text", e.target.value.trim())
              }
              className="w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 h-48 resize-none"
              placeholder="Enter content"
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button
          onClick={handleAddCard}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add New Card
        </button>
      </div>
    </div>
  );
};

export default InfoSection;
