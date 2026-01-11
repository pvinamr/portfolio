export type Project = {
  slug: string;
  title: string;
  blurb: string;
  description: string;
  githubUrl?: string;
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

  {
    slug: "efds",
    title: "efds",
    blurb: "embedded face detection system using viola-jones algorithm.",
    description:"I designed and implemented an embedded face detection system based on the Viola–Jones algorithm, consisting of a custom C++ training pipeline and a dataflow-based runtime optimized for a Raspberry Pi. Due to project constraints, all image-processing components such as integral images, Haar feature evaluation, and PNG parsing were implemented from scratch without using OpenCV. The system uses cascaded AdaBoost classifiers to enable early rejection and efficient inference. Additionally, multiple cascade configurations were evaluated using accuracy, false positive rate, and runtime metrics. This project demonstrates my ability to build scalable computer vision systems under strict software and data constraints while optimizing performance and reliability.",
    featured: true,
  },

  {
    slug: "microcaml_engine",
    title: "microcaml engine",
    blurb: "implementing a custom lexer, parser, and evaluator.",
    description: "I developed a complete interpreter for MicroCaml, a subset of OCaml, by implementing a custom lexer, parser, and evaluator. The system converts source code into an Abstract Syntax Tree (AST) and correctly evaluates expressions and statements according to OCaml’s semantics. Features such as variable bindings, function definitions, and expression evaluation were all included. This project strengthened my understanding of programming language design and interpreter architecture, and demonstrates my ability to build language tooling from the ground up.",
    featured: true,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
