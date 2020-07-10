import { useStaticQuery, graphql } from 'gatsby';

const getAllTags = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
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
  `);
  return data.MyQuery.allGhostTag.edges;
};

export default getAllTags;
