import './globals.css';
import ThemeRegistry from './theme/ThemeRegistry';

import { ApolloWrapper } from '../../ApolloWrapper';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Little Brother',
  description: 'Like big brother, but smaller.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-whitesmoke">
        <ApolloWrapper>
          <ThemeRegistry>{children}</ThemeRegistry>
        </ApolloWrapper>
      </body>
    </html>
  );
}
