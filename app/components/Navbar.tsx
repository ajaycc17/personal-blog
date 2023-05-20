"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { MdMenu } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import NavbarMenu from "./NavbarMenu";

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
            <header className="fade-in sticky w-full top-0 z-50 backdrop-blur-md bg-gray-100/50 dark:bg-gray-950/60 px-2">
                <div className="max-w-5xl mx-auto py-2 flex items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="./logo/bulb.svg"
                                width={40}
                                height={40}
                                alt="Logo"
                            />
                            <h1 className="font-medium font-mono">
                                <span className="text-orange-600 dark:text-yellow-400">
                                    ajay_
                                </span>
                                choudhury
                            </h1>
                        </Link>
                        <ThemeToggle />
                    </div>
                    <nav className="hidden md:flex items-center">
                        <NavbarMenu />
                        <div className="flex text-lg gap-6 items-center ml-8">
                            <a
                                href="https://linkedin.com/in/ajaycc17"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <BsLinkedin className="text-blue-800 dark:text-blue-600" />
                            </a>
                            <a
                                href="https://github.com/ajaycc17"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <BsGithub className="text-gray-900 dark:text-gray-400" />
                            </a>
                        </div>
                    </nav>
                    <MdMenu
                        className="md:hidden text-2xl cursor-pointer"
                        onClick={showMenu}
                    />
                </div>
            </header>
            <div
                id="mobile-menu"
                className="fade-in hidden p-1 fixed w-full z-10"
            >
                <nav className="max-w-5xl mx-auto backdrop-blur-md bg-gray-100/50 dark:bg-gray-950/60 p-2 rounded-xl">
                    <NavbarMenu />
                </nav>
            </div>
        </>
    );
}
