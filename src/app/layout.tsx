import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Providers } from './providers';
import { cn } from '@/lib/utils';
import StructuredData from '@/components/seo/StructuredData';
import { BUSINESS_INFO } from '@/lib/constants/business';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `${BUSINESS_INFO.name} - Professional Web Hosting & Digital Solutions`,
  description: BUSINESS_INFO.description,
  keywords: ['web hosting Bangladesh', 'domain registration', 'VPS hosting', 'email hosting', 'SMS gateway', 'digital solutions Bangladesh'],
  authors: [{ name: `${BUSINESS_INFO.name} Team` }],
  creator: BUSINESS_INFO.name,
  publisher: BUSINESS_INFO.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(BUSINESS_INFO.contact.website),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${BUSINESS_INFO.name} - Professional Web Hosting & Digital Solutions`,
    description: BUSINESS_INFO.description,
    url: BUSINESS_INFO.contact.website,
    siteName: BUSINESS_INFO.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: `${BUSINESS_INFO.name} Logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS_INFO.name} - Professional Web Hosting & Digital Solutions`,
    description: BUSINESS_INFO.description,
    creator: '@neyamotenterprise',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 `}
      >
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
            
              <main className="flex-1">{children}</main>
            
            </div>
            <Toaster />
          </ThemeProvider>
        </Providers>
        <StructuredData type="Organization" />
        <StructuredData type="WebSite" />
        <StructuredData type="LocalBusiness" />
      </body>
    </html>
  );
}
