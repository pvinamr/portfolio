import Link from "next/link";
import { site } from "@/lib/site";
import { projects } from "@/lib/projects";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section style={{ display: "grid", gap: 28 }}>
      {/* Hero */}
      <div style={{ display: "grid", gap: 10, paddingTop: 10 }}>
        <h1 style={{ margin: 0, fontSize: 36, fontWeight: 700, letterSpacing: 0.5 }}>
          {"Hi, I'm Vinamr."}
        </h1>

        <p style={{ margin: 0, color: "#5f5f5fff", lineHeight: 1.7, maxWidth: 60 + "ch" }}>
          I’m a software developer focused on building clean, practical products.
          I like shipping projects and learning fast.
        </p>
      </div>

      <hr style={{ border: 0, borderTop: "1px solid #eee" }} />

      {/* Featured Projects */}
      <div style={{ display: "grid", gap: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>Featured Projects</h2>
          <Link href="/projects" style={{ fontSize: 14, color: "#7c7b7bff", textDecoration: "none" }}>
            All projects →
          </Link>
        </div>

        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
          {featured.map((p) => (
            <li
              key={p.slug}
              style={{
                border: "1px solid #eee",
                borderRadius: 12,
                padding: 14,
              }}
            >
              <Link
                href={`/projects/${p.slug}`}
                style={{ textDecoration: "none", fontWeight: 700 }}
              >
                {p.title}
              </Link>
              <p style={{ margin: "6px 0 0", color: "#555", fontSize: 14, lineHeight: 1.6 }}>
                {p.blurb}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function pill(opts?: { variant?: "solid" | "ghost" }): React.CSSProperties {
  const variant = opts?.variant ?? "solid";
  const solid = variant === "solid";

  return {
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 600,
    padding: "10px 12px",
    borderRadius: 999,
    border: "1px solid #ddd",
    background: solid ? "#111" : "transparent",
    color: solid ? "#fff" : "#111",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
  };
}
