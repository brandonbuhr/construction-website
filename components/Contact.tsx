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
import { Separator } from "@/components/ui/separator";
import { GithubIcon, TwitterIcon, LinkedinIcon } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100 p-4">
      <Card className="mx-auto w-full max-w-md shadow-lg">
        <CardHeader className="flex flex-col items-center space-y-4 pb-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Brand Logo"
              width={40}
              height={40}
              className="h-8 w-8"
            />
          </div>
          <div className="space-y-1 text-center">
            <h1 className="text-2xl font-bold tracking-tight">
              Subscribe to Our Newsletter
            </h1>
            <p className="text-sm text-muted-foreground">
              Get the latest updates, news, and special offers sent directly to
              your inbox.
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 pb-2">
          <div className="flex flex-col space-y-2">
            <div className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12"
              />
              <Button className="absolute right-0 top-0 h-full rounded-l-none bg-purple-600 hover:bg-purple-700">
                Subscribe
              </Button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <Separator className="absolute" />
            <span className="relative bg-white px-2 text-xs text-muted-foreground">
              Or continue with
            </span>
          </div>

          <div className="flex justify-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full"
            >
              <TwitterIcon className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full"
            >
              <GithubIcon className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full"
            >
              <LinkedinIcon className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 pt-2">
          <div className="flex justify-center space-x-4 text-xs text-muted-foreground">
            <Link href="#" className="hover:underline">
              Terms
            </Link>
            <Link href="#" className="hover:underline">
              Privacy
            </Link>
            <Link href="#" className="hover:underline">
              Help
            </Link>
          </div>
          <p className="text-center text-xs text-muted-foreground">
            We respect your privacy. We'll never share your information.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
