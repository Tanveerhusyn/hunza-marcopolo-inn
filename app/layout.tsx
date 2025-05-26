import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hunza Marcopolo Inn",
  description:
    "The Hunza Marcopolo Inn is a charming hotel nestled in Gulmit, Hunza Valley, Pakistan. Positioned near the Polo Ground, it offers guests a serene environment with panoramic views of the surrounding mountains, including the iconic Passu Cones.",
  generator: "Hunza Marcopolo Inn",
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
