import React from "react";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

export default function Ineq(props: { eq: string }) {
    return <InlineMath>{props.eq}</InlineMath>;
}
