import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            fontFamily: {
                inconsolata: ["Inconsolata"],
            },
            backgroundImage: {
                intro: "url('/images/homepage-bg-min.png')",
                contact: "url('/images/contact-bg.jpg')",
            },
            animation: {
                cursor: "cursor infinite 800ms",
            },
            screens: {
                xs: "383px",
                "resp-nav": "630px",
                timeline: "900px",
            },
            transitionProperty: {
                "max-height": "max-height",
            },
        },
    },
    plugins: [],
};
export default config;
