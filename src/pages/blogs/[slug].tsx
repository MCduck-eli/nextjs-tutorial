import { GetServerSideProps } from "next";
import { getService } from "../../services/get-service";
import { getBlogs } from "../../interfaces";
import CategoriesInterface from "../../interfaces/categories-interface";
import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import Image from "next/image";
import { format } from "date-fns";
import { Fragment } from "react/jsx-runtime";
import Layout from "../../layout/layout";
import { timeCalculate } from "../../helpers/time-calculate";
import { useRouter } from "next/router";
import Seo from "../../seo/seo";

interface GetDeaileProps {
    blogs: getBlogs[];
    getCategories: CategoriesInterface[];
    slideBlogs: getBlogs[];
}

const GetDeaileSlug = ({
    blogs,
    getCategories,
    slideBlogs,
}: GetDeaileProps) => {
    const router = useRouter();

    return (
        <Seo metaTitle={`${router.query.slug}`}>
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
                    <Box sx={{ width: { xs: "100%", md: "70%" } }}>
                        {blogs.map((item) => (
                            <Box key={item.id}>
                                <Box
                                    sx={{
                                        background: "rgb(1,1,1, .4)",
                                        padding: "20px",
                                        mt: "10px",
                                        borderRadius: "10px",
                                        boxShadow:
                                            "0 8px 16px rgba(255, 255, 255, 0.1)",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: "relative",
                                            width: "100%",
                                            height: "50vh",
                                        }}
                                    >
                                        <Image
                                            src={item.image.url}
                                            alt={item.title}
                                            fill
                                            style={{
                                                objectFit: "cover",
                                            }}
                                        />
                                    </Box>
                                </Box>
                                <Typography
                                    sx={{
                                        fontSize: { xs: "25px", md: "35px" },
                                    }}
                                    marginTop={"10px"}
                                >
                                    {item.title}
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "gray",
                                        fontSize: { xs: "15px", md: "22px" },
                                    }}
                                >
                                    {item.excerpt}
                                </Typography>

                                <Typography sx={{ mt: "5px" }}>
                                    {item.description.text}
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                        mt: "10px",
                                        justifyContent: "flex-end",
                                    }}
                                >
                                    <Avatar
                                        src={item.author.avatar.url}
                                        alt={item.title}
                                    ></Avatar>
                                    <Box>
                                        <Typography>
                                            {item.author.name}
                                        </Typography>
                                        {format(
                                            new Date(item.createdAt),
                                            "MM/dd/yyyy",
                                        )}{" "}
                                        • {timeCalculate(item.description.text)}
                                        min read
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>

                    <Box sx={{ width: { xs: "100%", md: "30%" } }}>
                        <Box sx={{ position: "sticky", top: "100px" }}>
                            <Box
                                sx={{
                                    border: "1px solid #FFFDD0",
                                    borderRadius: "8px",
                                    padding: "20px",
                                }}
                            >
                                <Typography variant="h5">Slide</Typography>
                                <Box>
                                    {slideBlogs.map((item) => (
                                        <Box
                                            key={item.id}
                                            sx={{
                                                display: "flex",
                                                gap: 2,
                                                mt: "10px",
                                            }}
                                        >
                                            <Image
                                                src={item.image.url}
                                                alt={item.title}
                                                width={180}
                                                height={110}
                                                style={{
                                                    borderRadius: "10px",
                                                    cursor: "pointer",
                                                }}
                                                onClick={() =>
                                                    router.push(
                                                        `/blogs/${item.slug}`,
                                                    )
                                                }
                                            />
                                            <Box>
                                                <Typography variant="body1">
                                                    {item.title}
                                                </Typography>
                                                <Typography>
                                                    date:{" "}
                                                    {format(
                                                        new Date(),
                                                        "MM/dd/yyy",
                                                    )}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    border: "1px solid #FFFDD0",
                                    borderRadius: "8px",
                                    padding: "20px",
                                    mt: "10px",
                                }}
                            >
                                <Typography variant="h4">Category</Typography>
                                <Box>
                                    {getCategories.map((nav) => (
                                        <Fragment key={nav.slug}>
                                            <Button
                                                sx={{
                                                    justifyContent:
                                                        "flex-start",
                                                    width: "100%",
                                                    mt: "10px",
                                                    textAlign: "start",
                                                }}
                                            >
                                                {nav.label}
                                            </Button>
                                            <Divider />
                                        </Fragment>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Layout>
        </Seo>
    );
};

export default GetDeaileSlug;

export const getServerSideProps: GetServerSideProps<GetDeaileProps> = async ({
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
