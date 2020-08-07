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
                  fluid(maxWidth: 850) {
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
      <h2 className='_title'>Posts</h2>
      <div className='row m-0 align-item-stretch justify-content-center'>
        {edges.map(({ node: post }) => (
          <div
            key={post.slug}
            className='col-12 col-md-6 mt-4 justify-content-around wrapperr align-items-stretch'
          >
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
