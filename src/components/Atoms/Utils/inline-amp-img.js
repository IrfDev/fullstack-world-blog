import React from 'react';

const ImgSharpInline = ({ className, fluidImg, alt }) => (
  <amp-img
    className={className}
    fluid={fluidImg && JSON.parse(fluidImg)}
    alt={alt}
    fadeIn={true}
  />
);

export default ImgSharpInline;
