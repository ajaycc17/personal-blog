/* eslint-disable @next/next/no-img-element */
import { BsGithub, BsGlobe2 } from "react-icons/bs";
import { RiAttachmentLine, RiGitCommitLine } from "react-icons/ri";
import Link from "next/link";

export default function ExperienceItem(props: {
    image: string;
    date: string;
    company: string;
    role: string;
    description: string;
    live: string;
    repo: string;
    letter: string;
}) {
    return (
        <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-blue-800 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-blue-600"></div>
            <div className="flex items-center gap-3">
                <img
                    src={props.image}
                    alt="IISERB"
                    className="w-16 h-16 bg-white rounded-full"
                />
                <div>
                    <span className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-indigo-200">
                        {props.date}
                    </span>
                    <h3 className="text-lg mb-0.5 font-medium">
                        {props.company}
                        <span className="border-l border-gray-500 pl-2 ml-2 font-normal dark:text-yellow-100">
                            {props.role}
                        </span>
                    </h3>
                </div>
            </div>
            <p className="my-2 text-base font-normal text-gray-600 dark:text-gray-400">
                {props.description}
            </p>
            <div className="flex items-center gap-2 text-sm font-medium">
                {props.live !== "" && (
                    <Link
                        href={props.live}
                        className="flex items-center bg-[#edf9e7] text-green-800 dark:text-[#edf9e7] dark:bg-green-800 rounded-lg px-3 py-1"
                        target="_blank"
                    >
                        <BsGlobe2 className="text-base mr-1" /> Live
                    </Link>
                )}
                {props.repo !== "" && (
                    <Link
                        href={props.repo}
                        className="flex items-center bg-sky-100 text-sky-800 dark:text-sky-100 dark:bg-sky-800 rounded-lg px-3 py-1"
                        target="_blank"
                    >
                        <BsGithub className="text-base mr-1" /> Repository
                    </Link>
                )}
                {props.letter !== "" && (
                    <Link
                        href={props.letter}
                        className="flex items-center bg-red-100 text-red-700 dark:text-red-100 dark:bg-red-700 rounded-lg px-3 py-1"
                        target="_blank"
                    >
                        <RiAttachmentLine className="text-base mr-1" /> Letter
                    </Link>
                )}
            </div>
        </li>
    );
}
