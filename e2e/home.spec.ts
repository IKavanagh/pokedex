import { expect, test } from '@playwright/test';

test('home page renders the getting started heading', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: /get started/i })).toBeVisible();
});

test('home page has a link to the Next.js documentation', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('link', { name: /documentation/i })).toHaveAttribute(
        'href',
        'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
    );
});
