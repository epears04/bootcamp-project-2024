import React from "react";
import Blog from "@database/blogSchema";

export default function BlogPostLayout({
  title,
  date,
  image,
  image_alt,
  description,
  content,
}: Blog ) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-torq">
      <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
      <p className="m-1 text-gray-700">Posted on: {new Date(date).toLocaleDateString()}</p>
      <p className="text-xl text-gray-800">{description}</p>
      <img src={image} alt={image_alt} className="max-w-3xl my-4 border-4 border-solid rounded-lg border-darkest-blue" />
      <p className="text-lg text-gray-600">{content}</p>
    </div>
  );
}
