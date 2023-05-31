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
                        <div className="mb-4">
                            <form className="flex items-center">
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg
                                            aria-hidden="true"
                                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        id="simple-search"
                                        className="bg-gray-100 dark:bg-gray-800 rounded-lg outline-none block w-full pl-10 p-2"
                                        placeholder="Search"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-gray-200 hover:bg-green-600 dark:bg-gray-800 dark:hover:bg-green-700 hover:text-white rounded-lg px-3 py-2 ml-2"
                                >
                                    Search
                                </button>
                            </form>
                        </div>
                        <DsaProbSide />
                    </div>
                </div>
            </div>
        </div>
    );
}
