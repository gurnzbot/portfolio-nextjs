import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            fontFamily: {
                inconsolata: ["Inconsolata", "monospace"],
            },
            backgroundImage: {
                intro: "url('/images/homepage-bg-min.png')",
                contact: "url('/images/contact-bg.jpg')",
            },
            keyframes: {
                cursor: {
                    "0%, 50%": { opacity: "1" },
                    "51%, 100%": { opacity: "0" },
                },
            },
            animation: {
                cursor: "cursor 800ms infinite",
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
