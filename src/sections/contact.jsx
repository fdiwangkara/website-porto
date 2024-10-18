import React from "react";
import PersonPic2 from "../images/person2.png";
import Button3 from "../components/button3";
import GmailIcon from "../assets/icons/gmail.svg";
import GithubIcon from "../assets/icons/github.svg";
import InstagramIcon from "../assets/icons/instagram.svg";
import LinkedINIcon from "../assets/icons/linkedin.svg";

const Contact = () => {
  return (
    <section id="contact" className="relative w-full min-h-screen pb-[100px]">
      {/* Title */}
      <div className="w-full flex justify-center md:justify-end lg:justify-end pt-[50px]">
        <h1 className="font-primaryBold text-[40px] md:text-[64px] lg:text-[64px] text-black">
          Get in Touch!
        </h1>
      </div>

      {/* Content (Image and Buttons) */}
      <div className="w-full h-auto md:h-[calc(100vh-200px)] flex flex-col md:flex-row justify-center md:justify-between items-center px-8 pt-[50px] md:pt-0 lg:pt-0">
        {/* Left Section - Image (stays on start in larger screens, stacks on top in smaller screens) */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-6 md:mb-0">
          <img
            src={PersonPic2}
            alt="Person"
            className="h-auto w-2/3 md:w-auto"
          />
        </div>

        {/* Right Section - Buttons (stay aligned to the end in larger screens, stack under image in smaller screens) */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-end space-y-6">
          {/* Button 1 */}
          <Button3
            text="fdiwangkara2412@gmail.com"
            icon={GmailIcon} // Replace with your custom email icon SVG path
            link="mailto:fdiwangkara2412@gmail.com" // Replace with your email link
          />

          {/* Button 2 */}
          <Button3
            text="Github @fdiwangkara"
            icon={GithubIcon} // Replace with your custom LinkedIn icon SVG path
            link="https://github.com/fdiwangkara" // Replace with your LinkedIn profile link
          />

          {/* Button 3 */}
          <Button3
            text="Instagram @fdiwangkara"
            icon={InstagramIcon} // Replace with your custom GitHub icon SVG path
            link="https://instagram.com/fdiwangkara" // Replace with your GitHub profile link
          />

          <Button3
            text="Linkedin @Filemon Diwangkara"
            icon={LinkedINIcon} // Replace with your custom GitHub icon SVG path
            link="https://www.linkedin.com/in/filemon-diwangkara-bani-saptaji-21641b297/" // Replace with your GitHub profile link
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
