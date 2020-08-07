import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { Link } from 'gatsby';

export default function HomeCategoryCard({ tag }) {
  const iconComponent = categorySlug => {
    switch (categorySlug) {
      case 'backend':
        return <i className={`fas fa-code _item ${categorySlug}`}></i>;

      case 'frontend':
        return <i className={`fas fa-palette _item ${categorySlug}`}></i>;

      case 'marketing':
        return <i className={`fas fa-bullhorn _item ${categorySlug}`}></i>;

      case 'server':
        return <i className={`fas fa-cloud _item ${categorySlug}`}></i>;
    }
  };

  return (
    <BackgroundImage
      className='card category '
      Tag='div'
      fluid={tag.localFeatureImage.childImageSharp.fluid}
    >
      <div className='card-body bg-transparent content align-items-center'>
        <div className='info'>
          <h4>
            <Link className='card-title _title' to={`/categories/${tag.slug}`}>
              {tag.name}
            </Link>
          </h4>
          {/* <p className='_description'>{tag.description}</p> */}
        </div>
        <div className='icon text-right'>{iconComponent(tag.slug)}</div>
      </div>
    </BackgroundImage>
  );
}
