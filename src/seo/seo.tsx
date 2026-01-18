import Head from "next/head";
import { SeoProps } from "./seo.props";
import { siteConfig } from "../components/config/site";

const Seo = ({
    children,
    metaTitle = siteConfig.metaTitle,
    metaKeyWorks = siteConfig.metaKeyWork,
    metaDescription = siteConfig.metaDescription,
    author = siteConfig.author,
}: SeoProps) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>{metaTitle}</title>
                <meta name="keyworks" content={metaKeyWorks} />
                <meta name="author" content={author} />
                <meta name="description" content={metaDescription} />
            </Head>
            {children}
        </>
    );
};

export default Seo;
