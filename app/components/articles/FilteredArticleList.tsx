"use client";
import { useState } from "react";
import ArticleListItem from "./ArticleListItem";

export default function FilteredArticleList({
  posts,
  tags,
}: {
  posts: Meta[];
  tags: string[];
}) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;

  return (
    <div>
      <div id="tags" className="hidden items-center gap-4 border-b py-2 overflow-scroll">
        <button
          onClick={() => setSelectedTag(null)}
          className={`text-sm font-semibold capitalize font-head py-0.5 px-3 whitespace-nowrap rounded
            ${
              !selectedTag
                ? "bg-green-700 text-white dark:bg-yellow-300 dark:text-black"
                : "bg-[#e9ecef] dark:bg-[#202426] hover:bg-gray-200 dark:hover:bg-[#1b1f21] hover:text-green-800 dark:hover:text-yellow-300"
            }
          `}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`text-sm font-semibold capitalize font-head py-0.5 px-3 whitespace-nowrap rounded
              ${
                selectedTag === tag
                  ? "bg-green-700 text-white dark:bg-yellow-300 dark:text-black"
                  : "bg-[#e9ecef] dark:bg-[#202426] hover:bg-gray-200 dark:hover:bg-[#1b1f21] hover:text-green-800 dark:hover:text-yellow-300"
              }
            `}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="fade-in grid sm:grid-cols-2 mid:grid-cols-3 gap-4 pt-4">
        {filteredPosts.map((post) => (
          <ArticleListItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
