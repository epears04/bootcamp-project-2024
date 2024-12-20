import { NextRequest, NextResponse } from "next/server";
import ProjectSchema from "@database/projectSchema";
import connectDB from "@database/db";


export async function GET(req: NextRequest, context: { params: Promise<{ slug: string }> }) {
    await connectDB(); // function from db.ts before
    const { slug } = await context.params; // another destructure

    try {
        const project = await ProjectSchema.findOne({ slug }).orFail()
        return NextResponse.json(project)
    } catch (err) {
        return NextResponse.json('Project not found.', { status: 404 })
    }
}
