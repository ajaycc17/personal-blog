"use client";
import { BsChevronDown } from "react-icons/bs";
function showTags() {
  const tags = document.querySelector("#tags") as HTMLDivElement;
  if (tags.classList.contains("hidden")) {
    tags.classList.remove("hidden");
    tags.classList.add("flex");
  } else {
    tags.classList.remove("flex");
    tags.classList.add("hidden");
  }
}
export default function TagDropdown() {
  return (
    <button
      className="flex items-center gap-2 cursor-pointer"
      onClick={showTags}
    >
      Categories <BsChevronDown />
    </button>
  );
}
