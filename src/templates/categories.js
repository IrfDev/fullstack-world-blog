import React from 'react';
import { graphql, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Image from 'gatsby-image';

import Layout from '../components/layout';

export const Query = graphql`
  query($slug: String!) {
    ghostTag(slug: { eq: $slug }) {
      description
      slug
      description
      meta_title
      meta_description
      name
      url
      localFeatureImage {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      postCount
    }
    allGhostPost(filter: { tags: { elemMatch: { slug: { eq: $slug } } } }) {
      edges {
        node {
          title
          excerpt
          slug
          created_at(fromNow: true)
          primary_author {
            profile_image
            name
            slug
          }
          localFeatureImage {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          primary_tag {
            slug
          }
        }
      }
    }
  }
`;

export default function CategoriesTemplate({
  data: { allGhostPost: posts, ghostTag: tag },
}) {
  return (
    <Layout>
      <main className='category-page'>
        <BackgroundImage
          className='header'
          fluid={tag.localFeatureImage.childImageSharp.fluid}
        >
          <header className='text-center text-light info'>
            <h1 className='_title'>{tag.name}</h1>
            <div className='_description'>{tag.description}</div>
          </header>
        </BackgroundImage>
        <section className='row m-0 justify-content-center categories'>
          {posts.edges.map(({ node: post }) => (
            <div className='col-12 col-md-8  d-flex mt-3 mb-3 category'>
              <BackgroundImage
                fluid={post.localFeatureImage.childImageSharp.fluid}
                Tag='div'
                className='post-information col image'
              />
              <div className='post-information info col-9 col-md-10 '>
                <Link to={`/categories/${post.primary_tag.slug}/${post.slug}`}>
                  <h4 className='_title'>{post.title}</h4>
                </Link>
                <span className='_author'>{post.primary_author.name}</span>
                <span className='_date'>{post.created_at}</span>
                <p className='_excerpt'>{post.excerpt}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
}
