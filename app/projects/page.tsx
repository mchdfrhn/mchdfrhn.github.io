"use client";

import { useState, useEffect } from "react";
import { ProjectCard } from "@/components/project-card";
import { PROJECTS } from "@/lib/constants";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Motion } from "@/components/motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProjectsPage() {
  const [category, setCategory] = useState<string>("all");
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);

  const categories = [
    "all",
    ...Array.from(new Set(PROJECTS.map((project) => project.category))),
  ];

  useEffect(() => {
    if (category === "all") {
      setFilteredProjects(PROJECTS);
    } else {
      setFilteredProjects(
        PROJECTS.filter((project) => project.category === category)
      );
    }
  }, [category]);

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
              Projects
            </h1>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Explore my latest DevOps and infrastructure projects, showcasing my skills and experience.
            </p>
          </Motion>

          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 md:flex md:flex-wrap mb-8">
                {categories.map((cat) => (
                  <TabsTrigger
                    key={cat}
                    value={cat}
                    onClick={() => setCategory(cat)}
                    className="capitalize"
                  >
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </Motion>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                demoUrl={project.demoUrl}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>
        </div>
      </section>
      <ScrollToTop />
    </>
  );
}