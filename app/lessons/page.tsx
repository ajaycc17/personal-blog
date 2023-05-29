import React from "react";
import CollectionItem from "../components/CollectionItem";

export default function page() {
    return (
        <div className="fade-in py-8 px-2">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between pb-4 border-b">
                    <h2 className="md:w-3/5 font-medium text-xl">
                        All Lessons (under development)
                    </h2>
                </div>
                <div className="grid sm:grid-cols-2 mid:grid-cols-3 gap-4 pt-4">
                    <CollectionItem />
                </div>
            </div>
        </div>
    );
}
