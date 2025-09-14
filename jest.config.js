module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.test.ts', '**/?(*.)+(spec|test).ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
    '!src/api/**/*',
    '!src/generated_test/**/*',
  ],
  setupFilesAfterEnv: ['<rootDir>/src/test/setup.ts'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/api/',
    '<rootDir>/src/generated_test/',
    // '<rootDir>/src/__tests__/wkt*',
  ],
  modulePathIgnorePatterns: ['<rootDir>/src/api/', '<rootDir>/src/generated_test/'],
};
