import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const Hero = () => {
    return (
        <Box sx={{ width: "100%", height: "70vh", position: "relative" }}>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                showDots={true}
                arrows={true}
                swipeable={true}
                draggable={true}
            >
                {data.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            position: "relative",
                            width: "100%",
                            height: "70vh",
                        }}
                    >
                        <Box>
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                style={{ objectFit: "cover" }}
                                priority={index === 0}
                            />
                        </Box>
                        <Box
                            sx={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                background: "rgb(0, 0, 0, .4)",
                                color: "white",
                            }}
                            padding={4}
                        >
                            <Typography
                                variant="h4"
                                sx={{ fontWeight: "bold" }}
                            >
                                {item.title}
                            </Typography>
                            <Typography variant="h6" sx={{ mt: 1 }}>
                                {item.excerpt}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Carousel>
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

export default Hero;
