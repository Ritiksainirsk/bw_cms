import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import DmitOverviewSection from "@/components/editableComponents/DmitOverviewSection";

const DynamicPageTemplate = ({ template, onSave }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (template && template.components) {
      const initialFormData = {};
      template.components.forEach((component) => {
        console.log("Component:", component); // Debug log for each component
        if (component.id.includes("comp1")) {
          initialFormData[`${component.id}_heading`] = component.data?.heading || component.heading || "";
          initialFormData[`${component.id}_description`] = component.data?.description || component.description || "";
          initialFormData[`${component.id}_videoUrl`] = component.data?.videoUrl || component.videoUrl || "";
        } else if (component.id.includes("comp2")) {
          initialFormData[component.id] = component.data || "";

        } else {
          initialFormData[component.id] = component.data || component.content || "";
        }
      });
      console.log("Initial Form Data:", initialFormData);
      setFormData(initialFormData);
    }
  }, [template]);

  const handleInputChange = (componentId, field, value) => {
    console.log("Updating:", componentId, field, value);
    setFormData((prev) => ({
      ...prev,
      [componentId]: {
        ...prev[componentId],
        [field]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const processedData = {};

    template.components.forEach((component) => {
      if (component.id.includes("comp1")) {
        processedData[component.id] = {
          heading: formData[`${component.id}_heading`],
          description: formData[`${component.id}_description`],
          videoUrl: formData[`${component.id}_videoUrl`],
        };
      } else if (component.id.includes("comp2")) {
        processedData[component.id] = {
          data: {
            text: formData[component.id]?.text || ""
          }
        };
      } else {
        processedData[component.id] = formData[component.id];
      }
    });

    console.log("Submitting data:", processedData);
    onSave(processedData);
  };

  if (!template || !template.components) {
    return <div>No template structure available</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {template.components.map((component) => {
        console.log("Rendering component:", component.id, component);
        return (
          <div key={component.id} className="space-y-2">
            {component.id.includes("comp1") && (
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
                        const data = editor.getData();
                        handleInputChange(component.id, "heading", data);
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
                        const data = editor.getData();
                        handleInputChange(component.id, "description", data);
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
                      onChange={(e) => handleInputChange(component.id, "videoUrl", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter YouTube video URL"
                    />
                  </div>
                </div>

                {/* Preview */}
                <div className="md:w-1/3 mt-6 md:mt-0">
                  {formData[`${component.id}_videoUrl`] && (
                    <iframe
                      className="w-full h-64"
                      src={formData[`${component.id}_videoUrl`]}
                      title="Video Preview"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>
              </div>
            )}

            {component.id.includes("comp2") && (
              <div>
                <DmitOverviewSection
                  data={formData[component.id] || ""}
                  handleInputChange={(value) => handleInputChange(component.id, value)}
                />
              </div>
            )}
          </div>
        );
      })}

      <div className="flex justify-end mt-8">
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
