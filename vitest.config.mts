import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        setupFiles: ['./vitest.setup.ts'],
        globals: true,
        css: true,
        exclude: ['**/node_modules/**', '**/.next/**', '**/e2e/**'],
        coverage: {
            provider: 'v8',
            reporter: ['text', 'html', 'lcov'],
            include: ['src/**/*.{ts,tsx}'],
            exclude: ['src/**/*.d.ts', 'src/**/*.test.{ts,tsx}'],
        },
    },
    resolve: {
        alias: {
            '@': `${import.meta.dirname}/src`,
        },
    },
});
