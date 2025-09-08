#!/usr/bin/env node

// Delegates to the multi-file generator implementation.

if (require.main === module) {
  const { main } = require('./generator/main');
  void main();
}
