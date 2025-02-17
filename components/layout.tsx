import Head from 'next/head';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  console.log("Layout component rendered");
  return (
    <>
      <Head>
        <title>Kaushik Chandra</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* other meta tags */}
      </Head>
      <div className="container">
        {children}
      </div>
    </>
  );
} 