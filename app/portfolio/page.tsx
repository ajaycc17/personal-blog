import React from "react";
import Hero from "../components/Hero";
import Link from "next/dist/client/link";
import { GrayButtonIn } from "../components/BlueButtons";
import { RiCompasses2Line } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";
import Projects from "../components/projects/Projects";

import CollectionItem from "../components/projects/ProjectItem";
import Experience from "../components/portfolio/Experience";
import Skills from "../components/portfolio/Skills";
import Education from "../components/portfolio/Education";

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
            {/* projects section */}
            <Projects />
        </div>
    );
}
