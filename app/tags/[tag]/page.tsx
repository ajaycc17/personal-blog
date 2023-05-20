import ArticleListItem from "@/app/components/ArticleListItem";
import DsaProbSide from "@/app/components/DsaProbSide";
import { getPostsMeta } from "@/lib/posts";
import Link from "next/link";

export const revalidate = 86400;

type Props = {
    params: {
        tag: string;
    };
};

export async function generateStaticParams() {
    const posts = await getPostsMeta(); //deduped
    if (!posts) return [];
    const tags = new Set(posts.map((post) => post.tags).flat());
    return Array.from(tags).map((tag) => ({ tag }));
}

export function generateMetadata({ params: { tag } }: Props) {
    return {
        title: `Posts about ${tag}`,
    };
}

export default async function TagPostlist({ params: { tag } }: Props) {
    const posts = await getPostsMeta();

    if (!posts) return <p>Sorry No posts available</p>;
    const tagPosts = posts.filter((post) => post.tags.includes(tag));

    if (!tagPosts.length) {
        return (
            <div>
                <p>no posts for that keyword</p>
            </div>
        );
    }

    return (
        <div className="fade-in py-8 px-2">
            <div className="max-w-5xl mx-auto flex gap-4">
                <div className="md:w-3/5">
                    <h2 className="font-medium text-xl pb-4">
                        Articles tagged with:{" "}
                        <span className="text-blue-800 dark:text-yellow-200 capitalize">
                            {tag}
                        </span>
                    </h2>
                    <div>
                        {tagPosts.map((post) => (
                            <ArticleListItem key={post.id} post={post} />
                        ))}
                    </div>
                </div>
                <div className="hidden md:block md:w-2/5 border-l pl-4">
                    <DsaProbSide />
                </div>
            </div>
        </div>
    );
}
