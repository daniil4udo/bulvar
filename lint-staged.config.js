module.exports = {
    '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': [
        'yarn lint:prettier --parser=json',
    ],

    'package.json': [ 'yarn lint:prettier' ],

    '{*.scss,*.sass}': [ 'yarn lint:stylelint' ],

    '*.md': [
        'yarn lint:markdownlint',
        'yarn lint:prettier',
    ],
};
