import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Booking from './components/Booking';

const CareerCounsellingTemplate = ({ data }) => {
  // Template specific data structure
  const templateData = {
    hero: data?.hero || {},
    services: data?.services || [],
    testimonials: data?.testimonials || [],
    process: data?.process || [],
    booking: data?.booking || {}
  };

  // Template specific handlers
  const handlers = {
    onBookingSubmit: async (bookingData) => {
      // Handle booking submission
      console.log('Booking submitted:', bookingData);
    },
    onServiceSelect: (serviceId) => {
      // Handle service selection
      console.log('Service selected:', serviceId);
    }
  };

  return (
    <div className="career-counselling-template">
      <Hero data={templateData.hero} />
      <Services 
        data={templateData.services} 
        onServiceSelect={handlers.onServiceSelect}
      />
      <Process data={templateData.process} />
      <Testimonials data={templateData.testimonials} />
      <Booking 
        data={templateData.booking}
        onSubmit={handlers.onBookingSubmit}
      />
    </div>
  );
};

export default CareerCounsellingTemplate;
