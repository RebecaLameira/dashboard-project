import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';
import { Indie_Flower } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
export const indieFont = Indie_Flower({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-indie',
});
