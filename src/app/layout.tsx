import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const headingFont = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const bodyFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog",
  description: "A Workout Library",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-white font-inter">
        {children}
      </body>
    </html>
  );
}
