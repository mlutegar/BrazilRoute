import {createContext, useState} from "react";

export const MenuContext = createContext();

const MenuProvider = ({children}) => {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    }

    return (
        <MenuContext.Provider value={{menuAberto, toggleMenu}}>
            {children}
        </MenuContext.Provider>
    );
}

export default MenuProvider;