import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";
import Sidebar from "../components/Sidebar";

const Layouts = ({ darkMode, setDarkMode }) => {
  const [active, setActive] = useState(false);
  const toggleMenu = () => {
    setActive(!active);
  };
  const clickAnyWhereCloseMenu = () => {
    if (active === true) {
      setActive(false);
    } else {
      return;
    }
  };
  return (
    <div className="md:flex h-screen">
      {/* Mobile Menu */}
      <MobileMenu />
      {/* Sidebar */}
      <Sidebar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        active={active}
        toggleMenu={toggleMenu}
        clickAnyWhereCloseMenu={clickAnyWhereCloseMenu}
      />
      {/* Main */}
      <div
        className="dark:bg-[#15202B] bg-[#FAFAFA] w-full h-fit md:ml-[80px] xl:ml-[250px] my-[50px] md:mt-0 overflow-hidden"
        onClick={clickAnyWhereCloseMenu}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Layouts;
