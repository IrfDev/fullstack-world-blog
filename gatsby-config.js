module.exports = {
  siteMetadata: {
    title: `Fullstack world`,
    description:
      'Blog for fullstack developers who love keeping in touch with the recent technology and little hacks wich make the difference. Enter now and join the Fullstack world 👨🏻‍💻🌏',
    author: `@IrfDev`,
    ogImage: `/og-main.png`,
    ogType: 'website',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-theme-fullstack-dev`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-amp`,
      options: {
        analytics: {
          type: 'gtag',
          dataCredentials: 'include',
          config: {
            vars: {
              gtag_id: 'G-8LXTRSX3W9',
              config: {
                'G-8LXTRSX3W9': {
                  page_location: '{{pathname}}'
                },
              },
            },
          },
        },
        canonicalBaseUrl: 'https://full-stack.world/',
        components: ['amp-form', 'amp-img','amp-social-share'],
        excludedPaths: ['/404*', '/'],
        pathIdentifier: '/amp/',
        relAmpHtmlPattern: '{{canonicalBaseUrl}}{{pathname}}{{pathIdentifier}}',
        useAmpClientIdApi: true,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
    },
    {
      resolve: `gatsby-plugin-ghost-images`,
      options: {
        lookup: [
          {
            type: `GhostPost`,
            imgTags: [`feature_image`],
          },
          {
            type: `GhostPage`,
            imgTags: [`feature_image`],
          },
          {
            type: `GhostSettings`,
            imgTags: [`cover_image`],
          },
          {
            type: `GhostTag`,
            imgTags: [`feature_image`],
          },
          {
            type: `GhostAuthor`,
            imgTags: ['profile_images', 'cover_image'],
          },
        ],
        exclude: node => node.ghostId === undefined,
        verbose: true,
        disable: false,
      },
    },
    // {
    //   resolve: `gatsby-plugin-s3`,
    //   options: {
    //     bucketName: 'full-stack.world',
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: `https://ghost.full-stack.world`,
        contentApiKey: `52cda954c3ae003cd5c16cac4d`,
        adminApiKey:
          '5f4d760b6a080a848777c04b:bc2788b533ae8059ce7b041dfc804bc872aa4edc0de0cb2cdde1d4066c9ebd0a',
        version: `v3`,
      },
    },
    {
      resolve: `gatsby-transformer-rehype`,
      options: {
        filter: node => {
          const ghostTypes = [`GhostPost`, 'GhostPage'];
          return ghostTypes.includes(node.internal.type);
        },
        plugins: [
          {
            resolve: `gatsby-rehype-inline-images`,
            options: {
              withWebp: true,
              useImageCache: true,
            },
          },
        ],
      },
    },
  ],
};
