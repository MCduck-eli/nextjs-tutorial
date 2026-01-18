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
                    id
                    image {
                        url
                    }
                    slug
                    title
                    excerpt
                    createdAt
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
    }
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/Desktop/nextjs-tutorial/src/pages/blogs/[slug].tsx [ssr] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/Desktop/nextjs-tutorial/src/pages/blogs/[slug].tsx [ssr] (ecmascript)\n\nCaused by:\n- CJS module can't be async.\n\nDebug info:\n- An error occurred while generating the chunk item [project]/Desktop/nextjs-tutorial/src/pages/blogs/[slug].tsx [ssr] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of EcmascriptChunkItemContent::new failed\n- CJS module can't be async.");

}}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1533fd29._.js.map