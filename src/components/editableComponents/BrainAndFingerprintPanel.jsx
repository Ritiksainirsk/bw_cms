import React, { useState } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const BrainAndFingerprintPanel = ({ data, handleSixthCompDataChanger }) => {
  // Function to handle file input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file); // Create a URL for the file
      handleSixthCompDataChanger("imageUrl", fileURL); // Call the handler with the new image URL
    }
  };

  return (
    <div className="p-8 md:px-28">
      {/* Editable title */}
      <input
        className="text-2xl md:text-3xl border-2 border-gray-300 p-2 rounded-lg  font-semibold mb-2 text-center mt-10 heading-font text-[#022F46] w-full focus:outline-none focus:ring-2 focus:ring-blue-500 "
        value={data.heading}
        name="heading"
        onChange={(e) => handleSixthCompDataChanger("heading", e.target.value)}
      />

      {/* Editable subtitle */}
      <input
        className="md:text-[16px] border-2 border-gray-300 mb-8 p-2 rounded-lg text-center w-full focus:outline-none focus:ring-2 focus:ring-blue-500 "
        value={data.subHeading}
        name="subHeading"
        onChange={(e) =>
          handleSixthCompDataChanger("subHeading", e.target.value)
        }
      />

      <div className="flex flex-col lg:flex-row items-center">
        {/* Editable image */}
        <div className="flex-1 mb-4 md:mb-0 md:mr-4">
          <img
            src={
              data.imageUrl
                ? data.imageUrl
                : "https://www.centurymedicaldental.com/wp-content/uploads/2022/01/Left-and-Right-Hemisphere-of-the-Brain.jpg.webp"
            }
            alt="Brain and Finger Connection"
            className="w-full h-auto"
            width={120}
            height={120}
          />

          {/* File input button to select an image */}
          <input
            type="file"
            accept="image/*"
            id="fileInput"
            className="mt-4 hidden"
            onChange={handleImageChange}
          />
          {/* Custom file input button */}
          <div className="text-center">
            <button
              onClick={() => document.getElementById("fileInput").click()}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Upload Image
            </button>
          </div>
        </div>

        <div className="flex-1 md:text-[16px] ">
          {/* Editable paragraphs */}
          <CKEditor
            editor={ClassicEditor}
            data={data.content}
            onChange={(event, editor) => {
              const data = editor.getData();
              handleSixthCompDataChanger("content", data);
            }}
            config={{
              toolbar: [
                "heading",
                "|",
                "bold",
                "italic",
                "link",
                "bulletedList",
                "numberedList",
                "blockQuote",
                "|",
                "undo",
                "redo",
                "fontSize",
                "fontFamily",
                "alignment",
                "highlight",
                "insertTable",
                "|",
                "imageUpload",
                "mediaEmbed",
                "removeFormat",
                "sourceEditing",
              ],
              fontSize: {
                options: [9, 11, 13, "default", 17, 19, 21],
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BrainAndFingerprintPanel;
