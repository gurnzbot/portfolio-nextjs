import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                inconsolata: ["Inconsolata"],
            },
            backgroundImage: {
                intro: "url('/images/homepage-bg-min.png')",
            },
            animation: {
                cursor: "cursor infinite 800ms",
            },
            screens: {
                xs: "383px",
                "resp-nav": "550px",
            },
            transitionProperty: {
                "max-height": "max-height",
            },
        },
    },
    plugins: [],
};
export default config;
