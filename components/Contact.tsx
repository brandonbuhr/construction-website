import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

export default function Contact() {
  return (
    <div className="flex w-full pb-36 pt-8 bg-gradient-to-br from-purple-50 to-purple-100 p-4">
      <Card className="mx-auto w-full max-w-md shadow-lg">
        <CardHeader className="flex flex-col items-center space-y-8 pb-2">
          <div className="space-y-8 text-center">
            <h1 className="text-2xl font-bold tracking-tight">
              Let's talk about your next project
            </h1>
            <p className="text-sm text-muted-foreground">
              Request a quote, schedule a consultation, or get more information
              about our products and services by filling out the form below.
            </p>
          </div>
        </CardHeader>
        <CardContent className="mt-8 pb-2">
          <div className="flex flex-col space-y-4">
            <div className="relative">
              <Input type="text" placeholder="Name" className="pr-12" />
            </div>
            <div className="relative">
              <Input type="email" placeholder="Email" className="pr-12" />
            </div>
            <div className="relative">
              <Input type="number" placeholder="Phone" className="pr-12" />
            </div>
            <div className="relative">
              <Textarea placeholder="Type your message here" />
            </div>
            <div className="relative">
              <Button className="h-full rounded-8 bg-blue-600 hover:bg-blue-900">
                Send
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col pt-2">
          <p className="text-center text-xs text-muted-foreground">
            We respect your privacy. We'll never share your information.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
