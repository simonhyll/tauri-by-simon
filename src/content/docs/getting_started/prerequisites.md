---
title: Prerequisites
sidebar:
  badge:
    text: Planned
    variant: caution
---

# Prerequisites

## Choosing a package manager

### Cargo

Cargo is the package manager for Rust projects.

### Npm, Yarn or Pnpm

Of the three I personally prefer using `pnpm`. It performs best and works great. The only issues with it is that its workspace format isn't compatible with npm and yarn, and that due to how it handles dependencies it can sometimes have compatibility isues. I've thus far found solutions to all the issues I've encountered and thus think it's an excellent tool, but if I were to pick something for a team of people or a customer I might nudge them in the direction of `yarn` since it performs better than `npm` but is generally more stable to use than `pnpm`.
