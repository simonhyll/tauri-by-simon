# Documentation ready

This is an approach I use quite a lot along with test driven development. Essentially what it is is that you set up proper documentation for your project as early as possible and actually try to use it.

Emphasis here on trying to use it, not succeeding. Projects that get stuck in documentation tend to take far too long to finish. However, projects that don't take care of setting up documentation early on tend to take ten times longer when you're fully set up and finished with your project to implement. This sort of issue was especially prevalent when I worked the most with Python as once you're 10 000 lines of code in, it's gonna be a hellish time figuring out how to set up the documentation, only to discover in some cases that the entire project structure doesn't play well with any of the bigger documentation generators and so to bring in more developers into your project you'll need to first refactor its entire structure. Fun!

For this reason you set up documentation early and look at it often. It's entirely fine to just have the documentation be `TODO: Add documentation` all over the place, but it has to be there. Every single struct, every single variable, everything that you can document should be documented.

In addition to a code centric API reference that you generate you should also prepare for more text driven documentation. I personally use `mdbook` for all my projects currently. It's easy to use and makes for some pretty nice looking documentation once you theme it a bit. And since I have my little support library `mdbook-to-example` I can generate a Rust example from my mdbook documentation, letting me view my mdbook in a quite nice manner directly inside rustdoc.
