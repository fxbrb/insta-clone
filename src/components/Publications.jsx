import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { TbMessageCircle2 } from "react-icons/tb";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { BiBookmark } from "react-icons/bi";
import { AiOutlineSmile } from "react-icons/ai";
import img1 from "../assets/1.jpg";

const Publications = ({ randomNumber }) => {
  return (
    <div className="dark:bg-[#15202B] dark:text-white dark:border-[#5a5a5a6d] bg-[#FFF] w-full m-w-[100%] items-center border-[1px] border-gray-300 rounded-[6px] mb-5 sm:w-[80%] md:w-[470px]">
      {/* Top */}
      <div className="dark:text-white flex justify-between items-center p-[0.5rem]">
        <div className="flex items-center gap-x-[0.3rem]">
          <div className="rounded-full bg-gradient-to-r p-[3px] from-[#833ab4] via-[#fd1d1d] to-[#fcb045]">
            <div className="bg-white rounded-full">
              <img
                src={img1}
                alt=""
                className="w-[40px] h-[40px] rounded-full object-cover p-[2px]"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="dark:text-white text-[14px] font-medium">Name Test</p>
            <p className="dark:text-white text-[14px] font-light">location</p>
          </div>
        </div>

        <div>
          <BiDotsHorizontalRounded size={22} className="cursor-pointer" />
        </div>
      </div>
      {/* Img */}
      <div className="w-full h-[550px]">
        <img src={img1} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col">
        {/* Like */}
        <div className="flex w-full justify-between  p-[0.5rem]">
          <div className="flex items-center gap-[0.5rem]">
            <AiOutlineHeart
              size={26}
              className="cursor-pointer dark:stroke-white"
            />
            <TbMessageCircle2
              className="rotate-[-90deg] cursor-pointer dark:stroke-white"
              size={26}
            />
            <HiOutlinePaperAirplane
              size={26}
              className="cursor-pointer dark:stroke-white"
            />
          </div>
          <div className="self-end">
            <BiBookmark size={26} className="cursor-pointer" />
          </div>
        </div>
        {/* Like counter */}
        <p className="my-[0.3rem] text-[14px] font-medium  p-[0.5rem] dark:text-white">
          <span className="mr-[0.2rem]">
            {randomNumber(7)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
          J'aime
        </p>
        {/* Description */}
        <div className="flex flex-col  px-[0.5rem] py-[0.8rem]">
          <p className="dark:text-white text-[14px]">
            <span className="text-[14px] font-medium mr-[0.3rem] ">Name</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum culpa
            enim officia architecto a laudantium dignissimos voluptas nulla.
            Magnam hic illo aliquid consequatur nostrum repudiandae sequi soluta
            esse magni optio?
          </p>
          <div className="my-[0.3rem]">
            <p className="text-gray-400 text-[14px] cursor-pointer">
              Afficher les {randomNumber(2)} commentaires
            </p>
          </div>
          <p className="text-gray-400 uppercase text-[10px]">
            Il y a {randomNumber(2)} minutes
          </p>
        </div>

        {/* Add comment */}
        <div className="flex border-t  px-[0.5rem] py-[0.8rem]">
          <div className="flex items-center gap-2 flex-1">
            <AiOutlineSmile size={22} />
            <input
              type="text"
              placeholder="Ajouter un commentaire..."
              className="outline-0 w-full dark:bg-[#15202B]"
            />
          </div>
          <div>
            <button className="text-[#0095f6] text-[14px] font-semibold">
              Publier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
