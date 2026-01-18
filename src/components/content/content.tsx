import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { format } from "date-fns";
import ContentProps from "./content.props";
import { timeCalculate } from "../../helpers/time-calculate";
import { useRouter } from "next/router";

const Content = ({ blogs }: ContentProps) => {
    const router = useRouter();
    return (
        <Box sx={{ width: { xs: "100%", md: "70%" } }}>
            {blogs.map((item) => (
                <Box
                    key={item.id}
                    sx={{
                        background: "rgb(1,1,1, .4)",
                        padding: "20px",
                        mt: "10px",
                        borderRadius: "10px",
                        boxShadow: "0 8px 16px rgba(255, 255, 255, 0.1)",
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
                            style={{ objectFit: "cover", cursor: "pointer" }}
                            onClick={() => router.push(`/blogs/${item.slug}`)}
                        />
                    </Box>
                    <Typography
                        sx={{ fontSize: { xs: "25px", md: "35px" } }}
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
                            <Typography>{item.author.name}</Typography>
                            {format(
                                new Date(item.createdAt),
                                "MM/dd/yyyy",
                            )} • {timeCalculate(item.description.text)}
                            min read
                        </Box>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default Content;
