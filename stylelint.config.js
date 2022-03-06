module.exports = {
    extends: [
        // Use the Standard config as the base
        // https://github.com/stylelint-scss/stylelint-config-standard-scss
        // ===
        'stylelint-config-standard-scss',

        // Override rules that would interfere with Prettier
        // https://github.com/shannonmoeller/stylelint-config-prettier
        // ===
        'stylelint-config-prettier',
    ],

    defaultSeverity: 'error',

    overrides: [
        {
            files: [ '**/*.(sass)' ],
            customSyntax: 'sugarss',
        },
        {
            files: [ '**/*.(scss|css)' ],
            customSyntax: 'postcss-scss',
        },
        {
            files: [ '**/*.(html|vue)' ],
            customSyntax: 'postcss-html',
        },
    ],

    rules: {
        'indentation': 4,
        'string-quotes': 'double',
        'rule-empty-line-before': 'never-multi-line',
    }
};
