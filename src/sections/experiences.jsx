import React from "react";
import Text from "../components/text";

const Experiences = () => {
  return (
    <section
      id="experiences"
      className="relative w-full min-h-screen pb-[100px]"
    >
      {/* Projects heading */}
      <div className="w-full flex justify-start pt-[50px]">
        <h1 className="font-primaryBold text-[64px] text-black">Experiences</h1>
      </div>
      {/* History Section */}
      <div className="w-full flex justify-start pt-[50px]">
        <h3 className="font-primaryBold text-[28px] text-black">History</h3>
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
      {/* Certificate Section */}
      <div className="w-full flex justify-start pt-[50px]">
        <h3 className="font-primaryBold text-[28px] text-black">
          Certificates
        </h3>
      </div>
      <div className="pt-5">
        <Text
          secondaryText="꧑"
          primaryBoldText="Belajar Dasar Pemrograman JavaScript"
          primaryMediumText="Completed in 2023"
          primaryRegularText="Learn the basics of JavaScript, from fundamentals, syntax and ES6 features, to test automation concepts using popular frameworks."
        />
      </div>
      <div className="pt-4">
        <Text
          secondaryText="꧒"
          primaryBoldText="Belajar Dasar Pemrograman JavaScript"
          primaryMediumText="Completed in 2023"
          primaryRegularText="Learn the basics of JavaScript, from fundamentals, syntax and ES6 features, to test automation concepts using popular frameworks."
        />
      </div>
      <div className="pt-4">
        <Text
          secondaryText="꧓"
          primaryBoldText="Belajar Dasar Pemrograman JavaScript"
          primaryMediumText="Completed in 2023"
          primaryRegularText="Learn the basics of JavaScript, from fundamentals, syntax and ES6 features, to test automation concepts using popular frameworks."
        />
      </div>
    </section>
  );
};

export default Experiences;
