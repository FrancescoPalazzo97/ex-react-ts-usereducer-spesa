import { GlobalContext } from "../contexts/GlobalContext";
import { useContext } from "react";

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (context === undefined) throw new Error('useGlobalContext non può essere usato al di fuori del GlobalProvider');
    return context;
};