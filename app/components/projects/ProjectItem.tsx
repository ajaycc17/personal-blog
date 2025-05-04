import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

export default function ProjectItem(props: {
  title: string;
  desc: string;
  icon: string;
  repo: string;
  doc: string;
}) {
  return (
    <div className="bg-[#e9ecef] hover:bg-gray-200 dark:bg-[#202426] dark:hover:bg-[#1b1f21] p-4 rounded-xl flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-medium mb-2 mt-1 dark:text-green-200 flex items-center gap-2">
          <Image
            src={props.icon}
            alt={props.title}
            width={40}
            height={40}
            className="bg-white rounded-full p-0.5"
          />
          {props.title}
        </h2>
        <p className="mb-2">{props.desc}</p>
      </div>
      <div className="flex justify-between">
        <Link
          href={props.repo}
          className="flex items-center text-sm font-medium text-blue-800 hover:text-blue-700 dark:text-blue-300 dark:hover:text-yellow-300"
          target="_blank"
        >
          See Now
          <sup>
            <MdArrowOutward />
          </sup>
        </Link>
        <Link
          href={props.doc}
          className="flex items-center text-sm font-medium text-blue-800 hover:text-blue-700 dark:text-blue-300 dark:hover:text-yellow-300"
        >
          Read
        </Link>
      </div>
    </div>
  );
}
