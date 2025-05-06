import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Motion } from "@/components/motion";

export default function NotFound() {
  return (
    <div className="container flex min-h-[calc(100vh-4rem)] px-4 py-24 md:px-6">
      <div className="mx-auto flex max-w-2xl flex-col items-center justify-center space-y-8 text-center">
        <Motion
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-extrabold tracking-tighter">404</h1>
        </Motion>
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Page Not Found
          </h2>
          <p className="max-w-md text-muted-foreground md:text-xl/relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex justify-center">
            <Button asChild>
              <Link href="/">Return Home</Link>
            </Button>
          </div>
        </Motion>
      </div>
    </div>
  );
}