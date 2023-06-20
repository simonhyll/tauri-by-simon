# Async and threads

The `async` keyword is just syntactic sugar for a function that returns a `Future`.

## Tokio

### #[tokio::main] / #[actix_web::main]

These are simply macros that help you set up a Tokio runtime. You should under absolutely no circumstances use these in your Tauri app. Tauri already provides you with a runtime.

## Background tasks
