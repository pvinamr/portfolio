import Link from "next/link";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <section style={{ display: "grid", gap: 18 }}>
      <h1 style={{ margin: 0, fontSize: 22 }}>Projects</h1>

      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 14 }}>
        {projects.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/projects/${p.slug}`}
              style={{ textDecoration: "none", fontWeight: 600 }}
            >
              {p.title}
            </Link>
            <div style={{ color: "#666", fontSize: 14 }}>{p.blurb}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
