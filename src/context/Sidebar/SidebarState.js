import { useState } from "react";
import SidebarContext from "./SidebarContext";

const SidebarState = (props) => {
  // Sidebar expanded status
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  // Toggle sidebar expand / collapse
  const toggleSidebar = () => setSidebarExpanded((prev) => !prev);

  return (
    <SidebarContext.Provider value={{ sidebarExpanded, setSidebarExpanded, toggleSidebar }}>
      {props.children}
    </SidebarContext.Provider>
  );
};

export default SidebarState;
