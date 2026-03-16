import type {Metadata} from 'next';
import { Space_Grotesk, Outfit, JetBrains_Mono } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Ayush Singh | Partnerships & GTM | Full-Stack Engineer',
  description: 'Partnerships & GTM @ testRigor. Ex-founder. Full-stack engineer. Building CloseLoop.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${outfit.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-[#0a0a0a] text-zinc-300 font-sans antialiased selection:bg-zinc-800 selection:text-zinc-100" suppressHydrationWarning>
        {children}
        <Toaster theme="dark" position="bottom-right" />
      </body>
    </html>
  );
}
