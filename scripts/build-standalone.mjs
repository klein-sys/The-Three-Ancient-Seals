import { build } from 'esbuild';
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

async function main() {
  const outDir = resolve('standalone');
  const distOutDir = resolve('dist/standalone');
  mkdirSync(outDir, { recursive: true });
  mkdirSync(distOutDir, { recursive: true });

  await build({
    entryPoints: ['src/main.ts'],
    bundle: true,
    minify: true,
    format: 'iife',
    platform: 'browser',
    target: ['es2020'],
    outfile: 'standalone/game.iife.js',
    loader: { '.css': 'css' },
    external: ['/fonts/*'],
  });

  const font=readFileSync('public/fonts/Cinzel.ttf').toString('base64');
  const css=readFileSync('standalone/game.iife.css','utf8').replaceAll('/fonts/Cinzel.ttf',`data:font/ttf;base64,${font}`);
  writeFileSync('standalone/game.iife.css',css);
  copyFileSync('standalone/game.iife.js', 'dist/standalone/game.iife.js');
  copyFileSync('standalone/game.iife.css', 'dist/standalone/game.iife.css');
  console.log('Standalone file:// bundle built at standalone/game.iife.js and dist/standalone/game.iife.js');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

