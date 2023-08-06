import { RiBook2Line } from "react-icons/ri";
import EducationItem from "./EducationItem";

export default function Education() {
    return (
        <div className="mt-8">
            <h2 className="font-semibold font-head text-xl flex items-center gap-2 pb-2 mb-4 border-b">
                <RiBook2Line />
                Education
            </h2>
            <div>
                <ol className="relative border-l border-gray-400 dark:border-gray-600">
                    <EducationItem
                        time="Jul 2018 - Jul 2023"
                        degree="BS-MS in EECS (Minor in Data Science)"
                        school="Indian Institute of Science Education and Research Bhopal(IISERB)"
                    />
                    <EducationItem
                        time="Apr 2018"
                        degree="AISSCE (PCM + Computer Science)"
                        school="Central Board of Secondary Education (CBSE)"
                    />
                    <EducationItem
                        time="Apr 2016"
                        degree="AISSE (Class X)"
                        school="Central Board of Secondary Education (CBSE)"
                    />
                </ol>
            </div>
        </div>
    );
}
