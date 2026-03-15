import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '@/app/ui/globals.css';

const roboto = Roboto({
    variable: '--font-roboto',
    subsets: ['latin'],
    weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
    title: 'Pokedex',
    description: 'A comprehensive Pokémon database',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${roboto.variable}`}>{children}</body>
        </html>
    );
}
