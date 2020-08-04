import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import CategoryCard from '../../Molecules/HomeCards/CategoryCard';

export default function HomeTagsListing() {
  const {
    allGhostTag: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allGhostTag(limit: 4) {
          edges {
            node {
              id
              slug
              meta_description
              name
              localFeatureImage {
                childImageSharp {
                  fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  return (
    <div className='row text-center flex-wrap categories'>
      <div className='col-12 info'>
        <h1 className='_title'>Categories</h1>
      </div>
      {edges.map(({ node: tag }) => (
        <section className='col-12 col-md-6'>
          <CategoryCard key={tag.slug} tag={tag} />
        </section>
      ))}
      <div className='card category'>
        <h3 className='title'></h3>
        <p className='description'></p>
        <img className='img-fliuid' src='' alt='' />
      </div>
    </div>
  );
}
