import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import PostCard from '../../Molecules/HomeCards/PostCard';

export default function HomePostListing() {
  const {
    allGhostPost: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allGhostPost(limit: 8) {
          edges {
            node {
              meta_description
              title
              id
              slug
              excerpt
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
                  fluid(maxWidth: 750) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  return (
    <div className='d-flex flex-column justify-content-around text-center posts'>
      <h1 className='_title'>Posts</h1>
      <div className='row m-0 '>
        {edges.map(({ node: post }) => (
          <div key={post.slug} className='col-12 col-md-6 wrapper'>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
