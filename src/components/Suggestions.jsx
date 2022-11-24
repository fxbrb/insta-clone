import React from "react";
import img2 from "../assets/2.jpg";

const Suggestions = ({ randomPseudo }) => {
  return (
    <div className="flex mt-3 items-center justify-between">
      <div className="flex">
        <img src={img2} alt="" className="w-9 h-9 object-cover rounded-full" />
        <div className="flex flex-col ml-2">
          <p className="text-[14px] font-medium dark:text-white">Name</p>
          <p className="text-[10px] text-gray-500">
            Suivi(e) par {randomPseudo(5)} + 2 autres personnes
          </p>
        </div>
      </div>
      <p className="text-[#0095f6] text-[12px] font-semibold">Suivre</p>
    </div>
  );
};

export default Suggestions;
