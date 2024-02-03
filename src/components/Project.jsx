export default function Project({projectObject, data}){
    return (
      <div className="w-[500px] pt-14  px-10 dark:text-white bg-[#DDEEFE] dark:bg-[#2D3235] rounded-md flex flex-col gap-7">
        <h4 className="text-3xl font-playfair tracking-[0.05em]">
          {projectObject.title}
        </h4>
        <p className="w-[90%]">{projectObject.info}</p>
        <div className="flex flex-wrap gap-2 w-[80%]">
          {projectObject.tags.map((tagName, index) => {
            return (
              <p
                className="py-1 px-5 font-playfair bg-white dark:bg-[#525252] rounded-3xl"
                key={index}
              >
                {tagName}
              </p>
            );
          })}
        </div>
        <div className="text-xl font-semibold flex justify-between">
          <a>{data.viewOnGithub}</a>
          <a>{data.goToApp}</a>
        </div>
        <img className="max-w-[500] pt-20 mb-[-36px]" src="computer.png" />
      </div>
    );
}