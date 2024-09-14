"use client";

import { createContext, useContext, useState } from "react";

const ContextApp = createContext();

export default function ContextAppProvider({ children }) {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <ContextApp.Provider
      value={{ openSideBarObject: { openSideBar, setOpenSideBar } }}
    >
      {children}
    </ContextApp.Provider>
  );
}

export function useContextApp() {
  return useContext(ContextApp);
}
