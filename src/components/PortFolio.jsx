import React from "react";

function PortFolio() {
  const projects = [
    {
      id: 1,
      name: "Course Application (REST API)",
      type: "Backend (Spring Boot)",
      github: "https://github.com/AshishRajput18/Course-Application-Using-RestAPI",
    },
    {
      id: 2,
      name: "Contact Book Web App",
      type: "Full Stack (SpringBoot + ThymeLeaf + MySQL)",
      github: "https://github.com/AshishRajput18/Contact-Management-System",
    }
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight mb-3">
          🚀 My Projects
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore some real-world applications I've built using <span className="text-green-600 font-semibold">Java</span>, <span className="text-blue-600 font-semibold">Spring Boot</span>, and <span className="text-yellow-600 font-semibold">React.js</span>.
        </p>
      </div>

      {/* Projects Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map(({ id, name, type, github }) => (
          <div
            key={id}
            className="bg-white p-6 rounded-2xl shadow-lg border border-green-100 transform hover:scale-105 hover:-translate-y-1 transition duration-300 ease-in-out text-center"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-1">{name}</h2>
            <p className="text-sm text-gray-500 mb-4">{type}</p>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-5 py-2 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition"
            >
              🔗 GitHub Link
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortFolio;
