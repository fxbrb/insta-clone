import React from "react";

const StoriesItems = ({ avatar, name }) => {
  return (
    <div className="w-[80px] flex flex-col items-center gap-y-[0.5rem] text-center px-[5px]">
      <div className="rounded-full bg-gradient-to-r p-[3px] from-[#833ab4] via-[#fd1d1d] to-[#fcb045]">
        <div className="dark:bg-[#15202B] bg-white rounded-full">
          <img
            src={avatar}
            alt=""
            className="w-[65px] h-[65px] rounded-full object-cover p-[2px]"
          />
        </div>
      </div>
      <p className="dark:text-white w-full text-[12px] overflow-ellipsis overflow-hidden">
        {name}
      </p>
    </div>
  );
};

export default StoriesItems;
