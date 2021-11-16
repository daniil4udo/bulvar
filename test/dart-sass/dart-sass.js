const fs = require('fs');
const path = require('path');
const sass = require('sass');
const utils = require('../utils');

const DART_BASE_PATH = 'test/dart-sass/build/';

fs.mkdir(DART_BASE_PATH, { recursive: true }, (err) => {
  if (err) throw err;
});

const exportDartCSS = (filepath, options) => {
  utils.exportCSS(sass, fs, DART_BASE_PATH, filepath, options)
}

// Full import

exportDartCSS('buefy', {
  file: '/packages/buefy/buefy.sass',
});

exportDartCSS('buefy-rtl', {
  file: '/packages/buefy/buefy-rtl.sass',
});

// Custom import

fs.mkdir(`${DART_BASE_PATH}custom`, { recursive: true }, (err) => {
  if (err) throw err;
});

utils.exportCSS(sass, fs, DART_BASE_PATH, 'custom/navbar', {
  data: '@use "/packages/bulma/components/navbar.sass" with ( $scheme-main: red );',
});

// Single imports

const BULMA_IMPORT_PATH = `/packages/bulma/`;

utils.SOURCES.forEach((source) => {
  const parsed = path.parse(source);

  fs.mkdir(`${DART_BASE_PATH}${parsed.dir}`, { recursive: true }, (err) => {
    if (err) throw err;
  });

  exportDartCSS(`${parsed.dir}/${parsed.name}`, {
    data: `@use "${BULMA_IMPORT_PATH}${source}";`,
  });
});
