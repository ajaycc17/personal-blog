import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { RiChat1Line } from "react-icons/ri";

export default function ProjectItem() {
    return (
        <div className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 p-4 rounded-xl flex flex-col justify-between">
            <div>
                <h2 className="text-lg font-medium mb-2 mt-1 dark:text-yellow-100 flex items-center gap-2">
                    <RiChat1Line className="w-8 h-8 bg-lime-50 text-green-800 rounded-full p-1" />
                    ChatBox
                </h2>
                <p className="mb-2">
                    A group chat application with JWT-authentication, MySQL
                    database and Socket.io.
                </p>
            </div>
            <Link
                href="https://github.com/ajaycc17/group-chat-app"
                className="flex items-center text-sm font-medium text-blue-800 hover:text-blue-700 dark:text-blue-300 dark:hover:text-yellow-300"
                target="_blank"
            >
                See Now
                <sup>
                    <MdArrowOutward />
                </sup>
            </Link>
        </div>
    );
}
