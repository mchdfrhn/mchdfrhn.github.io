import { ContactForm } from "@/components/contact-form";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Motion } from "@/components/motion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Mochammad Farhan Ali for DevOps consulting, collaborations, or inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <section className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Have a question or want to discuss a potential collaboration? Feel free to reach out.
            </p>
          </Motion>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            <Motion
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <p className="text-muted-foreground">
                I'm always open to discussing new projects, opportunities, or partnerships.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Mail className="mt-1 h-5 w-5 text-muted-foreground" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">contact@farhanali.dev</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="mt-1 h-5 w-5 text-muted-foreground" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">Jakarta, Indonesia</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="mt-1 h-5 w-5 text-muted-foreground" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">+62 812 3456 7890</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Connect on Social Media</h3>
                <div className="flex space-x-4">
                  <Link
                    href="https://github.com/farhanali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    GitHub
                  </Link>
                  <Link
                    href="https://linkedin.com/in/farhanali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    LinkedIn
                  </Link>
                </div>
              </div>
            </Motion>

            <Motion
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-bold">Send a Message</h2>
              <ContactForm />
            </Motion>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </>
  );
}