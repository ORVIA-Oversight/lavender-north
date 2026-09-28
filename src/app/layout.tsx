import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lavender North | Contemporary Art Gallery',
  description: 'Contemporary art, artists, curation and collecting.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
