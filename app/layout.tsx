import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});
export const jetBrains = JetBrains_Mono({
    subsets: ["latin"],
    display: "block",
    variable: "--font-jetbrains",
});

export const metadata: Metadata = {
    title: "Personal Blog",
    description: "Created by Ajay Choudhury",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${jetBrains.variable} dark:text-white dark:bg-gray-900`}
            >
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                (function () {
                  function setTheme(newTheme) {
                    window.__theme = newTheme;
                    if (newTheme === 'dark') {
                      document.documentElement.classList.add('dark');
                    } else if (newTheme === 'light') {
                      document.documentElement.classList.remove('dark');
                    }
                  }

                  var preferredTheme;
                  try {
                    preferredTheme = localStorage.getItem('theme');
                  } catch (err) { }

                  window.__setPreferredTheme = function(newTheme) {
                    preferredTheme = newTheme;
                    setTheme(newTheme);
                    try {
                      localStorage.setItem('theme', newTheme);
                    } catch (err) { }
                  };

                  var initialTheme = preferredTheme;
                  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

                  if (!initialTheme) {
                    initialTheme = darkQuery.matches ? 'dark' : 'light';
                  }
                  setTheme(initialTheme);

                  darkQuery.addEventListener('change', function (e) {
                    if (!preferredTheme) {
                      setTheme(e.matches ? 'dark' : 'light');
                    }
                  });
                })();
              `,
                    }}
                />
                <Navbar />
                <main className="min-h-[calc(100vh-116px)]">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
