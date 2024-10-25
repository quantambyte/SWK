import { Poppins, Teko } from 'next/font/google';
import localFont from 'next/font/local';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const nura = localFont({
  src: '../assets/fonts/fonnts.com-Nura_Thin.ttf',
  variable: '--font-nura',
});
const nuraBold = localFont({
  src: '../assets/fonts/fonnts.com-Nura_Bold.ttf',
  variable: '--font-nura-bold',
});

export { poppins, nura, nuraBold };
