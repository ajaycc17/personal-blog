import React from "react";
import Image from "next/image";
import { GreenButtonIn } from "./BlueButtons";

export default function DsaProbSide() {
    return (
        <div className="mb-4 bg-gray-100 dark:bg-gray-800 p-6 rounded-xl flex items-center gap-4">
            <div className="w-4/5">
                <h3 className="font-medium text-lg leading-6 mb-2">
                    DSA problems for Practice.
                </h3>
                <p className="text-sm mb-4">Approaches + Solutions.</p>
                <GreenButtonIn target="/dsa" text="See Now" />
            </div>
            <div className="w-1/5">
                <Image
                    src="/console.svg"
                    width={60}
                    height={60}
                    alt="Notepad"
                    className="dark:bg-gray-400 rounded-2xl"
                />
            </div>
        </div>
    );
}
