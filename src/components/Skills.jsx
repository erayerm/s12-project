import Skill from "./Skill";
import { useSelector } from "react-redux";

const skills = [
  {
    name: "JAVASCRIPT",
    photo: "./logos/js-logo.svg",
  },
  {
    name: "REACT",
    photo: "./logos/react-logo.svg",
  },
  {
    name: "REDUX",
    photo: "./logos/redux-logo.svg",
  },
  {
    name: "NEXT.JS",
    photo: "./logos/nextjs-logo.avif",
  },
  {
    name: "JAVA",
    photo: "./logos/java-logo.jpg",
  },
  {
    name: "SPRING BOOT",
    photo: "./logos/spring-logo.jpg",
  }
];

export default function Skills() {
  const data = useSelector((store) => store.currentData);

  return (
    <div className="relative w-screen dark:bg-[#484148]">
      <img
        className="absolute bottom-[30%] left-0 xl:block hidden"
        src="./shapes/skills-1-rectangle.svg"
      />
      <img
        className="absolute bottom-[-90px] right-0"
        src="./shapes/skills-2-circle.svg"
      />
      <div className="pt-5 pb-36 px-0 max-w-[1040px] mx-auto my-0 flex flex-col align-center">
        <h2 className="text-textLightBlack dark:text-white text-center text-[48px] font-medium tracking-wide m-[58px]">
          {data.skills.title}
        </h2>
        <div className="w-full flex justify-center items-center gap-10 flex-wrap px-5">
          {skills.map((item, index) => {
            return <Skill key={index} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
