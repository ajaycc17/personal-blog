import { Metadata } from "next";
import Projects from "../components/projects/Projects";

export const metadata: Metadata = {
    title: "Projects",
    description: "All my Dev Projects",
};

export default function page() {
    return <Projects limit={-1} showBtn={false} bg="bg-transparent" />;
}
