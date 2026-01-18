import { GetServerSideProps } from "next";
import { getService } from "../../services/get-service";
import { getBlogs } from "../../interfaces";
import CategoriesInterface from "../../interfaces/categories-interface";
import Layout from "../../layout/layout";
import { Content, Hero, Slider } from "../../components";
import { Box } from "@mui/material";
import Seo from "../seo/seo";
import { useRouter } from "next/router";

interface GetCategoryProps {
    blogs: getBlogs[];
    getCategories: CategoriesInterface[];
    slideBlogs: getBlogs[];
}

const categoryDetailPage = ({
    blogs,
    getCategories,
    slideBlogs,
}: GetCategoryProps) => {
    const router = useRouter();
    return (
        <Seo metaTitle={`${router.query.slug}-category`}>
            <Layout>
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

export default categoryDetailPage;

export const getServerSideProps: GetServerSideProps<GetCategoryProps> = async ({
    query,
}) => {
    try {
        const blogs = await getService.getDeaileSlug(query.slug as string);
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
