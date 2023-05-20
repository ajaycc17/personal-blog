import React from "react";
import Link from "next/link";

function BlueButtonIn(props: { target: string; text: string }) {
    return (
        <Link
            href={props.target}
            className="bg-blue-700 hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-700 text-white rounded px-3 py-1.5 text-sm font-medium"
        >
            {props.text}
        </Link>
    );
}

function GrayButtonIn(props: { target: string; text: string }) {
    return (
        <Link
            href={props.target}
            className="bg-gray-300 hover:bg-green-600 dark:bg-gray-700 dark:hover:bg-green-700 hover:text-white rounded px-3 py-1.5 text-sm font-medium"
        >
            {props.text}
        </Link>
    );
}

function GreenButtonIn(props: { target: string; text: string }) {
    return (
        <Link
            href={props.target}
            className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white rounded px-3 py-1.5 text-sm font-medium"
        >
            {props.text}
        </Link>
    );
}

function BlueButtonOut(props: {
    target: string;
    text: string;
    customClass: string;
}) {
    return (
        <a
            href={props.target}
            target="_blank"
            rel="noopener noreferrer"
            className={`${props.customClass} bg-blue-600 text-white dark:bg-gray-700 hover:bg-blue-600 dark:hover:bg-blue-800 hover:text-white text-sm font-medium px-3 py-1.5 rounded`}
        >
            {props.text}
        </a>
    );
}
export { BlueButtonIn, BlueButtonOut, GrayButtonIn, GreenButtonIn };
