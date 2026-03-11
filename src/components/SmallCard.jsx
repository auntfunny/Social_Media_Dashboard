function SmallCard({ overviewCard, arrow }) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 place-content-between h-30 w-84 md:w-78 lg:w-64 p-6 rounded-lg bg-light2 text-light3 font-bold transition-all duration-500 ease-in-out hover:-translate-y-1 hover:cursor-pointer hover:bg-lightHover dark:hover:bg-darkHover dark:bg-dark3 dark:text-dark4">
      <p>{overviewCard.metric}</p>
      <img
        src={overviewCard.icon}
        alt={overviewCard.platform}
        className="justify-self-end"
      />
      <p className="text-light4 text-2xl self-end dark:text-white transition-colors duration-500 ease-in-out">{overviewCard.value}</p>
      <div className="flex justify-end self-end items-center gap-1">
        <img
          src={overviewCard.change.isPositive ? arrow.up : arrow.down}
          alt="Arrow Icon"
        />
        <p
          className={
            overviewCard.change.isPositive ? "text-accGreen" : "text-accRed"
          }
        >
          {overviewCard.change.percentage}%
        </p>
      </div>
    </div>
  );
}

export default SmallCard;
