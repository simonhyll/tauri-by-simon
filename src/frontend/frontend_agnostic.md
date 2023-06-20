# Frontend agnostic

Tauri is a frontend agnostic framework. Within web development this has actually been a thing for a long time, though it goes under a different name: static hosting. Tauri takes this a bit further but the principle is the same, you develop something once, and multiple backends are capable of consuming it.

When you develop a frontend for Tauri you can think of it as if you were developing a website meant to be deployed on an Apache or Nginx server.

## No SSR!!

Tauri is frontend agnostic. **Not backend agnostic**. If it was backend agnostic it would support you using whatever language you want to develop the backend. That's not the case, you need Tauri to be the backend. As language bindings get developed for Tauri we're hoping to make it a reality that you can develop with Tauri using any language you want, but until then, there simply is no way for you to have server side rendering in a Tauri app. Well, that's not entirely true, you can sidecar binaries and you can navigate windows to whatever url you want, but there are a whole lot of complications involved with that sort of approach and it largely goes against the very idea of Tauri as an app framework, I'll go into it more later. For now please just trust me when I say **NO SSR** in the frontend framework you use. Anything you pick has to support **static hosting**.

Imagine your frontend was going to be hosted on Apache or Nginx. That's essentially what I'm talking about.
