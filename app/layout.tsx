import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'YucaChain - Powering Africa’s Cassava Economy',
  description: 'YucaChain Limited is building Africa’s most integrated cassava value chain through technology, financial tools, and coordinated logistics.',
  openGraph: {
    title: 'YucaChain - Powering Africa’s Cassava Economy Through Technology',
    description: 'YucaChain Limited is building Africa’s most integrated cassava value chain — connecting farmers, processors, financiers, and global markets through a unified digital ecosystem.',
    url: 'https://yucachain.com',
    siteName: 'YucaChain',
    images: [
      {
        url: 'https://yucachain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'YucaChain Ecosystem',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth relative">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "YucaChain Limited",
              "url": "https://yucachain.com",
              "logo": "https://yucachain.com/logo.png",
              "description": "Powering Africa's Cassava Economy Through Technology.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+234-XXX-XXX-XXXX",
                "contactType": "customer service",
                "email": "info@yucachain.com"
              },
              "sameAs": [
                "https://www.linkedin.com/company/yucachain",
                "https://twitter.com/yucachain"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
