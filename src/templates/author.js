import React from 'react';
import { graphql, Link } from 'gatsby';

import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';

import SEO from '../components/seo';
import Layout from '../components/layout';

export const Query = graphql`
  query($slug: String!) {
    ghostAuthor(slug: { eq: $slug }) {
      slug
      website
      twitter
      name
      facebook
      profile_image
      postCount
      bio
      slug
      cover_image
      localFeatureImage {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;

export default function AuthorTemplate({ data: { ghostAuthor: author } }) {
  return (
    <Layout>
      <SEO title={`Author ${author.name}`} description={author.bio} />
      <main className='container-fluid author-page'>
        <BackgroundImage
          tag='div'
          className='row header'
          fluid={author.localFeatureImage.childImageSharp.fluid}
        >
          <div className='col-12 d-flex text-center info align-content-center justify-content-center'>
            <div className='text text-right align-self-center'>
              <h1 className='_name'>{author.name}</h1>
              <p className='_bio'>{author.bio}</p>
            </div>
            <div className='avatar-wraper align-self-center'>
              <img
                className=' _avatar'
                src={author.profile_image}
                alt={author.name}
              />
            </div>
            <div className='justify-content-center d-flex social align-self-center'>
              <a href={author.twitter}>
                <i class='fab fa-github'></i>
              </a>
              <a href={author.facebook}>
                <i class='fab fa-linkedin'></i>
              </a>
              <a href={author.website}>
                <i class='fas fa-link'></i>
              </a>
            </div>
          </div>
        </BackgroundImage>

        <section className='content'></section>
      </main>
    </Layout>
  );
}
