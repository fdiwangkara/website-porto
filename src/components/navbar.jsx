import { useState, useEffect } from "react";

const Navbar = () => {
  const [selected, setSelected] = useState("approach");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let scrollPosition = window.scrollY + window.innerHeight / 2; // Adjust scroll position to center of viewport

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
    document.getElementById(section).scrollIntoView({ behavior: "smooth" }); // This enables smooth scrolling
    setSelected(section);
  };

  return (
    <div className="font-primaryExtraBold fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-10 pr-7">
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
      {/* Add more links if needed */}
    </div>
  );
};

export default Navbar;
