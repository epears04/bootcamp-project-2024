import React from "react";
import ProjectPreview from "@components/projectPreview";
import Project from "@database/projectSchema";
import connectDB from "@database/db";

export default async function PortfolioPage() {
    async function getProjects() {
        await connectDB();
        try {
            const projs = await Project.find().sort({ date: -1 }).orFail();
            return JSON.parse(JSON.stringify(projs));
        } catch (err) {
            return null;
        }
    }
    
    const projects = await getProjects();
    
    return(
        <div className="flex flex-col items-center min-h-screen bg-torq">
            <h1 className="p-1 m-3 text-2xl font-semibold text-gray-800">PORTFOLIO</h1>
            <div className="w-full max-w-3xl pb-5 mb-5 space-y-4">
                {projects ? (projects.map((project: Project) =>
                    <ProjectPreview key={project.slug} {...project} />)) :
                    (<p className="text-red-500">No projects found or an error occured.</p>)
                }
            </div>
        </div>
    )
}