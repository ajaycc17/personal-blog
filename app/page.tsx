import Hero from "./components/Hero";
import Articles from "./components/Articles";

export const revalidate = 86400;

export default function Home() {
    return (
        <div className="fade-in">
            <Hero />
            {/* @ts-expect-error Server Component */}
            <Articles />
        </div>
    );
}
