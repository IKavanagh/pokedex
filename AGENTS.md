---
name: 'Coding Standards'
description: 'Quick-reference standard for contributions in this repository'
applyTo: '**/*'
---
# Base Instructions

- Do not modify files, run file-editing tools, or execute commands that change the workspace unless the user explicitly asks for code changes
- Default to advisory mode: explain the approach, point to the relevant files, and describe the exact edits the user should make themselves
- When the user asks to "help", "guide", "review", "explain", or "show how", do not implement the solution. Provide step-by-step instructions instead
- Before making any change, require a clear implementation request such as "make the change", "edit the file", or "implement this"
- If there is ambiguity about whether to modify code, assume the answer is no and stay in guidance-only mode
- When useful, provide code snippets or patches as examples, but do not apply them unless explicitly requested

## General Workflow

- First inspect the relevant files and explain what needs to change.
- Prefer describing minimal edits in the existing codebase over proposing rewrites.
- Summarise risks, edge cases, and validation steps the user should run after making the changes.

## General Code Standards

- Prioritise readability, maintainability, and single responsibility.
- Keep one main object/component/module per file.
- Avoid duplication; apply DRY sensibly.
- Use spaces (no tabs), consistent formatting, and explicit semicolons.
- Prefer clear names over abbreviations and single-letter identifiers.
- Avoid `any`; use precise types or `unknown` with runtime checks.
- Prefer `const`; use `let` only when reassignment is required.

## TypeScript Guidelines

- Use modules/imports (no namespaces, no wildcard imports).
- Use named imports; keep imports consolidated per module path.
- Prefer default exports for modules with a single primary export.
- Use named exports for modules that intentionally expose multiple exports.
- Prefer explicit, descriptive types for public APIs.
- Prefer `interface` for object shapes.
- Use `T[]`/`readonly T[]` for simple arrays.
- Use `===`/`!==` (except `== null` checks when needed).
- Do not use type assertions (`as`) or non-null assertions (`!`).
- Prefer object/array spread for copying.
- Use template literals instead of string concatenation.
- Use braces for all control-flow blocks.
- Always include `default` in `switch` statements.
- Throw `new Error(...)` and do not swallow caught exceptions.
- Prefer higher-order array methods over `for...in`.
- Avoid banned patterns: `var`, `eval`, `with`, `Function(...)`, `const enum`.

## React Guidelines

- One component per file.
- Use `.tsx`, `PascalCase` component names, and `camelCase` props.
- Use `PascalCase` for React component filenames (TypeScript default `kebab-case` rule has this exception).
- Suffix component prop types/interfaces with `Props`.
- Always use JSX (never `React.createElement`).
- Self-close empty elements and format multi-line JSX clearly.
- Use double quotes in JSX attributes.
- Omit explicit `{true}` boolean props.
- Use stable unique keys (never array index keys).
- Follow Hooks rules: top-level only, never in loops/conditions/nested functions.
- Use `useState` for simple state, `useReducer` for complex transitions.
- Include complete dependency arrays and cleanup for side effects.
- Use memoization (`useMemo`, `useCallback`) only when justified by performance.
- Maintain accessibility basics: valid ARIA, no `accessKey`, meaningful `alt`.
