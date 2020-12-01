import React from 'react';
import { graphql, Link } from 'gatsby';
import rehypeReact from 'rehype-react';

import ImgSharpInline from '../components/Atoms/Utils/inline-amp-img';
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
          ogImage: fluid(webpQuality: 10, maxWidth: 1200) {
            src
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
      <SEO
        title={post.title}
        description={post.excerpt}
        ogImage={post.localFeatureImage.childImageSharp.ogImage.src}
        ogType={'article'}
      />
      <main className='post-page'>
        <BackgroundImage
          className='header'
          fluid={post.localFeatureImage.childImageSharp.fluid}
        >
          <header className='info-wrapper row m-0'>
            <div className='info'>
              <h1 className='_title'>{post.title}</h1>
              <p className='_excerpt'>{post.excerpt}</p>
              <div className='tags row m-0 text-center justify-content-center'>
                {post.tags.map(tag => (
                  <span className='_item' key={tag.slug}>
                    <Link to={`/categories/${tag.slug}`}>{tag.name}</Link>
                  </span>
                ))}
              </div>
            </div>
            <amp-social-share
              type="linkedin"
              width="60"
              height="44"
              data-param-text={post.title}
              data-param-url={`https://full-stack.world/categories/${post.primary_tag.slug}/${post.slug}`}
              aria-label="Share on LinkedIn"
            />
          </header>
        </BackgroundImage>

        <div className='row justify-content-center  m-0'>
          <div className='col-10 col-lg-7 mt-5'>
            <article className='post-content'>
              {renderAst(post.childHtmlRehype.htmlAst)}
            </article>
          </div>
        </div>
        <div className='row m-0 mt-5 mb-5 justify-content-center'>
          <AuthorCard author={post.primary_author} />
        </div>
        <div className='row posts mt-5 m-0 align-content-stretch justify-content-center'>
          <div className='col-12 mt-5  text-center _section-title'>
            <h2>You'll also like</h2>
          </div>
          {relatedPosts.map(({ node: post }) => (
            <div key={post.slug} className='col-10 col-lg-4 mt-4 wrapperr'>
              <PostCard post={post} />
            </div>
          ))}
        </div>
        <FooterCta />
      </main>
    </Layout>
  );
}
