export default function EducationItem(props: {
    time: string;
    degree: string;
    school: string;
}) {
    return (
        <li className="mb-6 ml-4">
            <div className="absolute w-3 h-3 bg-green-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-green-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-400">
                {props.time}
            </time>
            <h3 className="text-lg font-medium mb-1">{props.degree}</h3>
            <p className="text-base font-normal text-gray-600 dark:text-gray-400">
                {props.school}
            </p>
        </li>
    );
}
