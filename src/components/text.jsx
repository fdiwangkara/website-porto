import React from "react";

const Text = ({
  secondaryText,
  primaryBoldText,
  primaryMediumText,
  primaryRegularText,
  href, // Optional href for link
}) => {
  // Wrapper component to handle the link or plain div
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      href={href} // Only applies if href exists
      target={href ? "_blank" : undefined} // Open in a new tab if it's a link
      rel={href ? "noopener noreferrer" : undefined}
      className={`flex ${href ? "cursor-pointer" : ""}`} // Add pointer cursor if it's clickable
    >
      {/* Left side: SecondaryBold Text */}
      <div className="font-secondaryBold text-[18px] md:text-[24px] lg:text-[24px] text-[#3B3030]">
        {secondaryText}
      </div>
      {/* Right side: Primary Texts */}
      <div className="pl-[20px]">
        {/* PrimaryBold Text */}
        <div className="font-primaryBold text-[18px] md:text-[24px] lg:text-[24px] text-[#3B3030]">
          {primaryBoldText}
        </div>
        {/* PrimaryMedium Text */}
        <div className="font-primaryMedium text-[14px] md:text-[16px] lg:text-[16px] text-[#9D9D9D]">
          {primaryMediumText}
        </div>
        {/* PrimaryRegular Text */}
        <div className="pt-[10px] font-primaryRegular text-[14px] md:text-[20px] lg:text-[20px] text-[#000000]">
          {primaryRegularText}
        </div>
      </div>
    </Wrapper>
  );
};

export default Text;
