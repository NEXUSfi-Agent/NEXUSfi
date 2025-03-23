import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NEXUSfi - AI-Powered Crypto Investment Protocol',
  description: 'NEXUSfi is a production-ready AI-powered investment protocol built on Solana that democratizes sophisticated crypto asset management.',
  keywords: 'NEXUSfi, crypto, blockchain, AI, investment, Solana, DeFi, finance',
  authors: [{ name: 'NEXUSfi Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nexusfix.xyz',
    title: 'NEXUSfi - AI-Powered Crypto Investment Protocol',
    description: 'NEXUSfi is a production-ready AI-powered investment protocol built on Solana that democratizes sophisticated crypto asset management.',
    siteName: 'NEXUSfi',
    images: [
      {
        url: 'https://nexusfix.xyz/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NEXUSfi Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@NEXUSfi_',
    creator: '@NEXUSfi_',
    title: 'NEXUSfi - AI-Powered Crypto Investment Protocol',
    description: 'NEXUSfi is a production-ready AI-powered investment protocol built on Solana that democratizes sophisticated crypto asset management.',
    images: ['https://nexusfix.xyz/images/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans">
        {children}
      </body>
    </html>
  );
} 