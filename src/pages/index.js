import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

// import getAllPosts from '../hooks/getPosts';

import { useStaticQuery, graphql } from 'gatsby';

const IndexPage = () => {
  const datas = useStaticQuery(graphql`
    query Mys {
      allGhostPost {
        edges {
          node {
            meta_description
            html
            title
            comment_id
            created_at(fromNow: true)
            custom_excerpt
            excerpt
            feature_image
            featured
            id
            internal {
              content
              description
              ignoreType
              mediaType
            }
            codeinjection_head
            canonical_url
            og_description
            og_image
            og_title
            slug
            meta_title
            twitter_description
            twitter_image
            twitter_title
            updated_at(difference: "", fromNow: true)
            authors {
              cover_image
              bio
              website
              location
              facebook
              profile_image
              twitter
              slug
            }
          }
        }
      }
    }
  `);
  console.log(datas);

  return (
    <Layout>
      <SEO title='Home' />
      <h1>What the fuck are you doing?</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to='/page-2/'>Go to page 2</Link> <br />
      <Link to='/using-typescript/'>Go to "Using TypeScript"</Link>
    </Layout>
  );
};

export default IndexPage;
