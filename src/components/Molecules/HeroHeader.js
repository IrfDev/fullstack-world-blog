import React from 'react';

import { useStaticQuery, graphql, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

export default function HeroHeader() {
  const { ghostPost } = useStaticQuery(
    graphql`
      query {
        ghostPost {
          meta_description
          title
          id
          slug
          excerpt
          primary_author {
            profile_image
            name
          }
          primary_tag {
            slug
          }
          localFeatureImage {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    `
  );
  return (
    <div className='row mt-0 flex-start header'>
      <BackgroundImage
        fluid={ghostPost.localFeatureImage.childImageSharp.fluid}
      >
        <section className='blog'>
          <div className='info'>
            <h1>{ghostPost.title}</h1>
            <p>{ghostPost.excerpt}</p>
          </div>
          <div className='cta d-flex justify-content-start'>
            <Link
              to={`/categories/${ghostPost.primary_tag.slug}/${ghostPost.slug}`}
            >
              Go to post
            </Link>
            <Link to={`/categories/${ghostPost.primary_tag.slug}`}>
              Go to Category
            </Link>
          </div>
        </section>
      </BackgroundImage>
    </div>
  );
}
