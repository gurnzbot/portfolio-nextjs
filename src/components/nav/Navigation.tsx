// * Lib
import { FaGithub, FaStackOverflow } from "react-icons/fa";

// * Components
import NavLink from "@/src/components/nav/NavLink";

function Navigation() {
    return (
        <div className="flex fixed w-full z-50 bg-black/80 px-10 justify-between">
            <nav className="flex gap-5">
                <NavLink href="#intro">Intro</NavLink>
                <NavLink href="#about">About</NavLink>
            </nav>
            <ul className="flex gap-10">
                <li className="flex">
                    <NavLink href="http://google.ca">
                        <FaGithub />
                    </NavLink>
                </li>
                <li className="flex">
                    <NavLink href="https://github.com/gurnzbot">
                        <FaGithub />
                    </NavLink>
                </li>
                <li className="flex">
                    <NavLink href="https://stackoverflow.com/users/1803539/gurnzbot">
                        <FaStackOverflow />
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
