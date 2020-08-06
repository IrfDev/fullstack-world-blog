import React from 'react';
import { graphql, Link } from 'gatsby';
import rehypeReact from 'rehype-react';

import ImgSharpInline from '../components/Atoms/Utils/inline-img';
import SEO from '../components/seo';

import BackgroundImage from 'gatsby-background-image';

import Layout from '../components/layout';
import PostCard from '../components/Molecules/HomeCards/PostCard';

import AuthorCard from '../components/Molecules/AuthorCard';
import FooterCta from '../components/Molecules/FooterCta';

export const Query = graphql`
  query($slug: String!, $tag: String!) {
    ghostPost(slug: { eq: $slug }) {
      featureImageSharp
      localFeatureImage {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      primary_author {
        profile_image
        name
        slug
        bio
        meta_description
      }
      childHtmlRehype {
        htmlAst
      }
      title
      featured
      feature_image
      slug
      excerpt
      primary_tag {
        id
        name
        slug
      }
      tags {
        id
        name
        slug
      }
    }
    allGhostPost(limit: 2, filter: { primary_tag: { slug: { eq: $tag } } }) {
      edges {
        node {
          primary_author {
            profile_image
            name
            slug
          }
          primary_tag {
            slug
          }
          localFeatureImage {
            childImageSharp {
              fluid(maxWidth: 850) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          title
          slug
          excerpt
        }
      }
    }
  }
`;

const renderAst = new rehypeReact({
  Fragment: React.Fragment,
  createElement: React.createElement,
  components: { 'img-sharp-inline': ImgSharpInline },
}).Compiler;

export default function PostTemplates({ data }) {
  const post = data.ghostPost;
  const relatedPosts = data.allGhostPost.edges;

  return (
    <Layout>
      <SEO title={post.title} description={post.excerpt} />
      <main className='post-page'>
        <BackgroundImage
          className='header'
          fluid={post.localFeatureImage.childImageSharp.fluid}
        >
          <header className='info'>
            <h1 className='_title'>{post.title}</h1>
            <p className='_excerpt'>{post.excerpt}</p>
          </header>
        </BackgroundImage>
        {post.tags.map(tag => (
          <span key={tag.slug}>
            <Link to={`/categories/${tag.slug}`}>{tag.name}</Link>
          </span>
        ))}
        <div className='row justify-content-center  m-0'>
          <div className='col-8'>
            <article className='post-content'>
              {renderAst(post.childHtmlRehype.htmlAst)}
            </article>
          </div>
        </div>
        <div className='row m-0 mt-3 mb-5 justify-content-center'>
          <AuthorCard author={post.primary_author} />
        </div>
        <div className='row posts mt-4 m-0 align-content-stretch justify-content-center'>
          <div className='col-12 text-center'>
            <h1>You'll also like</h1>
          </div>
          {relatedPosts.map(({ node: post }) => (
            <div key={post.slug} className='col-12 col-md-4 mt-4 wrapperr'>
              <PostCard post={post} />
            </div>
          ))}
        </div>
        <FooterCta />
      </main>
    </Layout>
  );
}
