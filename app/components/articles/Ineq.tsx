// components/Ineq.tsx
"use client";

import { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

export default function Ineq({ eq }: { eq: string }) {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (spanRef.current) {
      katex.render(eq, spanRef.current, {
        throwOnError: false,
        displayMode: false,
      });
    }
  }, [eq]);

  return <span ref={spanRef} />;
}
