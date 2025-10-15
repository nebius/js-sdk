# Contribution Guide

We appreciate your interest in contributing to the Nebius AI SDK. This guide explains the preferred workflow and common developer commands for working on this repository.

## 🐞 Reporting Issues

### Security Vulnerabilities

If you discover a security issue, report it promptly via the GitHub "Report a Vulnerability" tab:

[Report a vulnerability][new-security]

For more details on security policies see `SECURITY.md`.

### Bugs & Feature Requests

Before opening a new issue, search existing issues to avoid duplicates. If it's new, open an issue and include a short description, steps to reproduce (if a bug), and any relevant logs or test output.

File a new issue here: [Create issue][new-issue]

## 🛠️ Contributing Code

Typical contribution flow:

1. Open an issue to discuss the change (bugfix, enhancement, or API adjustment).
2. Fork the repository and create a feature branch for your work.
3. Implement your changes and add tests covering the behaviour.
4. Run the linter, formatter and tests locally.
5. Push to your fork and open a Pull Request (PR) against the main branch for review.

Small, focused PRs are easier to review. Describe the motivation and include links to related issues.

## 💻 Development setup (Node.js / TypeScript)

Prerequisites:

- Node.js 18 or later (LTS recommended)
- npm (or pnpm/yarn) available on PATH
- `buf` CLI if you need to regenerate protobuf artifacts (optional for most contribution workflows)

Quick start:

```bash
# clone and install
git clone git@github.com:nebius/js-sdk.git
cd js-sdk
npm ci

# build generated artifacts and TypeScript
npm run build

# generate docs (optional)
npm run docs
```

If you prefer `pnpm` or `yarn` use the equivalent install command (`pnpm install` / `yarn install`).

Regenerating generated code:

If you need to regenerate `src/generated/` from protos, examine the `scripts/` and `dist-scripts/scripts/` helpers. The repository includes generators; follow their README or run the generator scripts as necessary.

## 🧪 Testing

Write tests using Jest (the project uses Jest for unit tests). Run tests locally with:

```bash
npm test

# run a single test file
npx jest src/__tests__/path/to/test.file.ts
```

E2E tests require valid Nebius credentials and are not suitable for public CI by default, but they are available in the GitHub CI.

## 🔍 Code quality, linting & formatting

Use the project's npm scripts to check and fix style issues:

```bash
# lint
npm run lint

# fix lint issues
npm run lint:fix

# format with Prettier
npm run format

# check formatting
npm run format:check
```

If the repository uses git hooks (e.g. Husky), ensure they are installed in your environment. If unsure, run the lint/format commands before committing.

## Pre-commit & CI

Run the same linting/format/test commands locally that CI runs. This reduces PR churn and helps CI pass on the first run.

## Troubleshooting & notes

- Generated code in `src/api/` is authored by generator scripts. Avoid editing generated files by hand.
- If types or generated clients are missing, run the generator scripts described under `scripts/`.
- For API docs, run `npm run docs` and open `docs/api/index.html`.

[issues]: https://github.com/nebius/js-sdk/issues
[new-issue]: https://github.com/nebius/js-sdk/issues/new/choose
[new-security]: https://github.com/nebius/js-sdk/security/advisories/new
