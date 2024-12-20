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
        const res = await fetch(`/bootcamp-project-2024/projects/${slug}`);
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
    return <p>Loading projects...</p>
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
    />
  );
}