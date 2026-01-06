import Link from "next/link";

export default function ProjectsPage() {
  return (
    <section style={{ display: "grid", gap: 18 }}>
      <h1 style={{ margin: 0, fontSize: 22 }}>Projects</h1>

      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 14 }}>
        <li>
          <Link href="/projects/muse" style={{ textDecoration: "none", fontWeight: 600 }}>
            muse
          </Link>
          <div style={{ color: "#666", fontSize: 14 }}>
            muse is a knowledge search and capture tool designed to replace tabs as bookmarks. Instead of keeping dozens of tabs open to remember things, 
            muse lets you clip text from anywhere, store it locally, and search across everything you've saved. version 1 - built with python
          </div>
        </li>

        <li>
          <Link href="/projects/core" style={{ textDecoration: "none", fontWeight: 600 }}>
            core
          </Link>
          <div style={{ color: "#666", fontSize: 14 }}>
            core is a local-first personal growth book built with Tauri, Rust, and TypeScript. Each day gets its own structured journal page with six sections: today's schedule, goals, 
            to-do, motivation, happiness, and daily journal.
          </div>
        </li>

        <li>
          <Link href="/projects/mvp" style={{ textDecoration: "none", fontWeight: 600 }}>
            mvp
          </Link>
          <div style={{ color: "#666", fontSize: 14 }}>
            mvp is a full-stack machine learning pipeline that predicts NFL game outcomes, compares them to DraftKings market spreads, and stores results in a cloud Postgres database.
            Built with FastAPI, Next.js, Supabase, Render, and Python ML modeling.
          </div>
        </li>
      </ul>
    </section>
  );
}
