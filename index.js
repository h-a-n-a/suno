#!/usr/bin/env node

const spawnSync = require('child_process').spawnSync

process.exit(
  spawnSync(
    'node',
    ['-r', require.resolve('sucrase/register'), ...process.argv.slice(2)],
    { stdio: 'inherit' }
  ).status
)
