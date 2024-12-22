import { NextRequest, NextResponse } from "next/server";
import connectDB from "@database/db";
import Blog from "@database/blogSchema";

export async function POST(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const body = await req.json();

    console.log("Blog slug:", slug);
    console.log("Request body:", body); 

    const { user, comment, time } = body;

    if (!user || !comment || !time) {
        return NextResponse.json({ error: "Missing required field" }, { status: 400 });
    }

    try {
        await connectDB();

        const updatedBlog = await Blog.findOneAndUpdate(
            { slug: slug },
            { $push: { comments: { user, comment, time } } },
            { new: true }
        );

        if (!updatedBlog) {
            return NextResponse.json({ error: "Blog not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Comment added", updatedBlog });
    } catch(err) {
        console.log("Error adding comment", err);
        return NextResponse.json({ error: "Could not add comment" }, { status: 500 });
    }
}