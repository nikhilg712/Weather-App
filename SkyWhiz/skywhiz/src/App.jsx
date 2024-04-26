import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./components/TopButtons";
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation'
import TemperatureDetails from './components/TemperatureDetails'
import Forecast from './components/Forecast'

function App() {
  return (
    <>
      <div className="mx-auto max-w-screen-md mt-4 py-5  px-32 bg-gradient-to-br from-stone-700 to-black h-fit shadow-xl shadow-gray-400">
        <TopButtons />
        <Inputs />
        <TimeAndLocation />
        <TemperatureDetails />
        <Forecast/>
      </div>
    </>
  );
}

export default App;
