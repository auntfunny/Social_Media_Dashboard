function BigCard({ socialCard, arrow }) {
    let classes =`absolute inset-x-0 top-0 h-1.5 rounded-t-lg`
  if (socialCard.platform === "instagram") {
     classes += ` bg-gradient-to-r from-insta1 via-insta2 to-insta3`
  } 
  return (
    
      <div className="relative flex flex-col justify-center items-center gap-6 w-84 p-6 rounded-lg bg-light2 text-light3 font-bold">
        <div className={classes} style={{backgroundColor: socialCard.accentColor}}></div>
        <div className="flex gap-4">
          <img
            src={socialCard.icon}
            alt={socialCard.platform}
            className="w-6"
          />
          <p>{socialCard.username}</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-light4 text-5xl">{socialCard.count}</p>
          <p className="font-normal">F O L L O W E R S</p>
        </div>
        <div className="flex items-center gap-2 ">
          <img
            src={socialCard.change.isPositive ? arrow.up : arrow.down}
            alt="Change Icon"
          />
          <p
            className={
              socialCard.change.isPositive ? "text-accGreen" : "text-accRed"
            }
          >
            {socialCard.change.value} Today
          </p>
        </div>
      </div>
    
  );
}

export default BigCard;
