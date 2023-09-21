import './App.css';
import { MyContextProvider } from './Context/MyContextProvider';
import MyContextProvider2 from './Context/MyContextProvider2';
import BackgroundChanger from './components/BackgroundChanger';
import Planets from './components/Planets';

function App() {

  return (
    <div className='planetarium'>
      <h1>Planetarium</h1>
      
      <MyContextProvider>
        <Planets />
      </MyContextProvider>

      <div className="back-controller">
      <MyContextProvider>
          <BackgroundChanger />
      </MyContextProvider>
      </div>
    </div>
  );
}

export default App;

