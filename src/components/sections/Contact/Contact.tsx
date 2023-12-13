"use client";

// * Lib
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

// * Components
import FlatButton from "@/src/components/buttons/FlatButton";
import FormInput from "@/src/components/sections/Contact/FormInput";

// * Utils
import { ContactFormSchema } from "@/src/utils/ContactFormSchema";
import postContact from "@/src/actions/postContact";

type Inputs = z.infer<typeof ContactFormSchema>;

function Contact() {
    const [submitError, setSubmitError] = useState<string>();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(ContactFormSchema),
    });

    const submitForm: SubmitHandler<Inputs> = async data => {
        setSubmitError(undefined);

        const result = await postContact(data);

        if (!result) {
            setSubmitError("Something happened submitting the form :(");
            return;
        }

        if (result.error) {
            setSubmitError(`Something happened submitting the form: ${result.error}`);
            return;
        }

        reset();
    };

    return (
        <div id="contact" className="flex flex-col min-h-screen py-20 px-14 sm:px-32 justify-center snap-start bg-neutral-800 text-white">
            <div className="flex flex-col justify-center mb-10">
                <h2 className="text-3xl text-center text-amber-500 font-bold uppercase">Contact</h2>
                <h2 className="font-inconsolata text-3xl sm:text-xl text-center text-slate-300 tracking-tighter">I&apos;d love to hear from you!</h2>
            </div>

            <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-12">
                <div className="flex flex-1 flex-col gap-8">
                    <FormInput register={register("name")} name="name" label="Name" errors={errors} />
                    <FormInput register={register("email")} name="email" label="Email" type="email" errors={errors} />
                    <FormInput register={register("message")} name="message" label="Message" errors={errors} isTextarea />
                </div>

                {submitError && <div className="bg-red-500 px-5 py-1 rounded text-white">{submitError}</div>}

                <FlatButton as="button">Submit</FlatButton>
            </form>
        </div>
    );
}

export default Contact;
