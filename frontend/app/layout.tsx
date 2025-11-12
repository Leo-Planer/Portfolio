import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/lib/ThemeProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Box from '@mui/material/Box';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Abdullah Jabbar - Full Stack Developer',
    template: '%s | Abdullah Jabbar',
  },
  description:
    'Full Stack Developer specializing in React, Next.js, and Node.js. Building modern web applications with focus on performance and user experience.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Web Development'],
  authors: [{ name: 'Abdullah Jabbar' }],
  creator: 'Abdullah Jabbar',
  metadataBase: new URL('https://yourportfolio.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'Abdullah Jabbar - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, and Node.js.',
    siteName: 'Abdullah Jabbar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdullah Jabbar - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, and Node.js.',
    creator: '@AbdullahJa57382',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <Box component="main" sx={{ flexGrow: 1 }}>
              {children}
            </Box>
            <Footer />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
