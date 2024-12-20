// RichTextEditor.js
import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const DmitOverviewSection = ({data,handleInputChange}) => {
  console.log("DmitOverviewSection data:", data); // Debug log

  return (
    <div>
      <div className="max-w-6xl mx-auto mt-10 p-5 bg-gray-50 shadow-lg rounded-md">
        <CKEditor
          editor={ClassicEditor}
          data={data?.text || ""}
          onChange={(event, editor) => {
            const editorData = editor.getData();
            handleInputChange("text", editorData);
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
              "|",
              "outdent",
              "indent",
              "|",
              "blockQuote",
              "insertTable",
              "undo",
              "redo",
            ],
          }}
        />
      </div>
    </div>
  );
};

export default DmitOverviewSection;
