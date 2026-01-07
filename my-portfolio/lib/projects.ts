export type Project = {
  slug: string;
  title: string;
  blurb: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "muse",
    title: "muse",
    blurb: "knowledge search and capture tool.",
    description: "muse is a knowledge search and capture tool designed to replace tabs as bookmarks. Instead of keeping dozens of tabs open to remember things, muse lets you clip text from anywhere, store it locally, and search across everything you've saved. version 1 - built with python",
    githubUrl: "https://github.com/pvinamr/muse",
    featured: true,
  },
  {
    slug: "core",
    title: "core",
    blurb: "local-first personal growth book.",
    description:
      "core is a local-first personal growth book built with Tauri, Rust, and TypeScript. Each day gets its own structured journal page with six sections: today's schedule, goals, to-do, motivation, happiness, and daily journal.",
    githubUrl: "https://github.com/pvinamr/core",
    featured: true,
  },

  {
    slug: "mvp",
    title: "mvp",
    blurb: "full-stack machine learning prediction pipeline.",
    description:
      "mvp is a full-stack machine learning pipeline that predicts NFL game outcomes, compares them to DraftKings market spreads, and stores results in a cloud Postgres database. Built with FastAPI, Next.js, Supabase, Render, and Python ML modeling.",
    githubUrl: "https://github.com/pvinamr/mvp",
    liveUrl: "https://mvp-nfl-model.vercel.app/",
    featured: true,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
