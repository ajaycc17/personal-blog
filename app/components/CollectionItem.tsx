import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
export default function CollectionItem() {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-xl flex flex-col justify-between">
            <div>
                <span className="text-sm">12 articles</span>
                <h2 className="text-lg font-medium mb-2 mt-1 dark:text-yellow-100">
                    React JS
                </h2>
                <p className="mb-2">
                    Every important topic of react.js and its use cases along
                    with examples.
                </p>
            </div>
            <Link
                href="/"
                className="flex items-center text-sm font-medium text-blue-800 hover:text-blue-700 dark:text-blue-300 dark:hover:text-yellow-300"
            >
                See Now
                <sup>
                    <MdArrowOutward />
                </sup>
            </Link>
        </div>
    );
}
