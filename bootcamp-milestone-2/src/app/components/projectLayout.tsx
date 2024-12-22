import React from "react";
import Link from "next/link";
import Project from "@database/projectSchema";
import Comment from "@components/comment";

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
    comments,
}: Project) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-torq">
            <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
            <p className="m-1 text-gray-700">Posted on: {new Date(date).toLocaleDateString()}</p>
            <img src={image} alt={image_alt} className="max-w-3xl my-4 border-4 border-solid rounded-lg border-darkest-blue drop-shadow-lg" />
            <p className="text-lg font-bold text-gray-800">{description}</p>
            <p className="py-2 mx-4 text-lg text-gray-800">{content}</p>
            <p className="text-base text-gray-600">Technologies used: {technologies.join(", ")}</p>
            <Link href={repo_link} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600">
                Project Repo
            </Link>
            <Link href={live_link} target="_blank" rel="noopener norefferer" className="text-sm text-gray-600">
                Project Link
            </Link>
            <h2 className="mt-8 text-xl font-bold text-gray-800">Comments</h2>
            <div className="flex flex-col items-start justify-start">
                {comments.length > 0 ? (
                    <div className="w-full mt-4 space-y-5">
                    {comments.map((comment, index) => (
                        <Comment key={index} comment={comment} />
                    ))}
                    </div>
                    ) : (
                    <p className="mt-4 text-gray-600">No comments yet.</p>
                )}
            </div>
        </div>
    )
}