import BlogPostLayout from "@/components/blogPostLayout";
import blogs from "@/static/blogData";

export default function BusyDay() {
  const blog = blogs.find((b) => b.slug === "busy-day");

  if (!blog) {
    return <p>404: Blog post not found!</p>
  }

  return (
    <BlogPostLayout
      title={blog.title}
      date={blog.date}
      image={blog.image}
      imageAlt={blog.imageAlt}
      description={blog.description}
    />
  );
}
