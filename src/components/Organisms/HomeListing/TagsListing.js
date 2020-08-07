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
              description
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
    <div className='row mt-5 mb-5 text-center align-items-stretch flex-wrap categories m-0 justify-content-center'>
      <div className='col-12 info'>
        <h2 className='_title'>Categories</h2>
      </div>
      {edges.map(({ node: tag }) => (
        <section className='col-12 col-md-6 mt-4  category-wrapper'>
          <CategoryCard key={tag.slug} tag={tag} />
        </section>
      ))}
    </div>
  );
}
