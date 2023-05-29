import React from "react";
import ArticleListItem from "../components/ArticleListItem";
import { getPostsMeta } from "@/lib/posts";
import { BsChevronDown, BsSearch } from "react-icons/bs";

export const revalidate = 60;

export default async function Blog() {
    const posts = await getPostsMeta();
    if (!posts) {
        return <p className="mt-10">Sorry! No Posts Available</p>;
    }
    return (
        <div className="fade-in py-8 px-2">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between pb-4 border-b">
                    <h2 className="md:w-3/5 font-medium text-xl">
                        All Articles
                    </h2>
                    <div className="md:w-2/5 flex items-center gap-8">
                        <button className="flex items-center gap-2">
                            Categories <BsChevronDown />
                        </button>
                        <BsSearch className="md:hidden"/>
                        <form className="hidden md:block w-full">
                            <input
                                type="text"
                                id="post-search"
                                className="bg-gray-200 dark:bg-gray-800 text-sm rounded-lg outline-none block w-full px-5 p-2.5  dark:placeholder-gray-400"
                                placeholder="Search"
                                required
                            />
                        </form>
                    </div>
                </div>
                <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-900 flex flex-wrap gap-2 rounded-xl">
                    <div className="text-sm capitalize bg-gray-300 dark:bg-gray-700 hover:bg-blue-800 hover:text-white dark:hover:bg-blue-300 dark:hover:text-black py-0.5 px-2 rounded">
                        Next.js
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 mid:grid-cols-3 gap-4 pt-4">
                    {posts.map((post) => (
                        <ArticleListItem key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
}
