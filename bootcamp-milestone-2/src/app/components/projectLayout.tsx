import React from "react";
import Link from "next/link";
import Project from "@database/projectSchema";

export default function ProjectLayout({
    title,
    date, 
    image, 
    image_alt,
    description,
    content,
    technologies, 
    live_link,
    repo_link,
}: Project) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-torq">
            <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
            <p className="m-1 text-gray-700">Posted on: {new Date(date).toLocaleDateString()}</p>
            <img src={image} alt={image_alt} className="max-w-3xl my-4 rounded-lg" />
            <p className="text-lg font-bold text-gray-800">{description}</p>
            <p className="text-lg text-gray-800">{content}</p>
            <p className="text-base text-gray-600">{technologies.join(", ")}</p>
            <Link href={repo_link} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600">
                Project Repo
            </Link>
            <Link href={live_link} target="_blank" rel="noopener norefferer" className="text-sm test-gray-600">
                Project Link
            </Link>
        </div>
    )
}