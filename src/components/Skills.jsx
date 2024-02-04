import Skill from "./Skill";
import { useSelector } from "react-redux";
import { data } from "../mock/data";

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
    name: "NODE",
    photo: "./logos/node-logo.svg",
  },
  {
    name: "VS CODE",
    photo: "./logos/vs-logo.svg",
  },
  {
    name: "FIGMA",
    photo: "./logos/figma-logo.svg",
  }
];

export default function Skills() {
  const lang = useSelector((store) => store.lang);
  return (
    <div className="w-screen dark:bg-[#484148]">
      <div className="pt-5 pb-36 px-0 max-w-[1000px] mx-auto my-0 flex flex-col align-center">
        <h2 className="text-textLightBlack dark:text-white text-center text-[48px] font-medium tracking-wide m-[58px]">
          {data[lang].skills.title}
        </h2>
        <div className="w-full flex items-center justify-between flex-wrap">
          {skills.map((item, index) => {
            return <Skill key={index} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
