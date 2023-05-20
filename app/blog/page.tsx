import React from "react";
import Image from "next/image";
import ArticleListItem from "../components/ArticleListItem";
import { getPostsMeta } from "@/lib/posts";
import DsaProbSide from "../components/DsaProbSide";

export default async function Blog() {
    const posts = await getPostsMeta();
    if (!posts) {
        return <p className="mt-10">Sorry! No Posts Available</p>;
    }
    return (
        <div className="fade-in py-8 px-2">
            <div className="max-w-5xl mx-auto flex gap-4">
                <div className="md:w-3/5">
                    <h2 className="font-medium text-xl pb-4">All Articles</h2>
                    <div>
                        {posts.map((post) => (
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
