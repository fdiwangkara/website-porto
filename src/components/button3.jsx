import React from "react";

const Button3 = ({ text, icon, link }) => {
  return (
    <a
      href={link}
      className="flex items-center justify-center h-[40px] w-[300px] md:h-[48px] md:w-[350px] lg:h-[48px] lg:w-[445px] border border-[#3B3030] rounded-[7px] bg-transparent hover:bg-[#3B3030] hover:text-white transition-colors duration-300"
    >
      {/* Icon */}
      {icon && (
        <img
          src={icon}
          alt="Icon"
          className="w-4 h-4 md:w-[20px] md:h-[20px] lg:w-[24px] lg:h-[24px] mr-3" // Adjust size of the icon as needed
        />
      )}
      {/* Button Text */}
      <span className="font-primaryBold text-[#3B3030] hover:text-white text-[14px] lg:text-[18px] md:text-[16px] transition-colors duration-300">
        {text}
      </span>
    </a>
  );
};

export default Button3;
