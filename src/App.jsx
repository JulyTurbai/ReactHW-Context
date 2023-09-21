import './App.css';
import { MyContextProvider } from './Context/MyContextProvider';
import Planets from './components/Planets';

function App() {

  return (
    <div className='planetarium'>
      <h1>Planetarium</h1>
      
      <MyContextProvider>
        <Planets />
      </MyContextProvider>

    </div>
  );
}

export default App;

