"use client";

import { Motion } from "@/components/motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  image: string;
  slug: string;
  featured?: boolean;
}

export function BlogCard({
  title,
  excerpt,
  date,
  readingTime,
  category,
  image,
  slug,
  featured = false,
}: BlogCardProps) {
  return (
    <Motion
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Link href={`/blog/${slug}`}>
        <Card className={`h-full overflow-hidden group ${featured ? "lg:col-span-2" : ""}`}>
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={image}
              alt={title}
              width={800}
              height={400}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            {featured && (
              <Badge className="absolute top-4 left-4" variant="secondary">
                Featured
              </Badge>
            )}
            <Badge className="absolute top-4 right-4">{category}</Badge>
          </div>
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground line-clamp-2">{excerpt}</p>
          </CardContent>
          <CardFooter className="p-6 pt-0 flex justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{readingTime}</span>
            </div>
          </CardFooter>
        </Card>
      </Link>
    </Motion>
  );
}