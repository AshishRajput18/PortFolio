import React from "react";

// ✅ Import technology logos
import html from "../assets/html.png";
import css from "../assets/css.jpg";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import oracle from "../assets/oracle.png";
import spring from "../assets/spring.png";
import springBoot from "../assets/springBoot.jpg";

function Experience() {
  const cardItem = [
    { id: 1, logo: html, name: "HTML", type: "Frontend" },
    { id: 2, logo: css, name: "CSS", type: "Frontend" },
    { id: 3, logo: java, name: "Java", type: "Backend" },
    { id: 4, logo: javascript, name: "JavaScript", type: "Frontend" },
    { id: 5, logo: oracle, name: "Oracle", type: "Database" },
    { id: 6, logo: spring, name: "Spring", type: "Framework" },
    { id: 7, logo: springBoot, name: "Spring Boot", type: "Framework" },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20 bg-gradient-to-b from-white via-gray-50 to-white"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">💼 Experience</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          I have over <span className="text-green-600 font-semibold">2 years</span> of experience working with the following technologies:
        </p>
      </div>

      {/* Tech Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {cardItem.map(({ id, logo, name, type }) => (
          <div
            key={id}
            className="bg-white border rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center p-6 text-center"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full border p-2 mb-4 shadow-inner hover:scale-105 transition-transform">
              <img
                src={logo}
                alt={name}
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
            <p className="text-sm text-gray-500">{type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
