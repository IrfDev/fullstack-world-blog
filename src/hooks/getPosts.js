import { useStaticQuery, graphql } from 'gatsby';

const GetAllPosts = () => {
  const datas = useStaticQuery(graphql`
    query {
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

  return datas;
};

export default GetAllPosts;
