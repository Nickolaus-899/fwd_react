import React from "react";
import "./globals.css";
import "./bootstrap.min.css";
import { Montserrat } from "@next/font/google";
import Header from "@/lib/wrapper/header/Header";
import Footer from "@/lib/wrapper/footer/Footer";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "InnoFood",
  description: "Home Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>InnoMenu</title>
        <Head>
          <title>InnoMenu</title>
        </Head>
      </head>

      <body className={montserrat.className}>
        <Header />
        <main className="inside">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
