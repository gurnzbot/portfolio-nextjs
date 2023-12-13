import { z } from "zod";

export const ContactFormSchema = z.object({
    name: z.string().min(1, "Please fill out your name"),
    email: z.string().email("Please enter a valid email address"),
    message: z.string().min(4, "Please tell me what you'd like to discuss!"),
});
