import { MyContext } from '../Context/MyContextProvider2';
import React, { useState } from 'react';
import { useContext } from 'react';

function BackgroundChanger() {
  const changeBackground = useContext(MyContext);
  const [backgroundImage, setBackgroundImage] = useState('https://w.forfun.com/fetch/e9/e957de9058693f484a01210f38328151.jpeg');
  const [isBackgroundChanged, setIsBackgroundChanged] = useState(false);

  const toggleBackground = () => {
    if (isBackgroundChanged) {
      setBackgroundImage('https://w.forfun.com/fetch/e9/e957de9058693f484a01210f38328151.jpeg'); 
    } else {
      setBackgroundImage('https://w.forfun.com/fetch/b5/b5c0e9f76acf57d53334eb195eb5304a.jpeg'); 
    }
    setIsBackgroundChanged(!isBackgroundChanged);
  };

  return (
    <>
      <button onClick={toggleBackground}>
        {isBackgroundChanged ? 'Change Background' : 'Leave'}
      </button>
      <style>
        {`
          body {
            background-image: url(${backgroundImage});
            background-size: cover;
          }
        `}
      </style>
    </>
  );
}

export default BackgroundChanger;
