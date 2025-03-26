"use server";

import { EmailTemplate } from "@/components/ui/email-template";
import { Resend } from "resend";
import { z } from "zod";
import { formSchema } from "./schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  try {

    const { error } = await resend.emails.send({
      from: `Buhr Construction<${process.env.RESEND_FROM_EMAIL}>`,
      to: `${process.env.TEMPORARY_EMAIL}` ,
      subject: "Welcome",
      react: EmailTemplate({ name: emailFormData.name }) as React.ReactElement,

    });

    if (error) {
      throw error;
    }
  } catch (e) {
    throw e;
  }
};