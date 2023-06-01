import "./globals.css";
import { Open_Sans } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from 'react';
import { Analytics } from '@vercel/analytics/react';

import 'bootstrap/dist/css/bootstrap.css';

const openSans = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "E-PACERR",
  description: "Website for E-PACERR Program",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Header />
        <main className="content">{children}
          <Footer />
        </main>
      </body>
      <Analytics />
    </html>
  );
}
