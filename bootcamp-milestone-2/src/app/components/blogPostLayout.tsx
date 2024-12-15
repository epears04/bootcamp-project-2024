import React from "react";

export default function BlogPostLayout({
  title,
  date,
  image,
  imageAlt,
  description,
  content,
}: {
  title: string;
  date: string;
  image: string;
  imageAlt: string;
  description: string;
  content: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-torq">
      <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
      <p className="text-gray-700">Posted on: {date}</p>
      <img src={image} alt={imageAlt} className="max-w-3xl my-4 rounded-lg" />
      <p className="text-xl text-gray-800">{description}</p>
      <p className="text-lg text-gray-600">{content}</p>
    </div>
  );
}
