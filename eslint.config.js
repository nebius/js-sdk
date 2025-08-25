// ESLint flat config for TypeScript project
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const globals = require('globals');
// Additional plugins
const importPlugin = require('eslint-plugin-import');
const promisePlugin = require('eslint-plugin-promise');
const nPlugin = require('eslint-plugin-n');
const jestPlugin = require('eslint-plugin-jest');

module.exports = [
  // Ignore build artifacts and generated code
  {
    ignores: [
      'dist/**',
      'src/generated/**',
      'node_modules/**',
      'scripts/generator/protos/**',
      'scripts/generator/nebius/**',
      'nebius-api/**',
    ],
  },

  // TypeScript files
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      globals: {
        ...globals.node,
        ...globals.es2021,
        ...globals.jest,
      },
    },
    // Settings for plugins
    settings: {
      // Let eslint-plugin-import resolve TS paths via tsconfig
      'import/resolver': {
        typescript: {
          project: ['./tsconfig.json', './tsconfig.scripts.json'],
        },
      },
      // Extensions to consider for Node resolution (used by eslint-plugin-n)
      n: {
        tryExtensions: ['.ts', '.tsx', '.js', '.json', '.node'],
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
      promise: promisePlugin,
      n: nPlugin,
      jest: jestPlugin,
      // prettier formatting handled by Prettier directly; eslint-plugin-prettier removed to avoid conflicts
    },
    rules: {
      // Ignore unused caught error variables in try/catch, allow underscore-args
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', caughtErrors: 'none' },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      // Keep as a warning by default; will be disabled in specific folders below
      '@typescript-eslint/no-explicit-any': 'warn',

      // Approximate "lll" (long line linter)
      'max-len': [
        'warn',
        { code: 120, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true },
      ],

      // import hygiene
      'import/no-unresolved': 'error',
      'import/no-duplicates': 'error',
      'import/newline-after-import': 'warn',
      'import/no-cycle': 'warn',
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      // promises
      'promise/no-return-wrap': 'error',
      'promise/catch-or-return': 'warn',
      'promise/no-multiple-resolved': 'error',

      // Node.js checks
      'n/no-missing-import': 'error',
      'n/no-extraneous-import': 'error',
      'n/no-process-exit': 'warn',

      // Basic Jest safety even in TS files (tests block below adds more)
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',

      // stylistic / consistency
      'prefer-const': 'warn',
      'no-var': 'error',
      'object-shorthand': 'warn',
      'arrow-body-style': ['warn', 'as-needed'],
      'prefer-arrow-callback': 'warn',
      'spaced-comment': ['warn', 'always', { markers: ['/'], exceptions: ['-'] }],
      curly: ['warn', 'multi-line'],

      // Prettier runs separately; keep ESLint focused on semantic/style rules only
    },
  },

  // Tests: be less strict about unused vars and allow any, and apply more jest rules
  {
    files: ['src/__tests__/**/*.ts'],
    plugins: { jest: jestPlugin },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      // Jest-specific
      'jest/expect-expect': 'warn',
      'jest/no-test-prefixes': 'warn',
      'jest/no-conditional-expect': 'warn',
    },
  },
];
