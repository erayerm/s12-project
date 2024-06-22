import { useSelector } from "react-redux";
import Project from "./Project";

export default function Projects() {
  const data = useSelector((store) => store.currentData);
  return (
    <div className="w-screen dark:bg-[#484148] pb-36">
      <div className="max-w-[1100px] my-0 mx-auto">
        <h3 className="pt-20 pb-10 text-center font-medium text-4xl dark:text-white">
          {data.projects.title}
        </h3>
        <div className="flex flex-wrap gap-10 gap-y-20 justify-center px-10">
          {data.projects.project.map((projectObject, index) => {
            return (
              <Project
                key={index}
                projectObject={projectObject}
                data={data.projects}
              />
            );
          })}
        </div>
      </div>
      <div className="pt-60 flex lg:flex-row flex-col lg:text-left text-center max-w-[650px] my-0 mx-auto p-5 items-center gap-10">
        <div className="relative">
          <img
            className="absolute top-[30px] left-[18%] lg:left-[150px] z-10"
            src="./shapes/projects-1-rectangle.svg"
          />
          <p className="relative z-20 text-5xl dark:text-white">
            {data.projects.letsWork}
          </p>
        </div>

        <ul className="flex flex-row gap-5 lg:block">
          <li className="text-[#82BBFF]">
            <a href="https://github.com/erayerm">Github</a>
          </li>
          <li className="text-[#419CCB]">
            <a href="https://www.linkedin.com/in/erayermemis/">Linkedin</a>
          </li>
          <li className="text-[#EA2678]">
            <a href="mailto:ermemiseray@gmail.com">Email</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
