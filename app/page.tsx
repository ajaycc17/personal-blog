import Hero from "./components/Hero";
import Articles from "./components/Articles";
import Collections from "./components/Collections";

export const revalidate = 60;

export default function Home() {
    return (
        <div className="fade-in">
            <Hero />
            {/* @ts-expect-error Server Component */}
            <Articles />
            <Collections />
        </div>
    );
}
