import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import "./fonts.css";
import PrintImageToConsole from "./components/client/PrintImageToConsole";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "mnv | portfolio",
  description: "I'm Manav Shah, a full-stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>            
        <link rel="preload" href="/images/personal-images/landscape.webp" as="image" />
        {/* <link rel="stylesheet" href="/static/css/github-activity.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/octicons@4.4.0/build/font/octicons.css" />
        <link rel="stylesheet" href="/static/css/github-activity.dark.min.css" />
        <script type="text/javascript" src="/static/js/mustache.js" />
          <script type="text/javascript" src="/static/js/github-activity.min.js" /> */}
      </head>
      <body className={inter.className}>
        <NextTopLoader color="white" className="z-50" initialPosition={0.08} crawlSpeed={200} height={3} crawl={true} easing="ease" showSpinner={false} speed={200} shadow="0 0 10px #2299DD,0 0 5px #2299DD" zIndex={1600} showAtBottom={false} />
        {children}
      </body>     
      <PrintImageToConsole />
    </html>
  );
}
