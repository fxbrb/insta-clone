import React from "react";
import { IconContext } from "react-icons";
import profile from "../assets/profile.jpg";
import { GrHomeRounded, GrSearch } from "react-icons/gr";
import { IoIosCompass, IoIosSettings } from "react-icons/io";
import { FiHeart, FiPlusSquare } from "react-icons/fi";
import { HiOutlinePaperAirplane, HiPaperAirplane } from "react-icons/hi2";
import { ImCompass2 } from "react-icons/im";
import { BiBookmark } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { MdSyncProblem } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Sidebar = ({
  active,
  toggleMenu,
  clickAnyWhereCloseMenu,
  darkMode,
  setDarkMode,
}) => {
  const [activeMenu, setActiveMenu] = useState(window.location.pathname);

  const handleActiveMenu = (link) => {
    setActiveMenu(link);
    // localStorage.setItem("active", link);
  };

  const sidebarLinks = [
    {
      icon: darkMode ? (
        activeMenu === "/" ? (
          <GrHomeRounded className="iconDark" size={25} fill="#ffff" />
        ) : (
          <GrHomeRounded className="iconDark" size={25} />
        )
      ) : activeMenu === "/" ? (
        <GrHomeRounded className="icon" size={25} fill="#2b2b2b" />
      ) : (
        <GrHomeRounded className="icon" size={25} />
      ),

      name: "Accueil",
      path: "/",
    },
    {
      icon: darkMode ? (
        <GrSearch className="iconDark" size={25} />
      ) : (
        <GrSearch className="icon" size={25} />
      ),
      name: "Recherche",
    },
    {
      icon: darkMode ? (
        <ImCompass2 color="#ffff" size={25} />
      ) : (
        <ImCompass2 color="#2b2b2b" size={25} />
      ),
      name: "Découvrir",
    },
    {
      icon: darkMode ? (
        activeMenu === "/messages" ? (
          <HiPaperAirplane
            color="#ffff"
            size={25}
            className="rotate-[-30deg]"
          />
        ) : (
          <HiOutlinePaperAirplane
            color="#ffff"
            size={25}
            className="rotate-[-30deg]"
          />
        )
      ) : activeMenu === "/messages" ? (
        <HiPaperAirplane
          color="#2b2b2b"
          size={25}
          className="rotate-[-30deg]"
        />
      ) : (
        <HiOutlinePaperAirplane
          color="#2b2b2b"
          size={25}
          className="rotate-[-30deg]"
        />
      ),
      name: "Messages",
      path: "/messages",
    },
    {
      icon: darkMode ? (
        <FiHeart className="iconDark" size={25} />
      ) : (
        <FiHeart className="icon" size={25} />
      ),
      name: "Notifications",
    },
    {
      icon: darkMode ? (
        <FiPlusSquare color="#ffff" size={25} />
      ) : (
        <FiPlusSquare color="#2b2b2b" size={25} />
      ),
      name: "Créer",
    },
  ];

  const accountLinks = [
    {
      icon: <IoIosSettings size={22} />,
      name: "Paramètres",
    },
    {
      icon: <BiBookmark size={22} />,
      name: "Enregistrements",
    },
    {
      icon: <MdSyncProblem size={22} />,
      name: "Signaler un problème",
    },
    {
      name: "Changer de compte",
    },
    {
      name: "Déconnexion",
    },
  ];

  return (
    <aside
      className="dark:bg-[#15202B] dark:border-[#5a5a5a6d] dark:text-white w-[80px] h-screen md:flex flex-col px-[0.4rem] border-r-[1px] border-gray-300 fixed xl:w-[250px] hidden"
      onClick={clickAnyWhereCloseMenu}
    >
      {/* Top content */}
      <div className="py-[2rem] px-[1rem] mb-[1rem] flex justify-center xl:justify-start">
        <p
          className="dark:text-white font-logo text-2xl cursor-pointer xl:hidden"
          onClick={() => setDarkMode(!darkMode)}
        >
          Fxb
        </p>
        <p
          className="dark:text-white font-logo text-2xl cursor-pointer hidden xl:block"
          onClick={() => setDarkMode(!darkMode)}
        >
          FrançoisBrb
        </p>
      </div>
      {/* Middle content */}
      <div className="grow">
        <ul className="flex flex-col items-center xl:items-start">
          {sidebarLinks.map((link, k) => {
            return (
              <li key={k} className="group w-full">
                <NavLink
                  onClick={() => handleActiveMenu(link.path)}
                  to={link.path}
                  className={`dark:text-white flex justify-center items-center px-[1rem] py-[0.7rem] my-[0.5rem] rounded-full group-hover:bg-[#fafafa] dark:group-hover:bg-[#1d9bf0] xl:justify-start ${
                    activeMenu === link.path && "font-semibold"
                  }`}
                >
                  <span className="group-hover:scale-110 transition-scale duration-300">
                    {link.icon}
                  </span>

                  <span className="pl-[1rem] hidden xl:block">{link.name}</span>
                </NavLink>
              </li>
            );
          })}
          <li className="group w-full ">
            <NavLink
              onClick={() => handleActiveMenu("/profil")}
              to="/profil"
              className={`dark:text-white flex justify-center items-center px-[1rem] py-[0.7rem] my-[0.4rem] hover:bg-gray-100 rounded-full xl:justify-start dark:group-hover:bg-[#1d9bf0] ${
                activeMenu === "/profil" && "font-semibold"
              }`}
            >
              <span className="w-6 group-hover:scale-110 transition-scale duration-300 rounded-full">
                <img
                  src={profile}
                  alt=""
                  className={`object-cover rounded-full ${
                    activeMenu === "/profil" && "border-[1.5px] border-black"
                  }`}
                />
              </span>
              <span className="pl-[0.8rem] hidden xl:block">Profil</span>
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Bottom content */}
      <div className="relative w-full">
        {/* Menu */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ y: "10%", opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{ duration: 0.2 }}
              exit={{ opacity: 0, y: "10%" }}
              className="dark:bg-[#15202B] bg-[#FFF] w-[240px] absolute bottom-[65px] left-[15px] 
                flex-col shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] rounded"
            >
              {accountLinks.map((acc, k) => {
                return (
                  <NavLink
                    to="/"
                    key={k}
                    className="p-[0.8rem] z-10 flex items-center border-b-[1px] first:rounded-t third:border-b-[6px] last:rounded-b last:border-none hover:bg-gray-100 dark:text-white"
                  >
                    <div className="flex-1">{acc.name}</div>
                    <div>{acc.icon}</div>
                  </NavLink>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        <div
          onClick={toggleMenu}
          className="group flex items-center justify-center xl:justify-start px-[1rem] py-[0.7rem] my-[0.4rem] hover:bg-gray-100 rounded-full cursor-pointer dark:hover:bg-[#1d9bf0]"
        >
          <FiMenu
            size={20}
            className="group-hover:scale-110 transition-scale duration-300"
          />
          <p className="dark:text-white pl-[0.8rem] hidden xl:block">Plus</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
