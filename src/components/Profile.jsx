import {data} from "../mock/data"
import { useSelector } from "react-redux";

export default function Profile() {
  const lang = useSelector((store) => store.lang);
  return (
    <>
      <div className="w-screen dark:bg-bgDarkBlack bg-bgLightGray py-20">
        <div className="max-w-[1100px] flex flex-col items-center my-0 mx-auto">
          <h2 className="text-4xl font-medium tracking-[0.01em] dark:text-white ">
            {data[lang].profile.title}
          </h2>
          <div className="w-full flex justify-between pt-10">
            <div className="pl-10 pb-10 max-w-[520px] w-6/12 bg-white dark:bg-[#525252] rounded-xl shadow-[10px_10px_rgba(82,82,82,0.5)]">
              <h3 className="text-[#ea2678] font-playfair text-2xl font-normal tracking-[0.015em] pt-10">
                {data[lang].profile.basicInformation.title}
              </h3>
              <div className="flex flex-col">
                {data[lang].profile.basicInformation.content.map(
                  (item, index) => {
                    return (
                      <div
                        className="pt-5 flex gap-1.5 text-black dark:text-white tracking-[0.01em]"
                        key={index}
                      >
                        <p className="w-[32%] font-lg font-semibold">
                          {item.first}
                        </p>
                        <p className="w-[50%] font-lg font-normal">
                          {item.second}
                        </p>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            <div className="relative pt-10 w-[500px]">
              <h3 className="relative z-20 font-playfair text-2xl dark:text-white font-normal tracking-[0.015em]">
                {data[lang].profile.aboutMe.title}
              </h3>
              <img
                className="absolute top-[20%] left-[-5px] z-10"
                src="./shapes/profile-1-rectangle.svg"
              />
              <div className="w-[90%]">
                {data[lang].profile.aboutMe.content.map((item, index) => {
                  return (
                    <p
                      className="dark:text-white pt-5 text-lg font-normal tracking-[0.01em]"
                      key={index}
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}