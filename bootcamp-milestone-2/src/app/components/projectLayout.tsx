"use state";
import React, { useState } from "react";
import Link from "next/link";
import Project from "@database/projectSchema";
import Comment from "@components/comment";

export default function ProjectLayout({
    title,
    date, 
    image, 
    slug,
    image_alt,
    description,
    content,
    technologies, 
    live_link,
    repo_link,
    comments: initialComments,
}: Project) {
    const[comments, setComments] = useState(initialComments || []);
    const[newComment, setNewComment] = useState({ user: "", comment: "" });
    const[loading, setLoading] = useState(false);
    
    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
        const resp = await fetch(`/api/projects/${slug}/comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            user: newComment.user,
            comment: newComment.comment,
            time: new Date().toISOString(),
        }),
        });

        if(!resp.ok) {
        throw new Error("Failed to submit comment.");
        }

        const data = await resp.json();
        setComments(data.updatedProject.comments);
        setNewComment({ user: "", comment: "" }); // clear form
    } catch(err) {
        console.error("Error posting coment:", err);
    } finally {
        setLoading(false);
    }
    
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-10 bg-torq">
            <div className="flex flex-col items-center p-2 m-4 text-center">
                <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
                <p className="m-1 text-gray-700">Posted on: {new Date(date).toLocaleDateString()}</p>
                <img src={image} alt={image_alt} className="max-w-3xl my-4 border-4 border-solid rounded-lg border-darkest-blue drop-shadow-lg" />
                <p className="text-base text-gray-700">Technologies used: {technologies.join(", ")}</p>
                <p className="mt-2 text-lg font-bold text-gray-800">{description}</p>
                <p className="py-2 mx-8 text-lg text-gray-800">{content}</p>
                <div className="flex m-1 space-x-3">
                    <Link href={repo_link} target="_blank" rel="noopener noreferrer" className="text-base text-gray-700">
                        Project Repo
                    </Link>
                    <Link href={live_link} target="_blank" rel="noopener norefferer" className="text-base text-gray-700">
                        Project Link
                    </Link>
                </div>
            </div>
        <div className="w-full px-10 mx-10 mt-3">
            <h2 className="text-xl font-bold text-gray-800">Comments</h2>
            {comments.length > 0 ? (
            <div className="w-full mt-4 space-y-5">
                {comments.map((comment, index) => (
                <Comment key={index} comment={comment} />
                ))}
            </div>
            ) : (
            <p className="mt-4 text-gray-600">No comments yet.</p>
            )}
            <form onSubmit={handleSubmit} className="flex content-center justify-center min-w-full px-0 m-6 space-x-2">
                <div>
                    <input 
                    type="text"
                    placeholder="Username"
                    value={newComment.user}
                    onChange={(e) => setNewComment({ ...newComment, user: e.target.value })}
                    className="h-full p-2 border rounded-md border-stone-300 focus:outline-none focus:ring-2 focus:ring-header-blue bg-light-cream"
                    required
                    />
                </div>
                <div className="w-1/2">
                    <textarea
                    placeholder="Your Comment"
                    value={newComment.comment}
                    onChange= {(e) => setNewComment({ ...newComment, comment: e.target.value })}
                    className="w-full h-full p-2 border rounded-md border-stone-300 focus:outline-none focus:ring-2 focus:ring-header-blue bg-light-cream"
                    rows={1}
                    required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className={`p-2 text-cream bg-darkest-blue rounded ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                    {loading ? "Posting..." : "Add Comment"}
                </button>
            </form>
      </div>
    </div>
    )
}