"use client";

// * Lib
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

// * Utils
import { useScrollStore } from "@/src/store/ScrollStore";

function ScrollToTop() {
    const { activeSection } = useScrollStore();

    // Classes used to display/hide the button
    const [opacityClass, setOpacityClass] = useState("opacity-0");
    const [hiddenClass, setHiddenClass] = useState("");

    useEffect(() => {
        let t: NodeJS.Timeout | null = null;

        // If the active section is the intro, fade out the button and hide it after a short wait so it's not functional in the DOM
        if (activeSection === "intro") {
            if (t) clearTimeout(t);
            setOpacityClass("opacity-0");

            t = setTimeout(() => {
                setHiddenClass("hidden");
            }, 200);
        }
        // Otherwise, allow the button to be functional in the DOM and fade it in after a slight wait
        else {
            if (t) clearTimeout(t);
            setHiddenClass("");

            t = setTimeout(() => {
                setOpacityClass("opacity-100");
            }, 100);
        }

        return () => {
            if (t) clearTimeout(t);
        };
    }, [activeSection]);

    return (
        <a href="#intro" className={`${opacityClass} ${hiddenClass} fixed bottom-2 right-2 px-5 py-5 bg-amber-500 rounded-md hover:bg-amber-600 active:bg-amber-500 transition-all ease-in-out`}>
            <IoIosArrowUp />
        </a>
    );
}

export default ScrollToTop;
