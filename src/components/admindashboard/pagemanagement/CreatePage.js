import React, { useState, useEffect } from "react";
import { SlClose } from "react-icons/sl";

const CreatePage = ({
  title,
  open,
  handleToggle,
  field,
  handleFormInput,
  handleSubmit,
}) => {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    title: field?.title || "",
    slugUrl: field?.slugUrl || "",
    metaTitle: field?.meta?.title || "",
    metaDescription: field?.meta?.description || "",
    metaKeywords: field?.meta?.keywords || "",
    status: field?.status || "",
    template_id: field?.template || "",
  });

  // Input Change Handler
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (handleFormInput) handleFormInput(e);
  };

  // Form Submission Handler
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (handleSubmit) handleSubmit(formData);

      // Use fetch for POST request
      const response = await fetch("http://localhost:4001/api/pages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to save page");
      }

      alert("Page saved successfully!");
      handleToggle();
    } catch (err) {
      console.error("Error saving page:", err);
      alert("Failed to save page.");
    }
  };

  // Fetch Templates
  useEffect(() => {
    const fetchTemplates = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("http://localhost:4001/api/templates");
        const data = await response.json();
        setTemplates(data.data || []);
      } catch (err) {
        console.error("Error fetching templates:", err);
        setError("Failed to load templates.");
      } finally {
        setLoading(false);
      }
    };

    fetchTemplates();
  }, []);

  return (
    <div
      className={`offcanvas offcanvas-end ${open ? `show` : ``}`}
      data-bs-scroll="true"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">{title}</h5>
        <SlClose
          className="offclose"
          role="button"
          onClick={() => handleToggle()}
        />
      </div>
      <div className="offcanvas-body">
        <form onSubmit={onSubmit} className="mt-4">
          <div className="vertical-last">
            <div className="form-outline mb-4">
              {/* Title */}
              <div className="mb-4">
                <label className="form-label" htmlFor="title">
                  Title<span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control"
                  placeholder="Page Title"
                  value={formData.title}
                  name="title"
                  onChange={onChange}
                  required
                />
              </div>

              {/* Template */}
              <div className="mb-4">
                <label className="form-label" htmlFor="template">
                  Template
                </label>
                <select
                  id="template"
                  className="form-control"
                  name="template"
                  value={formData.template_id}
                  onChange={onChange}
                >
                  <option value="">Select Template</option>
                  {loading ? (
                    <option>Loading...</option>
                  ) : error ? (
                    <option disabled>{error}</option>
                  ) : (
                    templates.map((template) => (
                      <option key={template._id} value={template._id}>
                        {template.title || template.name}
                      </option>
                    ))
                  )}
                </select>
              </div>

              {/* Slug URL */}
              <div className="mb-4">
                <label className="form-label" htmlFor="slugUrl">
                  Slug URL<span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="slugUrl"
                  className="form-control"
                  placeholder="Slug URL"
                  value={formData.slugUrl}
                  name="slugUrl"
                  onChange={onChange}
                  required
                />
              </div>

              {/* Meta Title */}
              <div className="mb-4">
                <label className="form-label" htmlFor="metaTitle">
                  Meta Title<span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="metaTitle"
                  className="form-control"
                  placeholder="Meta Title"
                  value={formData.metaTitle}
                  name="metaTitle"
                  onChange={onChange}
                  required
                />
              </div>

              {/* Meta Description */}
              <div className="mb-4">
                <label className="form-label" htmlFor="metaDescription">
                  Meta Description
                </label>
                <textarea
                  id="metaDescription"
                  className="form-control"
                  placeholder="Meta Description"
                  value={formData.metaDescription}
                  name="metaDescription"
                  onChange={onChange}
                  rows="4"
                />
              </div>

              {/* Meta Keywords */}
              <div className="mb-4">
                <label className="form-label" htmlFor="metaKeywords">
                  Meta Keywords<span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="metaKeywords"
                  className="form-control"
                  placeholder="Meta Keywords"
                  value={formData.metaKeywords}
                  name="metaKeywords"
                  onChange={onChange}
                  required
                />
              </div>

              {/* Status */}
              <div className="mb-4">
                <label className="form-label" htmlFor="status">
                  Status<span className="required">*</span>
                </label>
                <select
                  id="status"
                  className="form-select"
                  name="status"
                  onChange={onChange}
                  value={formData.status}
                  required
                >
                  <option value="">Select Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>

            {/* Form Actions */}
            <div className="text-end">
              <button
                type="button"
                className="btn btn-secondary me-2"
                onClick={() => handleToggle()}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
