import { Metadata } from "next";
import Hero from "../components/Hero";
import Projects from "../components/projects/Projects";
import Experience from "../components/portfolio/Experience";
import Skills from "../components/portfolio/Skills";
import Education from "../components/portfolio/Education";

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Ajay's Portfolio",
};

export default function Portfolio() {
    return (
        <div className="fade-in">
            <Hero image="Ajay.jpeg" />
            <div className="px-2 md:px-4">
                <div className="max-w-6xl mx-auto py-8">
                    <div className="flex flex-col mid:flex-row gap-4">
                        <Experience />
                        <div className="mid:block mid:w-2/5 mid:border-l mid:pl-4 pt-4 mid:pt-0">
                            <div className="mid:sticky mid:top-16">
                                <div className="mb-4">
                                    <Skills />
                                    <Education />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Projects
                limit={6}
                showBtn={true}
                bg="bg-gray-100 dark:bg-gray-900"
            />
        </div>
    );
}
