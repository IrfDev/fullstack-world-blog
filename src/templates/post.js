import React from 'react';
import { graphql, Link } from 'gatsby';
import rehypeReact from 'rehype-react';
import ImgSharpInline from '../components/Atoms/Utils/inline-img';
import SEO from '../components/seo';

import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';

import Layout from '../components/layout';

export const Query = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      featureImageSharp
      localFeatureImage {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
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
  }
`;

const renderAst = new rehypeReact({
  Fragment: React.Fragment,
  createElement: React.createElement,
  components: { 'img-sharp-inline': ImgSharpInline },
}).Compiler;

export default function PostTemplates({ data: { ghostPost: post } }) {
  return (
    <Layout>
      <SEO title={post.title} description={'Super post'} />
      <main className='post-page'>
        {post.tags.map(tag => (
          <span key={tag.slug}>
            <Link to={`/categories/${tag.slug}`}>{tag.name}</Link>
          </span>
        ))}
        <BackgroundImage
          className='header'
          fluid={post.localFeatureImage.childImageSharp.fluid}
        >
          <div className='info'>
            <h1 className='_title'>{post.title}</h1>
            <p className='_excerpt'>{post.excerpt}</p>
          </div>
        </BackgroundImage>

        {/* <div className='post-content'>{post.post}</div> */}
        <section>{renderAst(post.childHtmlRehype.htmlAst)}</section>
      </main>
    </Layout>
  );
}
