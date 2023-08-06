import localFont from "next/font/local";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Metadata } from "next";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

const ember = localFont({
    src: [
        {
            path: "../public/fonts/Ember/AmazonEmber_W_Rg.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/Ember/AmazonEmber_W_RgIt.woff2",
            weight: "400",
            style: "italic",
        },
        {
            path: "../public/fonts/Ember/AmazonEmber_W_SBd.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/fonts/Ember/AmazonEmber_W_SBdIt.woff2",
            weight: "500",
            style: "italic",
        },
        {
            path: "../public/fonts/Ember/AmazonEmber_W_Bd.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "../public/fonts/Ember/AmazonEmber_W_Th.woff2",
            weight: "300",
            style: "normal",
        },
    ],
    variable: "--font-ember",
});

const ember_mono = localFont({
    src: [
        {
            path: "../public/fonts/Ember_mono/AmazonEmberMono_W_Rg.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/Ember_mono/AmazonEmberMono_W_Bd.woff2",
            weight: "500",
            style: "italic",
        },
    ],
    variable: "--font-ember_mono",
});
const JBrain = JetBrains_Mono({
    weight: ["400", "500", "600"],
    subsets: ["latin"],
    variable: "--font-jetbrains",
});
const SpGrot = Space_Grotesk({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-spgrotesk",
});

export const metadata: Metadata = {
    title: "Home Page",
    description: "Dev Blog",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${ember.variable} font-sans ${JBrain.variable} font-mono ${SpGrot.variable} font-head dark:text-white dark:bg-gray-950`}
            >
                <script
                    src="https://kit.fontawesome.com/cd04e03c36.js"
                    crossOrigin="anonymous"
                    async
                />
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
