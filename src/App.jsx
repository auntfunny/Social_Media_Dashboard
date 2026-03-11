
import {dashboardData} from "./data/data.js";
import Header from './components/Header';
import BigCard from './components/BigCard.jsx';

function App() {
  

  return (
    <div className='flex flex-col items-center p-6 gap-4 font-["Inter"]'>
      <Header data={dashboardData}/>
      {dashboardData.socialCards.map((socialCard, index) => (
        <BigCard socialCard={socialCard} arrow={dashboardData.icons} key={index}/>
      ))}
    </div>
  )
}

export default App
