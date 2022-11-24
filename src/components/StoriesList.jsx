import React from "react";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { useEffect, useState, useRef } from "react";
import StoriesItems from "./StoriesItems.jsx";

const StoriesList = ({ storyItems }) => {
  // useEffect(() => {
  //   document
  //     .querySelector("#stories")
  //     .addEventListener("wheel", preventScroll, { passive: false });
  //   function preventScroll(e) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     return false;
  //   }
  // }, []);

  const slide = (direction) => {
    let stories = document.querySelector("#stories");
    let width = stories.offsetWidth;
    if (direction === "right") {
      stories.scrollLeft = stories.scrollLeft - width;
    }

    if (direction === "left") {
      stories.scrollLeft = stories.scrollLeft + width;
    }
  };

  return (
    <div className="dark:bg-[#15202B] dark:border-[#5a5a5a6d] bg-[#FFF] w-full flex items-center mb-[1rem] h-fit border-b-[1px] border-gray-300 rounded-[6px] py-[0.8rem] sm:border-[1px]  sm:w-[95%] md:max-w-[100%] md:w-[470px] relative">
      {/* Prev arrow */}
      <IoIosArrowDropleftCircle
        size={35}
        color="white"
        className={`cursor-pointer absolute left-[0.5rem] hidden md:block`}
        onClick={() => slide("right")}
      />
      <div
        className="w-full flex overflow-scroll whitespace-nowrap scroll-smooth scrollbar-hide px-[0.5rem]"
        id="stories"
      >
        <div className="flex w-fit">
          {storyItems.map((item, k) => {
            return (
              <StoriesItems key={k} avatar={item.avatar} name={item.name} />
            );
          })}
        </div>
      </div>
      {/* Next arrow */}
      <IoIosArrowDroprightCircle
        size={35}
        color="white"
        className="cursor-pointer absolute right-[0.5rem] hidden md:block"
        onClick={() => slide("left")}
      />
    </div>
  );
};

export default StoriesList;
