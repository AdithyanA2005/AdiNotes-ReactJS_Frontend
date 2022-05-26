import React, { useEffect, useState } from "react";
import SidebarContext from "./SidebarContext";

const SidebarState = (props) => {
  // Expands or shinks the sidebar
  const toggleSidebar = () => setSidebarExpanded((prev) => !prev);
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  return (
    <SidebarContext.Provider value={{ sidebarExpanded, setSidebarExpanded, toggleSidebar }}>
      {props.children}
    </SidebarContext.Provider>
  );
};

export default SidebarState;
