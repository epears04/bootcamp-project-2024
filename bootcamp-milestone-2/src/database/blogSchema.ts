import mongoose, { Schema } from "mongoose";

type IComment = {
	user: string;
	comment: string;
	time: Date;
}

// typescript type (can also be an interface)
type Blog = {
		title: string;
        slug: string; 
		date: Date;
		description: string; // for preview
        content: string; // for individual blog page
		image: string;
		image_alt: string;
		comments: IComment[]; // array for comments
};

const commentSchema = new Schema<IComment>({
	user: { type: String, required: true },
	comment: { type: String, required: true },
	time: { type: Date, required: true, default: Date.now },
});

// mongoose schema 
const blogSchema = new Schema<Blog>({
		title: { type: String, required: true },
		slug: { type: String, required: true },
		date: { type: Date, required: false, default: new Date()},
		description: { type: String, required: true },
		content: { type: String, required: false },
		image: { type: String, required: false },
		image_alt: { type: String, required: false },
		comments: {type: [commentSchema], default: []},
});

// defining the collection and model
const Blog = mongoose.models['blogs'] || mongoose.model('blogs', blogSchema);

export default Blog;