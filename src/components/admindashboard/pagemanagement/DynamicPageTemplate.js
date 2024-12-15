import React, { useEffect, useState } from 'react';

const DynamicPageTemplate = ({ pageData, onSave }) => {
  const [template, setTemplate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchTemplate = async () => {
      if (!pageData?.template_id) return;
      
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:4001/api/templates/${pageData.template_id}`);
        if (!response.ok) throw new Error('Failed to fetch template');
        
        const data = await response.json();
        setTemplate(data.data);
        
        // Initialize form data with existing content or empty values
        const initialData = {};
        data.data.components?.forEach(component => {
          initialData[component.id] = pageData.content?.[component.id] || '';
        });
        setFormData(initialData);
      } catch (err) {
        console.error('Error fetching template:', err);
        setError('Failed to load template');
      } finally {
        setLoading(false);
      }
    };

    fetchTemplate();
  }, [pageData?.template_id]);

  const handleInputChange = (componentId, value) => {
    setFormData(prev => ({
      ...prev,
      [componentId]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedPageData = {
        ...pageData,
        content: formData
      };
      await onSave(updatedPageData);
    } catch (err) {
      console.error('Error saving page content:', err);
      setError('Failed to save content');
    }
  };

  if (loading) return <div>Loading template...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!template) return <div>No template found</div>;

  return (
    <form onSubmit={handleSubmit} className="dynamic-template-form">
      <h2>{template.name}</h2>
      {template.components?.map(component => (
        <div key={component.id} className="mb-4">
          <label className="form-label">{component.name}</label>
          {component.type === 'text' && (
            <input
              type="text"
              className="form-control"
              value={formData[component.id] || ''}
              onChange={(e) => handleInputChange(component.id, e.target.value)}
            />
          )}
          {component.type === 'textarea' && (
            <textarea
              className="form-control"
              value={formData[component.id] || ''}
              onChange={(e) => handleInputChange(component.id, e.target.value)}
              rows="4"
            />
          )}
          {component.type === 'html' && (
            <textarea
              className="form-control"
              value={formData[component.id] || ''}
              onChange={(e) => handleInputChange(component.id, e.target.value)}
              rows="8"
            />
          )}
        </div>
      ))}
      <div className="text-end">
        <button type="submit" className="btn btn-primary">
          Save Content
        </button>
      </div>
    </form>
  );
};

export default DynamicPageTemplate;
