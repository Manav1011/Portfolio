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
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
