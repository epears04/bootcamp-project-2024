"use client"; // to use use effect
import { useEffect, useState } from "react";
import BlogPostLayout from "@/components/blogPostLayout";

export default function BlogPage({ params }: { params: { slug: string } }) {
  const [blog, setBlog] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch data from the API
    async function fetchBlog() {
      try {
        const res = await fetch(`/bootcamp-project-2024/api/Blogs/${params.slug}`);
        if (!res.ok) {
          throw new Error("Blog not found");
        }
        const data = await res.json();
        setBlog(data);
      } catch (err: any) {
        setError(err.message);
      }
    }

    fetchBlog();
  }, [params.slug]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!blog) {
    return <p>No blog</p>
  }

  return (
    <BlogPostLayout
      title={blog.title}
      date={blog.date}
      image={blog.image}
      imageAlt={blog.imageAlt}
      description={blog.description}
      content={blog.content}
    />
  );
}