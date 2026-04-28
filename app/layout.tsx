import type { Metadata, Viewport } from 'next';
import { EditionProvider } from '@/lib/edition-context';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { siteConfig } from '@/lib/content.config';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.seriesAcronym} - ${siteConfig.seriesName}`,
    template: `%s | ${siteConfig.seriesAcronym}`,
  },
  description: siteConfig.seriesDescription,
  keywords: [
    'AI',
    'artificial intelligence',
    'infectious diseases',
    'public health',
    'STI',
    'surveillance',
    'diagnostics',
    'symposium',
    'conference',
    'Columbia University',
  ],
  authors: [{ name: siteConfig.seriesAcronym }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: siteConfig.seriesAcronym,
    title: `${siteConfig.seriesAcronym} - ${siteConfig.seriesName}`,
    description: siteConfig.seriesDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.seriesAcronym} - ${siteConfig.seriesName}`,
    description: siteConfig.seriesDescription,
  },
  icons: {
    icon: [
      {
        url: '/raiidius-icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/raiidius-icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/raiidius-icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/raiidius-apple-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#2563eb',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <EditionProvider>
          <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-W54GRN9MXW"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-W54GRN9MXW');
</script>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </EditionProvider>
      </body>
     
    </html>
  );
}
