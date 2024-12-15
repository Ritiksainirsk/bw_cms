import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const DynamicPageTemplate = ({ template, onSave }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (template && template.components) {
      const initialFormData = {};
      template.components.forEach((component) => {
        if (component.name.includes("firstComp")) {
          initialFormData[`${component.id}_heading`] = component.heading || "";
          initialFormData[`${component.id}_description`] = component.description || "";
          initialFormData[`${component.id}_videoUrl`] = component.videoUrl || "";
        } else {
          initialFormData[component.id] = component.content || "";
        }
      });
      setFormData(initialFormData);
    }
  }, [template]);

  const handleInputChange = (fieldId, value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldId]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const processedData = {};
    
    template.components.forEach((component) => {
      if (component.name.includes("firstComp")) {
        processedData[component.id] = {
          heading: formData[`${component.id}_heading`],
          description: formData[`${component.id}_description`],
          videoUrl: formData[`${component.id}_videoUrl`],
        };
      } else {
        processedData[component.id] = formData[component.id];
      }
    });
    
    onSave(processedData);
  };

  if (!template || !template.components) {
    return <div>No template structure available</div>;
  }

  console.log("ffffffffffff", template)

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {template.components.map((component) => (
        <div key={component.id} className="space-y-2">
          {component.name.includes("firstComp") && (
            <div className="bg-blue-50 py-12 px-6 flex flex-col md:flex-row items-center mx-auto shadow-lg rounded-md">
              <div className="pr-4 max-w-[1500px] mx-auto overflow-hidden">
                {/* Heading */}
                <div className="mb-10">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Heading
                  </label>
                  <CKEditor
                    editor={ClassicEditor}
                    data={formData[`${component.id}_heading`] || ""}
                    onChange={(event, editor) => {
                      handleInputChange(`${component.id}_heading`, editor.getData());
                    }}
                  />
                </div>

                {/* Description */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <CKEditor
                    editor={ClassicEditor}
                    data={formData[`${component.id}_description`] || ""}
                    onChange={(event, editor) => {
                      handleInputChange(`${component.id}_description`, editor.getData());
                    }}
                  />
                </div>

                {/* Video URL */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Video URL
                  </label>
                  <input
                    type="text"
                    value={formData[`${component.id}_videoUrl`] || ""}
                    onChange={(e) => handleInputChange(`${component.id}_videoUrl`, e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter YouTube video URL"
                  />
                </div>
              </div>

              {/* Preview */}
              <div className="md:w-1/3 mt-6 md:mt-0">
                <iframe
                  className="w-full h-64"
                  src={formData[`${component.id}_videoUrl`] || ""}
                  title="DMIT Test Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {component.type === "textarea" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {component.label || component.name}
              </label>
              <textarea
                value={formData[component.id] || ""}
                onChange={(e) => handleInputChange(component.id, e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={component.placeholder || ""}
              />
            </div>
          )}

          {component.type === "html" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {component.label || component.name}
              </label>
              <CKEditor
                editor={ClassicEditor}
                data={formData[component.id] || ""}
                onChange={(event, editor) => {
                  handleInputChange(component.id, editor.getData());
                }}
              />
            </div>
          )}
        </div>
      ))}

      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default DynamicPageTemplate;
