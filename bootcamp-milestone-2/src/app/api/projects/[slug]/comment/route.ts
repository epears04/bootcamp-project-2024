import { NextRequest, NextResponse } from "next/server";
import connectDB from "@database/db";
import Project from "@database/projectSchema";

export async function POST(req: NextRequest) {
    const url = new URL(req.url);
    const slug = url.pathname.split("/").at(-3); //to get slug assuming /api/projects/[slug]/comment/
    if (!slug) {
        return NextResponse.json({ error: "Must include a slug" }, { status: 400 });
    }
    const body = await req.json();

    const { user, comment, time } = body;

    if (!user || !comment || !time) {
        return NextResponse.json({ error: "Missing required field" }, { status: 400 });
    }

    try {
        await connectDB();

        const updatedProject = await Project.findOneAndUpdate(
            { slug: slug },
            { $push: { comments: { user, comment, time } } },
            { new: true }
        );

        if(!updatedProject) {
            return NextResponse.json({ error: "Project not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Comment added", updatedProject });
    } catch(err) {
        console.log("Error adding comment", err);
        return NextResponse.json({ error: "Could not add comment" }, { status: 500 });
    }
}