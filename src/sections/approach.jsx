import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PersonPic from "../images/person.png";
import Button from "../components/button";

const Approach = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      once: true, // Ensure animation happens only once while scrolling
    });
  }, []);

  return (
    <section
      id="approach"
      className="relative h-screen flex flex-col-reverse md:flex-row items-center justify-center"
    >
      {/* Javanese text and welcome message */}
      <div
        className="w-full md:w-2/3 md:mr-4 text-center md:text-left"
        data-aos="fade-up"
      >
        <p className="font-secondaryBold text-[40px] md:text-[64px] text-[#3B3030]">
          ꧋ꦱꦸꦒꦼꦁꦫꦮꦸꦃ꧉
        </p>
        <p className="font-primaryBold text-[20px] md:text-[24px] pt-3">
          (Welcome)
        </p>
        <p className="font-primaryRegular text-[14px] md:text-[20px] pt-5 leading-7 md:leading-9">
          Hello, I'm <span className="text-[#795757]">Filemon Diwangkara</span>,
          a passionate junior programmer with a strong interest in technology.
          My journey in the world of coding has been driven by curiosity and a
          desire to create solutions that make a difference. Welcome to my
          portfolio, where I showcase my skills, projects, and continuous growth
          in the tech world.
        </p>
        {/* Button Component */}
        <div className="pt-7" data-aos="fade-up" data-aos-delay="200">
          <Button text="Explore" targetSection="projects" />
        </div>
      </div>

      {/* Image on the right for larger screens, top for mobile */}
      <div
        className="w-full md:w-1/3 flex justify-center md:justify-end mb-6 md:mb-0"
        data-aos="flip-left"
      >
        <img src={PersonPic} alt="Person" className="h-auto w-2/3 md:w-auto" />
      </div>
    </section>
  );
};

export default Approach;
