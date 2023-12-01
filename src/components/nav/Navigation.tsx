import NavLink from "@/src/components/nav/NavLink";

function Navigation() {
    return (
        <div className="flex fixed w-full z-50 bg-black/70 justify-center">
            <nav className="flex gap-5">
                <NavLink href="#intro">Intro</NavLink>
                <NavLink href="#about">About</NavLink>
            </nav>
        </div>
    );
}

export default Navigation;
