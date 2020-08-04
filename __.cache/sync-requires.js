const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/irving/Desktop/fullstack-world/frontend/fullstack/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/irving/Desktop/fullstack-world/frontend/fullstack/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/irving/Desktop/fullstack-world/frontend/fullstack/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/irving/Desktop/fullstack-world/frontend/fullstack/src/pages/page-2.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/Users/irving/Desktop/fullstack-world/frontend/fullstack/src/pages/using-typescript.tsx"))),
  "component---src-templates-author-js": hot(preferDefault(require("/Users/irving/Desktop/fullstack-world/frontend/fullstack/src/templates/author.js"))),
  "component---src-templates-categories-js": hot(preferDefault(require("/Users/irving/Desktop/fullstack-world/frontend/fullstack/src/templates/categories.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/Users/irving/Desktop/fullstack-world/frontend/fullstack/src/templates/post.js")))
}

