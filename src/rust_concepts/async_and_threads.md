# Async and threads

## Tokio

### #[tokio::main] / #[actix_web::main]

These are simply macros that help you set up a Tokio runtime. You should under absolutely no circumstances use these in your Tauri app. Tauri already provides you with a runtime.

## Background tasks
