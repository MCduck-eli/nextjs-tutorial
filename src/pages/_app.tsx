import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "../styles/globals.css";
import them from "../helpers/them";

export default function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    useEffect(() => {
        NProgress.configure({ showSpinner: false });

        const handleStart = () => NProgress.start();
        const handleComplete = () => NProgress.done();

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);

        return () => {
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleComplete);
            router.events.off("routeChangeError", handleComplete);
        };
    }, [router]);
    return (
        <ThemeProvider theme={them}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
