import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import Image from "next/image";
import { format } from "date-fns";
import { navItems } from "../config/constants";
import { Fragment } from "react/jsx-runtime";
import { SliderProps } from "./slider.props";

const Slider = ({ blogs, categories }: SliderProps) => {
    return (
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
                        {blogs.map((item) => (
                            <Box
                                key={item.id}
                                sx={{ display: "flex", gap: 2, mt: "10px" }}
                            >
                                <Image
                                    src={item.image.url}
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
                        {categories.map((nav) => (
                            <Fragment key={nav.slug}>
                                <Button
                                    sx={{
                                        justifyContent: "flex-start",
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
    );
};

export default Slider;
