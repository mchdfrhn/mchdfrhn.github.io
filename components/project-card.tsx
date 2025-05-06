"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Motion } from "@/components/motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
  demoUrl,
  githubUrl,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Motion
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="h-full"
    >
      <Card 
        className="h-full overflow-hidden group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
        <CardContent className="p-6 space-y-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground line-clamp-3">{description}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex gap-4">
          <Button asChild variant="outline" size="sm">
            <Link href={demoUrl} target="_blank" className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              Demo
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href={githubUrl} target="_blank" className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              Code
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </Motion>
  );
}