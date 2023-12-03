"use client";

// * Lib
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaStackOverflow } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

// * Components
import NavLink from "@/src/components/nav/NavLink";
import NavIcon from "@/src/components/nav/NavIcon";

function Navigation() {
    const [dropdownShown, setDropdownShown] = useState(false);

    const toggleNavbar = () => {
        setDropdownShown(prev => !prev);
    };

    return (
        <div className="flex flex-col fixed w-full z-50 bg-black/80">
            <div className="flex justify-between items-start px-10">
                <div>
                    <button onClick={toggleNavbar} className="resp-nav:hidden flex items-center text-2xl py-3 pr-2 transition-all duration-0 hover:duration-150 text-white hover:text-amber-300">
                        <GiHamburgerMenu />
                    </button>
                    <nav>
                        <ul className="hidden resp-nav:flex resp-nav:gap-5">
                            <li>
                                <NavLink href="#intro">Intro</NavLink>
                            </li>
                            <li>
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

            <nav className={`${dropdownShown ? "flex" : "hidden"} resp-nav:hidden w-full px-10`}>
                <ul className="flex flex-col">
                    <li className="flex [&>*]:pb-1">
                        <NavLink href="#intro">Intro</NavLink>
                    </li>
                    <li className="flex [&>*]:pb-4">
                        <NavLink href="#about">About</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;
