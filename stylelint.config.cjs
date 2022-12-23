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
        // Off rules
        'block-no-empty': null,
        'function-name-case': null,
        'custom-property-pattern': null,
        'value-keyword-case': null,
        'block-no-empty': null,
        'selector-type-no-unknown': null,
        'selector-class-pattern': null,
        // 'order/properties-order': null,
        'no-descending-specificity': null,
        'declaration-empty-line-before': null,
        'declaration-block-no-redundant-longhand-properties': null,
        'rule-empty-line-before': null,
        'custom-property-empty-line-before': null,

        'color-function-notation': null,
        // 'hue-degree-notation': null,
        'property-no-vendor-prefix': null,

        'no-duplicate-selectors': null,

        'scss/dollar-variable-pattern': null,
        'scss/at-if-closing-brace-space-after': null,
        'scss/at-if-closing-brace-newline-after': null,
        'scss/double-slash-comment-empty-line-before': null,
        'scss/dollar-variable-empty-line-before': null,
        'scss/dollar-variable-colon-space-after': null,

        'at-rule-empty-line-before': 'blockless-after-blockless',
        'indentation': 'tab',
        'indentation': 4,
        'string-quotes': 'double',

        /// Sometime Stylelint remove comments
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
