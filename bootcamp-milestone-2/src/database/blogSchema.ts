import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
type Blog = {
		title: string;
        slug: string; 
		date: Date;
		description: string; // for preview
        content: string; // for individual blog page
		image: string;
		image_alt: string;
		//comments: IComment[]; // array for comments
};


// mongoose schema 
const blogSchema = new Schema<Blog>({
		title: { type: String, required: true },
		slug: { type: String, required: true },
		date: { type: Date, required: false, default: new Date()},
		description: { type: String, required: true },
		content: { type: String, required: false },
		image: { type: String, required: false },
		image_alt: { type: String, required: false },
})

// defining the collection and model
const Blog = mongoose.models['blogs'] || mongoose.model('blogs', blogSchema);

export default Blog;