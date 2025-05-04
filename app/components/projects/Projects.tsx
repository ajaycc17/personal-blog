"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import ProjectItem from "./ProjectItem";
import { GrayButtonIn } from "../BlueButtons";
import { RiCompasses2Line } from "react-icons/ri";

export default function Projects(props: {
  limit: number;
  showBtn: boolean;
  bg: string;
}) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get("/data/projects.json")
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        if (props.limit != -1) setProjects(data.slice(0, props.limit));
        else setProjects(data);
      })
      .catch((err) => console.log(err));
  }, [projects, props.limit]);

  return (
    <div className={`fade-in py-8 px-2 ${props.bg}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end pb-2 border-b">
          <h2 className="font-medium text-xl flex items-center gap-2">
            <RiCompasses2Line className="w-7 h-7 rounded-full p-1 bg-sky-100 text-sky-800" />
            Projects
          </h2>
          {props.showBtn && <GrayButtonIn target="/projects" text="View all" />}
        </div>
        <div className="grid sm:grid-cols-2 mid:grid-cols-3 gap-4 py-4">
          {projects.map((project: any) => {
            return (
              <ProjectItem
                key={project.title}
                title={project.title}
                desc={project.desc}
                repo={project.repo}
                icon={project.icon}
                doc={project.doc}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
