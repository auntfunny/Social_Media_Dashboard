import { dashboardData } from "./data/data.js";
import Header from "./components/Header";
import MainBody from "./components/MainBody.jsx";

function App() {
  return (
      <div className='relative flex flex-col items-center p-6 pb-2 gap-4 font-["Inter"] bg-white dark:bg-dark1 transition-colors duration-500 ease-in-out'>
        <div className="absolute top-0 z-0 bg-light1 h-60 w-full rounded-b-3xl dark:bg-dark2 transition-colors duration-500 ease-in-out"></div>
        <Header data={dashboardData} />
        <MainBody data={dashboardData} />
      </div>
  );
}

export default App;
