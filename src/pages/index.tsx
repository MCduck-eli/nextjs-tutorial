import { Box } from "@mui/material";
import { Content, Hero, Slider } from "../components";
import Layout from "../layout/layout";
import { getBlogs } from "../interfaces";
import { GetServerSideProps } from "next";
import { getService } from "../services/get-service";
import CategoriesInterface from "../interfaces/categories-interface";

interface HomePageProps {
    blogs: getBlogs[];
    getCategories: CategoriesInterface[];
}

const IndexPage = ({ blogs, getCategories }: HomePageProps) => {
    console.log(getCategories);

    return (
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
                <Slider blogs={blogs} categories={getCategories} />
                <Content blogs={blogs} />
            </Box>
        </Layout>
    );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps<
    HomePageProps
> = async () => {
    try {
        const blogs = await getService.GetPosts();
        const categories = await getService.getCategories();
        const safeBlogs = blogs;
        return {
            props: {
                blogs: safeBlogs,
                getCategories: categories,
            },
        };
    } catch (error) {
        console.error("❌ Xato:", error);
        return {
            props: {
                blogs: [],
                getCategories: [],
            },
        };
    }
};
