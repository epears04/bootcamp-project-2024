"use client"; // to use use effect
import { useEffect, useState } from "react";
import BlogPostLayout from "@/components/blogPostLayout";

export default function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const [blog, setBlog] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch data from the API
    async function fetchBlog() {
      try {
        const { slug } = await params;
        const res = await fetch(`/bootcamp-project-2024/api/blogs/${slug}`);
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
  }, [params]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!blog) {
    return <p>Loading blogs...</p>
  }

  if(blog) {
    return (
      <BlogPostLayout
        title={blog.title}
        date={blog.date}
        image={blog.image}
        image_alt={blog.imageAlt}
        description={blog.description}
        content={blog.content}
        slug={blog.slug}
        comments={blog.comments}
      />
    );
  }

  return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-torq">
      <h1 className="text-3xl font-bold text-red-500">Blog Not Found</h1>
      <p className="mt-2 text-gray-600">Sorry, the blog post you are looking for doesn't exist.</p>
    </div>
  )
}