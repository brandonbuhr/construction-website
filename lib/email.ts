"use server";

import { z } from "zod";
import { formSchema } from "./schemas";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


export const send = async (emailFormData: z.infer<typeof formSchema>) => {

}

