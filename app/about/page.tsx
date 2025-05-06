import Image from "next/image";
import Link from "next/link";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SkillCard } from "@/components/skill-card";
import { SKILLS } from "@/lib/constants";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Metadata } from "next";
import { Motion } from "@/components/motion";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Mochammad Farhan Ali, a DevOps Engineer specializing in cloud infrastructure and automation.",
};

export default function AboutPage() {
  return (
    <>
      <section className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h1>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Get to know more about my experience, skills, and expertise in DevOps and cloud technologies.
            </p>
          </Motion>

          <div className="mt-16 grid gap-12 md:grid-cols-2">
            <Motion
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="space-y-6">
                <div className="relative mx-auto md:mx-0 aspect-square overflow-hidden rounded-xl bg-muted max-w-xs">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-foreground/10">
                    FA
                  </div>
                </div>
                <div className="flex justify-center md:justify-start">
                  <Button asChild variant="outline" className="gap-2">
                    <Link href="#" download="farhan-ali-resume.pdf">
                      <FileDown className="h-4 w-4" />
                      Download Resume
                    </Link>
                  </Button>
                </div>
              </div>
            </Motion>

            <Motion
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">Personal Introduction</h2>
              <p className="text-muted-foreground">
                I am a passionate DevOps Engineer with over 8 years of experience in designing, implementing, and managing cloud infrastructure 
                and CI/CD pipelines. I specialize in automation, containerization, and infrastructure as code, helping organizations 
                streamline their software delivery processes and improve operational efficiency.
              </p>
              <p className="text-muted-foreground">
                My expertise spans across multiple cloud platforms including AWS, GCP, and Azure, with a focus on 
                building scalable, secure, and highly available systems. I am committed to implementing best practices 
                and staying up-to-date with the latest technologies in the rapidly evolving DevOps landscape.
              </p>
              <p className="text-muted-foreground">
                When I'm not automating infrastructure or optimizing CI/CD pipelines, I enjoy contributing to open-source projects, 
                sharing knowledge through technical blog posts, and mentoring aspiring DevOps professionals.
              </p>
            </Motion>
          </div>

          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="mt-20 text-2xl font-bold">Technical Expertise</h2>
            <p className="mt-4 text-muted-foreground">
              Here's an overview of my technical skills and competencies across various domains.
            </p>
          </Motion>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <SkillCard title="DevOps Tools" skills={SKILLS.devOps} />
            <SkillCard title="Cloud Platforms" skills={SKILLS.cloud} />
            <SkillCard title="Programming Languages" skills={SKILLS.programming} />
            <SkillCard title="Additional Skills" skills={SKILLS.other} />
          </div>

          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-20 bg-muted/50 p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold">Professional Philosophy</h2>
            <p className="mt-4 text-muted-foreground">
              I believe in automation, infrastructure as code, and continuous improvement. My approach combines:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-muted-foreground ml-4">
              <li>Collaborative problem-solving with development and operations teams</li>
              <li>Building scalable and resilient infrastructure solutions</li>
              <li>Implementing robust security practices across the technology stack</li>
              <li>Continuous learning and adaptation to emerging technologies</li>
              <li>Knowledge sharing and documentation to empower team members</li>
            </ul>
          </Motion>
        </div>
      </section>
      <ScrollToTop />
    </>
  );
}