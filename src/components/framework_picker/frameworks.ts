import type { Framework } from "./types.ts";
import { Languages } from "./types.ts";
import vue from "@assets/frameworks/placeholder.png";

export const frameworks: Framework[] = [
  {
    name: "Astro",
    icon: vue.src,
    score: 80,
    slug: "frontend/astro",
    criteria: { language: Languages.TypeScript },
    mesh: null,
  },
  {
    name: "Nuxt",
    icon: vue.src,
    score: 100,
    slug: "frontend/nuxt",
    criteria: { language: Languages.TypeScript, isMetaFramework: true },
    mesh: null,
  },
  {
    name: "Starlight",
    icon: vue.src,
    score: 50,
    slug: "frontend/starlight",
    criteria: { language: Languages.TypeScript },
    mesh: null,
  },
  {
    name: "Vite",
    icon: vue.src,
    score: 50,
    slug: "frontend/vite",
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
  {
    name: "Trunk",
    icon: vue.src,
    score: 50,
    slug: "frontend/trunk",
    criteria: { language: Languages.TypeScript },
    mesh: null,
  },
  {
    name: "WASM",
    icon: vue.src,
    score: 50,
    slug: "frontend/wasm",
    criteria: { language: Languages.TypeScript },
    mesh: null,
  },
];
