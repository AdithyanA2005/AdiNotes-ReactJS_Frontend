import { useRef, useState } from "react";
import NavigationContext from "./NavigationContext";

const NavigationState = (props) => {
  // Refferences
  const navigationRef = useRef()
  const sidebarRef = useRef()

  // Sidebar expanded status
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  // Toggle sidebar expand / collapse
  const toggleSidebar = () => setSidebarExpanded((prev) => !prev);

  return (
    <NavigationContext.Provider value={{ navigationRef, sidebarRef, sidebarExpanded, setSidebarExpanded, toggleSidebar }}>
      {props.children}
    </NavigationContext.Provider>
  );
};

export default NavigationState;
