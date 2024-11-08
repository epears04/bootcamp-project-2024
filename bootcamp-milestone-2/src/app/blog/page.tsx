import React from "react";
import BlogPreview from "@components/blogPreview";
import blogs from "@/static/blogData";

export default function BlogPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-torq">
      <h1 className="p-2 text-3xl font-semibold">Blog</h1>
      <p className="mb-8 text-lg text-gray-700">Welcome to my blog! Here are some of my latest posts:</p>

      <div className="w-full max-w-3xl space-y-4">
        {blogs.map((blog) => (
          <BlogPreview key={blog.slug} {...blog} />
        ))}
      </div>
    </div>
  );
}
