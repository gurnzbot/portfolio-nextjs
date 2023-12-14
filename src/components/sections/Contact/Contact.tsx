"use client";

// TODO: hide form for awhile once submit is complete
// TODO: ensure email is populated as expected using a template

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
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(ContactFormSchema),
    });

    const submitForm: SubmitHandler<Inputs> = async data => {
        // Set up for request
        setSubmitError(undefined);
        setIsLoading(true);

        // Perform request
        const result = await postContact(data);

        // Re-enable things and parse results :D
        setIsLoading(false);

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
        <div id="contact" className="flex min-h-screen py-20 px-14 sm:px-32 justify-center snap-start bg-neutral-800 text-white">
            <div className="flex flex-1 flex-col max-w-3xl justify-center">
                <div className="flex flex-col justify-center mb-16 lg:mb-10">
                    <h2 className="text-3xl text-center text-amber-500 font-bold uppercase">Contact</h2>
                    <h2 className="font-inconsolata text-3xl sm:text-xl text-center text-slate-300 tracking-tighter">I&apos;d love to hear from you!</h2>
                </div>

                <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-12">
                    <div className="flex flex-1 flex-col gap-8">
                        <FormInput register={register("name")} name="name" label="Name" errors={errors} disabled={isLoading} />
                        <FormInput register={register("email")} name="email" label="Email" type="email" errors={errors} disabled={isLoading} />
                        <FormInput register={register("message")} name="message" label="Message" errors={errors} isTextarea disabled={isLoading} />
                    </div>

                    {submitError && <div className="bg-red-500 px-5 py-1 rounded text-white">{submitError}</div>}

                    <FlatButton as="button" loading={isLoading}>
                        Submit
                    </FlatButton>
                </form>
            </div>
        </div>
    );
}

export default Contact;
