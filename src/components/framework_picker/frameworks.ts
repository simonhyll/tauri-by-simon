import type { Framework } from "./types.ts";
import { Languages } from "./types.ts";
import vue from "@assets/frameworks/placeholder.png";

export const frameworks: Framework[] = [
  {
    name: "Leptos",
    icon: vue.src,
    slug: "frontend/leptos",
    criteria: { language: Languages.Rust },
    mesh: null,
  },
  {
    name: "Sycamore",
    icon: vue.src,
    slug: "frontend/sycamore",
    criteria: { language: Languages.Rust, isMetaFramework: true },
    mesh: null,
  },
  {
    name: "Vue",
    icon: vue.src,
    slug: "frontend/vue",
    criteria: { language: Languages.TypeScript },
    mesh: null,
  },
  {
    name: "Nuxt",
    icon: vue.src,
    slug: "frontend/nuxt",
    criteria: { language: Languages.TypeScript, isMetaFramework: true },
    mesh: null,
  },
];
