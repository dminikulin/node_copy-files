/* eslint-disable no-console */
'use strict';

const fs = require('fs/promises');

async function copy() {
  const args = process.argv.slice(2);
  const [oldPath, newPath] = args;

  if (!oldPath || !newPath) {
    console.error('Source and destination file paths are required');

    return;
  }

  if (oldPath === newPath) {
    return;
  }

  try {
    await fs.copyFile(oldPath, newPath);
  } catch (err) {
    console.error('Copy error:', err.message);
  }
}

if (require.main === module) {
  copy();
}

module.exports = {
  copy,
};
