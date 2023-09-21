import React, { useState } from 'react';
import { useContext } from 'react';
import { MySecondContext } from '../Context/MyContextProvider2';

function BackgroundChanger() {
  const { img } = useContext(MySecondContext);
  const [backgroundImage, setBackgroundImage] = useState('https://w.forfun.com/fetch/e9/e957de9058693f484a01210f38328151.jpeg');
  const [isBackgroundChanged, setIsBackgroundChanged] = useState(false);

  const toggleBackground = () => {
    if (isBackgroundChanged) {
      setBackgroundImage('https://w.forfun.com/fetch/e9/e957de9058693f484a01210f38328151.jpeg'); 
    } else {
      setBackgroundImage(img); 
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
