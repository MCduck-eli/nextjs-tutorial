import { Box } from "@mui/material";
import { Content, Hero, Slider } from "../components";
import Layout from "../layout/layout";

const IndexPage = () => {
    return (
        <Layout>
            <Hero />
            <Box sx={{ display: "flex", padding: "10px", mt: "10px" }} gap={2}>
                <Slider />
                <Content />
            </Box>
        </Layout>
    );
};

export default IndexPage;
