import { useStaticQuery, graphql } from 'gatsby';

export const GetAllTags = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allGhostTag {
          edges {
            node {
              url
              slug
              postCount
              name
              meta_title
              meta_description
              id
              ghostId
              feature_image
              description
              children {
                id
              }
            }
          }
        }
      }
    `
  );
  return data.allGhostTag.edges.map(edge => edge.node);
};
