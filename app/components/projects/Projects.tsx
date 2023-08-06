import React from "react";
import ProjectItem from "./ProjectItem";
import { GrayButtonIn } from "../BlueButtons";
import { RiCompasses2Line } from "react-icons/ri";

export default function Projects() {
    return (
        <div className="py-8 px-2 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-end pb-2 border-b">
                    <h2 className="font-medium text-xl flex items-center gap-2">
                        <RiCompasses2Line className="w-7 h-7 rounded-full p-1 bg-sky-100 text-sky-800" />
                        Projects
                    </h2>
                    <GrayButtonIn target="/blog" text="View all" />
                </div>
                <div className="grid sm:grid-cols-2 mid:grid-cols-3 gap-4 py-4">
                    <ProjectItem />
                </div>
            </div>
        </div>
    );
}
