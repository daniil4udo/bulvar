const fs = require('fs');
const path = require('path');
const sass = require('node-sass');
const utils = require('../utils');

const NODE_SASS_BASE_PATH = 'test/node-sass/build/';

fs.mkdir(NODE_SASS_BASE_PATH, { recursive: true }, (err) => {
  if (err) throw err;
});

const exportNodeSassCSS = (filepath, options) => {
  utils.exportCSS(sass, fs, NODE_SASS_BASE_PATH, filepath, options)
}

// Full import

exportNodeSassCSS('buefy', {
    file: '../../packages/buefy/buefy.sass',
});

exportNodeSassCSS('buefy-rtl', {
    file: '../../packages/buefy/buefy-rtl.sass',
});

// Single imports

const BULMA_IMPORT_PATH = `../../packages/bulma/`;

utils.SOURCES.forEach((source) => {
  const parsed = path.parse(source);

  fs.mkdir(`${NODE_SASS_BASE_PATH}${parsed.dir}`, { recursive: true }, (err) => {
    if (err) throw err;
  });

  exportNodeSassCSS(`${parsed.dir}/${parsed.name}`, {
    data: `@import "${BULMA_IMPORT_PATH}${source}";`,
  });
});
