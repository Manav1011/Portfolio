import { Inter } from "next/font/google";
import "./globals.css";
import "./fonts.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "mnv | portfolio",
  description: "I'm Manav Shah, a full-stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="preload" href="/images/backgrounds/artistic-blurry-colorful-wallpaper-background (2).webp" as="image" /> */}
        <link rel="preload" href="/images/personal-images/landscape.webp" as="image" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
