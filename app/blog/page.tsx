import { Metadata } from "next";
import { BsChevronDown, BsSearch } from "react-icons/bs";
import { RiSearch2Line, RiGitCommitLine } from "react-icons/ri";
import { getPostsMeta } from "@/lib/posts";
import TagToggle from "../components/articles/TagToggle";
import FilteredArticleList from "../components/articles/FilteredArticleList";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Dev Blog",
  description: "Ajay's Dev Blog",
};

async function getAllTags() {
  const posts = await getPostsMeta(); //deduped
  if (!posts) return [];
  const tags = new Set(posts.map((post) => post.tags).flat());
  return Array.from(tags);
}

export default async function Blog() {
  const posts = await getPostsMeta();
  const tags = await getAllTags();
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
            <TagToggle />
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
        <FilteredArticleList posts={posts} tags={tags} />
      </div>
    </div>
  );
}
