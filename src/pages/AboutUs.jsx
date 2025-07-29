import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white pt-30 px-4 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Text Content */}
        <div className="w-full md:w-1/2">
          {/* Logo */}

          {/* Heading */}
          <h2 className="text-2xl md:text-7xl font-semibold text-gray-800 mb-4">
            About Us
          </h2>

          {/* Paragraphs */}
          <p className="text-md md:text-2xl text-gray-700 mb-4">
            Welcome to the Excel Analytics Platform – your one-stop solution for
            turning raw spreadsheet data into stunning visual insights. Built
            using the powerful MERN stack (MongoDB, Express.js, React.js,
            Node.js), our platform empowers users to seamlessly upload Excel
            files, analyze their contents, and generate interactive charts for
            informed decision-making.
          </p>

          <p className="text-md md:text-xl text-gray-700">
            Our mission is to bridge the gap between data and understanding.
            Whether you're a student, researcher, or business analyst, we help
            you transform Excel files into valuable insights through intuitive
            visuals and smart AI integrations.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/about.png" // Replace with your actual image
            alt="Team analyzing chart"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
