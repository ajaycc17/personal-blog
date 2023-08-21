import Hero from "./components/Hero";
import Articles from "./components/articles/Articles";
import Projects from "./components/projects/Projects";

export const revalidate = 60;

export default function Home() {
    return (
        <div className="fade-in">
            <Hero image="Ajay.jpeg" />
            <Articles />
            <Projects
                limit={6}
                showBtn={true}
                bg="bg-gray-100 dark:bg-gray-900"
            />
        </div>
    );
}
