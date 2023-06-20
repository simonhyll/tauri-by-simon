# For project managers

Tauri is often seen by the internet as the next Electron. And while there is some truth to that it's not the entire story. There's in fact a lot of things that put the two projects apart and things you'll need to be aware of before you pick Tauri for your project.

## Limitations

- **Tauri is not a game engine** - Tauri is an app framework. While you can certainly make beautiful graphical experiences for your users, especially with the advent of WebGPU, there's a decent number of people coming to Tauri and far too late realize that since currently WebGPU only works on Windows and you thus are forced to use WebGL for maximum support, not all webviews provide stellar performance. Linux especially is severely limited in its performance. Tauri is working on alternative renderers and already support Egui for a native context, but for this book I'm focusing on the more normal webview based mode of Tauri. In an Egui context you can actually get native performance, but at the expense of Egui being a somewhat complicated framework to use.
- **The JS API is not a 1-to-1 mapping with Node.js**

## Tauri isn't a good fit for...

- **High quality games (commonly referred to as triple A games)**
- **Projects where no one on the team knows any Rust**
