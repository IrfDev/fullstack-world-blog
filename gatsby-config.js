module.exports = {
  siteMetadata: {
    title: `Fullstack world`,
    description: 'Blog for fullstack developers who loves developing',
    author: `@gatsbyjs`,
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: `https://ghost.full-stack.world`,
        contentApiKey: `4208cd7bc4d3e0b01b8954a185`,
        adminApiKey:
          '5f09710e57f70f0dc37d3497:1aa36b3946c9a3d63444c0baf6a10537182f360e3b9faaa3a94e38914c7b8e13',
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
