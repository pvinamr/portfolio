export type Project = {
  slug: string;
  title: string;
  blurb: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "muse",
    title: "muse",
    blurb: "A knowledge search and capture tool.",
    description: "muse is a knowledge search and capture tool designed to replace tabs as bookmarks. Instead of keeping dozens of tabs open to remember things, muse lets you clip text from anywhere, store it locally, and search across everything you've saved. version 1 - built with python",
    githubUrl: "https://github.com/pvinamr/muse",
  },
  {
    slug: "core",
    title: "core",
    blurb: "A local-first personal growth book.",
    description:
      "core is a local-first personal growth book built with Tauri, Rust, and TypeScript. Each day gets its own structured journal page with six sections: today's schedule, goals, to-do, motivation, happiness, and daily journal.",
    githubUrl: "https://github.com/pvinamr/core",
  },

  {
    slug: "mvp",
    title: "mvp",
    blurb: "A full-stack machine learning prediction pipeline.",
    description:
      "mvp is a full-stack machine learning pipeline that predicts NFL game outcomes, compares them to DraftKings market spreads, and stores results in a cloud Postgres database. Built with FastAPI, Next.js, Supabase, Render, and Python ML modeling.",
    githubUrl: "https://github.com/pvinamr/mvp",
    liveUrl: "https://mvp-nfl-model.vercel.app/"
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
