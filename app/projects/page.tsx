import React from "react";
import CollectionItem from "../components/projects/ProjectItem";
import { RiCompasses2Line } from "react-icons/ri";

export default function page() {
    return (
        <div className="fade-in py-8 px-2">
            <div className="max-w-6xl mx-auto">
                <h2 className="font-semibold font-head text-xl flex items-center gap-2 pb-2 border-b">
                    <RiCompasses2Line className="w-7 h-7 rounded-full p-1 bg-sky-100 text-sky-800" />
                    All Projects (Still Adding)
                </h2>
                <div className="grid sm:grid-cols-2 mid:grid-cols-3 gap-4 pt-4">
                    <CollectionItem />
                </div>
            </div>
        </div>
    );
}
