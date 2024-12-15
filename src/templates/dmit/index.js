import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Contact from './components/Contact';

const DmitTemplate = ({ data }) => {
  // Template specific data structure
  const templateData = {
    header: data?.header || {},
    banner: data?.banner || {},
    features: data?.features || [],
    benefits: data?.benefits || [],
    contact: data?.contact || {}
  };

  // Template specific handlers
  const handlers = {
    onContactSubmit: async (formData) => {
      // Handle contact form submission
      console.log('Contact form submitted:', formData);
    },
    onFeatureClick: (featureId) => {
      // Handle feature click
      console.log('Feature clicked:', featureId);
    }
  };

  return (
    <div className="dmit-template">
      <Header data={templateData.header} />
      <Banner data={templateData.banner} />
      <Features 
        data={templateData.features} 
        onFeatureClick={handlers.onFeatureClick}
      />
      <Benefits data={templateData.benefits} />
      <Contact 
        data={templateData.contact}
        onSubmit={handlers.onContactSubmit}
      />
    </div>
  );
};

export default DmitTemplate;
