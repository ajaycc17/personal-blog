import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function NavbarMenu() {
  return (
    <ul className="flex flex-row overflow-scroll gap-8 font-semibold font-head whitespace-nowrap text-sm md:text-base">
      <li className="flex md:block justify-between items-center">
        <Link href="/blog">Articles</Link>
      </li>
      <li className="md:block justify-between items-center">
        <Link href="/projects">Projects</Link>
      </li>
      <li className="md:block justify-between items-center">
        <Link href="/dsa">DSA Problems</Link>
      </li>
      <li className="md:block justify-between items-center">
        <Link href="/portfolio">About Me</Link>
      </li>
      <li className="md:hidden justify-between items-center">
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
}
