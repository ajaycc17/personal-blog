import React from "react";
import { BsChevronDown, BsCheckCircle } from "react-icons/bs";

export const revalidate = 60;

export default function page() {
    return (
        <div className="fade-in py-8 px-2">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center py-2 border-b">
                    <h2 className="flex items-center gap-3">
                        <BsCheckCircle />
                        Arrays I
                    </h2>
                    <BsChevronDown />
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                    <h2 className="flex items-center gap-3">
                        <BsCheckCircle />
                        Arrays I
                    </h2>
                    <BsChevronDown />
                </div>
            </div>
        </div>
    );
}
