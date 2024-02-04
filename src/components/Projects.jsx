import { useSelector } from "react-redux";
import { data } from "../mock/data";
import Project from "./Project";

export default function Projects() {
  const lang = useSelector((store) => store.lang);

  return (
    <div className="w-screen dark:bg-[#484148] pb-36">
      <div className="max-w-[1100px] my-0 mx-auto">
        <h3 className="pt-20 pb-10 text-center font-medium text-4xl dark:text-white">
          {data[lang].projects.title}
        </h3>
        <div className="flex justify-between">
          {data[lang].projects.project.map((projectObject, index) => {
            return (
              <Project
                key={index}
                projectObject={projectObject}
                data={data[lang].projects}
              />
            );
          })}
        </div>
      </div>
      <div className="pt-60 flex max-w-[650px] my-0 mx-auto items-center gap-10">
        <div className="relative">
          <img
            className="absolute top-[30px] left-[150px] z-10"
            src="./shapes/projects-1-rectangle.svg"
          />
          <p className="relative z-20 text-5xl dark:text-white">
            {data[lang].projects.letsWork}
          </p>
        </div>

        <ul>
          <li className="text-[#82BBFF]">Github</li>
          <li className="text-[#419CCB]">Linkedin</li>
          <li className="text-[#EA2678]">Email</li>
        </ul>
      </div>
    </div>
  );
}
