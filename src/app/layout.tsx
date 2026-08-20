import type { Metadata } from 'next';
import { Roboto, Roboto_Mono } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
    variable: '--font-roboto',
    subsets: ['latin'],
});

const robotoMono = Roboto_Mono({
    variable: '--font-roboto-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Pokedex',
    description: 'A personal project to build a Pokedex.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
    return (
        <html lang="en" className={`${roboto.variable} ${robotoMono.variable}`}>
            <body>{children}</body>
        </html>
    );
}
