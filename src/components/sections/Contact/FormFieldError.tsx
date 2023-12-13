import { FieldError } from "react-hook-form";

type Props = {
    error?: FieldError;
};

function FormFieldError({ error }: Props) {
    if (!error?.message) return null;

    return (
        <div role="alert" className="absolute rounded right-0 -translate-y-1/2 bg-red-500 text-white px-5 py-1 text-sm before:absolute before:right-full before:top-0 before:-mr-[2px] before:bottom-0 before:contents[''] before:border-transparent before:border-r-red-500 before:border-[13px]">
            {error.message}
        </div>
    );
}

export default FormFieldError;
