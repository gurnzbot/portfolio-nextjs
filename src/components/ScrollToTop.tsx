"use client";

import { IoIosArrowUp } from "react-icons/io";
import { useScrollStore } from "@/src/store/ScrollStore";

function ScrollToTop() {
    const { activeSection } = useScrollStore();

    return (
        <a href="#intro" className={`fixed bottom-2 right-2 px-5 py-5 bg-amber-500 rounded-md transition-all duration-200 delay-100 ${activeSection === "intro" ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
            <IoIosArrowUp />
        </a>
    );
}

export default ScrollToTop;
