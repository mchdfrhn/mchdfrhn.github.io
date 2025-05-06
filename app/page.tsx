import Link from "next/link";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { AnimatedText } from "@/components/animated-text";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SOCIAL_LINKS } from "@/lib/constants";
import { Motion } from "@/components/motion";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent dark:from-blue-900/20" />
        <div className="container px-4 md:px-6 py-10 md:py-24 mx-auto">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <Motion
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center space-y-4"
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Mochammad Farhan Ali
                </h1>
                <h2 className="text-xl font-medium text-muted-foreground sm:text-2xl">
                  DevOps Engineer
                </h2>
                <p className="text-xl text-primary sm:text-2xl">
                  <AnimatedText
                    words={[
                      "AWS Certified Solutions Architect",
                      "Kubernetes Specialist",
                      "Infrastructure as Code Expert",
                      "CI/CD Pipeline Designer",
                      "Cloud Automation Engineer",
                    ]}
                  />
                </p>
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Building scalable, reliable, and secure infrastructure solutions for modern applications.
                Specializing in cloud architecture, containerization, and continuous delivery.
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/projects">
                    Explore My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <div className="flex items-center gap-4">
                  <Button asChild size="icon" variant="outline">
                    <Link href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button asChild size="icon" variant="outline">
                    <Link href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </Motion>
            <div className="hidden lg:flex items-center justify-center">
              <Motion
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative aspect-square size-full max-w-sm rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1"
              >
                <div className="absolute inset-0 rounded-full bg-muted dark:bg-muted/80 flex items-center justify-center">
                  <div className="relative size-3/4 font-black flex items-center justify-center text-6xl text-foreground/20">
                    FA
                  </div>
                </div>
              </Motion>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Cloud Infrastructure</h3>
              <p className="text-muted-foreground">
                Designing and implementing secure, scalable, and cost-effective cloud solutions on AWS, Azure, and GCP.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">CI/CD Pipelines</h3>
              <p className="text-muted-foreground">
                Building automated delivery pipelines that enable rapid and reliable software deployments using GitLab CI, Jenkins, and GitHub Actions.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Containerization</h3>
              <p className="text-muted-foreground">
                Implementing containerized applications and orchestration solutions with Docker and Kubernetes for improved scalability and portability.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Infrastructure as Code</h3>
              <p className="text-muted-foreground">
                Automating infrastructure provisioning and management using Terraform, CloudFormation, and Ansible for consistent and repeatable deployments.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Monitoring & Observability</h3>
              <p className="text-muted-foreground">
                Setting up comprehensive monitoring solutions using Prometheus, Grafana, and ELK stack to ensure system reliability and performance.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Security Automation</h3>
              <p className="text-muted-foreground">
                Implementing security best practices and automation to protect infrastructure and applications from threats and vulnerabilities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </>
  );
}