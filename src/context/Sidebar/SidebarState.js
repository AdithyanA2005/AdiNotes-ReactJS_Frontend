import React, { useEffect, useState } from "react";
import SidebarContext from "./SidebarContext";

const SidebarState = (props) => {
  // Expands or shinks the sidebar
  const toggleSidebar = () => setSidebarActive((prev) => !prev);
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <SidebarContext.Provider value={{ sidebarActive, setSidebarActive, toggleSidebar }}>
      {props.children}
    </SidebarContext.Provider>
  );
};

export default SidebarState;
