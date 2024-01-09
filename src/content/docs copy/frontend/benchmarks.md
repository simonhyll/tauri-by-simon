---
title: Benchmarks
sidebar:
  badge:
    text: WIP
    variant: tip
---

# Benchmarks

When picking your frontend framework the first thing you should do is check the benchmarks to see which ones fall under what you would consider to be acceptable parameters. Once you've determined which frameworks are candidates based on their performance you can weigh their performance against the DX (developer experience) to determine which framework suits your needs the best.

> The benchmarks here may be outdated. Check the sources at the end for more up to date results.

Benchmarks can be surprisingly subjective. Some people swear by memory usage, whatever uses the least is the best. Others argue that unused memory is worthless memory, and all that matters is **SPEEEEED!!** _Imagine Jeremy Clarkson screaming it._

The biggest choice you can make is which language to use. Currently there's really only 2 (technically 3) languages I would look at, Typescript/Javascript and Rust. Using e.g. Python for your frontend isn't impossible, but there really aren't that many decent alternatives for Python that also support static compilation, they all tend to be some variant of SSR solution.

## My recommendations

> I am not going to look at every single benchmark available since some of the projects I have numbers for are simply too small to be considered serious alternatives for me to recommend using. I'll only be looking at 3 of my top picks for Javascript and 3 of my top picks for Rust. If your framework isn't in here, don't worry, you can still use it, read my reasoning behind my scores and try to apply the same sort of thinking to when you look up the benchmarks for your framework.

- **JS/TS: Vue** - Vue is the overall winner I would say, especially when you consider community size and DX. Of the ones considered here it is either faster or nearly as fast as the best options in all categories, and from my experience giving support in Tauri it's the one that gets the fewest issues reported. Svelte is in theory better, but based on the number of issues I see on a daily basis related to it I simply can't recommend it, the community is too small and the DX just isn't good enough. I recommend using Nuxt, it makes using Vue quite a bit easier.
- **Rust: Sycamore** - Leptos performs a bit better than Sycamore, but in my experience the DX of Sycamore is a bit better, so it's a really close call and you'll just have to try both of them to determine which you prefer.

### DOM update speed

How fast the frameworks can update the DOM, and is the most important factor when it comes to overall performance. Generally when I send comparisons to people this is the metric I look most at.

- **JS/TS: Vue** - At 1.27 Vue is one of the fastest Javascript frameworks out there.
- **Rust: Leptos** - At a rather impressive 1.15 this is one of the few times where a Rust framework actually proves to be faster than the Javascript frameworks. Sycamore is at 1.25 and Yew is lagging far behind at 1.90.

### Startup speed

Also a very important metric for sure as people will feel the website is more responsive and it matter more than you'd think for SEO purposes. After DOM updates this is definitely "the other" metric to go by.

- **JS/TS: Svelte** - Svelte has a fairly significant lead at 1.04 over Vue at 1.27, both of which are faster than React at 1.67. For reference, vanilla js also clocks in at 1.04, so there's virtually zero overhead with using Svelte. Quite impressive. Vue still performs really good though.
- **Rust: Sycamore** - With 1.43 Sycamore takes a very small lead over Leptos at 1.54 and Yew at 1.60.

### Memory allocation

In my opinion, as long as it's fast, I don't care much what it does with the memory. Some people feel this is incredibly important however, so here it is.

- **JS/TS: Svelte** - Svelte rolls in at 1.37 while Vue is at 1.89. That might sounds like a huge gap, but in contrast, React is at 2.66, and all Rust frameworks are circling around 4. With that in mind, Svelte and Vue are actually pretty close.
- **Rust: Leptos** - Really not by a large margin, Leptos gets 3.72 vs Sycamore with 4.23 and Yew at 4.07. Compared to the javascript frameworks they it's night and day, and not in Rusts favor.

## Sources

<a href="https://krausest.github.io/js-framework-benchmark/current.html" target="_blank">krausest</a>
