const Button = ({ text }) => {
  return (
    <div className="relative inline-block">
      {/* Background Rectangle for Hover Effect */}
      <div className="absolute inset-0 bg-[#795757] rounded-[7px] transition-transform duration-200 transform scale-100 group-hover:scale-110"></div>

      {/* Main Button */}
      <button className="h-[48px] w-[150px] bg-[#3B3030] text-[#FFF0D1] border-none rounded-[7px] cursor-pointer font-primaryBold text-[16px] relative z-10 group hover:-translate-y-2 hover:translate-x-2 transition-transform duration-200">
        {text}
      </button>
    </div>
  );
};

export default Button;
