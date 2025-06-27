# React Mantine PWA Template

## Introduction

**React Mantine PWA Template** is an opinionated template and starter kit for building Progressive Web Applications with React. Designed to streamline development, it combines essential libraries, components, utilities, and developer tools to accelerate your workflow.

Check out the **[Live Demo](https://react-mantine-pwa-template.vercel.app/)**.

## Tech Stack & Features

### Core Technologies

| Technology                                         | Version | Description                                                               |
| -------------------------------------------------- | ------- | ------------------------------------------------------------------------- |
| [Vite](https://vitejs.dev/)                        | v6      | Fast build tool with excellent DX                                         |
| [Bun](https://bun.sh/)                             | v2      | Fast and modern package manager                                           |
| [React](https://react.dev/)                        | v19     | Latest version with all modern features                                   |
| [TypeScript](https://www.typescriptlang.org/)      | Latest  | Type-safe JavaScript for better development                               |
| [Mantine](https://mantine.dev)                     | v8      | Comprehensive UI framework using CSS modules for high performance styling |
| [React Router](https://reactrouter.com)            | v7      | Easy route management                                                     |
| [Axios](https://axios-http.com/)                   | v7      | Modern HTTP client                                                        |
| [Jotai](https://axios-http.com/)                   | v2      | Atomic approach to state management                                       |
| [Wasm Pack](https://github.com/rustwasm/wasm-pack) | v0.13   | Generate WebAssembly code from Rust easily and use it in React            |
| [React Query](https://tanstack.com/query)          | v5      | Data fetching, caching, synchronizing, and updating                       |

### Key Features

- **Routing**: [React Router v7](https://reactrouter.com/) for flexible client-side routing
- **State Management**: [Jotai](https://jotai.org/) for simple, efficient state handling
- **Theming**: Customizable dark/light mode with Mantine [theme system](https://mantine.dev/theming/theme-object/)
- **Notifications**: Alert system with the Mantine Notification extension
- **PWA Support**: Works offline and installs on any device
- **Hotkeys**: Built-in keyboard shortcuts for common actions
- **Error Handling**: Graceful error boundaries with custom fallbacks
- **Performance**: All green Lighthouse scores with optimized bundle size

### Developer Tools

- **Testing**: Vitest for unit tests, Playwright for e2e tests
- **Code Quality**: ESLint, Prettier, TypeScript integration
- **Local HTTPS**: Built-in support for local HTTPS development
- **Docker**: Dockerfile setup and ready to dockerize the application

## Getting Started

### Quick Start

```bash
# Clone the repository
git clone https://github.com/sebastian-schuler/react-mantine-pwa-template.git

# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build
```

### Available Scripts

| Command                  | Description                                  |
| ------------------------ | -------------------------------------------- |
| `bun run dev`            | Start development server                     |
| `bun run build`          | Build for production                         |
| `bun run wasm:compile`   | Compile Rust code in rust-wasm folder to pkg |
| `bun run prettier:check` | Check formatting                             |
| `bun run lint:check`     | Check linting                                |
| `bun run ts:check`       | Check TypeScript                             |
| `bun run test:unit`      | Run unit tests                               |
| `bun run test:e2e`       | Run e2e tests                                |
| `bun run test:e2e:ui`    | Run e2e tests in UI mode                     |
| `bun run preview`        | Preview production build locally             |
| `bun run https-preview`  | Preview with HTTPS                           |
| `bun run docker:build`   | Simple docker build command                  |

## Project Structure

```txt
react-mantine-pwa-template/
├── ...
├── rust-wasm/
│   ├── pkg/                     # Auto-generated WebAssembly bindings (do not edit manually)
│   ├── src/                     # Rust source code compiled to WebAssembly
├── src/
│   ├── components/              # Reusable UI components
│   ├── config/                  # Centralized application configuration files
│       ├── api.config.ts/       # Configuration for API endpoints and options
│       ├── main.config.ts/      # General application settings
│       ├── routes.config.ts/    # Route definitions for React Router
│       ├── seo.config.ts/       # Metadata and SEO configuration for React Helmet
│       └── sidebar.config.ts/   # Sidebar navigation structure and labels
│   ├── features/                # Self-contained features combining UI, logic, and state
│   │                            # For encapsulating functionality like authentication, user profile, uploads, etc.
│   ├── layouts/                 # Shared page layouts or wrappers (e.g., dashboard shell)
│   ├── pages/                   # Top-level route components mapped to URLs
│   ├── providers/               # Context providers and global integrations
│       ├── api/                 # API client setup and data fetching layer
│           ├── requests/        # Raw Axios request functions for each endpoint
│           ├── store/           # Composable React Query hooks (queries, mutations)
│           ├── types/           # TypeScript interfaces and DTOs for API data contracts
│       ├── routes/              # Custom routing logic and guards
│       ├── state/               # Global state management (e.g., Jotai atoms)
│       ├── theme/               # Theme and styling configuration (e.g., Mantine)
│       └── wasm/                # React hooks or helpers for interacting with WebAssembly
│   ├── types/                   # Global/shared TypeScript types and interfaces
│   └── utils/                   # Helper functions and utilities
│       └── hooks/               # Custom React hooks used across the app
└── ...
```

### Component Organization

Each component follows this structure:

```txt
ComponentName/
├── index.ts                     # Default exports the component
├── ComponentName.tsx            # Pure component implementation
├── ComponentName.module.css     # CSS styles (optional)
├── types.ts                     # Component-related types (optional)
└── utils.ts                     # Component-specific utilities (optional)
```

## Key Features Explained

### Mantine specifics

- **Mantine Components:** [Components](https://mantine.dev/core/package/)
- **Mantine Theme:** [Theme Object](https://mantine.dev/theming/theme-object/)
- **Styling with CSS Modules:** [CSS modules](https://mantine.dev/styles/css-modules/)
  - **Responsiveness:** [Responsive Styles](https://mantine.dev/styles/responsive/)
- **Hook collection:** [Hooks](https://mantine.dev/hooks/package/)
- **Form management, validation, context:** [Mantine form](https://mantine.dev/form/package/)
- **Notification system:** [Notifications](https://mantine.dev/x/notifications/)
- **Application command center:** [Spotlight](https://mantine.dev/x/spotlight/)

### State Management

Jotai provides simple atoms-based state management for cross-application state, complementing React's useState and data fetching libraries.

### PWA Features

- Works offline with service worker caching
- Installable on mobile and desktop devices
- Automatic updates (configurable in `vite.config.ts`)

### Error Handling

The `withErrorHandler` HOC catches errors and displays friendly fallback UIs:

```jsx
// In your component:
export default withErrorHandler(MyComponent);

// Or for the entire app:
export default withErrorHandler(App);
```

## Testing

### Unit Tests

```bash
bun run test:unit
```

### E2E Tests

```bash
bun run test:e2e
# or with UI
bun run test:e2e:ui
```

## Environment Variables

Place your environment variables in a `.env` file (prefixed with `VITE_`):

- Templates available in the `env/` directory
- Access via `import.meta.env.VITE_VARIABLE_NAME`

## License

[MIT](./LICENSE)
