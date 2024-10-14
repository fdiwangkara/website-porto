const Card = ({ imageSrc, timeline, title, description }) => {
  return (
    <div className="w-[445px] h-[600px] shadow-lg flex flex-col rounded-[15px] bg-white">
      <img
        src={imageSrc}
        alt="Project"
        className="w-full h-[269px] object-cover rounded-t-[15px]"
      />
      <div className="p-5">
        <p className="font-primaryMedium text-[16px] pt-4 text-[#9D9D9D]">
          {timeline}
        </p>
        <h2 className="font-primaryBold text-[28px] text-[#3B3030] pt-5">
          {title}
        </h2>
        <p className="font-primaryRegular text-[20px] text-black pt-2 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
