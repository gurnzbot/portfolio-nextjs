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
import useSectionObserver from "@/src/hooks/useSectionObserver";

type Inputs = z.infer<typeof ContactFormSchema>;

const submissionThresholdMinutes = 30;

function Contact() {
    const { sectionRef } = useSectionObserver({ name: "contact" });

    const [submitError, setSubmitError] = useState<string>();
    const [isLoading, setIsLoading] = useState(false);

    const [lastSubmissionTime, setLastSubmissionTime] = useState(parseInt(localStorage.getItem("lastSubmissionTime") || "0"));
    const currentTime = new Date().getTime();
    const canSubmit = currentTime - lastSubmissionTime >= submissionThresholdMinutes * 60 * 1000;

    const [formAnimationClasses, setFormAnimationClasses] = useState(canSubmit ? "opacity-100 z-10" : "opacity-0");
    const [messageAnimationClasses, setMessageAnimationClasses] = useState(canSubmit ? "opacity-0 -translate-y-2 -z-10" : "opacity-100 translate-y-0");

    const {
        register,
        handleSubmit,
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

        // Set submission time
        const currentTime = new Date().getTime();
        setLastSubmissionTime(currentTime);
        localStorage.setItem("lastSubmissionTime", currentTime.toString());

        // Animate form & success message transition
        setMessageAnimationClasses("opacity-100 translate-y-0 z-10");
        setFormAnimationClasses("opacity-0 -z-10");
    };

    return (
        <div id="contact" ref={sectionRef} className="relative flex min-h-screen py-40 px-14 sm:px-32 justify-center snap-start bg-contact bg-cover bg-center bg-fixed text-white">
            <div className="absolute top-0 bottom-0 left-0 right-0 z-0 bg-black opacity-90" />
            <div className="flex flex-1 flex-col max-w-3xl z-10">
                <div className="flex flex-col justify-center mb-16 lg:mb-10">
                    <h2 className="text-3xl text-center text-amber-500 font-bold uppercase">Contact</h2>
                    <h2 className="font-inconsolata text-3xl sm:text-xl text-center text-slate-300 tracking-tighter">I&apos;d love to hear from you!</h2>
                </div>

                <div className="relative">
                    <form onSubmit={handleSubmit(submitForm)} className={`flex flex-col gap-12 transition-all duration-300 ease-in-out ${formAnimationClasses}`}>
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

                    <div className={`absolute top-5 left-0 right-0 flex flex-col gap-2 mt-10 transition-all delay-300 duration-500 ease-in-out ${messageAnimationClasses}`}>
                        <div className="text-4xl text-amber-200 text-center">Thank you for getting ahold of me!!</div>
                        <div className="text-xl text-white text-center">I&apos;ll be sure to check my email and get back to you shortly.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
