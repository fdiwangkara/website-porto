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
  icon = null,
  link = null, // link prop (null by default)
}) => {
  // Common class names
  const buttonClasses = `w-[125px] h-[40px] md:w-[140px] md:h-[50px] lg:h-[60px] lg:w-[165px] rounded-[7px] flex items-center justify-center gap-[10px] font-primaryBold text-[12px] md:text-[14px] lg:text-[16px] transition-colors duration-300 ${
    hasBorder
      ? `border border-[${borderWidth}] border-[${borderColor}]`
      : "border-none"
  }`;

  const hoverEffect = (e, backgroundColor, textColor) => {
    e.target.style.backgroundColor = backgroundColor;
    e.target.style.color = textColor;
  };

  return link ? (
    <a
      href={link}
      className={buttonClasses}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      onMouseEnter={(e) => hoverEffect(e, hoverBgColor, hoverTextColor)}
      onMouseLeave={(e) => hoverEffect(e, bgColor, textColor)}
    >
      <span>{text}</span>
      {/* Display the icon if passed */}
      {icon && <img src={icon} alt="arrow icon" className="h-[12px]" />}
    </a>
  ) : (
    <button
      className={buttonClasses}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      onMouseEnter={(e) => hoverEffect(e, hoverBgColor, hoverTextColor)}
      onMouseLeave={(e) => hoverEffect(e, bgColor, textColor)}
    >
      <span>{text}</span>
      {/* Display the icon if passed */}
      {icon && <img src={icon} alt="arrow icon" className="h-[12px]" />}
    </button>
  );
};

export default Button2;
