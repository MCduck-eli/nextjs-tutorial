import { GetServerSideProps } from "next";
import Layout from "../../layout/layout";
import { getService } from "../../services/get-service";
import CategoriesInterface from "../../interfaces/categories-interface";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Seo from "../seo/seo";

interface CategoryPageProps {
    categories: CategoriesInterface[];
}

const CategoryPage = ({ categories }: CategoryPageProps) => {
    const router = useRouter();

    return (
        <Seo metaTitle={"All Categories"}>
            <Layout>
                <Box
                    sx={{
                        width: { xs: "100%", md: "70%" },
                        backgroundColor: "black",
                        marginX: "auto",
                        height: "60vh",
                        marginTop: "10vh",
                        borderRadius: "20px",
                    }}
                >
                    <Box sx={{ paddingTop: "20vh" }}>
                        <Typography
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontWeight: "bold",
                                mb: "13px",
                            }}
                            variant="h4"
                            fontFamily={"monospace"}
                        >
                            All Categories
                        </Typography>
                        <ButtonGroup
                            variant="contained"
                            aria-label="Basic button group"
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            {categories.map((nav) => (
                                <Button
                                    onClick={() =>
                                        router.push(`/category/${nav.slug}`)
                                    }
                                    key={nav.slug}
                                    sx={{
                                        width: { xs: "150px", md: "auto" },
                                        height: { xs: "60px", md: "auto" },
                                        fontSize: { xs: "12px", md: "17px" },
                                    }}
                                >
                                    #{nav.label}
                                </Button>
                            ))}
                        </ButtonGroup>
                    </Box>
                </Box>
            </Layout>
        </Seo>
    );
};

export const getServerSideProps: GetServerSideProps<
    CategoryPageProps
> = async () => {
    try {
        const categories = await getService.getCategories();
        return {
            props: {
                categories,
            },
        };
    } catch (error) {
        console.log(error);

        return {
            props: {
                categories: [],
            },
        };
    }
};

export default CategoryPage;
