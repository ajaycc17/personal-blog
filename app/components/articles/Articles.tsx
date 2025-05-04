import { getPostsMeta } from "@/lib/posts";
import ArticleListItem from "./ArticleListItem";
import { GrayButtonIn } from "../BlueButtons";
import { RiSearch2Line, RiGitCommitLine } from "react-icons/ri";

export default async function Articles() {
  const posts = await getPostsMeta();
  if (!posts) {
    return <p className="mt-10">Sorry! No Posts Available</p>;
  }

  return (
    <div className="fade-in px-2 md:px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end border-b pb-2">
          <h2 className="font-medium text-xl flex items-center gap-2">
            <RiGitCommitLine className="w-7 h-7 rounded-full p-1 bg-[#edf9e7] text-green-800" />
            Recent Articles
          </h2>
          <div className="flex items-center gap-2">
            <form className="sm:flex items-center hidden">
              <input
                type="search"
                className="bg-gray-100 dark:bg-gray-800 rounded-s-xl outline-none px-4 py-1.5 placeholder:text-gray-500"
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
            <GrayButtonIn target="/blog" text="View all" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 mid:grid-cols-3 gap-4 py-4">
          {posts.map((post) => (
            <ArticleListItem key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
