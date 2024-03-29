"use client";

// * Lib
import { useState } from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

// * Components
import NavLink from "@/src/components/nav/NavLink";
import NavIcon from "@/src/components/nav/NavIcon";

// * Utils
import { useScrollStore } from "@/src/store/ScrollStore";

function Navigation() {
    const { activeSection } = useScrollStore();
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
                        <ul className={`flex flex-col resp-nav:flex-row resp-nav:gap-8 overflow-hidden transition-max-height duration-300 ${dropdownShown ? "max-h-[400px]" : "max-h-0 resp-nav:max-h-none"}`}>
                            <li>
                                <NavLink href="#intro" isActive={activeSection === "intro"}>
                                    Intro
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="#about" isActive={activeSection === "about"}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="#experience" isActive={activeSection === "experience"}>
                                    Experience
                                </NavLink>
                            </li>
                            <li className="[&>*]:pb-4 resp-nav:[&>*]:pb-2">
                                <NavLink href="#contact" isActive={activeSection === "contact"}>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                <ul className="flex gap-6">
                    <li className="flex">
                        <NavIcon href="https://www.linkedin.com/in/erikgurney/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </NavIcon>
                    </li>
                    <li className="flex">
                        <NavIcon href="https://github.com/gurnzbot" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </NavIcon>
                    </li>
                    <li className="flex">
                        <NavIcon href="https://stackoverflow.com/users/1803539/gurnzbot" target="_blank" rel="noopener noreferrer">
                            <FaStackOverflow />
                        </NavIcon>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;
