import React from "react";
import Card from "../components/card"; // Ensure correct path for the Card component
import Klambi from "../images/klambi.png";

const Projects = () => {
  const projects = [
    {
      imageSrc: Klambi, // Placeholder image
      timeline: "March - September 2024",
      title: "Klambi Clothing App",
      description:
        "in this application I and 2 other friends created a mobile application-based platform to help our friends from the graphic production department of SMK Raden Umar Said to organize the printing of screen printing clothes.",
      readMoreLink: "/projects/1", // Example internal link for reading more about the project
      githubLink: "https://github.com/AanKurniawan11/klambi_ta", // Link to the GitHub repo
    },
    {
      imageSrc: "https://via.placeholder.com/445x269", // Placeholder image
      timeline: "June - August 2024",
      title: "ELECTOKO Shop App",
      description:
        "In this project, my friend and I tried to create an online shop that sells electronic goods. We made this to practice flutter skills and implement APIs into applications.",
      readMoreLink: "/projects/2", // Example internal link for reading more about the project
      githubLink:
        "https://github.com/PenguinBotOnGithub/pas-flutter-ganjil-ecommerce", // Link to the GitHub repo
    },
  ];

  return (
    <section id="projects" className="relative w-full min-h-screen pb-[100px]">
      {/* Projects heading */}
      <div className="w-full flex justify-center md:justify-end lg:justify-end pt-[50px]">
        <h1 className="font-primaryBold text-[40px] md:text-[64px] lg:text-[64px] text-black">
          Projects
        </h1>
      </div>

      {/* Projects grid section */}
      <div className="w-full mt-10 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          {/* First column (justify-start) */}
          <div className="flex justify-center">
            <Card
              imageSrc={projects[0].imageSrc}
              timeline={projects[0].timeline}
              title={projects[0].title}
              description={projects[0].description}
              readMoreLink={projects[0].readMoreLink} // Pass the read more link
              githubLink={projects[0].githubLink} // Pass the GitHub link
            />
          </div>

          {/* Second column (justify-end) */}
          <div className="flex justify-center">
            <Card
              imageSrc={projects[1].imageSrc}
              timeline={projects[1].timeline}
              title={projects[1].title}
              description={projects[1].description}
              readMoreLink={projects[1].readMoreLink} // Pass the read more link
              githubLink={projects[1].githubLink} // Pass the GitHub link
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
