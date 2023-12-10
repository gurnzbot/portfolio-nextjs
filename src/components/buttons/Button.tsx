import { AnchorHTMLAttributes, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type BaseProps = {
    componentStyles?: string;
    children: React.ReactNode;
};

type ButtonProps = BaseProps &
    HTMLAttributes<HTMLButtonElement> & {
        as: "button";
    };

type LinkProps = BaseProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        as: "link";
    };

export type ButtonComponentProps = ButtonProps | LinkProps;

function Button({ as, componentStyles, className, children, ...props }: ButtonComponentProps) {
    // Link
    if (as === "link") {
        return (
            <a className={twMerge(componentStyles, className)} {...(props as LinkProps)}>
                {children}
            </a>
        );
    }

    // Button
    return (
        <button className={twMerge(componentStyles, className)} {...(props as ButtonProps)}>
            {children}
        </button>
    );
}

export default Button;
