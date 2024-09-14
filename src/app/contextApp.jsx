"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ContextApp = createContext();

export default function ContextAppProvider({ children }) {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [sideBarMenu, setSideBarMenu] = useState([
    {
      id: 1,
      name: "All Projects",
      isSelected: true,
    },
    {
      id: 2,
      name: "All Tasks",
      isSelected: false,
    },
    {
      id: 3,
      name: "Logout",
      isSelected: false,
    },
  ]);

  useEffect(() => {
    function handleResize() {
      setIsMobileView(window.innerWidth <= 940);
    }
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    if (!isMobileView) {
      setOpenSideBar(false);
    }
  }, [isMobileView]);

  return (
    <ContextApp.Provider
      value={{
        openSideBarObject: { openSideBar, setOpenSideBar },
        sidebarMenuObject: { sideBarMenu, setSideBarMenu },
      }}
    >
      {children}
    </ContextApp.Provider>
  );
}

export function useContextApp() {
  return useContext(ContextApp);
}
