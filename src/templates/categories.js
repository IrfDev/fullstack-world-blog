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
          fluid(maxWidth: 2500) {
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
          className='headerr'
          fluid={tag.localFeatureImage.childImageSharp.fluid}
        >
          <header className='text-center text-light info'>
            <h1 className='_title'>{tag.name}</h1>
            <div className='_description'>
              <p>{tag.description}</p>
            </div>
          </header>
        </BackgroundImage>
        <section className='row m-0 justify-content-center categories'>
          {posts.edges.map(({ node: post }) => (
            <div className='col-11 col-lg-8 col-md-10 d-flex mt-5 mb-3 pb-5 category '>
              <Image
                fluid={post.localFeatureImage.childImageSharp.fluid}
                className='post-information img-fluid col image'
              />
              <div className='post-information info col-8 col-md-9'>
                <Link to={`/categories/${post.primary_tag.slug}/${post.slug}`}>
                  <h4 className='_title'>{post.title}</h4>
                </Link>
                <span className='_author'>
                  <Link to={`/author/${post.primary_author.slug}`}>
                    {post.primary_author.name}
                  </Link>{' '}
                  -{' '}
                </span>
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
