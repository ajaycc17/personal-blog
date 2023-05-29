import React from "react";

export default function Footer() {
    return (
        <footer className="fade-in px-2 py-5 bg-black/90 dark:bg-black/60 text-white">
            <div className="max-w-6xl mx-auto text-sm text-center">
                Copyright © 2022-{new Date().getFullYear()} | All Rights
                Reserved
            </div>
        </footer>
    );
}
