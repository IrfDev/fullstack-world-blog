import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { Link } from 'gatsby';

export default function HomeCategoryCard({ tag }) {
  return (
    <BackgroundImage fluid={tag.localFeatureImage.childImageSharp.fluid}>
      <div className='card mt-4 mb-4 bg-transparent category'>
        <div className='card-body bg-transparent content'>
          <h4>
            <Link
              className='card-title text-light _title'
              to={`/categories/${tag.slug}`}
            >
              {tag.name}
            </Link>
          </h4>
          <p className='_description'></p>
        </div>
        <img src='' alt='' className='img-fluid ' />
      </div>
    </BackgroundImage>
  );
}
