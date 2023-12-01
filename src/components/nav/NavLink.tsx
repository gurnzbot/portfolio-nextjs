"use client";

// * Lib
import { useCallback, useEffect, useState } from "react";

type Props = {
    href: string;
    children: React.ReactNode;
};

function NavLink({ href, children }: Props) {
    const [active, setActive] = useState(window ? window.location.hash === href : false);

    const hashChange = useCallback(() => {
        setActive(window.location.hash === href);
    }, []);

    useEffect(() => {
        window.addEventListener("hashchange", hashChange);

        return () => {
            window.removeEventListener("hashchange", hashChange);
        };
    }, []);

    // Cannot use Nextjs <Link>, as Next uses history.push() for links and those are not hash change events.  A normal <a> tag must be used.
    return (
        <a className={`text-lg py-2  transition-all duration-0 hover:duration-150 ${active ? "text-amber-200" : "text-white hover:text-amber-200"}`} href={href}>
            {children}
        </a>
    );
}

export default NavLink;
