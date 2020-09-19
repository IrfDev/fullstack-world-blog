import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

// Every View needs to have these arguments, for SEO and Social Media. If not have this tags, it'll be taken from gatsby.config

function SEO({ description, lang, meta, title, ogImage, ogType, ogUrl }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            ogImage
            ogType
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const srcogImage = ogImage || site.siteMetadata.ogImage;
  const srcogType = ogType || site.siteMetadata.ogType;
  const srcOgUrl = ogUrl || 'https://full-stack.world';

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          key: 'og:url',
          property: 'og:url',
          content: srcOgUrl,
        },
        {
          key: 'og:title',
          property: `og:title`,
          content: title,
        },
        {
          key: 'og:description',
          property: `og:description`,
          content: metaDescription,
        },
        {
          key: 'og:type',
          property: `og:type`,
          content: srcogType,
        },
        {
          key: 'twitter:card',
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          key: 'twitter:creator',
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          key: 'twitter:title',
          name: `twitter:title`,
          content: title,
        },
        {
          key: 'twitter:description',
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          key: 'twitter:image',
          name: `twitter:image`,
          content: srcogImage,
        },
        {
          key: 'og:image',
          name: `og:image`,
          content: srcogImage,
        },
        {
          name: 'theme-color',
          content: '#482BE7',
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
