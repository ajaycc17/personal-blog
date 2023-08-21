import ExperienceItem from "./ExperienceItem";
import { RiGitCommitLine } from "react-icons/ri";

export default function Experience() {
    return (
        <div className="fade-in mid:w-3/5">
            <div className="pb-2 border-b">
                <h2 className="font-semibold font-head text-xl flex items-center gap-2">
                    <RiGitCommitLine />
                    Work Experience
                </h2>
            </div>
            <div className="pt-4">
                <ol className="relative border-l border-gray-400 dark:border-gray-600">
                    <ExperienceItem
                        image="/portfolio/glazeline.png"
                        date="May 2023"
                        company="Glazeline"
                        role="Frontend Developer"
                        description="Designed a static web application using React.js for the Glazeline Tiles and Ceramic Studio with catalogues and collections as a freelance work. Used EmailJS for contact forms and deployed on Netlify."
                        live="https://glazelinestudio.com/"
                        repo="https://github.com/ajaycc17/glazeline"
                        letter=""
                    />
                    <ExperienceItem
                        image="/portfolio/eecs.png"
                        date="Jul 2022 - Sep 2022"
                        company="IISER Bhopal"
                        role="Web Developer Intern"
                        description="Developed the full-stack web application from scratch for the EECS department of IISER Bhopal. Used React.js for frontend and Node.js, Express.js, Google Sheets API and MySQL for backend. Deployed the React.js and Node.js applications using Apache in the institute server."
                        live="https://eecs.iiserb.ac.in/"
                        repo=""
                        letter="https://drive.google.com/file/d/1uRFAkBfF9O0IgHeItF26Y3NYl9r8YJO_/view?usp=sharing"
                    />
                    <ExperienceItem
                        image="/portfolio/iiserb.png"
                        date="Apr 2022 - Jul 2022"
                        company="IISER Bhopal"
                        role="Teaching Assistant"
                        description="Taught fundamentals of C programming, Linux and Data Structures to undergraduate students. Assisted 250+ students with coding in practical sessions."
                        live=""
                        repo=""
                        letter=""
                    />
                </ol>
            </div>
        </div>
    );
}
