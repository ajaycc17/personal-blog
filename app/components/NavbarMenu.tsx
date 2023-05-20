import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

export default function NavbarMenu() {
    return (
        <ul className="flex flex-col md:flex-row md:gap-8 text-sm font-medium">
            <li className="flex md:block justify-between items-center border-b md:border-none pb-2 md:pb-0 mb-2 md:mb-0">
                <Link href="/blog">Articles</Link>
                <MdKeyboardArrowRight className="md:hidden" />
            </li>
            <li className="flex md:block justify-between items-center border-b md:border-none pb-2 md:pb-0 mb-2 md:mb-0">
                <Link href="/portfolio">Portfolio</Link>
                <MdKeyboardArrowRight className="md:hidden" />
            </li>
            <li className="flex md:block justify-between items-center border-b md:border-none pb-2 md:pb-0 mb-2 md:mb-0">
                <Link href="/dsa">DSA Problems</Link>
                <MdKeyboardArrowRight className="md:hidden" />
            </li>
            <li className="flex md:block justify-between items-center">
                <Link href="/contact">Contact</Link>
                <MdKeyboardArrowRight className="md:hidden" />
            </li>
        </ul>
    );
}
