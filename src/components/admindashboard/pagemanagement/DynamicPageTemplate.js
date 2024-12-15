import React, { useState } from 'react';

const DynamicPageTemplate = ({ template, onSave }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (fieldId, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldId]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!template || !template.components) {
    return <div>No template structure available</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {template.components.map((component) => (
        <div key={component.id} className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            {component.label || component.name}
          </label>
          
          {component.type === 'text' && (
            <input
              type="text"
              value={formData[component.id] || ''}
              onChange={(e) => handleInputChange(component.id, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={component.placeholder || ''}
            />
          )}

          {component.type === 'textarea' && (
            <textarea
              value={formData[component.id] || ''}
              onChange={(e) => handleInputChange(component.id, e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={component.placeholder || ''}
            />
          )}

          {component.type === 'html' && (
            <textarea
              value={formData[component.id] || ''}
              onChange={(e) => handleInputChange(component.id, e.target.value)}
              rows={8}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={component.placeholder || ''}
            />
          )}
        </div>
      ))}
    </form>
  );
};

export default DynamicPageTemplate;
