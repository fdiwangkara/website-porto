import React from "react";
import Card from "../components/card"; // Ensure correct path for the Card component

const Projects = () => {
  const projects = [
    {
      imageSrc: "https://via.placeholder.com/445x269", // Placeholder image
      timeline: "March - May 2024",
      title: "Project 1",
      description:
        "This is the description for project 1. It is an amazing project that demonstrates various skills and techniques.",
    },
    {
      imageSrc: "https://via.placeholder.com/445x269", // Placeholder image
      timeline: "June - August 2024",
      title: "Project 2",
      description:
        "This is the description for project 2. It is an equally amazing project showcasing different methods.",
    },
  ];

  return (
    <section id="projects" className="relative w-full min-h-screen">
      {/* Projects heading */}
      <div className="w-full flex justify-end  pt-[50px] justify-end">
        <h1 className="font-primaryBold text-[64px] text-black ">Projects</h1>
      </div>

      {/* Projects grid section */}
      <div className="w-full mt-10 grid grid-cols-2 gap-x-0">
        {projects.map((project, index) => (
          <Card
            key={index}
            imageSrc={project.imageSrc}
            timeline={project.timeline}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
