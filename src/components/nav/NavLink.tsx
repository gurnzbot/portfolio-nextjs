"use client";

// * Lib
import { AnchorHTMLAttributes, useCallback, useEffect, useState } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    children: React.ReactNode;
};

function NavLink({ href, children, ...props }: Props) {
    const [active, setActive] = useState(false);

    const hashChange = useCallback(() => {
        setActive(window.location.hash === href);
    }, [href]);

    useEffect(() => {
        hashChange();
    }, [href]);

    useEffect(() => {
        window.addEventListener("hashchange", hashChange);

        return () => {
            window.removeEventListener("hashchange", hashChange);
        };
    }, [hashChange]);

    // Cannot use Nextjs <Link>, as Next uses history.push() for links and those are not hash change events.  A normal <a> tag must be used.
    return (
        <a {...props} className={`flex h-full items-center text-lg py-3 transition-all duration-0 hover:duration-150 ${active ? "text-amber-300" : "text-white hover:text-amber-300"} ${props.className}`} href={href}>
            {children}
        </a>
    );
}

export default NavLink;
