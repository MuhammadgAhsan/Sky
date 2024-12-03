import './globals.css';
import Head from 'next/head';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="FixExpertsPro offers expert home repair services including plumbing, electricity, HVAC, roofing, landscaping, and cleaning. Quality, care, and reliable service for every home. Contact us today!" />
        <meta name="robots" content="index, follow" />
        <title>Expert Home Services: Plumbing, Electrical, HVAC, Roofing & More | FixExpertsPro</title>
        <link rel="canonical" href="https://www.fixexpertspro.com/" />
        <link rel="alternate" hreflang="en" href="https://www.fixexpertspro.com/" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
