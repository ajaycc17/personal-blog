import React from "react";
import Hero from "../components/Hero";
import Link from "next/dist/client/link";
import { GrayButtonIn } from "../components/BlueButtons";
import { MdArrowOutward } from "react-icons/md";
import { BsGithub, BsGlobe2 } from "react-icons/bs";
import { RiMedalFill } from "react-icons/ri";
import CollectionItem from "../components/CollectionItem";

export default function Portfolio() {
    return (
        <div className="fade-in">
            <Hero />
            <div className="max-w-6xl mx-auto py-8 px-2">
                <div className="flex flex-col mid:flex-row gap-4">
                    <div className="mid:w-3/5">
                        <div className="flex justify-between items-center pb-4 border-b">
                            <h2 className="font-medium text-xl">Experience</h2>
                        </div>
                        <div className="pt-4">
                            <ol className="relative border-l border-gray-400 dark:border-gray-600">
                                <li className="mb-10 ml-4">
                                    <div className="absolute w-3 h-3 bg-blue-800 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-blue-600"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-400">
                                        July 2022 - Sept 2022
                                    </time>
                                    <h3 className="text-lg mb-0.5 font-medium">
                                        Web Development Intern
                                    </h3>
                                    <p className="mb-2 text-base font-normal text-gray-600 dark:text-gray-400">
                                        EECS dept. IISER Bhopal
                                    </p>
                                    <p className="mb-2 text-base font-normal text-gray-600 dark:text-gray-400">
                                        Developed a full stack web application
                                        for EECS department of IISER Bhopal
                                        using React.js, Node.js, Express.js and
                                        MySQL. Used Google Sheets API for
                                        volatile data.
                                    </p>
                                    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-400">
                                        <div className="flex items-center bg-gray-300 dark:bg-gray-800 rounded-lg px-3 py-1.5">
                                            <BsGlobe2 className="text-base mr-1" />{" "}
                                            Live
                                        </div>
                                        <div className="flex items-center bg-gray-300 dark:bg-gray-800 rounded-lg px-3 py-1.5">
                                            <BsGithub className="text-base mr-1" />{" "}
                                            Repository
                                        </div>
                                        <div className="flex items-center bg-gray-300 dark:bg-gray-800 rounded-lg px-3 py-1.5">
                                            <RiMedalFill className="text-base mr-1" />{" "}
                                            Letter
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-10 ml-4">
                                    <div className="absolute w-3 h-3 bg-blue-800 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-blue-600"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-400">
                                        July 2022 - Sept 2022
                                    </time>
                                    <h3 className="text-lg mb-0.5 font-medium">
                                        Web Development Intern
                                    </h3>
                                    <p className="mb-2 text-base font-normal text-gray-600 dark:text-gray-400">
                                        EECS dept. IISER Bhopal
                                    </p>
                                    <p className="mb-2 text-base font-normal text-gray-600 dark:text-gray-400">
                                        Developed a full stack web application
                                        for EECS department of IISER Bhopal
                                        using React.js, Node.js, Express.js and
                                        MySQL. Used Google Sheets API for
                                        volatile data.
                                    </p>
                                    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-400">
                                        <div className="flex items-center bg-gray-300 dark:bg-gray-800 rounded-lg px-3 py-1.5">
                                            <BsGlobe2 className="text-base mr-1" />{" "}
                                            Live
                                        </div>
                                        <div className="flex items-center bg-gray-300 dark:bg-gray-800 rounded-lg px-3 py-1.5">
                                            <BsGithub className="text-base mr-1" />{" "}
                                            Repository
                                        </div>
                                        <div className="flex items-center bg-gray-300 dark:bg-gray-800 rounded-lg px-3 py-1.5">
                                            <RiMedalFill className="text-base mr-1" />{" "}
                                            Letter
                                        </div>
                                    </div>
                                </li>
                                <li className="ml-4">
                                    <div className="absolute w-3 h-3 bg-blue-800 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-blue-600"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-400">
                                        July 2022 - Sept 2022
                                    </time>
                                    <h3 className="text-lg mb-0.5 font-medium">
                                        Web Development Intern
                                    </h3>
                                    <p className="mb-2 text-base font-normal text-gray-600 dark:text-gray-400">
                                        EECS dept. IISER Bhopal
                                    </p>
                                    <p className="mb-2 text-base font-normal text-gray-600 dark:text-gray-400">
                                        Developed a full stack web application
                                        for EECS department of IISER Bhopal
                                        using React.js, Node.js, Express.js and
                                        MySQL. Used Google Sheets API for
                                        volatile data.
                                    </p>
                                    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-400">
                                        <div className="flex items-center bg-gray-300 dark:bg-gray-800 rounded-lg px-3 py-1.5">
                                            <BsGlobe2 className="text-base mr-1" />{" "}
                                            Live
                                        </div>
                                        <div className="flex items-center bg-gray-300 dark:bg-gray-800 rounded-lg px-3 py-1.5">
                                            <BsGithub className="text-base mr-1" />{" "}
                                            Repository
                                        </div>
                                        <div className="flex items-center bg-gray-300 dark:bg-gray-800 rounded-lg px-3 py-1.5">
                                            <RiMedalFill className="text-base mr-1" />{" "}
                                            Letter
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="mid:block mid:w-2/5 mid:border-l mid:pl-4">
                        <div className="mid:sticky mid:top-16">
                            <div className="mb-4">
                                <h2 className="font-medium text-xl border-b pb-4 mb-4">
                                    Technical Skills
                                </h2>
                                <h3 className="pb-2">Languages</h3>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <div className="bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-400 text-sm py-1.5 px-3 rounded-lg">
                                        C/C++
                                    </div>
                                    <div className="bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-400 text-sm py-1.5 px-3 rounded-lg">
                                        Java
                                    </div>
                                    <div className="bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-400 text-sm py-1.5 px-3 rounded-lg">
                                        Python
                                    </div>
                                    <div className="bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-400 text-sm py-1.5 px-3 rounded-lg">
                                        JavaScript
                                    </div>
                                </div>
                                <h3 className="pb-2">Frameworks</h3>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <div className="bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-400 text-sm py-1.5 px-3 rounded-lg">
                                        React.js
                                    </div>
                                    <div className="bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-400 text-sm py-1.5 px-3 rounded-lg">
                                        Next.js
                                    </div>
                                    <div className="bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-400 text-sm py-1.5 px-3 rounded-lg">
                                        Node.js
                                    </div>
                                    <div className="bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-400 text-sm py-1.5 px-3 rounded-lg">
                                        Express.js
                                    </div>
                                </div>
                                <h3 className="pb-2">Frameworks</h3>
                                <div className="flex flex-wrap gap-2 pb-4">
                                    <div className="bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-400 text-sm py-1.5 px-3 rounded-lg">
                                        React.js
                                    </div>
                                    <div className="bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-400 text-sm py-1.5 px-3 rounded-lg">
                                        Next.js
                                    </div>
                                    <div className="bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-400 text-sm py-1.5 px-3 rounded-lg">
                                        Node.js
                                    </div>
                                    <div className="bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-400 text-sm py-1.5 px-3 rounded-lg">
                                        Express.js
                                    </div>
                                </div>
                                <h2 className="font-medium text-xl border-b py-4 mb-4">
                                    Education
                                </h2>
                                <div>
                                    <ol className="relative border-l border-gray-400 dark:border-gray-600">
                                        <li className="mb-6 ml-4">
                                            <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-600"></div>
                                            <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-400">
                                                July 2018 - July 2023
                                            </time>
                                            <h3 className="text-lg font-medium">
                                                BS-MS in EECS (Minor in Data
                                                Science)
                                            </h3>
                                            <p className="text-base font-normal text-gray-600 dark:text-gray-400">
                                                Indian Institute of Science
                                                Education and Research Bhopal
                                                (IISERB)
                                            </p>
                                        </li>
                                        <li className="ml-4">
                                            <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-600"></div>
                                            <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-400">
                                                April 2018
                                            </time>
                                            <h3 className="text-lg font-medium">
                                                AISSCE (PCM + Computer Science)
                                            </h3>
                                            <p className="text-base font-normal text-gray-600 dark:text-gray-400">
                                                Central Board of Secondary
                                                Education (CBSE)
                                            </p>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-8 pb-4 mb-4 border-b">
                    <h2 className="font-medium text-xl">My Projects</h2>
                </div>
                <div className="grid sm:grid-cols-2 mid:grid-cols-3 gap-4">
                    <CollectionItem />
                </div>
            </div>
        </div>
    );
}
