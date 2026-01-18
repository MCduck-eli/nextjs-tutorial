import { Avatar, Box, Typography } from "@mui/material";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HeroProps from "./hero.props";
import { format } from "date-fns";
import { timeCalculate } from "../../helpers/time-calculate";
import { useRouter } from "next/router";

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

const Hero = ({ blogs }: HeroProps) => {
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
                {blogs.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            position: "relative",
                            width: "100%",
                            height: "70vh",
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                zIndex: 1,
                            }}
                        >
                            <Image
                                src={item.image.url}
                                alt={item.title}
                                fill
                                style={{
                                    objectFit: "cover",
                                }}
                                priority={index === 0}
                            />
                        </Box>

                        <Box
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                background:
                                    "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,3) 100%)",
                                zIndex: 2,
                            }}
                        />

                        <Box
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                zIndex: 3,
                            }}
                            padding={4}
                        >
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    fontSize: { xs: "25px", md: "35px" },
                                    color: "white",
                                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                                }}
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                sx={{
                                    mt: 1,
                                    fontSize: { xs: "15px", md: "22px" },
                                    color: "white",
                                    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                                }}
                            >
                                {item.excerpt}
                            </Typography>

                            <Box
                                sx={{
                                    display: "flex",
                                    gap: 1,
                                    mt: 2,
                                    alignItems: "center",
                                }}
                            >
                                <Avatar
                                    src={item.author.avatar.url}
                                    alt={item.author.name}
                                    sx={{
                                        mt: "5px",
                                        border: "2px solid white",
                                        width: 50,
                                        height: 50,
                                    }}
                                />
                                <Box>
                                    <Typography
                                        sx={{
                                            color: "white",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {item.author.name}
                                    </Typography>
                                    <Typography
                                        sx={{ color: "rgba(255,255,255,0.9)" }}
                                    >
                                        {format(
                                            new Date(item.createdAt),
                                            "MM/dd/yyyy",
                                        )}{" "}
                                        • {timeCalculate(item.description.text)}
                                        min read
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Carousel>
        </Box>
    );
};

export default Hero;
