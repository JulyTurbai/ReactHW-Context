import './App.css';
import { useState } from 'react';

function App() {

  const [planets, setPlanets] = useState([
    {id: 1, name: 'Mercury', img: 'https://starwalk.space/gallery/images/facts-about-mercury/1140x641.jpg', description: 'Mercury is the first planet from the Sun and the smallest in the Solar System.'},
    {id: 2, name: 'Saturn', img: 'https://starwalk.space/gallery/images/saturn-planet-guide/1140x641.jpg', description: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter.'},
    {id: 3, name: 'Jupiter', img: 'https://starwalk.space/gallery/images/jupiter-guide/1140x641.jpg', description: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System.'},
    {id: 4, name: 'Neptune', img: 'https://starwalk.space/gallery/images/neptune-at-opposition-2021/1140x641.jpg', description: 'Neptune is the eighth planet from the Sun and the farthest IAU-recognized planet in the Solar System.'},
    {id: 5, name: 'Venus', img: 'https://starwalk.space/gallery/images/amazing-planet-venus/1140x641.jpg', description: 'Venus is the second planet from the Sun. It is a rocky planet with the densest atmosphere of all the rocky bodies in the Solar System.'}
  ]);
  
  return (
    <div className="planetarium">
      <h1 className='planetarium__title'>Planetarium</h1>
      <div className="planets">
        <div className="planet">
          <img className='planet__img' src="" alt="" />
          <p className="planet__name"></p>
        </div>
      </div>
    </div>
  );
}

export default App;
