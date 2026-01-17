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
                    author {
                        avatar {
                            url
                        }
                        slug
                        name
                    }
                    excerpt
                    createdAt
                    image {
                        url
                    }
                    slug
                    title
                }
                categories {
                    label
                    slug
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
};
