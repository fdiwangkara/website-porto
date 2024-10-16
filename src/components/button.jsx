const Button = ({ text, targetSection }) => {
  const handleClick = () => {
    document
      .getElementById(targetSection)
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative inline-block">
      {/* Background Rectangle for Hover Effect */}
      <div className="absolute inset-0 bg-[#795757] rounded-[7px] transition-transform duration-200 transform scale-100 group-hover:scale-110"></div>

      {/* Main Button */}
      <button
        onClick={handleClick} // Set the click handler
        className="h-[40px] w-[125px] md:h-[48px] md:w-[160px] lg:h-[48px] lg:w-[160px] bg-[#3B3030] text-[#FFF0D1] border-none rounded-[7px] cursor-pointer font-primaryBold text-[12px] md:text-[14px] lg:text-[16px] relative z-10 group hover:-translate-y-2 hover:translate-x-2 transition-transform duration-200"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
