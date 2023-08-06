import React from "react";
import Link from "next/link";
import { RiAttachmentLine } from "react-icons/ri";

function BlueButtonIn(props: { target: string; text: string }) {
    return (
        <Link
            href={props.target}
            className="bg-blue-700 hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-700 text-white rounded-lg px-3 py-1.5 text-sm"
        >
            {props.text}
        </Link>
    );
}

function BlackButtonIn(props: { target: string; text: string }) {
    return (
        <Link
            href={props.target}
            className="bg-black dark:bg-gray-600 text-white rounded-lg px-5 py-1.5"
        >
            {props.text}
        </Link>
    );
}

function TransparentButton(props: { target: string; text: string }) {
    return (
        <a
            href={props.target}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-800 text-white rounded-lg px-5 py-1.5 flex items-center gap-2"
        >
            <RiAttachmentLine />
            {props.text}
        </a>
    );
}

function GrayButtonIn(props: { target: string; text: string }) {
    return (
        <Link
            href={props.target}
            className="bg-black dark:bg-blue-800 text-white rounded-xl font-head font-medium px-4 py-1.5"
        >
            {props.text}
        </Link>
    );
}

function GreenButtonIn(props: { target: string; text: string }) {
    return (
        <Link
            href={props.target}
            className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white rounded-lg px-3 py-1.5 text-sm"
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
            className={`${props.customClass} bg-blue-600 text-white dark:bg-gray-700 hover:bg-blue-600 dark:hover:bg-blue-800 hover:text-white text-sm px-3 py-1.5 rounded-lg`}
        >
            {props.text}
        </a>
    );
}
export {
    BlueButtonIn,
    BlueButtonOut,
    GrayButtonIn,
    GreenButtonIn,
    BlackButtonIn,
    TransparentButton,
};
