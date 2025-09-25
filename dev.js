import { dev } from 'rolldown/experimental';
import { rm } from 'node:fs/promises';
console.log('Starting Rolldown dev server...');

await rm('./dist', { recursive: true, force: true }).catch(() => {});

const engine = await dev({
  input: ['./src/main.js'],
  output: {
    dir: 'dist',
  },
  platform: 'node', // Ensure it runs in Node.js
  treeshake: true,
  experimental: {
    strictExecutionOrder: true,
    incrementalBuild: true,
    hmr: {
      // Using a custom implementation is key to the reproduction,
      // as it mirrors the original complex setup.
      new: true,
      implement: 'globalThis.__rolldown_runtime__ = console.log',
    },
  },
});

await engine.run();

console.log('Build finished. Attempting to import the entry module...');
// This import will likely fail with the ReferenceError.
await import('./dist/main.js').catch((err) => {
  console.error('--- ERROR CAUGHT ---');
  console.error(err);
  console.error('--------------------');
  process.exit(1); // Exit with error code to make failure clear
});

console.log('If you see this, the reproduction did NOT fail.');
process.exit(0);
