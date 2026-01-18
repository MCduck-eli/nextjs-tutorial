import { Box } from "@mui/material";
import { Content, Hero, Slider } from "../components";
import Layout from "../layout/layout";
import { getBlogs } from "../interfaces";
import { GetServerSideProps } from "next";
import { getService } from "../services/get-service";
import CategoriesInterface from "../interfaces/categories-interface";
import Seo from "../seo/seo";

interface HomePageProps {
    blogs: getBlogs[];
    getCategories: CategoriesInterface[];
    slideBlogs: getBlogs[];
}

const IndexPage = ({ blogs, getCategories, slideBlogs }: HomePageProps) => {
    return (
        <Seo>
            <Layout>
                <Hero blogs={blogs.slice(0, 3)} />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        padding: "20px",
                        mt: "10px",
                        mb: "10px",
                    }}
                    gap={2}
                >
                    <Slider blogs={slideBlogs} categories={getCategories} />
                    <Content blogs={blogs} />
                </Box>
            </Layout>
        </Seo>
    );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps<
    HomePageProps
> = async () => {
    try {
        const blogs = await getService.GetPosts();
        const categories = await getService.getCategories();
        const slideBlogs = await getService.getSlideBlogs();
        const safeBlogs = blogs;
        return {
            props: {
                blogs: safeBlogs,
                getCategories: categories,
                slideBlogs: slideBlogs,
            },
        };
    } catch (error) {
        console.error("❌ Xato:", error);
        return {
            props: {
                blogs: [],
                getCategories: [],
                slideBlogs: [],
            },
        };
    }
};
