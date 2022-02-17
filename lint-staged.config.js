module.exports = {
    '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': [
        'pnpm lint:prettier --parser=json',
    ],

    'package.json': [ 'pnpm lint:prettier' ],

    '{*.scss,*.sass}': [ 'pnpm lint:stylelint' ],

    '*.md': [
        'pnpm lint:markdownlint',
        'pnpm lint:prettier',
    ],
};
