"use server";

// * Lib
import { z } from "zod";
import { Resend } from "resend";

// * Utils
import { ContactFormSchema } from "@/src/utils/ContactFormSchema";

type Inputs = z.infer<typeof ContactFormSchema>;

const postContact = async (data: Inputs) => {
    // Validate form data
    const parsedData = ContactFormSchema.safeParse(data);
    if (!parsedData.success) {
        return {
            success: false,
            error: parsedData.error.format(),
        };
    }

    try {
        // Initialize Resend
        const resend = new Resend(process.env.RESEND_API_KEY);

        // Send email!
        const emailResp = await resend.emails.send({
            from: "onboarding@resend.dev",
            // from: "contact@erikgurney.com",
            to: "erik.gurney@hotmail.com",
            subject: `Contact | erikgurney.com: ${parsedData.data.name}`,
            html: `<p>${parsedData.data.message}</p>`,
        });

        // Check for email error
        if (emailResp.error) {
            console.log("Email error:", emailResp);

            return {
                success: false,
                error: emailResp.error.message,
            };
        }

        // Success!!
        return {
            success: true,
            data: parsedData.data,
        };
    } catch (e) {
        console.log("Email Error try/catch:", e);

        return {
            success: false,
            error: "Please try again",
        };
    }
};

export default postContact;
