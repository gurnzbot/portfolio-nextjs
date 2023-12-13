import { z } from "zod";
import { ContactFormSchema } from "@/src/utils/ContactFormSchema";

type Inputs = z.infer<typeof ContactFormSchema>;

const postContact = async (data: Inputs) => {
    const parsedData = ContactFormSchema.safeParse(data);

    if (!parsedData.success) {
        return {
            success: false,
            error: parsedData.error.format(),
        };
    }

    return {
        success: true,
        data: parsedData.data,
    };
};

export default postContact;
