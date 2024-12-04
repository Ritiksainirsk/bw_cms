// RichTextEditor.js
import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const DmitOverviewSection = ({data,handleInputChange}) => {
  return (
    <div>
      <div className="max-w-6xl mx-auto mt-10 p-5 bg-gray-50 shadow-lg rounded-md">
        <CKEditor
          editor={ClassicEditor}
          data={data.content}
          onChange={(event, editor) => {
            const data = editor.getData();
            // setEditorData(data);
            handleInputChange("content",data)
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
  );
};

export default DmitOverviewSection;
