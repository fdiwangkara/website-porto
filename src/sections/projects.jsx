import React from "react";
import Card from "../components/card";

const Projects = () => {
  const projects = [
    {
      imageSrc: "../images/klambi.png", // Placeholder image
      timeline: "March - August 2024",
      title: "Klambi Clothing Sales App",
      description:
        "Klambi is a screen printing shirt ordering application that I made with 2 of my friends. The application was created to help organize shirt ordering from the graphical production department of SMK Raden Umar Said.",
      readMoreLink: "/projects/1", // Example internal link for reading more about the project
      githubLink: "https://github.com/AanKurniawan11/klambi_ta", // Link to the GitHub repo
    },
    {
      imageSrc: "https://via.placeholder.com/445x269", // Placeholder image
      timeline: "June - August 2024",
      title: "Project 2",
      description:
        "This is the description for project 2. It is an equally amazing project showcasing different methods.",
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
          <div className="flex justify-center md:justify-start lg:justify-start">
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
          <div className="flex justify-center md:justify-end lg:justify-end">
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
