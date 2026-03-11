import Darkmode from "./Darkmode";

function Header({ data }) {
  const formatNumberWithThousands = (num) => {
    return new Intl.NumberFormat("en-US").format(num);
  };
  return (
    <div className="self-start w-full"> 
      <div className="py-4 border-b border-light3 md:border-b-0 text-left w-full">
        <h1 className="text-2xl text-light4 font-bold" >{data.header.title}</h1>
        <p className="text-light3 font-bold">Total Followers: {formatNumberWithThousands(data.header.totalFollowers)}</p>
      </div>
      <Darkmode/>
    </div>
  );
}

export default Header;
