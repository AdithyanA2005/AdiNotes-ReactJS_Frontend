import React from "react";
import { NavLink } from "react-router-dom";
export default function NavLinks(props) {
  return (
    <>
      <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        {props.links.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.url}
              className={({ isActive }) => {
                const commonClasses = "block py-2 pr-4 pl-3 rounded md:p-0 ";
                return commonClasses.concat(
                  isActive
                    ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700  dark:text-white"
                    : "text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                );
              }}
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
