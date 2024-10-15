import React from "react";
import arrowIcon from "../assets/icons/arrow.svg"; // Adjust the path to your project structure
import Button2 from "./Button2"; // Import the customizable button component

const Card = ({ imageSrc, timeline, title, description }) => {
  return (
    <div className="w-[420px] h-[600px] shadow-lg flex flex-col rounded-[15px] bg-white">
      {/* Image */}
      <img
        src={imageSrc}
        alt="Project"
        className="w-full h-[269px] object-cover rounded-t-[15px]"
      />

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <p className="font-primaryMedium text-[16px] pt-4 text-[#9D9D9D]">
          {timeline}
        </p>
        <h2 className="font-primaryBold text-[28px] text-[#3B3030] pt-5">
          {title}
        </h2>
        <p className="font-primaryRegular text-[20px] text-black pt-2 line-clamp-3">
          {description}
        </p>

        {/* Buttons with Grid */}
        <div className="pt-5 mt-auto grid grid-cols-2 gap-4">
          {/* Left Button - "Read More" */}
          <Button2
            text="Read More"
            bgColor="#3B3030"
            textColor="#FFFFFF"
            hasBorder={false}
            icon={arrowIcon} // Passing the arrow icon
          />

          {/* Right Button - "Visit Github" with border and hover effect */}
          <Button2
            text="Visit Github"
            bgColor="white" // Transparent background initially
            textColor="#3B3030"
            borderColor="#3B3030"
            hasBorder={true}
            hoverBgColor="#3B3030" // Change background on hover
            hoverTextColor="#FFFFFF" // Change text color on hover
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
