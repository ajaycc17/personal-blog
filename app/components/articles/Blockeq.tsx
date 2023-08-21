import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";

export default function Blockeq(props: { eq: string }) {
    return <BlockMath>{props.eq}</BlockMath>;
}
