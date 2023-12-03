"use client";

// * Lib
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaStackOverflow } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

// * Components
import NavLink from "@/src/components/nav/NavLink";
import NavIcon from "@/src/components/nav/NavIcon";
import useUnderScreenSize from "@/src/hooks/useUnderScreenSize";

function Navigation() {
    const [isLoaded, setIsLoaded] = useState(false);

    const [navbarDropdownShown, setNavbarDropdownShown] = useState(false);
    const [canAnimate, setCanAnimate] = useState(false);
    const [navbarMeasureDisplay, setNavbarMeasureDisplay] = useState(true);
    const [navbarHeight, setNavbarHeight] = useState(0);
    const navRef = useRef<HTMLElement | null>(null);

    const isSmallScreen = useUnderScreenSize({ screenSizeThreshold: 550, debounceTime: 0 });

    useEffect(() => {
        if (isLoaded || !navbarHeight || !navbarDropdownShown) return;

        setIsLoaded(true);
        setNavbarDropdownShown(false);
    }, [isLoaded, navbarHeight, navbarDropdownShown]);

    // The navbar is shown quickly so we can measure it's height for animation
    useEffect(() => {
        if (navbarMeasureDisplay) {
            // Set the height of the tailwind class
            // setNavbarHeight(`max-h-[${navRef.current?.clientHeight}px]`);4
            setNavbarHeight(navRef.current?.clientHeight || 0);

            // Hide the navbar while it waits for animation
            setNavbarMeasureDisplay(false);

            // Set the flag to begin animation
            setCanAnimate(true);
        }
    }, [navbarMeasureDisplay]);

    // Check if animation should begin and if the measuring has ended
    useEffect(() => {
        if (canAnimate && !navbarMeasureDisplay) {
            setNavbarDropdownShown(true);
            setCanAnimate(false);
        }
    }, [canAnimate, navbarMeasureDisplay]);

    // Click handler for showing & hiding the navbar
    const toggleNavbar = () => {
        if (navbarDropdownShown) setNavbarDropdownShown(false);
        else if (navbarHeight) setNavbarDropdownShown(true);
        else setNavbarMeasureDisplay(true);
    };

    return (
        <>
            {!isLoaded && <div className="flex fixed w-full bg-black/80 py-6" />}
            <div className={`flex fixed w-full z-50 bg-black/80 px-10 justify-between items-start ${isLoaded ? "opacity-1" : "opacity-0"}`}>
                <div>
                    <button onClick={toggleNavbar} className="resp-nav:hidden flex items-center text-xl py-3 transition-all duration-0 hover:duration-150 text-white hover:text-amber-300">
                        <GiHamburgerMenu />
                    </button>
                    <nav
                        ref={navRef}
                        style={{
                            maxHeight: navbarDropdownShown ? `${navbarHeight}px` : navbarMeasureDisplay ? "none" : isSmallScreen ? 0 : "none",
                        }}
                        className={`transition-max-height overflow-hidden ease-in-out ${navbarDropdownShown ? `duration-300` : navbarMeasureDisplay ? "" : "duration-50"}`}
                    >
                        <ul className="flex flex-col resp-nav:flex-row resp-nav:gap-5">
                            <li className="flex [&>*]:pb-2">
                                <NavLink href="#intro">Intro</NavLink>
                            </li>
                            <li className="flex [&>*]:pb-4 resp-nav:[&>*]:pb-2">
                                <NavLink href="#about">About</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                <ul className="flex gap-6">
                    <li className="flex">
                        <NavIcon href="http://google.ca">
                            <FaGithub />
                        </NavIcon>
                    </li>
                    <li className="flex">
                        <NavIcon href="https://github.com/gurnzbot">
                            <FaGithub />
                        </NavIcon>
                    </li>
                    <li className="flex">
                        <NavIcon href="https://stackoverflow.com/users/1803539/gurnzbot">
                            <FaStackOverflow />
                        </NavIcon>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Navigation;
