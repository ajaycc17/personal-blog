import React from "react";
import CollectionItem from "./CollectionItem";

export default function Collections() {
    return (
        <div className="pb-8 px-2">
            <div className="max-w-6xl mx-auto border-t pt-4">
                <div className="grid sm:grid-cols-2 mid:grid-cols-3 gap-4">
                    <CollectionItem />
                </div>
            </div>
        </div>
    );
}
