import { getPostsMeta } from "@/lib/posts";
import ArticleListItem from "@/app/components/articles/ArticleListItem";
import DsaProbSide from "@/app/components/DsaProbSide";
import { RiGitCommitLine } from "react-icons/ri";
import { notFound } from "next/navigation";

export const revalidate = 60;

type Props = {
  params: {
    tag: string;
  };
};
type Params = Promise<{ tag: string }>;

export async function generateStaticParams() {
  const posts = await getPostsMeta(); //deduped
  if (!posts) return [];
  const tags = new Set(posts.map((post) => post.tags).flat());
  return Array.from(tags).map((tag) => ({ tag }));
}

export async function generateMetadata(props: { params: Params }) {
  const { tag } = await props.params;
  return {
    title: `Posts about ${tag}`,
  };
}

export default async function TagPostlist(props: { params: Params }) {
  const { tag } = await props.params; // Access params directly (no need to await)
  const posts = await getPostsMeta();

  if (!posts) return <p>Sorry No posts available</p>;
  const tagPosts = posts.filter((post) => post.tags.includes(tag));

  if (!tagPosts.length) {
    notFound();
  }

  return (
    <div className="fade-in py-8 px-2">
      <div className="max-w-6xl grid grid-cols-6 mx-auto gap-4">
        <div className="col-span-6 lg:col-span-4">
          <div className="pb-2 mb-4 border-b">
            <h2 className="font-medium text-xl flex items-center gap-2">
              <RiGitCommitLine className="w-7 h-7 rounded-full p-1 bg-[#edf9e7] text-green-800" />
              Articles tagged with:{" "}
              <span className="text-blue-800 dark:text-green-200 capitalize">
                {tag}
              </span>
            </h2>
          </div>
          <div>
            {tagPosts.map((post) => (
              <ArticleListItem key={post.id} post={post} />
            ))}
          </div>
        </div>
        <div className="hidden md:block col-span-6 sm:col-span-3 lg:col-span-2 border-l pl-4">
          <DsaProbSide />
        </div>
      </div>
    </div>
  );
}
