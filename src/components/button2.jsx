import React from "react";
import ArrowIcon from "../assets/icons/arrow.svg"; // Adjust the path according to your project structure

const Button2 = ({
  text,
  bgColor = "#3B3030",
  textColor = "#FFFFFF",
  hasBorder = false,
  borderColor = "#000",
  borderWidth = "1px",
  hoverBgColor = "#3B3030",
  hoverTextColor = "#FFFFFF",
  icon = null, // icon prop
}) => {
  return (
    <button
      className={`w-[180px] h-[48px] md:w-[160px] rounded-[7px] flex items-center justify-center gap-[10px] font-primaryBold text-[16px] transition-colors duration-300 ${
        hasBorder
          ? `border border-[${borderWidth}] border-[${borderColor}]`
          : "border-none"
      }`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      // Add hover effect
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = hoverBgColor;
        e.target.style.color = hoverTextColor;
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = bgColor;
        e.target.style.color = textColor;
      }}
    >
      <span>{text}</span>
      {/* Display the icon if passed */}
      {icon && <img src={icon} alt="arrow icon" className="h-[15px]" />}
    </button>
  );
};

export default Button2;
