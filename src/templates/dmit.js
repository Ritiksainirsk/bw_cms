"use client";

import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import DmitOverviewSection from "@/components/editableComponents/DmitOverviewSection";
import BenefitsForAllAges from "@/components/editableComponents/BenefitsForAllAges";
import TestFeatures from "@/components/editableComponents/TestFeatures";
import DermatoglyphicsMultipleIntelligenceOverviewPanel from "@/components/editableComponents/DermatoglyphicsMultipleIntelligenceOverviewPanel";
import BrainAndFingerprintPanel from "@/components/editableComponents/BrainAndFingerprintPanel";
import Editorr from "@/components/editableComponents/Editor";
// import { usePathname } from "next/navigation";
import {
  component1,
  component2,
  component3,
  component4,
  component5,
  component6,
} from "@/config/jsonfiles/theme1";

export default function Dmit() {
  // State for each component
  const [firstCompData, setFirstCompData] = useState(component1);
  const [secondCompData, setSecondCompData] = useState(component2);

  const [thirdCompData, setThirdCompData] = useState(component3);
  const [fourthCompData, setFourthCompData] = useState(component4);
  const [fifthCompData, setFifthCompData] = useState(component5);
  const [sixthCompData, setSixthCompData] = useState(component6);

  // Generic handler for updating any component's field
  const handleComponentUpdate = (setter) => (field, value) => {
    setter((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Generic handler for updating cards in any component
  const handleCardUpdate = (setter, cards) => (cardId, field, value) => {
    setter((prev) => ({
      ...prev,
      cards: prev.cards.map((card) =>
        card.id === cardId ? { ...card, [field]: value } : card
      ),
    }));
  };

  // Handler for third component
  const handleThirdCompData = (id, field, value) => {
    handleCardUpdate(setThirdCompData, thirdCompData.cards)(id, field, value);
  };

  const handleThirdCompTitle = (newTitle) => {
    handleComponentUpdate(setThirdCompData)("title", newTitle);
  };

  // Handler for fourth component
  const handleForthCompData = (id, field, value) => {
    handleCardUpdate(setFourthCompData, fourthCompData.cards)(id, field, value);
  };

  const handleFourthCompTitle = (newTitle) => {
    handleComponentUpdate(setFourthCompData)("title", newTitle);
  };

  const handleFourthCompDescription = (newDescription) => {
    handleComponentUpdate(setFourthCompData)("description", newDescription);
  };

  // Handler for fifth component
  const handleFifthCompHeadingChange = (id, newHeading) => {
    setFifthCompData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, heading: newHeading } : item
      )
    );
  };

  const handleFifthCompTextChange = (id, newText) => {
    setFifthCompData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, text: newText } : item))
    );
  };

  // Handler for sixth component
  const handleSixthCompDataChanger = (name, value) => {
    handleComponentUpdate(setSixthCompData)(name, value);
  };

  // Generic handler for first component
  const handleInputChange = (name, value) => {
    handleComponentUpdate(setFirstCompData)(name, value);
  };

  const handleSecondCompData = (name, value) => {
    handleComponentUpdate(setSecondCompData)(name, value);
  };

  return (
    <div>
      <div className="bg-blue-50 py-12 px-6 flex flex-col md:flex-row items-center mx-auto shadow-lg rounded-md">
        <div className=" pr-4 max-w-[1500px] mx-auto overflow-hidden">
          {/* Editable heading */}
          <div className="mb-10">
            <CKEditor
              editor={ClassicEditor}
              data={firstCompData.heading}
              onChange={(event, editor) => {
                const data = editor.getData();
                handleInputChange("heading", data);
              }}
            />
          </div>

          {/* Editable description */}
          <CKEditor
            editor={ClassicEditor}
            data={firstCompData.description}
            onChange={(event, editor) => {
              const data = editor.getData();
              handleInputChange("description", data);
            }}
          />

          {/* Button */}
          <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Get Your DMIT Test Now
          </button>
        </div>

        {/* YouTube video */}
        <div className="md:w-1/3 mt-6 md:mt-0">
          <iframe
            className="w-full h-64"
            src="https://www.youtube.com/embed/ISv2-cLrtnY" // Replace with the actual video ID
            title="DMIT Test Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="text-gray-600 text-sm text-center mt-2">
            Watch the Founder & CEO of Brainwonders, Mr. Manish Naidu, talk
            about its DMIT franchise model
          </p>
        </div>
      </div>
      <DmitOverviewSection
        data={secondCompData}
        handleInputChange={handleSecondCompData}
      />
      <BenefitsForAllAges
        data={thirdCompData}
        handleThirdCompData={handleThirdCompData}
        handleThirdCompTitle={handleThirdCompTitle}
      />
      <TestFeatures
        data={fourthCompData}
        handleForthCompData={handleForthCompData}
        handleFourthCompTitle={handleFourthCompTitle}
        handleFourthCompDescription={handleFourthCompDescription}
      />
      <DermatoglyphicsMultipleIntelligenceOverviewPanel
        data={fifthCompData}
        handleFifthCompHeadingChange={handleFifthCompHeadingChange}
        handleFifthCopmTextChange={handleFifthCompTextChange}
      />
      <BrainAndFingerprintPanel
        data={sixthCompData}
        handleSixthCompDataChanger={handleSixthCompDataChanger}
      />
      <Editorr />
      <div className="text-center">
        <button className="bg-[#022F46] text-white px-6 py-2 rounded-lg hover:bg-[#022f46d4] mb-6">
          Submit
        </button>
      </div>
    </div>
  );
}
