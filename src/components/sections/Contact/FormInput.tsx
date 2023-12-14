// * Lib
import { DetailedHTMLProps, HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { FieldError, FieldErrors, FieldValues, UseFormRegisterReturn } from "react-hook-form";

// * Components
import FormFieldError from "@/src/components/sections/Contact/FormFieldError";
import { twMerge } from "tailwind-merge";

type Props<T extends FieldValues> = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    register: UseFormRegisterReturn;
    type?: HTMLInputTypeAttribute;
    name: string;
    label: string;
    errors: FieldErrors<T>;
    isTextarea?: boolean;
};

function FormInput<T extends FieldValues>({ register, type = "text", name, label, errors, isTextarea, ...rest }: Props<T>) {
    const error = errors?.[name] as FieldError | undefined;
    const inputClassName = `block py-3 px-0 w-full text-white bg-transparent appearance-none focus:outline-none focus:ring-0 border-0 border-b-2 ${error?.message ? "border-red-500" : "border-gray-300"} focus:border-amber-200 disabled:border-neutral-500 disabled:text-slate-500 peer`;

    return (
        <div className="relative z-0">
            {isTextarea ? <textarea {...register} id={name} className={twMerge(inputClassName, "min-h-[200px] max-h-[400px]")} placeholder="" /> : <input {...register} type={type} id={name} {...rest} className={inputClassName} placeholder="" />}
            <label htmlFor={name} className="absolute text-amber-200 peer-placeholder-shown:text-white peer-focus:text-amber-200 peer-placeholder-shown:opacity-60 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:opacity-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-disabled:text-neutral-500">
                {label}
            </label>
            <FormFieldError error={error} />
        </div>
    );
}

export default FormInput;
