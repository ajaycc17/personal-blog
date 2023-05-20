import React from "react";

export default function NotFound() {
    return (
        <div className="fade-in py-8 px-2">
            <div className="max-w-5xl mx-auto flex gap-4 justify-center items-center min-h-[calc(100vh-180px)]">
                <h2 className="text-xl border-r pr-4">404</h2>
                <p>This page could not be found.</p>
            </div>
        </div>
    );
}
