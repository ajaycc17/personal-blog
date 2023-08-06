import { RiCloudLine } from "react-icons/ri";
import SkillItem from "./SkillItem";

export default function Skills() {
    return (
        <div>
            <h2 className="font-semibold font-head text-xl flex items-center gap-2 pb-2 mb-4 border-b">
                <RiCloudLine />
                Technical Skills
            </h2>
            <div className="flex flex-wrap gap-2 mb-3">
                <SkillItem skill="C++" category="language" />
                <SkillItem skill="JavaScript" category="language" />
                <SkillItem skill="Python" category="language" />
                <SkillItem skill="Java" category="language" />
                <SkillItem skill="React.js" category="framework" />
                <SkillItem skill="Next.js" category="framework" />
                <SkillItem skill="Node.js" category="framework" />
                <SkillItem skill="Express.js" category="framework" />
                <SkillItem skill="MySQL" category="database" />
                <SkillItem skill="PostgreSQL" category="database" />
                <SkillItem skill="MongoDB" category="database" />
                <SkillItem skill="AWS" category="cloud" />
            </div>
        </div>
    );
}
