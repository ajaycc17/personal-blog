"use client";
import { useEffect, useState } from "react";

type Heading = {
  id: string;
  text: string;
  depth: number;
};

export default function DsaProbSide() {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const selector = "h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]";
    const headingElements = Array.from(document.querySelectorAll(selector));

    const extracted: Heading[] = headingElements.map((el) => ({
      id: el.id,
      text: el.textContent ?? "",
      depth: parseInt(el.tagName[1])-1,
    }));

    setHeadings(extracted);
  }, []);
  useEffect(() => {
    const taggDivs = document.querySelectorAll("code.hljs , pre.hljs");
    taggDivs.forEach((div) => {
      // Prevent duplicate buttons
      if (div.querySelector("button.copy-button")) return;

      const button = document.createElement("button");
      button.innerText = "Copy";
      button.className = "copy-button";
      button.style.position = "absolute";
      button.style.top = "8px";
      button.style.right = "8px";
      button.style.padding = "4px 8px";
      button.style.fontSize = "0.8rem";
      button.style.cursor = "pointer";

      button.addEventListener("click", () => {
        const text = div.textContent?.trim() || "";
        navigator.clipboard.writeText(text).then(() => {
          button.innerText = "Copied!";
          setTimeout(() => (button.innerText = "Copy"), 1500);
        });
      });

      (div as HTMLElement).style.position = "relative";
      div.appendChild(button);
    });
  }, []);
  {
    if (headings.length != 0)
      return (
        <div className="border-b pb-3">
          <h2 className="font-semibold mb-2">On this page:</h2>
          <ul className="list-inside pl-0">
            {headings.map((h) => (
              <li key={h.id} className={`ml-${(h.depth - 1) * 4} pb-3`}>
                <a
                  href={`#${h.id}`}
                  className="text-gray-500 hover:text-gray-700 hover:font-semibold dark:text-gray-300 hover:dark:text-gray-100 text-sm"
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
  }
}
