# Pokedex

This is a personal project to build a Pokedex web app using [Next.js](https://nextjs.org), React, and TypeScript. It also serves as a sandbox for exploring modern frontend tooling and workflows.

## Getting Started

This project uses [pnpm](https://pnpm.io) and requires Node.js `>=24.19.0` (see `.nvmrc`).

Install dependencies, then run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a font family for Vercel.

## Available Scripts

| Script               | Description                                     |
| -------------------- | ------------------------------------------------ |
| `pnpm dev`           | Run the development server                        |
| `pnpm build`         | Build the app for production                      |
| `pnpm start`         | Run the production build                          |
| `pnpm lint`          | Lint the codebase with ESLint                     |
| `pnpm format`        | Format the codebase with Prettier                 |
| `pnpm format:check`  | Check formatting without writing changes          |
| `pnpm knip`          | Find unused files, exports, and dependencies      |
| `pnpm test`          | Run unit/component tests with Vitest              |
| `pnpm test:coverage` | Run unit/component tests with a coverage report   |
| `pnpm test:watch`    | Run unit/component tests in watch mode            |
| `pnpm test:e2e`      | Run end-to-end tests with Playwright              |

## Tooling

This project is set up with the following tooling to keep the codebase consistent, secure, and easy to maintain:

- **[ESLint](https://eslint.org)** & **[Prettier](https://prettier.io)** — linting and formatting
- **[Husky](https://typicode.github.io/husky)** & **[lint-staged](https://github.com/lint-staged/lint-staged)** — run checks on staged files before each commit
- **[commitlint](https://commitlint.js.org)** — enforces the [commit message guidelines](./CONTRIBUTING.md#commit-message-guidelines)
- **[gitleaks](https://github.com/gitleaks/gitleaks)** — scans staged changes for secrets before each commit
- **[Knip](https://knip.dev)** — finds unused files, exports, and dependencies
- **[Vitest](https://vitest.dev)** & **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro)** — unit and component testing
- **[Playwright](https://playwright.dev)** — end-to-end testing
- **[Dependabot](https://docs.github.com/en/code-security/dependabot)** — automated dependency updates
- **pnpm `minimumReleaseAge`** — requires packages to have been published for at least 2 days before they can be installed, guarding against supply-chain attacks (see `pnpm-workspace.yaml`)

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for branch naming conventions, commit message guidelines, and the overall contribution process.

## Code Style

Code in this repository follows the guidelines in [`REACT.md`](./REACT.md) and [`TYPESCRIPT.md`](./TYPESCRIPT.md).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is licensed under the [PolyForm Noncommercial License 1.0.0](./LICENSE). Noncommercial use (personal, educational, nonprofit) is freely permitted; commercial use requires a separate agreement.
