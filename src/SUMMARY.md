# Summary

- [Introduction](./introduction.md)

  - [Use cases](./introduction/use_cases.md)
  - [Governance](./introduction/governance.md)
  - [People](./introduction/people.md)
  - [For project managers](./introduction/for_project_managers.md)

- [Getting started](./getting_started.md)

  - [Prerequisites](./getting_started/prerequisites.md)
  - [create-tauri-app](./getting_started/create_tauri_app.md)
  - [IDE setup](./getting_started/ide_setup.md)
  - [DevContainer](./getting_started/dev_container.md)
  - [Tauri CLI](./getting_started/tauri_cli.md)
  - [Configuration](./getting_started/configuration.md)
  - [Next steps](./getting_started/next_steps.md)

- [Frontend](./frontend.md)

  - [Frontend agnostic](./frontend/frontend_agnostic.md)
  - [Benchmarks](./frontend/benchmarks.md)
  - [Egui](./frontend/egui.md)
  - [Vite](./frontend/vite.md)
  - [Nuxt](./frontend/nuxt.md)
  - [SvelteKit](./frontend/svelte_kit.md)
  - [Next.js](./frontend/next_js.md)
  - [Qwik](./frontend/qwik.md)
  - [Sycamore](./frontend/sycamore.md)
  - [Leptos](./frontend/leptos.md)
  - [Yew](./frontend/yew.md)
  - [Bevy](./frontend/bevy.md)

- [Tauri Concepts](./tauri_concepts.md)

  - [State management](./tauri_concepts/state_management.md)
  - [Custom URI schema](./tauri_concepts/custom_uri_schema.md)
  - [Commands](./tauri_concepts/commands.md)
  - [IPC](./tauri_concepts/ipc.md)
  - [Plugins](./tauri_concepts/plugins.md)
  - [Sidecar](./tauri_concepts/sidecar.md)
  - [Events](./tauri_concepts/events.md)
  - [Networking](./tauri_concepts/networking.md)
  - [Filesystem](./tauri_concepts/filesystem.md)
  - [Resources](./tauri_concepts/resources.md)
  - [Window dragging](./tauri_concepts/window_dragging.md)
  - [Paths](./tauri_concepts/paths.md)
  - [.taurignore](./tauri_concepts/taurignore.md)

- [Rust Concepts](./rust_concepts.md)

  - [Cargo](./rust_concepts/crates_io.md)
    - [Docs.rs](./rust_concepts/cargo/docs_rs.md)
    - [Crates.io](./rust_concepts/cargo/crates_io.md)
  - [Ownership](./rust_concepts/ownership.md)
  - [Async and threads](./rust_concepts/async_and_threads.md)
  - [Macros](./rust_concepts/macros.md)
  - [.env](./rust_concepts/env.md)
  - [std](./rust_concepts/std.md)
    - [process](./rust_concepts/std/process.md)

- [Web Concepts](./web_concepts.md)

  - [Service worker](./web_concepts/service_worker.md)
  - [Web workers](./web_concepts/web_workers.md)
  - [CSP](./web_concepts/csp.md)
  - [CORS](./web_concepts/cors.md)
  - [SSL/HTTPS/TLS](./web_concepts/ssl_https_tls.md)

- [Legal Concepts](./legal_concepts.md)

  - [Licenses](./legal_concepts/licenses.md)
  - [GDPR](./legal_concepts/gdpr.md)
  - [Trademarks](./legal_concepts/trademarks.md)
  - [Branding](./legal_concepts/branding.md)

- [Developing](./developing.md)

  - [Android](./developing/android.md)
  - [iOS](./developing/ios.md)
  - [Windows](./developing/windows.md)
  - [Linux](./developing/linux.md)
  - [Mac](./developing/mac.md)
  - [Browser](./developing/browser.md)

- [Testing](./testing.md)

  - [Frontend](./testing/frontend_testing.md)
  - [WebDriver](./testing/webdriver.md)
  - [Unit testing](./testing/unit_testing.md)
  - [Integration testing](./testing/integration_testing.md)
  - [End to end testing](./testing/end_to_end_testing.md)

- [CI/CD](./ci_cd.md)

  - [Auditing](./ci_cd/auditing.md)
  - [Testing](./ci_cd/testing_again.md)
  - [Building](./ci_cd/building.md)
  - [Infrastructure as code](./ci_cd/infrastructure_as_code.md)

