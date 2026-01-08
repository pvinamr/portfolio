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
    description: "I designed and implemented an embedded face detection system based on the Viola–Jones algorithm, consisting of a custom C++ training pipeline and a dataflow-based runtime optimized for a Raspberry Pi. Due to project constraints, all image-processing components—including integral images, Haar feature evaluation, and PNG parsing—were implemented from scratch without using OpenCV. The system uses cascaded AdaBoost classifiers to enable early rejection and efficient inference, and multiple cascade configurations were evaluated using accuracy, false positive rate, and runtime metrics with Pareto-optimal analysis. This project demonstrates my ability to build efficient, scalable computer vision systems under strict hardware, software, and data constraints while balancing performance and reliability.",
    featured: true,
  },

  {
    slug: "microcaml_engine",
    title: "microcaml engine",
    blurb: "implementing a custom lexer, parser, and evaluator.",
    description: "I developed a complete interpreter for MicroCaml, a subset of the OCaml programming language, by implementing a custom lexer, parser, and evaluation engine in software. The system converts source code into an Abstract Syntax Tree (AST) and correctly evaluates expressions and statements according to OCaml’s semantics, including variable bindings, function definitions, and expression evaluation. This project strengthened my understanding of programming language design, parsing techniques, and interpreter architecture, and demonstrates my ability to build language tooling from the ground up with a strong focus on correctness and formal structure. ",
    featured: true,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
