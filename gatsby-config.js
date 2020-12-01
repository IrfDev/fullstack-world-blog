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
        apiUrl: `https://full-stack-blog.herokuapp.com`,
        contentApiKey: `d293babf4066d2011e7d1cd0ba`,
        adminApiKey:
          '5fb8a25b04cc40001e5866b2:7e84d5b78442780f0ec8d514ef95e702f7541bfe9ecf269134401202c7ee509c',
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
