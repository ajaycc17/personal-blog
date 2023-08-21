import { Metadata } from "next";
import { BsChevronDown, BsSearch } from "react-icons/bs";
import { RiSearch2Line, RiGitCommitLine } from "react-icons/ri";
import { getPostsMeta } from "@/lib/posts";
import ArticleListItem from "../components/articles/ArticleListItem";

export const revalidate = 60;

export const metadata: Metadata = {
    title: "Dev Blog",
    description: "Ajay's Dev Blog",
};

export default async function Blog() {
    const posts = await getPostsMeta();
    if (!posts) {
        return <p className="mt-10">Sorry! No Posts Available</p>;
    }
    return (
        <div className="fade-in py-8 px-2">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-end justify-between pb-2 border-b">
                    <h2 className="font-medium text-xl flex items-center gap-2">
                        <RiGitCommitLine className="w-7 h-7 rounded-full p-1 bg-[#edf9e7] text-green-800" />
                        All Articles
                    </h2>
                    <div className="flex items-center gap-8">
                        <button className="flex items-center gap-2">
                            Categories <BsChevronDown />
                        </button>
                        <BsSearch className="sm:hidden" />
                        <form className="sm:flex items-center hidden">
                            <input
                                type="search"
                                className="bg-gray-100 dark:bg-gray-800 rounded-s-xl outline-none px-4 py-1.5 placeholder:text-gray-500 block w-full"
                                placeholder="Search articles..."
                                required
                            />
                            <button
                                type="submit"
                                className="bg-gray-100 hover:bg-gray-300 dark:bg-gray-800 hover:dark:bg-gray-700 outline-none rounded-e-xl pl-3 pr-4 py-2.5"
                            >
                                <RiSearch2Line />
                            </button>
                        </form>
                    </div>
                </div>
                <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-900 hidden flex-wrap gap-2 rounded-xl">
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
