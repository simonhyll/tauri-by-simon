import type { Question, Criteria } from "./types.ts";
import { Languages } from "./types.ts";

export const questions: Question[] = [
  {
    title: "Will you use Rust for the frontend?",
    description: `Only say yes if you're either in it to learn Rust
      or are confident in your own Rust skills. I'm serious, don't
      use a Rust frontend unless you understand the implications.`,
    criteria: {},
    yes: { rationale: "", effect: { language: Languages.Rust } },
    no: { rationale: "", effect: { language: Languages.TypeScript } },
  },
  {
    title: "Are you sure you wanna use Rust in the frontend?",
    description: `It can be a real challenge to use Rust for your
    frontend, don't pick it just to be cool. You can still get an
    outlet for your Rust needs in the backend.`,
    criteria: { language: Languages.Rust },
    yes: { rationale: "", effect: {} },
    no: { rationale: "", effect: { language: undefined } },
  },
  {
    title: "Do you specifically not want a meta framework?",
    description: `Meta frameworks provide a fuller toolset for developing your project.
        Some people don't like meta frameworks because they an feel bloated or opinionated.`,
    criteria: {},
    yes: { rationale: "", effect: { isMetaFramework: false } },
    no: { rationale: "", effect: {} },
  },
];
