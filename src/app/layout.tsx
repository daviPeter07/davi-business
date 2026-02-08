import type React from 'react';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { ThemeProvider } from '@/src/components/theme-provider';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Davi Business - Soluções de Software e Hardware',
  description:
    'Soluções personalizadas de software e hardware para empresas que querem crescer. Transformamos ideias em realidade digital com tecnologia de ponta.',
  icons: {
    icon: '/meProfessional.jpg',
  },
  keywords: [
    'Davi Business',
    'Software Development',
    'Hardware Solutions',
    'Desenvolvimento de Software',
    'Consultoria Tecnológica',
    'Web Development',
    'Mobile Apps',
    'E-commerce',
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>

        {/* Open Graph */}
        <meta property="og:title" content={String(metadata.title)} />
        <meta property="og:description" content={String(metadata.description)} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://davi-business.com" />
        <meta property="og:image" content="https://davi-business.com/meProfessional.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={String(metadata.title)} />
        <meta name="twitter:description" content={String(metadata.description)} />
        <meta name="twitter:image" content="https://davi-business.com/meProfessional.jpg" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Davi Business',
              url: 'https://davi-business.com',
              logo: 'https://davi-business.com/logo.png',
              email: 'mailto:contato@davibusiness.com.br',
              phone: '+55 92 99258-4985',
              taxID: '64.616.637/0001-90',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'BR',
              },
              sameAs: [
                'https://www.linkedin.com/company/davi-business',
                'https://github.com/davi-business',
              ],
              description: String(metadata.description),
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
