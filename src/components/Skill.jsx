

export default function Skill (props){
    const {data} = props
    return (
      <div className="text-center basis-[30%] lg:basis-auto">
        <img
          className="w-[120px] h-[120px] object-cover rounded-md my-0 mx-auto"
          src={data.photo}
        />
        <p className="text-[#777] dark:text-bgLightGray text-[24px] weight-lg uppercase mt-2.5">
          {data.name}
        </p>
      </div>
    );
}