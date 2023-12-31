---
title: Licenses
sidebar:
  badge:
    text: WIP
    variant: tip
---

# Licenses

## Dependencies

You have to comply with **every single license in every single dependency of your project**. It's not enough that you are in compliance with the license of your direct dependency either, **you have to comply with the licenses of your dependencies dependencies**.

In the case of Tauri that means that you may pick between the MIT or Apache license that you want to use with your project.

The license you may pick for your project depends on what your dependencies licenses permit. For example, if you have a dependency that says your project isn't allowed to be used for closed source projects, then sadly you'll either have to make your project open source or you'll have to get rid of that dependency.

This makes it very tricky to make a project that complies with all their licensing needs, and in fact I'm willing to bet most projects out there don't fulfill their license requirements. Remember, just because there is a legal obligation on you doesn't mean someone is going to enforce it, especially if your project is closed source it can be exceptionally difficult for the owner of a project to know if parts of your code use their project. Hence why it's not just rare that people bother with the effort of taking these things to court, but they also in a lot of cases simply aren't aware their license is being breached.

Don't take that as an invitation to skipping on your obligations by the way! There are tools out there for scanning your dependencies for which licenses you're using, and you can quite easily follow most licenses by simply creating a `licenses/` folder containing a copy of a projects `LICENSE.txt` or similar such file. Rename the file to the project name in case their project name isn't in the license file, and voíla, you're legally covered to use that project.
