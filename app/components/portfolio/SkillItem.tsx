export default function SkillItem(props: { skill: string; category: string }) {
    let bG = "";
    if (props.category === "language") {
        bG = "bg-[#edf9e7] text-green-800";
    } else if (props.category === "framework") {
        bG = "bg-sky-100 text-sky-800";
    } else if (props.category === "database") {
        bG = "bg-[#fff4e6] text-yellow-800";
    } else {
        bG = "bg-red-100 text-red-700";
    }
    return (
        <div className={`${bG} text-sm py-1.5 px-3 rounded-lg font-medium`}>
            {props.skill}
        </div>
    );
}
