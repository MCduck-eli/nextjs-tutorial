import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import Image from "next/image";
import { format } from "date-fns";
import { navItems } from "../config/constants";
import { Fragment } from "react/jsx-runtime";

const Slider = () => {
    return (
        <Box sx={{ width: "30%" }}>
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
                        {data.map((item) => (
                            <Box
                                key={item.title}
                                sx={{ display: "flex", gap: 2, mt: "10px" }}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={180}
                                    height={110}
                                    style={{ borderRadius: "10px" }}
                                />
                                <Box>
                                    <Typography variant="body1">
                                        {item.title}
                                    </Typography>
                                    <Typography>
                                        date: {format(new Date(), "MM/dd/yyy")}
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
                        {navItems.map((nav) => (
                            <Fragment key={nav.route}>
                                <Button
                                    sx={{
                                        justifyContent: "flex-start",
                                        width: "100%",
                                        mt: "10px",
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
    );
};

const data = [
    {
        image: "https://media.graphassets.com/MxJZhmooRRuudoErkQ38",
        title: "Technical SEO with Hygraph",
        excerpt:
            "Get started with your SEO implementation when using a Headless CMS",
        author: {
            name: "John Smith",
            image: "https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx",
        },
    },
    {
        image: "https://media.graphassets.com/bh3K2NNtTHCN260Xfq9h",
        title: "Union Types and Sortable Relations with Hygraph",
        excerpt:
            "Learn more about Polymorphic Relations and Sortable Relations with Hygraph",
        author: {
            name: "Samar Badriddinov",
            image: "https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx",
        },
    },
];
export default Slider;
