"use client";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const FORMSPREE_FORM_ID = "xblkkoag";

export default function Contact() {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

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

        {state.succeeded ? (
          <div className="p-8 text-center text-blue-600 font-semibold">
            Your message was sent successfully!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 p-8">
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              required
              minLength={2}
              maxLength={50}
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <Input
              id="phone"
              name="phone"
              type="text"
              placeholder="Phone Number"
              minLength={2}
              maxLength={50}
            />
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />

            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              minLength={2}
              maxLength={50}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <Textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              required
              minLength={2}
              maxLength={500}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <Button
              className="bg-blue-600 hover:bg-blue-500"
              type="submit"
              disabled={state.submitting}
            >
              Submit
            </Button>
          </form>
        )}

        <CardFooter className="flex flex-col pt-2">
          <p className="text-center text-xs text-muted-foreground">
            We respect your privacy. We'll never share your information.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
