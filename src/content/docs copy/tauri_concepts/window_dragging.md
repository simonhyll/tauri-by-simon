---
title: Window Dragging
sidebar:
  badge:
    text: WIP
    variant: tip
---

# Window dragging

Dragging windows using Tauri can sometimes be a little weird because the element that receives clicking and dragging has to be the element to do the dragging. Which is why we'll look at two different approaches to handling window dragging, the easy way and the hard way.

## `data-tauri-drag-region`

In HTML you can easily add the `data-tauri-drag-region attribute to any element to give it a standard implementation of window dragging.

These are all valid ways of implementing window dragging. You can put it on literally any element you want.

```html
<h1 data-tauri-drag-region>Drag me</h1>
<span data-tauri-drag-region>I can also be dragged</span>
<div data-tauri-drag-region><button @click="minimize"><button @click="close"></div>
```

This approach is great for simpler use cases. However, there's a pretty big issue with it, namely that it **only applies to the element it was added to, not its children**. Now before you say "why don't they just make it apply to children" you have to consider the complexity of that task. Tauri has no idea which child elements you have that you want to be interactive. That's why we're going to look at enabling this sort of approach manually ourselves, because then we can handle our blacklist of input elements easily. This really isn't as much work as it might seem.

## Manual implementation

> This book is written using version 2 in mind. In version 1 you don't need to use the plugin since the functionality is part of the core.

This approach relies on using the official `tauri-plugin-window` plugin. It gives us access to the functions we need regarding window dragging. Then we simply add an event listener to our document at a sufficiently high level in the DOM to capture the `mousedown` event.

```js
document.addEventListener('mousedown', () =>{
    await startDragging()
})
```

## Today we learned...

- **data-tauri-drag-region**: Adds a standard implementation of window dragging to an HTML element that doesn't propagate to its children
- **tauri-plugin-window**: Is an official plugin for handling a window

## Questions
