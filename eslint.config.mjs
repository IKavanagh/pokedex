import { defineConfig, globalIgnores } from 'eslint/config';
// eslint-config-next already bundles and version-pins @next/eslint-plugin-next,
// eslint-plugin-react, eslint-plugin-react-hooks, eslint-plugin-jsx-a11y,
// eslint-plugin-import and typescript-eslint, so it is used as the base instead
// of wiring those plugins up manually (avoids version-mismatch/incompatibility
// with the installed ESLint version).
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import stylistic from '@stylistic/eslint-plugin';
import unusedImports from 'eslint-plugin-unused-imports';
import eslintConfigPrettier from 'eslint-config-prettier';

const eslintConfig = defineConfig([
    // Next.js recommended + core-web-vitals rules (includes React, Hooks,
    // accessibility and import plugins/rules tuned for this Next.js version).
    ...nextVitals,
    // Next.js recommended TypeScript rules.
    ...nextTs,
    {
        plugins: {
            '@stylistic': stylistic,
            'unused-imports': unusedImports,
        },
        rules: {
            // Prettier handles most formatting, but not comment spacing.
            '@stylistic/spaced-comment': [
                'error',
                'always',
                {
                    line: { markers: ['/'] },
                    block: { markers: ['!'], balanced: true },
                },
            ],
            // Automatically flag/remove unused imports (AGENTS.md: readability/DRY).
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],
            // Disable core no-unused-vars in favor of unused-imports/no-unused-vars.
            'no-unused-vars': 'off',

            // ── General code quality (TYPESCRIPT.md / AGENTS.md conventions) ──
            'array-callback-return': 'error',
            camelcase: [
                'error',
                { properties: 'never', ignoreDestructuring: true, ignoreImports: true },
            ],
            'dot-notation': 'error',
            eqeqeq: 'error',
            'new-cap': ['error', { newIsCap: true, capIsNew: false }],
            'no-array-constructor': 'error',
            'no-console': ['warn', { allow: ['warn', 'error'] }],
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
            'no-var': 'error',
            'object-shorthand': 'error',
            'one-var': ['error', 'never'],
            'prefer-arrow-callback': 'error',
            'prefer-const': 'error',
            'prefer-destructuring': ['error', { array: true, object: true }],
            'prefer-rest-params': 'error',
            'prefer-template': 'error',
            radix: 'error',
        },
    },
    // ── TypeScript-specific: no `any`, no type/non-null assertions ────────────
    // (TYPESCRIPT.md: "Do not use type assertions", "Use `unknown` over `any`",
    // "Use `import type` for type-only imports").
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
        rules: {
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-non-null-assertion': 'error',
            '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'never' }],
            '@typescript-eslint/consistent-type-imports': [
                'error',
                { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
            ],
        },
    },
    // ── React/JSX-specific (REACT.md conventions) ─────────────────────────────
    {
        files: ['**/*.jsx', '**/*.tsx'],
        rules: {
            'react/jsx-boolean-value': ['error', 'never'],
            'react/jsx-pascal-case': 'error',
            'react/no-array-index-key': 'error',
            'react/self-closing-comp': 'error',
            'jsx-a11y/no-access-key': 'error',
        },
    },
    // Disable ESLint rules that conflict with Prettier formatting (must be last).
    eslintConfigPrettier,
    // Override default ignores of eslint-config-next.
    globalIgnores([
        // Default ignores of eslint-config-next:
        '.next/**',
        'out/**',
        'build/**',
        'next-env.d.ts',
    ]),
]);

export default eslintConfig;
