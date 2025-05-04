"use client";
import { MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="ml-4 pl-4 border-l flex items-center">
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        <MdLightMode
          className="bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-yellow-600 text-lg 
        rounded-full w-7 h-7 p-1 cursor-pointer"
        />
      </button>
    </div>
  );
}
