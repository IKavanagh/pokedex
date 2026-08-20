import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Home from './page';

describe('Home', () => {
    it('renders the getting started heading', () => {
        render(<Home />);

        expect(screen.getByRole('heading', { name: /get started/i })).toBeInTheDocument();
    });

    it('renders a link to the Next.js documentation', () => {
        render(<Home />);

        expect(screen.getByRole('link', { name: /documentation/i })).toHaveAttribute(
            'href',
            'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
        );
    });
});
