import React from "react";

const Menutis = ({ title }) => {
  return (
    <div>
      <a
        href="#"
        className="border-black border-[1px] rounded-[16px] flex items-center justify-center w-[600px] h-[60px] text-[20px] px-4 font-JoseFina max-sm:w-[330px] max-sm:h-[50px] max-sm:text-[18px] hover:bg-black hover:text-white hover:text-[22px] transition-all duration-500"
      >
        <p className="text-[25px]">≫</p>
        <span className="mx-auto">{title}</span>
        <p className="text-[25px]">≪</p>
      </a>
    </div>
  );
};

export default Menutis;
