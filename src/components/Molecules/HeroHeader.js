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
              fluid(maxWidth: 2500) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    `
  );
  return (
    <BackgroundImage
      fluid={ghostPost.localFeatureImage.childImageSharp.fluid}
      classname='wrapper pl-0 pr-0'
    >
      <div className='row m-0  header pl-0 pr-0'>
        <section className='blog ml-5 col-5'>
          <div className='info'>
            <h1 className='_title'>{ghostPost.title}</h1>
            <p className='_excerpt'>{ghostPost.excerpt}</p>
          </div>
          <div className='cta d-flex justify-content-start'>
            <div className='_item __main'>
              <Link
                to={`/categories/${ghostPost.primary_tag.slug}/${ghostPost.slug}`}
              >
                Go to post
              </Link>
            </div>
            <div className='_item '>
              <Link to={`/categories/${ghostPost.primary_tag.slug}`}>
                Go to Category
              </Link>
            </div>
          </div>
        </section>
      </div>
    </BackgroundImage>
  );
}
