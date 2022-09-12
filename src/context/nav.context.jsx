import { useState, createContext } from "react";

export const NavContext = createContext({
    isNavOpen: {nav: "close-nav"},
    setIsNavOpen: () => {},
})

export const NavProvider = ({ children }) => {
    const [isNavOpen, setIsNavOpen] = useState({
        nav: "open-nav"
    });

    const value = {
        isNavOpen, setIsNavOpen,};

    return <NavContext.Provider value = {value}>{ children }</NavContext.Provider>
}

