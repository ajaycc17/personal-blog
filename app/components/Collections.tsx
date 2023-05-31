import React from "react";
import CollectionItem from "./CollectionItem";
import { GrayButtonIn } from "./BlueButtons";

export default function Collections() {
    return (
        <div className="pb-8 px-2">
            <div className="max-w-6xl mx-auto border-t pt-4">
                <div className="flex justify-between items-center pb-4 mb-4 border-b">
                    <h2 className="font-medium text-xl">Recent Lessons</h2>
                    <GrayButtonIn target="/blog" text="View all" />
                </div>
                <div className="grid sm:grid-cols-2 mid:grid-cols-3 gap-4">
                    <CollectionItem />
                </div>
            </div>
        </div>
    );
}
