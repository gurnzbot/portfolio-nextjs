import { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import Spinner from "../Spinner";

type BaseProps = {
    componentStyles?: string;
    loading?: boolean;
    children: React.ReactNode;
};

type ButtonProps = BaseProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        as: "button";
    };

type LinkProps = BaseProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        as: "link";
    };

export type ButtonComponentProps = ButtonProps | LinkProps;

function Button({ as, componentStyles, loading, className, children, ...props }: ButtonComponentProps) {
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
            <div className="relative">
                <div>{children}</div>
                {loading && (
                    <div className="absolute left-full top-0 pl-2">
                        <Spinner w="w-5" />
                    </div>
                )}
            </div>
        </button>
    );
}

export default Button;
