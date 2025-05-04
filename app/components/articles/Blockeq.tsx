// components/BlockEq.tsx
"use client";

import { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

export default function BlockEq({ eq }: { eq: string }) {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      katex.render(eq, divRef.current, {
        throwOnError: false,
        displayMode: true,
      });
    }
  }, [eq]);

  return <div ref={divRef} />;
}
