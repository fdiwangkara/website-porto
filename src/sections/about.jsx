import React, { useState } from "react";
import Text from "../components/text";
import Filter from "../components/filter"; // Import the Filter component

const About = () => {
  const [filterOption, setFilterOption] = useState("educations");

  const filterOptions = [
    { label: "Educations", value: "educations" },
    { label: "Certificates", value: "certificates" },
  ];

  return (
    <section id="about" className="relative w-full min-h-screen pb-[100px]">
      {/* About heading */}
      <div className="w-full flex justify-center md:justify-start lg:justify-start pt-[50px]">
        <h1 className="font-primaryBold text-[40px] md:text-[64px] lg:text-[64px] text-black">
          About
        </h1>
      </div>

      {/* Tab Bar Filter Component */}
      <div className="pt-5">
        <Filter
          options={filterOptions}
          selected={filterOption}
          onChange={setFilterOption}
        />
      </div>

      {/* Conditional rendering based on selected filter */}
      {filterOption === "educations" && (
        <>
          {/* Formal Education Section */}
          <div className="w-full flex justify-start pt-[50px]">
            <h3 className="font-primaryBold text-[20px] lg:text-[28px] md:text-[26px] text-black">
              Formal Education
            </h3>
          </div>
          <div className="pt-5">
            <Text
              secondaryText="꧑"
              primaryBoldText="Junior High School at SMP Katolik Cor Jesu Malang"
              primaryMediumText="2019 - 2022"
              primaryRegularText="Learn the basics of JavaScript, from fundamentals, syntax and ES6 features, to test automation concepts using popular frameworks."
            />
          </div>
          <div className="pt-4">
            <Text
              secondaryText="꧒"
              primaryBoldText="Vocational High School at SMK Raden Umar Said Kudus"
              primaryMediumText="2022 - Present"
              primaryRegularText="Learn the basics of JavaScript, from fundamentals, syntax and ES6 features, to test automation concepts using popular frameworks."
            />
          </div>
        </>
      )}

      {filterOption === "certificates" && (
        <>
          {/* Certificates Section */}
          <div className="w-full flex justify-start pt-[50px]">
            <h3 className="font-primaryBold text-[20px] lg:text-[28px] md:text-[26px] text-black">
              Certificates
            </h3>
          </div>
          <div className="pt-5">
            <Text
              secondaryText="꧑"
              primaryBoldText="Belajar Dasar Pemrograman JavaScript"
              primaryMediumText="Completed in 2023"
              primaryRegularText="Learn the basics of JavaScript, from fundamentals, syntax and ES6 features, to test automation concepts using popular frameworks."
              href="https://www.dicoding.com/certificates/1RXY6EQ1QZVM"
            />
          </div>
          <div className="pt-4">
            <Text
              secondaryText="꧒"
              primaryBoldText="Belajar Back-End Pemula dengan JavaScript"
              primaryMediumText="Completed in 2023"
              primaryRegularText="Learn the basics of building RESTful APIs, from HTTP servers, routing, to building Back-Ends for real applications."
              href="https://www.dicoding.com/certificates/L4PQGE254ZO1"
            />
          </div>
          <div className="pt-4">
            <Text
              secondaryText="꧓"
              primaryBoldText="Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)"
              primaryMediumText="Completed in 2023"
              primaryRegularText="Learn basic Cloud material using AWS, from cloud computing concepts, to how to build good architecture."
              href="https://www.dicoding.com/certificates/N9ZO65EEDXG5"
            />
          </div>
          <div className="pt-4">
            <Text
              secondaryText="꧔"
              primaryBoldText="Python Programming"
              primaryMediumText="Completed in 2020"
              primaryRegularText="Understand and implement basic Python Code. Solid understanding of Python programming fundamentals such as data types and structures, variables, loops, and functions. Create small programs with Python 2."
              href="https://storage.googleapis.com/programminghub/certificate%2F1591878582557.jpg"
            />
          </div>
        </>
      )}
    </section>
  );
};

export default About;
