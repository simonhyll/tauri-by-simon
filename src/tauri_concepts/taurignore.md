# .taurignore

A `.taurignore` can be used when you want to disable the file watchers of the dev server for certain files.

## What does it do

In a similar fashion to how you use any other ignore files such as `.gitignore`, using a `.taurignore` file you can disable file watchers so that they no longer trigger rebuilds for your application.

This is especially useful when working in Cargo workspaces where the file watcher by default in Tauri can be a bit overly trigger happy as it aims to watch all the crates in your workspace. For projects where the separation into multiple crates is purely structural and they all are still related to the main app crate, that might be fine, but if you like me tend to develop all aspects of the project as a whole, with crates for e.g. the REST API residing within the same Cargo workspace, then you've probably encountered the issue where you sit and develop your app, then need to tweak something in the server code, but that for some reason triggers a rebuild of your main app. Annoying!

So, you can fix that by simply creating a `.taurignore` file!

```bash
# crates/.taurignore
server-crate/
```

## Today we learned...

- **.taurignore**: A file format that lets us disable file watchers that trigger rebuilding our application.

## Questions
