import { useStaticQuery, graphql } from 'gatsby';

const GetTagById = () => {
  const data = useStaticQuery(graphql`
    query($slug: String!) {
      ghostTag(slug: { eq: $slug }) {
        description
        slug
        description
        meta_title
        meta_description
        name
        url
        feature_image
        postCount
      }
    }
  `);

  return data.ghostTag;
};

export default GetTagById;
