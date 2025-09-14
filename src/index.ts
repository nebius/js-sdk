// Public entry for the Nebius NodeJS SDK
// Keep this file minimal and re-export from the main SDK surface.

import { VERSION } from './version.js';

// Use explicit .js extension to be ESM-friendly after compile.
export * from './sdk.js';
export { VERSION };
