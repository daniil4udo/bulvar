module.exports = {
    extends: [
        // Use the Standard config as the base
        // https://github.com/stylelint-scss/stylelint-config-standard-scss
        // ===
        'stylelint-config-standard-scss',

        // https://github.com/ream88/stylelint-config-idiomatic-order
        'stylelint-config-idiomatic-order',

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
        'indentation': 'tab',
        'string-quotes': 'double',
        'rule-empty-line-before': null,
        'custom-property-empty-line-before': null,

        // Sometime Stylelint remove comments
        'block-no-empty': [
            true,
            {
                ignore: ['comments'],
            },
        ],
        
        'selector-type-no-unknown':[
            true, 
            { ignoreTypes: [':root'] }
        ],
    }
};
