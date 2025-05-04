import { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk, Mona_Sans } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "next-themes";
// export const experimental_ppr = true;

const JBrain = JetBrains_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-jetbrains",
});
const MSans = Mona_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-msans",
});
const SpGrot = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-spgrotesk",
});

export const metadata: Metadata = {
  title: "Home Page",
  description: "Dev Blog by Ajay Choudhury.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${MSans.variable} ${JBrain.variable} ${SpGrot.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var osTheme = window.matchMedia('(prefers-color-scheme: dark)').matches 
                  ? 'dark' 
                  : 'light';
                var storedTheme = localStorage.getItem('theme');
                var theme = storedTheme || osTheme;
                document.documentElement.classList.toggle('dark', theme === 'dark');
                if (!storedTheme) localStorage.setItem('theme', osTheme);
              })();
            `,
          }}
        />
        <script
          src="https://kit.fontawesome.com/cd04e03c36.js"
          crossOrigin="anonymous"
          async
        />
        
      </head>
      <body className="font-sans dark:text-white dark:bg-[#0a0e0f]">
      <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
          
        <Navbar />
        <main className="min-h-[calc(100vh-116px)]">{children}</main>
        <Footer />
      </ThemeProvider>
      </body>
    </html>
  );
}
