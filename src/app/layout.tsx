import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Iseya Bakery — Artisan Japanese Bakery",
  description:
    "Premium handcrafted Japanese-inspired bread and pastries, made fresh daily with no preservatives. Experience the art of Japanese baking.",
  keywords: [
    "Japanese bakery",
    "artisan bread",
    "premium pastries",
    "Hokkaido milk bread",
    "matcha desserts",
    "Iseya Bakery",
  ],
  openGraph: {
    title: "Iseya Bakery — Artisan Japanese Bakery",
    description:
      "Premium handcrafted Japanese-inspired bread and pastries, made fresh daily.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
