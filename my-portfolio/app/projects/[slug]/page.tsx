import Link from "next/link";
import { getProject, projects } from "@/lib/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = getProject(slug);
  if (!project) return notFound();

  return (
    <section style={{ display: "grid", gap: 18 }}>
      <Link href="/projects" style={{ textDecoration: "none", color: "#666", fontSize: 14 }}>
        ← Back to projects
      </Link>

      <h1 style={{ margin: 0, fontSize: 26 }}>{project.title}</h1>

      <p style={{ margin: 0, color: "#333", lineHeight: 1.6 }}>
        {project.description}
      </p>

      <div style={{ display: "flex", gap: 14, fontSize: 14 }}>
        <a href={project.githubUrl} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        {project.liveUrl ? (
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            Live demo ↗
          </a>
        ) : null}
      </div>
    </section>
  );
}
