import React from "react";
import Image from "next/image";
import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";
import { MdArrowOutward } from "react-icons/md";

type Props = {
    post: Meta;
};

export default function ArticleListItem({ post }: Props) {
    const { id, title, date } = post;
    const formattedDate = getFormattedDate(date);
    return (
        <article className="py-4 border-t">
            <Link href={`/blog/${id}`} className="dark:text-yellow-100">
                <h2 className="text-lg font-medium mb-2">{title}</h2>
            </Link>
            <div className="flex items-center gap-2 mb-3">
                <Image
                    src="./buildingAvatar.svg"
                    width={40}
                    height={40}
                    alt="Ajay Choudhury"
                />
                <h3 className="text-sm font-medium">
                    Ajay Choudhury &middot;
                    <span className="text-sm font-normal ml-1">
                        {formattedDate}
                    </span>
                </h3>
            </div>
            <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                libero voluptatum earum iure? Sit quis reprehenderit nesciunt
                doloribus autem unde quaerat molestiae hic deleniti, atque
                temporibus dolorum assumenda porro ducimus quod earum.
            </p>
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
