import React from "react";
import Image from "next/image";
import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";
import { MdArrowOutward } from "react-icons/md";

type Props = {
    post: Meta;
};

export default function ArticleListItem({ post }: Props) {
    const { id, title, date, description } = post;
    const formattedDate = getFormattedDate(date);
    return (
        <article className="p-4 bg-gray-100 dark:bg-gray-900 rounded-xl flex flex-col justify-between">
            <div>
                <span className="text-sm">{formattedDate}</span>
                <Link href={`/blog/${id}`} className="dark:text-yellow-100">
                    <h2 className="text-lg font-medium mb-2 mt-1">{title}</h2>
                </Link>

                <p className="mb-4">{description}</p>
            </div>
            <Link
                href={`/blog/${id}`}
                className="flex items-center text-sm font-medium text-blue-800 hover:text-blue-700 dark:text-blue-300 dark:hover:text-yellow-300"
            >
                Read Now
                <sup>
                    <MdArrowOutward />
                </sup>
            </Link>
        </article>
    );
}
