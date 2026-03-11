import Darkmode from "./Darkmode";

function Header({ data }) {
  const formatNumberWithThousands = (num) => {
    return new Intl.NumberFormat("en-US").format(num);
  };
  return (
    <div className="md:flex z-10 md:justify-between w-full md:max-w-2xl lg:max-w-6xl transition-colors duration-500 ease-in-out"> 
      <div className="py-4 border-b border-light3 md:border-b-0 text-left w-full dark:border-dark4  transition-colors duration-500 ease-in-out">
        <h1 className="text-2xl text-light4 font-bold dark:text-white transition-colors duration-500 ease-in-out" >{data.header.title}</h1>
        <p className="text-light3 font-bold dark:text-dark4 transition-colors duration-500 ease-in-out">Total Followers: {formatNumberWithThousands(data.header.totalFollowers)}</p>
      </div>
      <Darkmode/>
    </div>
  );
}

export default Header;
