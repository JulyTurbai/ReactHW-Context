import React, { useContext } from 'react';
import { MyContext } from '../Context/MyContextProvider';

const Planet = () => {
  const planets = useContext(MyContext);

  return (
    <>
      {
        planets.map((item) => (
            <div className="planet" id={item.id} key={item.id}>
                <img className='planet__img' src={item.img} alt="" />
                <p className="planet__name">{item.name}</p>
                <p className='planet__descr'>{item.description}</p>
            </div>
        ))
      }
    </>
  );
};

export default Planet;
