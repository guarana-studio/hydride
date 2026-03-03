---
title: Hydride
logo:
  src: PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4OTYiIGhlaWdodD0iODk2IiBmaWxsPSJub25lIj48cmVjdCB3aWR0aD0iODk2IiBoZWlnaHQ9Ijg5NiIgY2xhc3M9ImZpbGxzIiByeD0iMjQwIiByeT0iMjQwIiBzdHlsZT0iZmlsbDojMjIyO2ZpbGwtb3BhY2l0eToxIi8+PHBhdGggZD0iTTEyOCA1MTJoMjU2djI1NkgyNTZhMTI4IDEyOCAwIDAgMS0xMjgtMTI4eiIgY2xhc3M9ImZpbGxzIiBzdHlsZT0iZmlsbDojZmZmO2ZpbGwtb3BhY2l0eToxIi8+PHBhdGggZD0iTTUxMiAxMjhoMjU2djI1Nkg2NDBhMTI4IDEyOCAwIDAgMS0xMjgtMTI4eiIgY2xhc3M9ImZpbGxzIiBzdHlsZT0iZmlsbDojZmZmO2ZpbGwtb3BhY2l0eToxIiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgLTEgMTI4MCA1MTIpIi8+PHJlY3Qgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIHg9IjM4NCIgeT0iMzg0IiBjbGFzcz0iZmlsbHMiIHJ4PSIwIiByeT0iMCIgc3R5bGU9ImZpbGw6I2ZmZjtmaWxsLW9wYWNpdHk6MSIvPjxwYXRoIGQ9Ik0yNTYgMTI4djM4NEgxMjhWMjU2YTEyOCAxMjggMCAwIDEgMTI4LTEyOE02NDAgMzg0aDEyOHYyNTZhMTI4IDEyOCAwIDAgMS0xMjggMTI4eiIgY2xhc3M9ImZpbGxzIiBzdHlsZT0iZmlsbDojZmZmO2ZpbGwtb3BhY2l0eToxIi8+PC9zdmc+
  invertible: true
topBar:
  links:
    - icon: github
      href: https://github.com/guarana-studio/hydride
---

# Hydride

A hybrid [Vite](https://vite.dev/) application starter kit combining a [Svelte](https://svelte.dev/) Single Page Application with a [Nitro](https://v3.nitro.build/)‑based backend - optimized for agentic development workflows and designed to take your ideas from concept to production in days.

Hydride removes the overhead of assembling a modern full-stack architecture from scratch. It provides a single codebase, a single deployment target, and a fully integrated stack - so you can skip the configuration and focus on building your product.

## Introduction

### Features

#### Hybrid Server

The application server is capable of serving both the Svelte SPA frontend and API Route-based backend from a single process. This unified architecture eliminates the need to deploy and manage separate services for each end of your application.

#### File System Routing

Hydride provides a unified `src/routes` directory for both Svelte pages and API Routes. The Svelte router supports nested layouts and route guards, enabling you to enforce access control declaratively.

#### Backend–Frontend Communication

[oRPC](https://orpc.dev/) is integrated out of the box to streamline communication between the backend and frontend. Define and invoke remote procedures through a fully type-safe API that conforms to the OpenAPI specification.

#### Type-Safe Database Access

[Drizzle ORM](https://orm.drizzle.team/) comes preconfigured as a headless TypeScript ORM, letting you compose queries and mutations in an idiomatic, type-safe manner without sacrificing flexibility.

#### Built-In Authentication

[Better Auth](https://better-auth.com/) is preconfigured so you can avoid building authentication from scratch or depending on a third-party service. The base configuration supports Email OTP and Passkey sign-in out of the box.

#### Refined Styling

The template ships with [Tailwind CSS](https://tailwindcss.com/), [Basecoat UI](https://basecoatui.com/), [Lucide Icons](https://lucide.dev/), and the Geist typeface - a cohesive foundation for building clean, minimalist interfaces.

#### Expressive Forms

Building schema-validated forms with meaningful, user-facing error messages is straightforward with Hydride's integrated form handling primitives.

#### Background Tasks

Schedule and execute background tasks, monitor their progress, and surface status updates to the user when long-running operations complete.

#### Key-Value Storage

A built-in key-value store enables shared context across API Routes and Background Tasks. Persistence is available through a Redis-compatible driver for production use cases.

#### Developer Experience First

Hydride pushes the boundaries of end-to-end type safety with typed environment variables, a preconfigured linter, and an opinionated code formatter - so your tooling stays consistent from day one.

## Getting started

### Prerequisite

- [Node.js v20+](https://nodejs.org/)
- Code editor
- Terminal

### Clone template

````tabs

== NPM

```sh
npx giget@latest gh:guarana-studio/hydride/templates/main [project-name]
```

==

== Bun

```sh
bunx giget@latest gh:guarana-studio/hydride/templates/main [project-name]
```

==

````

### Install dependencies

````tabs

== NPM

```sh
npm i
```

==

== Bun

```sh
bun i
```

==

````

### Development server

````tabs

== NPM

```sh
npm run dev
```

==

== Bun

```sh
bun run dev
```

==

````

## Resources

### Roadmap

#### To do

- [ ] Simple admin panel with orpc and `drizzle-crud`
- [ ] Marketing pages prerendering
- [ ] Guide and SKILL.md to enable payments
- [ ] Guide to enable multi-tenancy

#### Done

- [x] Basic styling with Tailwind, and Basecoat
- [x] KV Storage enabled
- [x] Background tasks enabled
- [x] Linter and formatter settings
- [x] Type-safe environment variables
- [x] Type-safe forms
- [x] ORPC integration
- [x] ORM integration with Drizzle
- [x] Authentication with Better Auth
