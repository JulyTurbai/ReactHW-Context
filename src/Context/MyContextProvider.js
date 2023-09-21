import { createContext } from 'react';
import { useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
    const [planets, setPlanets] = useState([
        {id: 1, name: 'Mercury', img: 'https://starwalk.space/gallery/images/facts-about-mercury/1140x641.jpg', description: 'Mercury is the first planet from the Sun and the smallest in the Solar System.'},
        {id: 2, name: 'Saturn', img: 'https://starwalk.space/gallery/images/saturn-planet-guide/1140x641.jpg', description: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter.'},
        {id: 3, name: 'Jupiter', img: 'https://starwalk.space/gallery/images/jupiter-guide/1140x641.jpg', description: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System.'},
        {id: 4, name: 'Neptune', img: 'https://starwalk.space/gallery/images/neptune-at-opposition-2021/1140x641.jpg', description: 'Neptune is the eighth planet from the Sun and the farthest IAU-recognized planet in the Solar System.'},
        {id: 5, name: 'Venus', img: 'https://starwalk.space/gallery/images/amazing-planet-venus/1140x641.jpg', description: 'Venus is the second planet from the Sun. It is a rocky planet with the densest atmosphere of all the rocky bodies in the Solar System.'},
        {id: 6, name: 'Mars', img: 'https://starwalk.space/gallery/images/mars-the-ultimate-guide/1140x641.jpg', description: 'Mars is the fourth planet and the furthest terrestrial planet from the Sun.'}
      ]);
  
    return (
      <>
        <MyContext.Provider value={ planets }>
          {children}
        </MyContext.Provider>
      </>
    );
  };
  
  export { MyContext, MyContextProvider };