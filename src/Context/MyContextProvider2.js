import { createContext } from 'react';
const MySecondContext = createContext();

const MyContextProvider2 = ({ children }) => {
    const changeBackground = {
        img:'https://w.forfun.com/fetch/b5/b5c0e9f76acf57d53334eb195eb5304a.jpeg'
    }
    
    return (
        <div>
            <MySecondContext.Provider value={ changeBackground  }>
                {children}
            </MySecondContext.Provider>
        </div>
    );
};

export { MySecondContext , MyContextProvider2 }