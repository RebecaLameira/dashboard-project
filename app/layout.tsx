import type { Metadata } from 'next';
import { inter } from '@/app/ui/fonts';
import '@/app/ui/global.css';
import LinkPortfolio from './ui/linkportfolio';

export const metadata: Metadata = {
  title: 'Projeto Dashboard - Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/RL.ico" sizes="any" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <LinkPortfolio />
        {children}
      </body>
    </html>
  );
}
