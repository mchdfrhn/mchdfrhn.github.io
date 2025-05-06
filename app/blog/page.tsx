"use client";

import { useState } from "react";
import { BlogCard } from "@/components/blog-card";
import { BLOG_POSTS } from "@/lib/constants";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Motion } from "@/components/motion";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { Metadata } from "next";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(BLOG_POSTS.map((post) => post.category))
  );

  const featuredPosts = BLOG_POSTS.filter((post) => post.featured);
  
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });

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
              Blog
            </h1>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Insights, tutorials, and thoughts on DevOps, cloud infrastructure, and automation.
            </p>
          </Motion>

          {featuredPosts.length > 0 && (
            <Motion
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold mb-6">Featured Posts</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {featuredPosts.map((post) => (
                  <BlogCard
                    key={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    readingTime={post.readingTime}
                    category={post.category}
                    image={post.image}
                    slug={post.slug}
                    featured={true}
                  />
                ))}
              </div>
            </Motion>
          )}

          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16"
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 md:items-center mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge
                  className={`cursor-pointer ${!selectedCategory ? 'bg-primary' : 'bg-secondary'}`}
                  onClick={() => setSelectedCategory(null)}
                >
                  All
                </Badge>
                {categories.map((category) => (
                  <Badge
                    key={category}
                    className={`cursor-pointer ${selectedCategory === category ? 'bg-primary' : 'bg-secondary'}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </Motion>

          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <BlogCard
                    key={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    readingTime={post.readingTime}
                    category={post.category}
                    image={post.image}
                    slug={post.slug}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg text-muted-foreground">
                    No posts found matching your criteria. Try adjusting your search or filters.
                  </p>
                </div>
              )}
            </div>
          </Motion>
        </div>
      </section>
      <ScrollToTop />
    </>
  );
}