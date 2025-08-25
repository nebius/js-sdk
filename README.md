# Nebius AI SDK for NodeJS

A TypeScript SDK for interacting with Nebius AI services.

## Development

### Linting & Formatting

This project uses ESLint (flat config) plus Prettier for code style.

Commands:

```bash
# Check lint issues
npm run lint

# Auto-fix lint issues + run Prettier
npm run lint:fix

# Format all files with Prettier
npm run format

# Check formatting (no changes written)
npm run format:check
```

Generated code in `src/generated/` is ignored by both ESLint and Prettier.
