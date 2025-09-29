/* eslint-disable no-console */
'use strict';

const fs = require('fs/promises');

async function copy(oldPath, newPath) {
  if (!oldPath || !newPath) {
    console.error('Source and destination file paths are required');
  }

  if (oldPath === newPath) {
    return;
  }

  try {
    const srcStats = await fs.stat(oldPath);

    if (!srcStats.isFile()) {
      console.error('Source is not a regular file');
    }

    await fs.copyFile(oldPath, newPath);
  } catch (err) {
    console.error('Copy error:', err.message);
  }
}

if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length !== 2) {
    console.error('Exactly two positional arguments required');
  }

  const [oldPath, newPath] = args;

  copy(oldPath, newPath);
}

module.exports = {
  copy,
};
