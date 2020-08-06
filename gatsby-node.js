const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allGhostTag {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to create posts', results.error);
  }

  const tags = result.data.allGhostTag.edges.map(tag => tag.node);

  tags.forEach(tag => {
    actions.createPage({
      path: `/categories/${tag.slug}`,
      component: require.resolve('./src/templates/categories.js'),
      context: {
        slug: `${tag.slug}`,
      },
    });
  });

  const resultPosts = await graphql(`
    query {
      allGhostPost {
        edges {
          node {
            slug
            primary_tag {
              slug
            }
            html
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to create posts', results.error);
  }

  const posts = resultPosts.data.allGhostPost.edges.map(post => post.node);

  posts.forEach(post => {
    actions.createPage({
      path: `/categories/${post.primary_tag.slug}/${post.slug}`,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: `${post.slug}`,
        tag: `${post.primary_tag.slug}`,
      },
    });
  });

  const resultAuthors = await graphql(`
    query {
      allGhostAuthor {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to create posts', results.error);
  }

  const authors = resultAuthors.data.allGhostAuthor.edges.map(
    author => author.node
  );

  authors.forEach(author => {
    actions.createPage({
      path: `/author/${author.slug}`,
      component: require.resolve('./src/templates/author.js'),
      context: {
        slug: `${author.slug}`,
      },
    });
  });
};

exports.onCreateNode = async ({
  node,
  actions,
  store,
  createNodeId,
  cache,
}) => {
  // Check that we are modifying right node types.
  const nodeTypes = [`GhostPost`, `GhostPage`, `GhostTag`, `GhostAuthor`];
  if (!nodeTypes.includes(node.internal.type)) {
    return;
  }

  const { createNode } = actions;

  if (node.internal.type === 'GhostAuthor') {
    var fileNode = await createRemoteFileNode({
      url: node.cover_image,
      store,
      cache,
      createNode,
      parentNodeId: node.id,
      createNodeId,
    });
  } else {
    var fileNode = await createRemoteFileNode({
      url: node.feature_image,
      store,
      cache,
      createNode,
      parentNodeId: node.id,
      createNodeId,
    });
  }

  if (fileNode) {
    node.localFeatureImage___NODE = fileNode.id;
  }
};
