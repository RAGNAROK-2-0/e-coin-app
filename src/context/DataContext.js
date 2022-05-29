import { createContext } from "react";
// import useCarrinho from "./hooks/useCarrinho";
import { useCredentials } from "./hooks/useCredentials";


const DataContext = createContext()

function DataProvider({ children }) {

    const useCredentialsContexto = useCredentials()

    return (
        <DataContext.Provider value={{ Credentials: useCredentialsContexto }}>
            {children}
        </DataContext.Provider>
    );
}


export { DataProvider, DataContext }