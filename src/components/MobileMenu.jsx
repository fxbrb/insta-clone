import React from "react";
import { NavLink } from "react-router-dom";
import profile from "../assets/profile.jpg";
import { FiHeart, FiPlusSquare } from "react-icons/fi";
import { GrSearch, GrHomeRounded } from "react-icons/gr";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { HiPaperAirplane, HiOutlinePaperAirplane } from "react-icons/hi2";

const MobileMenu = () => {
  const MobileMenu = [
    {
      icon: <GrHomeRounded className="icon" size={25} />,
      path: "/",
    },
    {
      icon: <GrSearch className="icon" size={25} />,
      path: "/",
    },
    {
      icon: <MdOutlineOndemandVideo className="icon" size={25} />,
      path: "/",
    },
    {
      icon: <HiOutlinePaperAirplane color="#2b2b2b" size={25} />,
      path: "/messages",
    },
  ];
  return (
    <>
      <div className="bg-white w-full fixed z-50 top-0 h-[50px] border-b-[1px] flex items-center px-[1.5rem] border-gray-300 md:hidden">
        <p className="font-logo text-2xl cursor-pointer flex-1">FrançoisBrb</p>
        <div className="flex gap-[20px]">
          <NavLink to="#">
            <FiPlusSquare color="#2b2b2b" size={25} />
          </NavLink>
          <NavLink to="#">
            <FiHeart className="icon" size={25} />
          </NavLink>
        </div>
      </div>
      <div className="bg-white w-full fixed bottom-0 h-[50px] border-t-[1px] flex items-center justify-between px-[1.5rem] border-gray-300 md:hidden">
        {MobileMenu.map((mobile, k) => {
          return (
            <NavLink to={mobile.path} key={k}>
              {mobile.icon}
            </NavLink>
          );
        })}
        <NavLink to="/profil">
          <img
            src={profile}
            alt=""
            className={`object-cover rounded-full w-6`}
          />
        </NavLink>
      </div>
    </>
  );
};

export default MobileMenu;
