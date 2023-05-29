import React from "react";
import Link from "next/dist/client/link";
import ArticleListItem from "./ArticleListItem";
import { getPostsMeta } from "@/lib/posts";
import { GrayButtonIn } from "./BlueButtons";
import DsaProbSide from "./DsaProbSide";
import { MdArrowOutward } from "react-icons/md";

export default async function Articles() {
    const posts = await getPostsMeta();
    if (!posts) {
        return <p className="mt-10">Sorry! No Posts Available</p>;
    }

    return (
        <div className="pt-8 pb-4 px-2">
            <div className="max-w-6xl mx-auto flex gap-4">
                <div className="lg:w-3/5">
                    <div className="flex justify-between items-center pb-4 border-b">
                        <h2 className="font-medium text-xl">Recent Articles</h2>
                        <GrayButtonIn target="/blog" text="View all" />
                    </div>
                    <div className="grid sm:grid-cols-2 mid:grid-cols-3 lg:grid-cols-2 gap-4 pt-4">
                        {posts.map((post) => (
                            <ArticleListItem key={post.id} post={post} />
                        ))}
                    </div>
                    <Link
                        href="/blog"
                        className="flex items-center justify-center font-medium hover:text-blue-800 dark:hover:text-yellow-300 rounded-xl bg-gray-100 dark:bg-gray-900 mt-4 px-4 py-3 text-center"
                    >
                        Browse {posts.length - 6} more articles
                        <sup>
                            <MdArrowOutward />
                        </sup>
                    </Link>
                </div>
                <div className="hidden lg:block lg:w-2/5 border-l pl-4">
                    <div className="sticky top-16">
                        <DsaProbSide />
                    </div>
                </div>
            </div>
        </div>
    );
}
