import { createContext, useContext, useState } from "react";


const LoaderContext = createContext(undefined);

export const LoaderProvider = ({children}) => {

    const [ loading, setLoading ] = useState();
    
    return <LoaderContext.Provider value={[loading,setLoading]}>{children}</LoaderContext.Provider>
};

export const useLoader = () => useContext(LoaderContext);