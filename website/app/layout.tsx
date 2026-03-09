import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The AI Accord",
  description:
    "A proposed cross-industry foundation for AI alignment - eleven principles that any organisation building or deploying AI could adopt.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-sand-50 text-sand-900 antialiased">{children}</body>
    </html>
  );
}
