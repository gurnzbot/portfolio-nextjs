type Props = {
    href: string;
    children: React.ReactNode;
};

function NavIcon({ href, children }: Props) {
    // Cannot use Nextjs <Link>, as Next uses history.push() for links and those are not hash change events.  A normal <a> tag must be used.
    return (
        <a className={`flex flex-1 items-center text-lg py-4 px-2 transition-all duration-0 hover:duration-150 text-white hover:text-amber-300`} href={href}>
            {children}
        </a>
    );
}

export default NavIcon;
