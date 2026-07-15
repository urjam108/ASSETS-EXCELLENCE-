import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AEX | Asset Excellence",
    template: "%s | AEX",
  },
  description:
    "AEX - Asset Excellence | Premium Real Estate Platform",
  keywords: [
    "AEX",
    "Asset Excellence",
    "Real Estate",
    "Luxury",
    "Farm Land",
    "Investment",
    "Shree Radhe Farms",
  ],
  authors: [{ name: "AEX" }],
  creator: "AEX",
  publisher: "AEX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
