import React from 'react';

const Banner = ({ data }) => {
  const {
    title,
    subtitle,
    backgroundImage,
    ctaText,
    ctaLink
  } = data;

  return (
    <div 
      className="banner-section" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <a href={ctaLink} className="cta-button">
          {ctaText}
        </a>
      </div>
    </div>
  );
};

export default Banner;
