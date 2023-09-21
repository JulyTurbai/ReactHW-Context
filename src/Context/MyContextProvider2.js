import { createContext } from 'react';


const MyContext = createContext();

const MyContextProvider2 = ({ children }) => {
    const changeBackground = 'https://w.forfun.com/fetch/b5/b5c0e9f76acf57d53334eb195eb5304a.jpeg'
    return (
        <div>
            <MyContext.Provider value={ changeBackground  }>
                {children}
            </MyContext.Provider>
        </div>
    );
};

export { MyContext, MyContextProvider2 }