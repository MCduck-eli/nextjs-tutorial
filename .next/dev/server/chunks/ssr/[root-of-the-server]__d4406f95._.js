module.exports = [
"[project]/Desktop/nextjs-tutorial/src/services/get-service.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getService",
    ()=>getService
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$nextjs$2d$tutorial$2f$node_modules$2f$graphql$2d$request$29$__ = __turbopack_context__.i("[externals]/graphql-request [external] (graphql-request, esm_import, [project]/Desktop/nextjs-tutorial/node_modules/graphql-request)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$nextjs$2d$tutorial$2f$node_modules$2f$graphql$2d$request$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$nextjs$2d$tutorial$2f$node_modules$2f$graphql$2d$request$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const graphqlAPI = "https://us-west-2.cdn.hygraph.com/content/cmkh1ryoj00c207w88juz2699/master";
const getService = {
    async GetPosts () {
        const query = __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$nextjs$2d$tutorial$2f$node_modules$2f$graphql$2d$request$29$__["gql"]`
            query MyQuery {
                blogs {
                    image {
                        url
                    }
                    slug
                    title
                    excerpt
                    createdAt
                    description {
                        text
                    }
                    author {
                        name
                        avatar {
                            url
                        }
                        slug
                    }
                    category {
                        label
                        slug
                    }
                }
            }
        `;
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$nextjs$2d$tutorial$2f$node_modules$2f$graphql$2d$request$29$__["request"])(graphqlAPI, query);
            return result.blogs;
        } catch (error) {
            console.error("❌ GraphQL xatosi:", error.message);
            return [];
        }
    },
    async getCategories () {
        const query = __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$nextjs$2d$tutorial$2f$node_modules$2f$graphql$2d$request$29$__["gql"]`
            query Categories {
                categories {
                    label
                    slug
                }
            }
        `;
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$nextjs$2d$tutorial$2f$node_modules$2f$graphql$2d$request$29$__["request"])(graphqlAPI, query);
            return result.categories;
        } catch (error) {
            console.error("❌ GraphQL xatosi:", error.message);
            return [];
        }
    },
    async getSlideBlogs () {
        const query = __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$nextjs$2d$tutorial$2f$node_modules$2f$graphql$2d$request$29$__["gql"]`
            query GetSlideBlog {
                blogs(last: 2) {
                    image {
                        url
                    }
                    slug
                    title
                    excerpt
                    createdAt
                    description {
                        text
                    }
                    author {
                        name
                        avatar {
                            url
                        }
                        slug
                    }
                    category {
                        label
                        slug
                    }
                }
            }
        `;
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$nextjs$2d$tutorial$2f$node_modules$2f$graphql$2d$request$29$__["request"])(graphqlAPI, query);
            return result.blogs;
        } catch (error) {
            console.error("❌ GraphQL xatosi:", error.message);
            return [];
        }
    },
    async getDeaileSlug (slug) {
        const query = __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$nextjs$2d$tutorial$2f$node_modules$2f$graphql$2d$request$29$__["gql"]`
            query GetSlug($slug: String!) {
                blogs(where: { slug: $slug }) {
                    id
                    image {
                        url
                    }
                    slug
                    title
                    excerpt
                    description {
                        text
                        html
                    }
                    author {
                        name
                        avatar {
                            url
                        }
                    }
                    createdAt
                    category {
                        label
                        slug
                    }
                }
            }
        `;
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$nextjs$2d$tutorial$2f$node_modules$2f$graphql$2d$request$29$__["request"])(graphqlAPI, query, {
                slug
            });
            return result.blogs;
        } catch (error) {
            console.error("❌ GraphQL xatosi:", error.message);
            return [];
        }
    },
    async getCategoryDetaile (slug) {
        const query = __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$nextjs$2d$tutorial$2f$node_modules$2f$graphql$2d$request$29$__["gql"]`
            query GetSlug($slug: String!) {
                blogs(where: { slug: $slug }) {
                    id
                    image {
                        url
                    }
                    slug
                    title
                    excerpt
                    description {
                        text
                        html
                    }
                    author {
                        name
                        avatar {
                            url
                        }
                    }
                    createdAt
                    category {
                        label
                        slug
                    }
                }
            }
        `;
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$nextjs$2d$tutorial$2f$node_modules$2f$graphql$2d$request$29$__["request"])(graphqlAPI, query, {
                slug
            });
            return result.blogs;
        } catch (error) {
            console.error("❌ GraphQL xatosi:", error.message);
            return [];
        }
    }
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Desktop/nextjs-tutorial/src/pages/category/[slug].tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getServerSideProps",
    ()=>getServerSideProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextjs$2d$tutorial$2f$src$2f$services$2f$get$2d$service$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/nextjs-tutorial/src/services/get-service.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextjs$2d$tutorial$2f$src$2f$services$2f$get$2d$service$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextjs$2d$tutorial$2f$src$2f$services$2f$get$2d$service$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const categoryDetailPage = ({ blogs, slideBlogs })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Layout, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Hero, {
                blogs: blogs.slice(0, 3)
            }, void 0, false, {
                fileName: "[project]/Desktop/nextjs-tutorial/src/pages/category/[slug].tsx",
                lineNumber: 15,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Box, {
                sx: {
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        md: "row"
                    },
                    padding: "20px",
                    mt: "10px",
                    mb: "10px"
                },
                gap: 2,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Slider, {
                        blogs: slideBlogs,
                        categories: getCategories
                    }, void 0, false, {
                        fileName: "[project]/Desktop/nextjs-tutorial/src/pages/category/[slug].tsx",
                        lineNumber: 26,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Content, {
                        blogs: blogs
                    }, void 0, false, {
                        fileName: "[project]/Desktop/nextjs-tutorial/src/pages/category/[slug].tsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/nextjs-tutorial/src/pages/category/[slug].tsx",
                lineNumber: 16,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/nextjs-tutorial/src/pages/category/[slug].tsx",
        lineNumber: 14,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = categoryDetailPage;
const getServerSideProps = async ({ query })=>{
    try {
        const blogs = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextjs$2d$tutorial$2f$src$2f$services$2f$get$2d$service$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getService"].getDeaileSlug(query.slug);
        const categories = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextjs$2d$tutorial$2f$src$2f$services$2f$get$2d$service$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getService"].getCategories();
        const slideBlogs = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextjs$2d$tutorial$2f$src$2f$services$2f$get$2d$service$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getService"].getSlideBlogs();
        const safeBlogs = blogs;
        return {
            props: {
                blogs: safeBlogs,
                getCategories: categories,
                slideBlogs: slideBlogs
            }
        };
    } catch (error) {
        console.error("❌ Xato:", error);
        return {
            props: {
                blogs: [],
                getCategories: [],
                slideBlogs: []
            }
        };
    }
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d4406f95._.js.map