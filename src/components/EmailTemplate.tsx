import { z } from "zod";

// * Utils
import { ContactFormSchema } from "@/src/utils/ContactFormSchema";

type Inputs = z.infer<typeof ContactFormSchema>;

export const EmailTemplate: React.FC<Readonly<Inputs>> = ({ name, email, message }) => (
    <div>
        <h1>You have a new contact submission!</h1>
        <div>
            <strong>{name}</strong> sent you an email.
        </div>
        <hr />
        <div>
            Email: <strong>{email}</strong>
        </div>
        <hr />
        <pre>{message}</pre>
    </div>
);
