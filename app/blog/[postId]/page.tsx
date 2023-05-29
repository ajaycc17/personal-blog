import React from "react";
import Image from "next/image";
import Link from "next/link";
import DsaProbSide from "@/app/components/DsaProbSide";
import getFormattedDate from "@/lib/getFormattedDate";
import { getPostsMeta, getPostByName } from "@/lib/posts";
import { notFound } from "next/navigation";
import "highlight.js/styles/github-dark.css";

export const revalidate = 60;

type Props = {
    params: {
        postId: string;
    };
};

export async function generateStaticParams() {
    const posts = await getPostsMeta();
    if (!posts) return [];

    return posts.map((post) => ({
        postId: post.id,
    }));
}

export async function generateMetadata({ params: { postId } }: Props) {
    const post = await getPostByName(`${postId}.mdx`); // deduplicated

    if (!post) {
        return { title: "Post Not Found" };
    }
    return { title: post.meta.title };
}

export default async function Post({ params: { postId } }: Props) {
    const post = await getPostByName(`${postId}.mdx`); // deduplicated

    if (!post) notFound();

    const { meta, content } = post;
    const pubDate = getFormattedDate(meta.date);
    const tags = meta.tags.map((tag, i) => (
        <Link key={i} href={`/tags/${tag}`}>
            {tag}
        </Link>
    ));
    // var BlockMath = ReactKaTeX.BlockMath;
    return (
        <div className="fade-in py-8 px-2">
            <div className="max-w-6xl mx-auto flex gap-4">
                <div className="w-full md:w-3/5">
                    <h2 className="font-medium text-xl pb-3">{meta.title}</h2>
                    <div className="flex items-center gap-2 pb-3 border-b">
                        <Image
                            src="/buildingAvatar.svg"
                            width={40}
                            height={40}
                            alt="Ajay Choudhury"
                        />
                        <h3 className="text-sm font-medium">
                            Ajay Choudhury &middot;
                            <span className="text-sm font-normal ml-1">
                                {pubDate}
                            </span>
                        </h3>
                    </div>
                    <div className="pt-4 orb-blog-content">{content}</div>
                </div>
                <div className="hidden md:block md:w-2/5 border-l pl-4">
                    <div className="sticky top-16">
                        <DsaProbSide />
                        <div className="pt-4 gap-2 mb-4 flex flex-wrap items-center">
                            <h2 className="font-medium">Tagged with:</h2>
                            {tags.map((tag, i) => (
                                <div
                                    key={i}
                                    className="text-sm font-medium font-mono capitalize bg-gray-200 dark:bg-gray-700 hover:bg-blue-800 hover:text-white dark:hover:bg-blue-300 dark:hover:text-black py-0.5 px-2 rounded"
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
