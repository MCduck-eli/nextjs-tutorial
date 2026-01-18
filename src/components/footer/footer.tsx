import { Box, Typography } from "@mui/material";
import { format } from "date-fns";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

const Footer = () => {
    return (
        <Box
            padding={"20px"}
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#333",
                color: "white",
            }}
        >
            <Typography>
                @{format(new Date(), "yyyy")} All rights reseved
            </Typography>
            <Box sx={{ display: "flex", gap: "15px" }}>
                <Link
                    href={"https://t.me/e_halikov"}
                    style={{ color: "white" }}
                    target="_blank"
                >
                    <TelegramIcon sx={{ cursor: "pointer" }} />
                </Link>
                <Link
                    href={"https://www.instagram.com/eldor.halikov/?next=%2F"}
                    style={{ color: "white" }}
                    target="_blank"
                >
                    <InstagramIcon sx={{ cursor: "pointer" }} />
                </Link>
                <Link
                    href={"https://github.com/MCduck-eli"}
                    style={{ color: "white" }}
                    target="_blank"
                >
                    <GitHubIcon sx={{ cursor: "pointer" }} />
                </Link>
            </Box>
        </Box>
    );
};

export default Footer;
