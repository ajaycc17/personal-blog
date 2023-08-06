import Hero from "./components/Hero";
import Articles from "./components/articles/Articles";
import Collections from "./components/projects/Projects";

export const revalidate = 60;

export default function Home() {
    return (
        <div className="fade-in">
            <Hero image="Ajay.jpeg" />
            {/* @ts-expect-error Server Component */}
            <Articles />
            <Collections />
        </div>
    );
}
