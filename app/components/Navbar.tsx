"use client";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import NavbarMenu from "./NavbarMenu";
import { MdMenu } from "react-icons/md";

export default function Navbar() {
  function showMenu() {
    const menu = document.getElementById("mobile-menu");
    if (menu?.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu?.classList.add("hidden");
    }
  }
  return (
    <>
      <header className="fade-in sticky w-full top-0 z-50 backdrop-blur-md bg-gray-100/50 dark:bg-black/60 px-2">
        <div className="max-w-6xl mx-auto py-2 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo/dumbbel.svg"
                width={40}
                height={40}
                alt="Logo"
                className="myfilter"
              />
              <h1 className="font-bold font-mono">
                <span className="text-orange-600 dark:text-yellow-400">
                  ajay_
                </span>
                choudhury
              </h1>
            </Link>
            <ThemeToggle />
          </div>
          <nav className="hidden md:flex items-center md:gap-6">
            <NavbarMenu />
            <Link
              href="/contact"
              className="bg-black dark:bg-blue-800 text-white px-3 py-1 rounded-lg font-head font-medium"
            >
              Contact
            </Link>
          </nav>
          <MdMenu
            className="md:hidden text-2xl cursor-pointer"
            onClick={showMenu}
          />
        </div>
      </header>
      <div
        id="mobile-menu"
        className="sticky top-14 fade-in hidden md:hidden p-1 w-full z-50 backdrop-blur-md bg-gray-100/50 dark:bg-black/60 shadow-xl border-t-2 border-dashed border-gray-200 dark:border-gray-700 md:border-none"
      >
        <nav className="max-w-6xl mx-auto p-2">
          <NavbarMenu />
        </nav>
      </div>
    </>
  );
}
