import mongoose, { Schema } from "mongoose";

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
};

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
});

// defining the collection and model
const Project = mongoose.models['projects'] || mongoose.model('projects', projectSchema);

export default Project;