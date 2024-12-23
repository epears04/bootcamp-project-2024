"use client"; // to use use effect
import { useEffect, useState } from "react";
import ProjectPostLayout from "@components/projectLayout";

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const [project, setProject] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch data from the API
    async function fetchProject() {
      try {
        const { slug } = await params;
        const res = await fetch(`/api/projects/${slug}`);
        if (!res.ok) {
          throw new Error("project not found");
        }
        const data = await res.json();
        setProject(data);
      } catch (err: any) {
        setError(err.message);
      }
    }

    fetchProject();
  }, [params]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-torq">
        <h1 className="text-3xl">Loading Project...</h1>
      </div>
    )
  }

  return (
    <ProjectPostLayout
      title={project.title}
      date={project.date}
      image={project.image}
      image_alt={project.imageAlt}
      description={project.description}
      content={project.content}
      slug={project.slug}
      technologies={project.technologies}
      live_link={project.live_link}
      repo_link={project.repo_link}
      comments={project.comments}
    />
  );
}