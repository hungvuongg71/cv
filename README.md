# Hung Vuong — Personal Resume Site

[![CI / Build / Deploy](https://github.com/vhung71/cv/actions/workflows/ci-deploy.yml/badge.svg)](https://github.com/vhung71/cv/actions/workflows/ci-deploy.yml)

Personal resume website for **Hung Vuong (Vương Hùng)**, built with React + Vite following **Clean Architecture** principles. Statically generated (SSG) and deployed on GitHub Pages.

🔗 **Live:** https://vhung71.github.io/cv/

---

## Tech Stack

| Category | Library                  |
| -------- | ------------------------ |
| UI       | React 18                 |
| Build    | Vite 5                   |
| SSG      | vite-ssg                 |
| Styling  | TailwindCSS 3            |
| Routing  | React Router 6           |
| Forms    | React Hook Form          |
| HTTP     | Axios                    |
| Testing  | Vitest + Testing Library |
| CI/CD    | GitHub Actions           |

---

## Quick Start

```bash
# Install
npm install

# Dev server
npm run dev

# SSG build (production)
npm run ssg

# Tests
npm run test

# Type check
npm run type-check
```

---

## Architecture

```
src/
├── presentation/    # React components, pages, hooks, store
├── application/     # Use-cases, DTOs
├── domain/          # Core entities, repository interfaces, errors
├── infrastructure/  # API client, concrete repositories
└── shared/          # Config, utils, types
```

See [`docs/project/PROJECT.md`](docs/project/PROJECT.md) for full documentation.

---

## Docs

- 📋 [Project Documentation](docs/project/PROJECT.md)
- 👥 [Team Skills](docs/team/TEAM.md)
- 📐 [Coding Principles](docs/principles/PRINCIPLES.md)

---

## Branching

```
main     ← production (auto-deploy on merge)
develop  ← active development
```

Open a PR from `develop` → `main` to trigger CI (lint + test + SSG build). Merging deploys automatically to GitHub Pages.

---

## License

MIT
