import React from "react";
import PersonPic from "../images/person.png";
import Button from "../components/button"; // Adjust the path according to your project structure

const Approach = () => {
  return (
    <section
      id="approach"
      className="relative w-[1080px] h-screen flex items-center"
    >
      {/* Javanese text and welcome message on the left */}
      <div className="w-1/2">
        <p className="font-secondaryBold text-[64px] text-[#3B3030]">
          ꧋ꦱꦸꦒꦼꦁꦫꦮꦸꦃ꧉
        </p>
        <p className="font-primaryBold text-[24px] pt-3">(Welcome)</p>
        <p className="font-primaryRegular text-[20px] pt-5 leading-9">
          Hello, I'm <span className="text-[#795757]">Filemon Diwangkara</span>,
          a passionate junior programmer with a strong interest in technology.
          My journey in the world of coding has been driven by curiosity and a
          desire to create solutions that make a difference. Welcome to my
          portfolio, where I showcase my skills, projects, and continuous growth
          in the tech world.
        </p>

        {/* Button Component */}
        <div className="pt-7">
          <Button text="Explore" />
        </div>
      </div>

      {/* Image on the right */}
      <div className="w-1/4 flex justify-end">
        {" "}
        {/* Changed to w-1/2 */}
        <img src={PersonPic} alt="Person" className="h-auto" />
      </div>
    </section>
  );
};

export default Approach;
