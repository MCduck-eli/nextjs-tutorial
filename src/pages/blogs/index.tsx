import { GetServerSideProps } from "next";
import Layout from "../../layout/layout";
import { getService } from "../../services/get-service";
import { getBlogs } from "../../interfaces";
import { Content } from "../../components";
import { Box } from "@mui/material";
import Seo from "../seo/seo";

interface BlogPageProps {
    blogs: getBlogs[];
}

const BlogPage = ({ blogs }: BlogPageProps) => {
    return (
        <Seo>
            <Layout>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: "10px",
                        mb: "20px",
                        padding: { xs: "10px", md: "0px" },
                    }}
                >
                    <Content blogs={blogs} />
                </Box>
            </Layout>
        </Seo>
    );
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps<
    BlogPageProps
> = async () => {
    try {
        const blogs = await getService.GetPosts();

        return {
            props: { blogs },
        };
    } catch (error) {
        console.log(error);

        return {
            props: {
                blogs: [],
            },
        };
    }
};
