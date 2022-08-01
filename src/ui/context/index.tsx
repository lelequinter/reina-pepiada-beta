import React, { useState } from "react";

export const NavRoutesContext = React.createContext({});

interface IContextProps {
  children: JSX.Element[] | JSX.Element;
}

export default function NavRoutesProvider({ children }: IContextProps): any {
  const [currentUrl, setCurrentUrl] = useState("home");
  return (
    <NavRoutesContext.Provider
      value={{
        currentUrl,
        setCurrentUrl,
      }}
    >
      {children}
    </NavRoutesContext.Provider>
  );
}
