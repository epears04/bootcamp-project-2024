
import { NextRequest, NextResponse } from "next/server";
import blogSchema from "@database/blogSchema";
import connectDB from "@database/db";


type IParams = {
    params: {
        slug: string
    };
};

export async function GET(req: NextRequest, { params }: IParams) {
    await connectDB(); // function from db.ts before
    const { slug } = await params; // another destructure

    try {
        const blog = await blogSchema.findOne({ slug }).orFail()
        return NextResponse.json(blog)
    } catch (err) {
        return NextResponse.json('Blog not found.', { status: 404 })
    }
}