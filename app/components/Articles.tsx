import React from "react";

import ArticleListItem from "./ArticleListItem";
import { getPostsMeta } from "@/lib/posts";
import { GrayButtonIn } from "./BlueButtons";
import DsaProbSide from "./DsaProbSide";

export default async function Articles() {
    const posts = await getPostsMeta();
    if (!posts) {
        return <p className="mt-10">Sorry! No Posts Available</p>;
    }

    return (
        <div className="py-8 px-2">
            <div className="max-w-5xl mx-auto flex gap-4">
                <div className="md:w-3/5">
                    <div className="flex justify-between items-center pb-4">
                        <h2 className="font-medium text-xl">Recent Articles</h2>
                        <GrayButtonIn target="/blog" text="View all" />
                    </div>
                    <div>
                        {posts.map((post) => (
                            <ArticleListItem key={post.id} post={post} />
                        ))}
                    </div>
                </div>
                <div className="hidden md:block md:w-2/5 border-l pl-4">
                    <div className="sticky top-16">
                        <DsaProbSide />
                    </div>
                </div>
            </div>
        </div>
    );
}
