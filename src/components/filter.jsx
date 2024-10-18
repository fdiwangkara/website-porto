import React from "react";

const Filter = ({ options, selected, onChange }) => {
  return (
    <div className="w-full flex justify-center space-x-4 border-b-0 border-gray-300 mb-5">
      {options.map((option) => (
        <button
          key={option.value}
          className={`py-2 px-4 text-lg font-primaryMedium ${
            selected === option.value
              ? "text-black border-b-2 border-black transition-all"
              : "text-[#9D9D9D]"
          } transition-colors duration-200`}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;
