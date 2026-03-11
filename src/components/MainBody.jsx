import BigCard from "./BigCard";
import SmallCard from "./SmallCard";

function MainBody({ data }) {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-center lg:justify-between md:flex-wrap gap-8 md:gap-x-12 lg:gap-8 md:w-2xl lg:w-6xl ">
        {data.socialCards.map((socialCard, index) => (
          <BigCard socialCard={socialCard} arrow={data.icons} key={index} />
        ))}
      </div>
      <div className="flex flex-col gap-8 md:w-2xl lg:w-6xl pt-10">
        <h2 className="text-2xl text-light3 font-bold dark:text-white transition-colors duration-500 ease-in-out">Overview - Today</h2>
        <div className="flex flex-col md:flex-row md:justify-center lg:justify-between md:flex-wrap gap-8 md:gap-x-12 lg:gap-8 md:w-2xl lg:w-6xl">
            {data.overviewCards.map((overviewCard, index) => (
                <SmallCard overviewCard={overviewCard} arrow={data.icons} key={index}/>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MainBody;
