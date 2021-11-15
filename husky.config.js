/**
 *
 * Uncomment once we lint entire codebase
 *
 */

const tasks = arr => arr.join(' && ');

module.exports = {
    hooks: {
        'pre-commit': tasks([
            'echo "🔍  Start pre–commit checks..."',
            'cross-env PRE_COMMIT=true lint-staged',
        ]),

        // 'commit-msg': tasks([
        //     'echo "🔍  Start lint commit..."',
        //     'cross-env POST_COMMIT=true commitlint -e $HUSKY_GIT_PARAMS',
        // ]),

        // 'pre-push': tasks([
        //     'echo "🔍  Start utin testing before push..."',
        //     'cross-env PRE_PUSH=true yarn test',
        // ]),
    },
};