- [Distributing](./distributing.md)

  - [Windows](./distributing/windows_distribution.md)
  - [Linux](./distributing/linux_distribution.md)
  - [Android](./distributing/android_distribution.md)
  - [MacOS](./distributing/macos_distribution.md)
  - [iOS](./distributing/ios_distribution.md)
  - [Docker](./distributing/docker.md)
  - [Browser](./distributing/browser_distribution.md)

- [Best practises](./best_practises.md)

  - [Rust first](./best_practises/rust_first.md)
  - [Project structure](./best_practises/project_structure.md)
  - [Pick a framework](./best_practises/pick_a_framework.md)
  - [Security mindset](./best_practises/security_mindset.md)

- [Cookbook](./cookbook.md)

  - [Making your own CLI](./cookbook/making_your_own_cli.md)
  - [Calling Rust from the frontend](./cookbook/calling_rust_from_the_frontend.md)
  - [Events](./cookbook/events.md)
  - [Icons](./cookbook/icons.md)
  - [Window menu](./cookbook/window_menu.md)
  - [Multiwindow](./cookbook/multiwindow.md)
  - [Tauri plugins](./cookbook/tauri_plugins.md)
  - [Splashscreen](./cookbook/splashscreen.md)
  - [System tray](./cookbook/system_tray.md)
  - [Window customization](./cookbook/window_customization.md)
  - [RFC](./cookbook/rfc.md)
  - [REST](./cookbook/rest.md)
  - [Deep linking](./cookbook/deep_linking.md)
  - [User authentication](./cookbook/user_authentication.md)
  - [Glue library](./cookbook/glue_library.md)
  - [Admin permissions](./cookbook/admin_permissions.md)
  - [Secure token handling](./cookbook/secure_token_handling.md)
  - [Transaction chain](./cookbook/transaction_chain.md)

- [Practise project: Todo](./practise_project_todo.md)

  - [Project planning](./practise_project_todo/project_planning.md)
  - [Project structure](./practise_project_todo/project_structure.md)
  - [Infrastructure](./practise_project_todo/infrastructure.md)
  - [Project management](./practise_project_todo/project_management.md)
  - [Test development](./practise_project_todo/test_development.md)
  - [Frontend](./practise_project_todo/frontend.md)
  - [Tauri backend](./practise_project_todo/tauri_backend.md)
  - [Adding a REST API](./practise_project_todo/adding_a_rest_api.md)
  - [License management](./practise_project_todo/license_management.md)
  - [Distributing](./practise_project_todo/distributing.md)

- [Practise project: Flashcards](./practise_project_flashcards.md)

  - [Project planning](./practise_project_flashcards/project_planning.md)

- [Plugins](./plugins.md)

  - [window-state](./plugins/window_state.md)

- [Crates.io](./crates_io.md)

  - [windows](./crates_io/windows.md)

- [Architecture](./architecture.md)

  - [Security](./architecture/security.md)
  - [Process model](./architecture/process_model.md)
  - [Webviews](./architecture/webviews.md)
  - [Repositories](./architecture/repositories.md)
  - [Dependencies](./architecture/dependencies.md)

- [Hacking](./hacking.md)

  - [Extracting the frontend](./hacking/extracting_the_frontend.md)
  - [Modifying hard coded values](./hacking/modifying_hard_coded_values.md)

- [Comparisons](./comparisons.md)

  - [Electron](./comparisons/electron.md)
  - [Flutter](./comparisons/flutter.md)
  - [Cordova](./comparisons/cordova.md)
  - [Wails](./comparisons/wails.md)

- [Migrating](./migrating.md)

  - [v1 to v2](./migrating/v1_to_v2.md)
  - [Electron](./migrating/electron_migration.md)
  - [Flutter](./migrating/flutter_migration.md)
  - [Cordova](./migrating/cordova_migration.md)
  - [Wails](./migrating/wails_migration.md)alternative_webviews.md)

- [Contributing](./contributing.md)

  - [Where to begin](./contributing/where_to_begin.md)
  - [For non-developers](./contributing/for_non_developers.md)

- [State of the project](./state_of_the_project.md)
- [Other resources](./other_resources.md)
- [Getting help](./getting_help.md)
