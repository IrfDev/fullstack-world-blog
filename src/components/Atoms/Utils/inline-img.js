import React from 'react';
import Img from 'gatsby-image';

const ImgSharpInline = ({ className, fluidImg, alt }) => (
  <Img
    className={className}
    fluid={fluidImg && JSON.parse(fluidImg)}
    alt={alt}
    fadeIn={true}
  />
);

export default ImgSharpInline;
