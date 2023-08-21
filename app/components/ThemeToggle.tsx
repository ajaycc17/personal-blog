"use client";
import { MdLightMode } from "react-icons/md";

export default function ThemeToggle() {
    // toggle function
    function toggleTheme() {
        if (localStorage.theme === "light") {
            localStorage.theme = "dark";
            document.documentElement.classList.add("dark");
        } else {
            localStorage.theme = "light";
            document.documentElement.classList.remove("dark");
        }
    }
    return (
        <div className="ml-4 pl-4 border-l flex items-center">
            <button onClick={toggleTheme}>
                <MdLightMode className="bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-yellow-600 text-lg rounded-full w-7 h-7 p-1" />
            </button>
        </div>
    );
}
