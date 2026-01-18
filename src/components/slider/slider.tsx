import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import Image from "next/image";
import { Fragment } from "react/jsx-runtime";
import { SliderProps } from "./slider.props";
import { useRouter } from "next/router";
import { timeCalculate } from "../../pages/helpers/time-calculate";
import { format } from "date-fns";

const Slider = ({ blogs, categories }: SliderProps) => {
    const router = useRouter();
    return (
        <Box sx={{ width: { xs: "100%", md: "30%" } }}>
            <Box sx={{ position: "sticky", top: "100px" }}>
                <Box
                    sx={{
                        border: "1px solid #FFFDD0",
                        borderRadius: "8px",
                        padding: "15px",
                    }}
                >
                    <Typography variant="h5">Slide</Typography>
                    <Box>
                        {blogs.map((item) => (
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
                                    width={190}
                                    height={140}
                                    style={{
                                        borderRadius: "10px",
                                        cursor: "pointer",
                                    }}
                                    onClick={() =>
                                        router.push(`/blogs/${item.slug}`)
                                    }
                                />
                                <Box>
                                    <Typography variant="body1">
                                        {item.title}
                                    </Typography>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1,
                                            mt: "10px",
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

                                            <Typography
                                                sx={{
                                                    color: "rgba(255,255,255,0.9)",
                                                }}
                                            >
                                                {format(
                                                    new Date(item.createdAt),
                                                    "MM/dd/yyyy",
                                                )}{" "}
                                                {timeCalculate(
                                                    item.description.text,
                                                )}
                                                min read
                                            </Typography>
                                        </Box>
                                    </Box>
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
                        {categories.map((nav) => (
                            <Fragment key={nav.slug}>
                                <Button
                                    sx={{
                                        justifyContent: "flex-start",
                                        width: "100%",
                                        mt: "10px",
                                        textAlign: "start",
                                    }}
                                    onClick={() =>
                                        router.push(`/category/${nav.slug}`)
                                    }
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

export default Slider;
