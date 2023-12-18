// * Lib
import { AnchorHTMLAttributes } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    isActive?: boolean;
    children: React.ReactNode;
};

function NavLink({ href, isActive = false, children, ...props }: Props) {
    // Cannot use Nextjs <Link>, as Next uses history.push() for links and those are not hash change events.  A normal <a> tag must be used.
    return (
        <a {...props} className={`flex h-full items-center text-lg pt-3 pb-2 transition-all duration-0 hover:duration-150 ${isActive ? "text-amber-300" : "text-white hover:text-amber-300"} ${props.className}`} href={href}>
            {children}
        </a>
    );
}

export default NavLink;
