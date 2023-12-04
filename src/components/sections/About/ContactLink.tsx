import { AnchorHTMLAttributes } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
    Icon: JSX.ElementType;
    children: React.ReactNode;
};

function ContactLink({ Icon, children, ...props }: Props) {
    return (
        <a {...props} className="flex gap-1 items-center hover:text-amber-600 transition-all duration-0 hover:duration-150 active:text-amber-700">
            <span className="mt-1 text-lg opacity-70">
                <Icon />
            </span>
            <span className="text-ellipsis overflow-hidden">{children}</span>
        </a>
    );
}

export default ContactLink;
