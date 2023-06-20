# For project managers

Tauri is often seen by the internet as the next Electron. And while there is some truth to that it's not the entire story. There's in fact a lot of things that put the two projects apart and things you'll need to be aware of before you pick Tauri for your project.

## Limitations

- **Tauri is not a game engine** - Tauri is an app framework. While you can certainly make beautiful graphical experiences for your users, especially with the advent of WebGPU, there's a decent number of people coming to Tauri and far too late realize that since currently WebGPU only works on Windows and you thus are forced to use WebGL for maximum support, not all webviews provide stellar performance. Linux especially is severely limited in its performance. Tauri is working on alternative renderers and already support Egui for a native context, but for this book I'm focusing on the more normal webview based mode of Tauri. In an Egui context you can actually get native performance, but at the expense of Egui being a somewhat complicated framework to use.
- **The JS API is not a 1-to-1 mapping with Node.js** - Not sure how many were expecting it to be that, but it's worth saying anyway. Node.js has a lot of standard modules that the Tauri JS API doesn't deliver and maybe never will. Converting a Node.js project to Tauri isn't as simple as just prefixing `@tauri-apps/` to any Node.js module and expect it to have all of them with the same interfaces.
- **Differing performance across platforms** - While using system webviews result in a much smaller and faster binary, it does mean that different webviews are used on different platforms, and you'll need to develop your frontend using regular web tech for cross browser compatibility as well as cross reference with resources like `caniuse` to see if any web features you intend to use are actually available on all platforms you're targeting.

## Tauri isn't a good fit for...

- **High quality games (commonly referred to as triple A games)** - Tauri isn't a game engine. It's an app framework. While games can be developed with Tauri don't expect AAA performance. For that you need a dedicated engine like Bevy or Unreal.
- **Projects where no one on the team knows any Rust** - Emphasis here on the "no one" part. It's possible to develop a Tauri app using only Javascript, but it's not at all unlikely that you'll eventually have to develop some minor functions using Rust, or at the very least understand some of its basics. I strongly recommend having at least one person on the team that knows some Rust.
