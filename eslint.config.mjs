import nextPlugin from '@next/eslint-plugin-next';
import prettier from 'eslint-config-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
    // ── Global: Next.js, React hooks, stylistic, unused-imports ──────────────
    {
        plugins: {
            '@next/next': nextPlugin,
            'react-hooks': reactHooks,
            '@stylistic': stylistic,
            'unused-imports': unusedImports,
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs['core-web-vitals'].rules,
            ...reactHooks.configs.recommended.rules,
            // Prettier handles most formatting, but not comment spacing
            '@stylistic/spaced-comment': [
                'error',
                'always',
                {
                    line: { markers: ['/'] },
                    block: { markers: ['!'], balanced: true },
                },
            ],
            'array-callback-return': 'error',
            camelcase: ['error', { properties: 'never', ignoreDestructuring: true }],
            'dot-notation': 'error',
            eqeqeq: 'error',
            'id-length': [
                'error',
                {
                    min: 2,
                    exceptions: [
                        '_', // unused variable convention
                        'e', // error object
                        'i', // loop index
                        'j', // nested loop index
                        'k', // nested loop index
                        'x', // coordinate
                        'y', // coordinate
                        't', // translation function
                    ],
                },
            ],
            'new-cap': ['error', { newIsCap: true, capIsNew: false }],
            'no-array-constructor': 'error',
            'no-const-assign': 'error',
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'no-dupe-class-members': 'error',
            'no-else-return': 'error',
            'no-eval': 'error',
            'no-iterator': 'error',
            'no-loop-func': 'error',
            'no-mixed-operators': 'error',
            'no-multi-assign': 'error',
            'no-nested-ternary': 'error',
            'no-new-func': 'error',
            'no-new-wrappers': 'error',
            'no-object-constructor': 'error',
            'no-param-reassign': 'error',
            'no-restricted-globals': [
                'error',
                { name: 'isFinite', message: 'Use Number.isFinite instead.' },
                { name: 'isNaN', message: 'Use Number.isNaN instead.' },
            ],
            'no-underscore-dangle': 'error',
            'no-unneeded-ternary': 'error',
            'no-useless-constructor': 'error',
            'no-useless-escape': 'error',
            'no-var': 'error',
            'object-shorthand': 'error',
            'one-var': ['error', 'never'],
            'prefer-arrow-callback': 'error',
            'prefer-const': 'error',
            'prefer-destructuring': ['error', { array: true, object: true }],
            'prefer-rest-params': 'error',
            'prefer-template': 'error',
            radix: 'error',
            '@next/next/no-html-link-for-pages': 'off',
            '@next/next/no-img-element': 'off',
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],
        },
    },
    // ── Ignored paths ─────────────────────────────────────────────────────────
    {
        ignores: ['**/dist', '**/node_modules', '**/coverage', '**/.next/**', '**/*.d.ts'],
    },
    // ── TS/JS files: parser, globals, and import rules ────────────────────────
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
        plugins: {
            import: importPlugin,
        },
        languageOptions: {
            parser: tsParser,
            globals: { ...globals.node, ...globals.browser },
            sourceType: 'module',
            parserOptions: {
                projectService: true,
                tsconfigRootDir: process.cwd(),
            },
        },
        rules: {
            'import/first': 'error',
            'import/no-mutable-exports': 'error',
            'import/prefer-default-export': 'error',
            'import/no-webpack-loader-syntax': 'error',
            'import/no-duplicates': 'error',
        },
    },
    // ── JSX/TSX files: React and accessibility rules ──────────────────────────
    {
        files: ['**/*.tsx', '**/*.jsx'],
        plugins: {
            react: reactPlugin,
            'jsx-a11y': jsxA11y,
        },
        settings: {
            react: { version: 'detect' },
        },
        rules: {
            'react/no-multi-comp': 'error',
            'react/jsx-pascal-case': 'error',
            'react/jsx-boolean-value': ['error', 'never'],
            'react/self-closing-comp': 'error',
            'react/require-render-return': 'error',
            'jsx-a11y/aria-role': 'error',
            'jsx-a11y/no-access-key': 'error',
            'jsx-a11y/alt-text': 'error',
            'jsx-a11y/img-redundant-alt': 'error',
        },
    },
    // ── Config and test files: disable type-aware parser ─────────────────────
    {
        files: ['**/*.config.{ts,js,mts,cts}', '**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
        languageOptions: {
            parserOptions: {
                projectService: false,
            },
        },
    },
    // ── Prettier (disables conflicting formatting rules — must be last) ────────
    prettier,
];
