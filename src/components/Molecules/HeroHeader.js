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
      classname='wrapper hero-header-wraper pl-0 pr-0'
    >
      <div className='row m-0 header pl-0 pr-0 justify-content-center justify-content-lg-start'>
        <section className='blog ml-md-5 col-lg-7 col-11'>
          <div className='info'>
            <small>Last post:</small>
            <h1 className='_title'>{ghostPost.title}</h1>
            <p className='_excerpt'>{ghostPost.excerpt}</p>
          </div>
          <div className='cta inHeader d-flex justify-content-start'>
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
