import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import "highlight.js/styles/stackoverflow-dark.css";
import getFormattedDate from "@/lib/getFormattedDate";
import { getPostsMeta, getPostByName } from "@/lib/posts";
import DsaProbSide from "@/app/components/DsaProbSide";
import {
    RiFileCopy2Line,
    RiThumbUpLine,
    RiThumbDownLine,
} from "react-icons/ri";

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
    return (
        <div className="fade-in py-8 px-2">
            <div className="max-w-6xl grid grid-cols-6 mx-auto gap-4">
                <div className="col-span-6 lg:col-span-4">
                    <h2 className="font-medium text-xl md:text-2xl pb-3">
                        {meta.title}
                    </h2>
                    <div className="flex items-center justify-between gap-2 pb-3 border-b text-gray-400 text-sm">
                        <div className="flex items-center gap-2 text-sm">
                            <Image
                                src="/myAvatar.svg"
                                width={40}
                                height={40}
                                alt="Ajay Choudhury"
                                className="bg-gray-200 dark:bg-gray-700 rounded-full p-0.5"
                            />
                            <h3 className="font-medium">
                                Ajay Choudhury &middot;
                                <span className="font-normal ml-1">
                                    {pubDate}
                                </span>
                            </h3>
                        </div>
                        <span className="flex items-center gap-2">
                            Share:
                            <RiFileCopy2Line className="cursor-pointer w-7 h-7 bg-green-100 text-green-800 dark:text-green-100 dark:bg-green-900 p-1.5 rounded-full" />
                        </span>
                    </div>
                    <div className="pt-4 orb-blog-content">{content}</div>
                    <div className="flex items-center gap-4 border-t mt-6 pt-6 dark:text-gray-200">
                        Was this article helpful?
                        <RiThumbUpLine className="cursor-pointer w-8 h-8 p-1.5 rounded-full bg-green-100 text-green-800 " />
                        <RiThumbDownLine className="cursor-pointer w-8 h-8 p-1.5 rounded-full bg-red-100 text-red-700 " />
                    </div>
                </div>
                <div className="hidden md:block col-span-6 sm:col-span-3 lg:col-span-2 border-l pl-4">
                    <div className="sticky top-16">
                        <DsaProbSide />
                        <div className="pt-4 gap-2 mb-4 flex flex-wrap items-center">
                            <h2 className="font-medium">Tagged with:</h2>
                            {tags.map((tag, i) => (
                                <div
                                    key={i}
                                    className="text-sm font-medium font-mono capitalize bg-sky-100 text-sky-800 dark:bg-green-100 dark:text-green-800 hover:bg-blue-800 hover:text-white dark:hover:bg-green-700 dark:hover:text-white py-0.5 px-2 rounded"
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
