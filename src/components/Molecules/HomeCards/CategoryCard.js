import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { Link } from 'gatsby';

export default function HomeCategoryCard({ tag }) {
  return (
    <BackgroundImage
      className='card category '
      Tag='div'
      fluid={tag.localFeatureImage.childImageSharp.fluid}
    >
      <div className='card-body bg-transparent content'>
        <div className='info'>
          <h4>
            <Link className='card-title _title' to={`/categories/${tag.slug}`}>
              {tag.name}
            </Link>
          </h4>
          <p className='_description'>{tag.description}</p>
        </div>
        <div className='icon text-right'>
          <img
            src='https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/firefox-developer-icon-icon.png'
            alt=''
            className='img-fluid '
          />
        </div>
      </div>
    </BackgroundImage>
  );
}
