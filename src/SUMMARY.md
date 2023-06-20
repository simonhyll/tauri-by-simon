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
  - [Egui](./frontend/egui.md)
  - [Vite](./frontend/vite.md)
  - [Nuxt](./frontend/nuxt.md)
  - [SvelteKit](./frontend/svelte_kit.md)
  - [Next.js](./frontend/next_js.md)
  - [Qwik](./frontend/qwik.md)
  - [Sycamore](./frontend/sycamore.md)
  - [Leptos](./frontend/leptos.md)
  - [Yew](./frontend/yew.md)

- [Concepts](./concepts.md)

  - [State management](./concepts/state_management.md)
  - [Custom URI schema](./concepts/custom_uri_schema.md)
  - [Async and threads](./concepts/async_and_threads.md)
  - [Commands](./concepts/commands.md)
  - [IPC](./concepts/ipc.md)
  - [Plugins](./concepts/plugins.md)
  - [Sidecar](./concepts/sidecar.md)
  - [Service worker](./concepts/service_worker.md)
  - [Web workers](./concepts/web_workers.md)
  - [Networking](./concepts/networking.md)
  - [Filesystem](./concepts/filesystem.md)
  - [Resources](./concepts/resources.md)
  - [CSP](./concepts/csp.md)
  - [CORS](./concepts/cors.md)
  - [Paths](./concepts/paths.md)
  - [.taurignore](./concepts/taurignore.md)

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

- [Practise project: Todo](./practise_project_todo.md)

  - [Project structure](./practise_project_todo/project_structure_todo.md)
  - [Infrastructure](./practise_project_todo/infrastructure_todo.md)
  - [Project management](./practise_project_todo/project_management_todo.md)
  - [Test development](./practise_project_todo/test_development.md)
  - [Nuxt frontend](./practise_project_todo/nuxt_frontend.md)
  - [Tauri backend](./practise_project_todo/tauri_backend.md)
  - [Adding a REST API](./practise_project_todo/adding_a_rest_api.md)
  - [License management](./practise_project_todo/license_management.md)
  - [Distributing](./practise_project_todo/distributing_todo.md)

- [Plugins](./plugins.md)

  - [window-state](./plugins/window_state.md)

- [Crates.io](./crates_io.md)

  - [windows](./crates_io/windows_plugin.md)

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
  - [Wails](./migrating/wails_migration.md)

- [State of the project](./state_of_the_project.md)

  - [Github Project](./state_of_the_project/github_project.md)
  - [Alternative webviews](./state_of_the_project/alternative_webviews.md)

- [Contributing](./contributing.md)

  - [Where to begin](./contributing/where_to_begin.md)
  - [For non-developers](./contributing/for_non_developers.md)
