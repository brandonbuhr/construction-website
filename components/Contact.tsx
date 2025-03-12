"use client";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { formSchema } from "@/lib/schemas";
import { send } from "@/lib/email";
import { useState, useEffect } from "react";
export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  const [successMessage, setSuccessMessage] = useState("");

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await send(values);
      setSuccessMessage("Your message was sent successfully!");
      form.reset();
    } catch (error) {
      console.error(error);
      setSuccessMessage("An error occurred. Please try again.");
    }
  }

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (successMessage) {
      timer = setTimeout(() => {
        setSuccessMessage("");
      }, 4000);
    }

    return () => clearTimeout(timer);
  }, [successMessage]);

  return (
    <div className="flex w-full pb-36 pt-8 bg-gradient-to-br from-purple-50 to-purple-100 p-4">
      <Card className="mx-auto w-full max-w-md shadow-lg border-[4px] border-blue-600">
        <CardHeader className="flex flex-col items-center space-y-8 pb-2">
          <div className="space-y-8 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-blue-600">
              Call Us: 920-825-1318
            </h1>
            <h1 className="text-2xl font-bold tracking-tight">
              Let's talk about your next project
            </h1>
            <p className="text-md font-bold">
              Request a quote, schedule a consultation, or get more information
              about our products and services by filling out the form below.
            </p>
          </div>
        </CardHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 p-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Phone Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="bg-blue-600" type="submit">
              Submit
            </Button>
            {successMessage && (
              <div className="text-center text-blue-600 font-semibold mt-4">
                {successMessage}
              </div>
            )}
          </form>
        </Form>
        <CardFooter className="flex flex-col pt-2">
          <p className="text-center text-xs text-muted-foreground">
            We respect your privacy. We'll never share your information.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
