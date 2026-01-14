import { JSX } from "react";
import { LayoutProps } from "./layout.props";
import { Navbar } from "../components";
import Footer from "../components/footer/footer";
import { Box } from "@mui/material";

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div>
            <Navbar />
            <Box minHeight={"90vh"}>{children}</Box>
            <Footer />
        </div>
    );
};

export default Layout;
