import { useState, useEffect } from "react";
import HamburgerIcon from "../assets/icons/hamburger.svg"; // Import the hamburger icon
import CloseIcon from "../assets/icons/close.svg"; // Import the close icon

const Navbar = () => {
  const [selected, setSelected] = useState("approach");
  const [isOpen, setIsOpen] = useState(false); // State for hamburger menu

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        setSelected(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    setSelected(section);
    setIsOpen(false); // Close the menu after clicking on a section
  };

  return (
    <div className="fixed right-0 top-0 w-full z-20">
      {/* Hamburger Icon for tablet and mobile */}
      <div className="lg:hidden p-4 flex justify-end">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <img src={HamburgerIcon} alt="Hamburger menu" className="w-8 h-8" />
        </button>
      </div>

      {/* Full Navbar (hidden on tablet/mobile, shown on larger screens) */}
      <div className="hidden lg:flex flex-col fixed right-0 top-1/2 transform -translate-y-1/2 space-y-4 pr-7 font-primaryExtraBold z-10">
        <a
          href="#approach"
          className={`text-[32px] ${selected === "approach" ? "pr-6 text-black" : "pr-0 text-[#9d9d9d]"} text-right hover:text-black transition-all duration-300`}
          onClick={() => handleClick("approach")}
        >
          Approach
        </a>
        <a
          href="#projects"
          className={`text-[32px] ${selected === "projects" ? "pr-6 text-black" : "pr-0 text-[#9d9d9d]"} text-right hover:text-black transition-all duration-300`}
          onClick={() => handleClick("projects")}
        >
          Projects
        </a>
        <a
          href="#about"
          className={`text-[32px] ${selected === "about" ? "pr-6 text-black" : "pr-0 text-[#9d9d9d]"} text-right hover:text-black transition-all duration-300`}
          onClick={() => handleClick("about")}
        >
          About
        </a>
        <a
          href="#contact"
          className={`text-[32px] ${selected === "contact" ? "pr-6 text-black" : "pr-0 text-[#9d9d9d]"} text-right hover:text-black transition-all duration-300`}
          onClick={() => handleClick("contact")}
        >
          Contacts
        </a>
      </div>

      {/* Hamburger Menu (shown on mobile/tablet when isOpen is true) */}
      <div
        className={`lg:hidden fixed inset-0 h-full w-full bg-[#3B3030] z-20 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
        >
          <img src={CloseIcon} alt="Close menu" className="w-6 h-6" />
        </button>

        {/* Menu Links */}
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <a
            href="#approach"
            className={`text-[24px] font-primaryExtraBold ${
              selected === "approach" ? "text-[#FFF0D1]" : "text-[#9D9D9D]"
            } transition-all duration-300`}
            onClick={() => handleClick("approach")}
          >
            Approach
          </a>
          <a
            href="#projects"
            className={`text-[24px] font-primaryExtraBold ${
              selected === "projects" ? "text-[#FFF0D1]" : "text-[#9D9D9D]"
            } transition-all duration-300`}
            onClick={() => handleClick("projects")}
          >
            Projects
          </a>
          <a
            href="#about"
            className={`text-[24px] font-primaryExtraBold ${
              selected === "about" ? "text-[#FFF0D1]" : "text-[#9D9D9D]"
            } transition-all duration-300`}
            onClick={() => handleClick("about")}
          >
            About
          </a>
          <a
            href="#contact"
            className={`text-[24px] font-primaryExtraBold ${
              selected === "contact" ? "text-[#FFF0D1]" : "text-[#9D9D9D]"
            } transition-all duration-300`}
            onClick={() => handleClick("contact")}
          >
            Contacts
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
