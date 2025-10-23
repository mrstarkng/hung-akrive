import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from "next-themes";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {MDXProvider} from "@mdx-js/react";
import {AnchorHTMLAttributes, ClassAttributes, HTMLAttributes, OlHTMLAttributes} from "react";
import mdxComponentsStyles from "@/styles/MdxComponents.module.css";
import {Heading2} from "@/components/MDX/Header2";
import {Heading3} from "@/components/MDX/Header3";
import {GoogleAnalytics} from "nextjs-google-analytics";
import Image from "next/image";

const components = {
    h1: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => <h1 {...props} className={mdxComponentsStyles.h1}/>,
    h2: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => <Heading2 {...props} className={mdxComponentsStyles.h2}/>,
    h3: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => <Heading3 {...props} className={mdxComponentsStyles.h3}/>,
    p: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLParagraphElement> & HTMLAttributes<HTMLParagraphElement>) => <p {...props} className={mdxComponentsStyles.text}/>,
    a: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} target="_blank" rel="noreferrer noopener" className={mdxComponentsStyles.a}/>,
    ol: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLOListElement> & OlHTMLAttributes<HTMLOListElement>) => <ol {...props} className={mdxComponentsStyles.ol} />,
    ul: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLUListElement> & HTMLAttributes<HTMLUListElement>) => <ul {...props} className={mdxComponentsStyles.ul} />,
    img: ({ alt, ...props }: any) => (
        <Image {...props} alt={alt ?? ""} loading="lazy" fill />
    ),
};

export default function App({Component, pageProps}: AppProps) {
    return (
        <MDXProvider components={components}>
            <GoogleAnalytics trackPageViews />
            <ThemeProvider>
                <Navigation />
                <Component {...pageProps} />
                <Footer />
            </ThemeProvider>
        </MDXProvider>
    );
};
