import type { Framework } from "./types.ts";
import { Languages } from "./types.ts";
import vue from "@assets/frameworks/placeholder.png";

export const frameworks: Framework[] = [
  {
    name: "Nuxt",
    icon: vue.src,
    score: 100,
    slug: "frontend/nuxt",
    criteria: { language: Languages.TypeScript, isMetaFramework: true },
    mesh: null,
  },
  {
    name: "Astro",
    icon: vue.src,
    score: 80,
    slug: "frontend/astro",
    criteria: { language: Languages.TypeScript },
    mesh: null,
  },
  {
    name: "Leptos",
    icon: vue.src,
    score: 50,
    slug: "frontend/leptos",
    criteria: { language: Languages.Rust },
    mesh: null,
  },
  {
    name: "Sycamore",
    icon: vue.src,
    score: 40,
    slug: "frontend/sycamore",
    criteria: { language: Languages.Rust },
    mesh: null,
  },
  {
    name: "Vue",
    icon: vue.src,
    score: 80,
    slug: "frontend/vue",
    criteria: { language: Languages.TypeScript },
    mesh: null,
  },
];
