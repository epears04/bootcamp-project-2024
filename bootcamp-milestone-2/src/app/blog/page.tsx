import React from "react";
import BlogPreview from "@components/blogPreview";
import Blog from "@database/blogSchema";
import connectDB from "@database/db";

export default async function BlogPage() {
  async function getBlogs(){
    await connectDB() // function from db.ts before
    try {
        // query for all blogs and sort by date
        const blogs = await Blog.find().sort({ date: -1 }).orFail()
        // send a response as the blogs as the message
        return JSON.parse(JSON.stringify(blogs));
    } catch (err) {
        return null
    }
  }
  
  const blogs = await getBlogs();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-2 bg-torq">
      <h1 className="p-2 text-2xl font-semibold text-gray-800">BLOG</h1>
      <p className="mb-8 text-lg text-gray-700">Welcome to my blog! Here are some of my latest posts:</p>
      <div className="w-full max-w-3xl pb-5 mb-5 space-y-4">
        {blogs ? (
          blogs.map((blog: Blog) => (
            <BlogPreview key={blog.slug} {...blog} />
          ))
        ) : (
          <p className="text-red-500">No blogs found or an error occured</p>
        )}
      </div>
    </div>
  );
}
