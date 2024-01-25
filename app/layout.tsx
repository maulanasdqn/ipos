import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const monsserat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iPOS",
  description: "an POS system with most advance feature",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={monsserat.className}>{children}</body>
    </html>
  );
}
