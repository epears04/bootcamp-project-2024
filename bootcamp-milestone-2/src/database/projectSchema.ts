import mongoose, { Schema } from "mongoose";

type IComment = {
    user: string;
    comment: string;
    time: Date;
}

// typescript type (can also be an interface)
type Project = {
    title: string;
    slug: string; 
    date: Date;
    description: string; // for preview
    content: string; // for individual project page
    image: string;
    image_alt: string;
    technologies: string[];
    live_link: string;
    repo_link: string; 
    comments: IComment[];
};

const commentSchema = new Schema<IComment>({
    user: { type: String, required: true },
    comment: { type: String, required: true },
    time: { type: Date, required: true, default: Date.now },
});

// mongoose schema 
const projectSchema = new Schema<Project>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: Date, required: false, default: new Date()},
    description: { type: String, required: true },
    content: { type: String, required: false },
    image: { type: String, required: false },
    image_alt: { type: String, required: false },
    technologies: { type: [String], required: false },
    live_link: { type: String, required: false, default: ''},
    repo_link: { type: String, required: false, default: '' },
    comments: { type: [commentSchema], default: [] },
});

// defining the collection and model
const Project = mongoose.models['projects'] || mongoose.model('projects', projectSchema);

export default Project;