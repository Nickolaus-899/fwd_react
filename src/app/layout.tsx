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
  description: "Menu for Innopolis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        <meta property="og:url" content="https://fwd-react.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="InnoFood" />
        <meta property="og:description" content="Menu for Innopolis" />
        <meta
          property="og:image"
          content="https://gagaru.club/uploads/posts/2023-02/1676149591_gagaru-club-p-dieticheskie-interesnie-blyuda-pinterest-88.jpg"
        />
        {/*<title>InnoMenu</title>*/}
        {/*<Head>*/}
        {/*  <title>InnoMenu</title>*/}
        {/*</Head>*/}
      </head>

      <body className={montserrat.className}>
        <Header />
        <main className="inside">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
