self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/pages/index.js"
  ],
  "/_error": [
    "static/chunks/pages/_error.js"
  ],
  "/blogs": [
    "static/chunks/pages/blogs.js"
  ],
  "/blogs/[slug]": [
    "static/chunks/pages/blogs/[slug].js"
  ],
  "/category": [
    "static/chunks/pages/category.js"
  ],
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/",
    "/_app",
    "/_error",
    "/about",
    "/api/hello",
    "/blogs",
    "/blogs/[slug]",
    "/category",
    "/category/[slug]"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()