import CategoriesInterface from "../interfaces/categories-interface";
import { getBlogs } from "./../interfaces/index";
import { request, gql } from "graphql-request";

const graphqlAPI =
    "https://us-west-2.cdn.hygraph.com/content/cmkh1ryoj00c207w88juz2699/master";

export const getService = {
    async GetPosts() {
        const query = gql`
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
            const result = await request<{ blogs: getBlogs[] }>(
                graphqlAPI,
                query,
            );

            return result.blogs;
        } catch (error: any) {
            console.error("❌ GraphQL xatosi:", error.message);
            return [];
        }
    },

    async getCategories() {
        const query = gql`
            query Categories {
                categories {
                    label
                    slug
                }
            }
        `;
        try {
            const result = await request<{ categories: CategoriesInterface[] }>(
                graphqlAPI,
                query,
            );

            return result.categories;
        } catch (error: any) {
            console.error("❌ GraphQL xatosi:", error.message);
            return [];
        }
    },

    async getSlideBlogs() {
        const query = gql`
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
            const result = await request<{ blogs: getBlogs[] }>(
                graphqlAPI,
                query,
            );

            return result.blogs;
        } catch (error: any) {
            console.error("❌ GraphQL xatosi:", error.message);
            return [];
        }
    },
    async getDeaileSlug(slug: string) {
        const query = gql`
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
            const result = await request<{ blogs: getBlogs[] }>(
                graphqlAPI,
                query,
                { slug },
            );

            return result.blogs;
        } catch (error: any) {
            console.error("❌ GraphQL xatosi:", error.message);
            return [];
        }
    },

    async getCategoryDetaile(slug: string) {
        const query = gql`
            query GetSlug($slug: String!) {
                blogs(where: { category: { slug: $slug } }) {
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
            const result = await request<{ blogs: getBlogs[] }>(
                graphqlAPI,
                query,
                { slug },
            );

            console.log(result.blogs);

            return result.blogs;
        } catch (error: any) {
            console.error("❌ GraphQL xatosi:", error.message);
            return [];
        }
    },
};
