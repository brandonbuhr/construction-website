"use server";

import { z } from "zod";
import { formSchema } from "./schemas";
import { Resend } from 'resend';
import { EmailTemplate } from "@/components/ui/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);


export const send = async (emailFormData: z.infer<typeof formSchema>) => {
    const emailContent = await EmailTemplate({ firstName: emailFormData.name });
    const { error } = await resend.emails.send({
        from: `Buhr Construction <${process.env.RESEND_FROM_EMAIL}>`,
        to: [emailFormData.email],
        subject: 'Buhr Construction',
        react: emailContent,
    });
    if (error) {
        throw error;
    }
}

