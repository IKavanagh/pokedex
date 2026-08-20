import type { UserConfig } from '@commitlint/types';

const config: UserConfig = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'header-max-length': [2, 'always', 80],
        'subject-case': [2, 'always', 'lower-case'],
        'subject-full-stop': [2, 'never', '.'],
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'docs',
                'style',
                'refactor',
                'perf',
                'test',
                'build',
                'ci',
                'chore',
                'revert',
            ],
        ],
    },
};

export default config;
