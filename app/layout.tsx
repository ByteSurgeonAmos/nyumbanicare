import type { Metadata } from "next";
import { League_Spartan, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"]
});

const roboto = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "NyumbaniCare",
  description: "Your Digital Health Companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
